(function(root){
  const labels={
    "Desk Lamp":"Lámpara de escritorio","Notebook":"Cuaderno","Pen Set":"Set de bolígrafos","Travel Mug":"Taza de viaje",
    "Office":"Oficina","Supplies":"Útiles","Accessories":"Accesorios","Central":"Centro","West":"Occidente","East":"Oriente"
  };
  function filterSales(sales,filters={}){
    return sales.filter(row=>(!filters.from||row.date>=filters.from)&&(!filters.to||row.date<=filters.to)&&(!filters.category||filters.category===row.category)&&(!filters.region||filters.region===row.region));
  }
  function summarize(rows){
    const revenue=rows.reduce((sum,row)=>sum+row.quantity*row.unitPrice,0);
    const units=rows.reduce((sum,row)=>sum+row.quantity,0);
    return {orders:rows.length,revenue,units,averageOrder:rows.length?revenue/rows.length:0};
  }
  function monthly(rows){
    const result=new Map();
    for(const row of rows){const key=row.date.slice(0,7);result.set(key,(result.get(key)||0)+row.quantity*row.unitPrice);}
    return [...result.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([month,revenue])=>({month,revenue}));
  }
  function topProducts(rows){
    const result=new Map();
    for(const row of rows){const item=result.get(row.product)||{product:row.product,units:0,revenue:0};item.units+=row.quantity;item.revenue+=row.quantity*row.unitPrice;result.set(row.product,item);}
    return [...result.values()].sort((a,b)=>b.units-a.units||a.product.localeCompare(b.product));
  }
  function sortRows(rows,key,direction="asc"){
    const sign=direction==="desc"?-1:1;
    return [...rows].sort((a,b)=>{const av=a[key],bv=b[key];return (typeof av==="number"?av-bv:String(av).localeCompare(String(bv)))*sign;});
  }
  function toCsv(rows){
    const columns=["orderId","date","product","category","region","quantity","unitPrice","revenue"];
    const quote=value=>'"'+String(value).replaceAll('"','""')+'"';
    return [columns.join(","),...rows.map(row=>columns.map(col=>quote(row[col])).join(","))].join("\r\n")+"\r\n";
  }
  function localize(value,lang){return lang==='es'?(labels[value]||value):value;}
  const api={filterSales,summarize,monthly,topProducts,sortRows,toCsv,localize};
  if(typeof module!=="undefined"&&module.exports) module.exports=api;
  root.DashboardCore=api;
})(typeof window!=="undefined"?window:globalThis);
