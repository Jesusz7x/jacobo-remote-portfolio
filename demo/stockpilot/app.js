(() => {
  const key = "stockpilot-browser-demo-v1";
  const seed = {
    products: [
      { id: 1, sku: "OFF-001", name: "Notebook", category: "Office", unit: "unit", quantity: 8, low_stock: 3 },
      { id: 2, sku: "OFF-002", name: "Pen set", category: "Office", unit: "box", quantity: 2, low_stock: 4 },
      { id: 3, sku: "OPS-001", name: "Shipping labels", category: "Operations", unit: "roll", quantity: 14, low_stock: 5 },
      { id: 4, sku: "ACC-003", name: "Travel mug", category: "Accessories", unit: "unit", quantity: 0, low_stock: 2 }
    ], movements: [], nextProductId: 5, nextMovementId: 1
  };
  const copy = {
    en: { invalidProduct: "Enter a unique SKU, product name, unit, and a non-negative whole-number threshold.", duplicateSku: "That SKU already exists. Choose a unique SKU.", savedProduct: "Product added to this browser demo.", edited: "Product details updated.", invalidMove: "Enter a whole-number quantity greater than zero.", insufficient: "Insufficient stock. This issue was not recorded.", moved: "Movement recorded. The balance and ledger are updated together.", empty: "Add a product before recording stock movements.", noProduct: "No active product is available.", in: "Received", out: "Issued", edit: "Edit", opening: "Opening balance", clear: "No search results", reset: "Demo reset to its original fictional records.", productsFile: "stockpilot-demo-products.csv", movementsFile: "stockpilot-demo-movements.csv", placeholder: "Search by SKU, name, or category", allProducts: "All products", sku: "SKU", name: "Product", category: "Category", unit: "Unit", quantity: "On hand", low: "Alert at", reference: "Reference", note: "Note", date: "Recorded in demo", noMoves: "No movements yet.", confirm: "Reset all local demo changes? This cannot be undone.", lang: "Switch language" },
    es: { invalidProduct: "Ingresa un SKU único, nombre, unidad y un umbral entero no negativo.", duplicateSku: "Ese SKU ya existe. Elige un valor único.", savedProduct: "Producto añadido a esta demo del navegador.", edited: "Detalles del producto actualizados.", invalidMove: "Ingresa una cantidad entera mayor que cero.", insufficient: "Existencias insuficientes. No se guardó la salida.", moved: "Movimiento guardado. El balance y el registro se actualizaron juntos.", empty: "Añade un producto antes de registrar movimientos.", noProduct: "No hay productos activos disponibles.", in: "Entrada", out: "Salida", edit: "Editar", opening: "Saldo inicial", clear: "Sin resultados", reset: "Demo restablecida con sus registros ficticios originales.", productsFile: "stockpilot-demo-productos.csv", movementsFile: "stockpilot-demo-movimientos.csv", placeholder: "Buscar por SKU, nombre o categoría", allProducts: "Todos los productos", sku: "SKU", name: "Producto", category: "Categoría", unit: "Unidad", quantity: "Disponible", low: "Alerta en", reference: "Referencia", note: "Nota", date: "Registrado en demo", noMoves: "Aún no hay movimientos.", confirm: "¿Restablecer los cambios locales de la demo? Esta acción no se puede deshacer.", lang: "Cambiar idioma" }
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const whole = value => /^\d+$/.test(String(value)) && Number.isSafeInteger(Number(value));
  const clone = value => JSON.parse(JSON.stringify(value));
  let state = seed, lang = "en";
  try {
    const stored = JSON.parse(localStorage.getItem(key));
    if (stored && Array.isArray(stored.products) && Array.isArray(stored.movements)) state = stored;
    lang = localStorage.getItem(`${key}-lang`) === "es" ? "es" : "en";
  } catch { /* Storage can be disabled; the demo still runs in memory. */ }
  const t = () => copy[lang];
  const persist = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* Private browsing can disable storage. */ } };
  const announce = message => { $("#notice").textContent = message; };
  const date = () => new Intl.DateTimeFormat(lang === "es" ? "es-SV" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date());
  const download = (name, rows) => {
    const quote = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const csv = rows.map(row => row.map(quote).join(",")).join("\r\n") + "\r\n";
    const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" })); link.download = name; link.click(); URL.revokeObjectURL(link.href);
  };
  function renderProducts() {
    const query = $("#search").value.trim().toLocaleLowerCase();
    const lowOnly = $("#low-only").checked;
    const rows = [...state.products].sort((a, b) => a.name.localeCompare(b.name, lang === "es" ? "es" : "en", { sensitivity: "base" })).filter(product => (!lowOnly || product.quantity <= product.low_stock) && (!query || [product.sku, product.name, product.category].some(value => value.toLocaleLowerCase().includes(query))));
    $("#products").innerHTML = rows.map(product => `<tr><td><code>${esc(product.sku)}</code></td><td><strong>${esc(product.name)}</strong><small>${esc(product.unit)}</small></td><td>${esc(product.category || "—")}</td><td><span class="quantity ${product.quantity <= product.low_stock ? "low" : ""}">${product.quantity}</span></td><td>${product.low_stock}</td><td><button type="button" class="text-button" data-edit="${product.id}">${esc(t().edit)}</button></td></tr>`).join("");
    $("#empty-products").hidden = rows.length !== 0;
  }
  function renderSelects() {
    const options = state.products.map(product => `<option value="${product.id}">${esc(product.sku)} · ${esc(product.name)} (${product.quantity} ${esc(product.unit)})</option>`).join("");
    const move = $("#move-product"), ledger = $("#ledger-product");
    const moveValue = move.value, ledgerValue = ledger.value;
    move.innerHTML = options || `<option value="">${esc(t().noProduct)}</option>`;
    ledger.innerHTML = `<option value="">${esc(t().allProducts)}</option>${options}`;
    if ([...move.options].some(option => option.value === moveValue)) move.value = moveValue;
    if ([...ledger.options].some(option => option.value === ledgerValue)) ledger.value = ledgerValue;
    $("#move-form button[type=submit]").disabled = state.products.length === 0;
  }
  function renderLedger() {
    const selected = $("#ledger-product").value;
    const rows = [...state.movements].reverse().filter(move => !selected || move.productId === Number(selected));
    $("#ledger-rows").innerHTML = rows.map(move => {
      const product = state.products.find(item => item.id === move.productId);
      const kind = move.kind === "receive" ? t().in : t().out;
      return `<li class="ledger-row"><span class="move-mark ${move.kind}" aria-hidden="true">${move.kind === "receive" ? "+" : "−"}</span><div class="ledger-main"><strong>${esc(kind)} ${move.quantity} ${esc(product?.unit || t().unit)}</strong><span>${esc(product?.sku || "SKU")} · ${esc(product?.name || "")}</span><small>${esc(move.reference || t().opening)}${move.note ? ` · ${esc(move.note)}` : ""}</small></div><div class="balance"><strong>${move.before} <span>→</span> ${move.after}</strong><small>${esc(move.recorded)}</small></div></li>`;
    }).join("");
    $("#empty-ledger").hidden = rows.length !== 0;
  }
  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en][data-es]").forEach(el => { if (!el.matches("input")) el.textContent = el.dataset[lang]; });
    document.querySelectorAll("[data-placeholder-en]").forEach(el => { el.placeholder = el.dataset[`placeholder${lang === "en" ? "En" : "Es"}`]; });
    document.querySelectorAll("[data-label-en]").forEach(el => { el.setAttribute("aria-label", el.dataset[`label${lang === "en" ? "En" : "Es"}`]); });
    $("#lang").textContent = lang === "en" ? "ES" : "EN"; $("#lang").setAttribute("aria-label", t().lang);
    renderSelects(); renderProducts(); renderLedger();
    const active = state.products;
    $("#metric-products").textContent = active.length.toLocaleString(lang === "es" ? "es-SV" : "en-US");
    $("#metric-units").textContent = active.reduce((sum, product) => sum + product.quantity, 0).toLocaleString(lang === "es" ? "es-SV" : "en-US");
    $("#metric-low").textContent = active.filter(product => product.quantity <= product.low_stock).length;
    $("#metric-moves").textContent = state.movements.length;
  }
  function recordMovement(product, kind, quantity, reference = "", note = "") {
    if (!product || !["receive", "issue"].includes(kind) || !Number.isSafeInteger(quantity) || quantity <= 0) throw new Error(t().invalidMove);
    const before = product.quantity, after = kind === "receive" ? before + quantity : before - quantity;
    if (after < 0) throw new Error(t().insufficient);
    product.quantity = after;
    state.movements.push({ id: state.nextMovementId++, productId: product.id, kind, quantity, before, after, reference: reference.trim(), note: note.trim(), recorded: date() });
    persist(); render();
  }
  function editProduct(product) {
    const form = $("#edit-form"); form.elements.id.value = product.id; form.elements.name.value = product.name; form.elements.category.value = product.category; form.elements.unit.value = product.unit; form.elements.low_stock.value = product.low_stock;
    $("#edit-sku").textContent = `${t().sku}: ${product.sku}`; $("#edit-dialog").showModal(); form.elements.name.focus();
  }
  $("#lang").addEventListener("click", () => { lang = lang === "en" ? "es" : "en"; try { localStorage.setItem(`${key}-lang`, lang); } catch {} render(); });
  $("#search").addEventListener("input", renderProducts); $("#low-only").addEventListener("change", renderProducts); $("#ledger-product").addEventListener("change", renderLedger);
  $("#products").addEventListener("click", event => { const button = event.target.closest("[data-edit]"); if (!button) return; const product = state.products.find(item => item.id === Number(button.dataset.edit)); if (product) editProduct(product); });
  $("#add-toggle").addEventListener("click", () => { $("#add-form").hidden = false; $("#add-form").elements.sku.focus(); });
  $("#cancel-add").addEventListener("click", () => { $("#add-form").reset(); $("#add-form").hidden = true; });
  $("#add-form").addEventListener("submit", event => {
    event.preventDefault(); const form = event.currentTarget, values = new FormData(form);
    const sku = String(values.get("sku")).trim(), name = String(values.get("name")).trim(), unit = String(values.get("unit")).trim(), low = String(values.get("low_stock"));
    if (!sku || !name || !unit || !whole(low)) return announce(t().invalidProduct);
    if (state.products.some(product => product.sku.toLocaleLowerCase() === sku.toLocaleLowerCase())) return announce(t().duplicateSku);
    state.products.push({ id: state.nextProductId++, sku, name, category: String(values.get("category")).trim(), unit, quantity: 0, low_stock: Number(low) });
    persist(); render(); form.reset(); form.elements.unit.value = "unit"; $("#add-form").hidden = true; announce(t().savedProduct);
  });
  $("#move-form").addEventListener("submit", event => {
    event.preventDefault(); const form = event.currentTarget, values = new FormData(form), product = state.products.find(item => item.id === Number(values.get("product"))), amount = String(values.get("quantity"));
    if (!whole(amount) || Number(amount) <= 0) return announce(t().invalidMove);
    try { recordMovement(product, values.get("kind"), Number(amount), values.get("reference"), values.get("note")); form.elements.quantity.value = "1"; form.elements.reference.value = ""; form.elements.note.value = ""; announce(t().moved); } catch (error) { announce(error.message); }
  });
  $("#edit-form").addEventListener("submit", event => {
    event.preventDefault(); const form = event.currentTarget, values = new FormData(form), product = state.products.find(item => item.id === Number(values.get("id"))), low = String(values.get("low_stock")), name = String(values.get("name")).trim(), unit = String(values.get("unit")).trim();
    if (!product || !name || !unit || !whole(low)) return announce(t().invalidProduct);
    Object.assign(product, { name, category: String(values.get("category")).trim(), unit, low_stock: Number(low) }); persist(); $("#edit-dialog").close(); render(); announce(t().edited);
  });
  const closeDialog = () => $("#edit-dialog").close(); $("#close-edit").addEventListener("click", closeDialog); $("#cancel-edit").addEventListener("click", closeDialog);
  $("#edit-dialog").addEventListener("click", event => { if (event.target === event.currentTarget) closeDialog(); });
  $("#reset").addEventListener("click", () => { if (!window.confirm(t().confirm)) return; state = clone(seed); persist(); render(); announce(t().reset); });
  $("#export-products").addEventListener("click", () => download(t().productsFile, [["id", "sku", "name", "category", "unit", "quantity", "low_stock", "active"], ...state.products.map(p => [p.id, p.sku, p.name, p.category, p.unit, p.quantity, p.low_stock, 1])]));
  $("#export-movements").addEventListener("click", () => download(t().movementsFile, [["id", "sku", "product", "kind", "quantity", "before_quantity", "after_quantity", "reference", "note", "created_at"], ...state.movements.map(m => { const product = state.products.find(p => p.id === m.productId); return [m.id, product?.sku || "", product?.name || "", m.kind, m.quantity, m.before, m.after, m.reference, m.note, m.recorded]; })]));
  render();
})();
