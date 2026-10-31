(function(root){
  const products=[
    {name:"Desk Lamp",category:"Office",unitPrice:25},
    {name:"Notebook",category:"Office",unitPrice:4},
    {name:"Pen Set",category:"Supplies",unitPrice:8},
    {name:"Travel Mug",category:"Accessories",unitPrice:12}
  ];
  const regions=["Central","West","East"];
  const sales=[];
  for(let month=1;month<=12;month++){
    for(let slot=0;slot<2;slot++){
      const product=products[(month+slot*2-1)%products.length];
      const quantity=1+((month+slot*3)%6);
      sales.push({orderId:`S-${String(month).padStart(2,"0")}${slot+1}`,date:`2025-${String(month).padStart(2,"0")}-${slot===0?"08":"21"}`,product:product.name,category:product.category,region:regions[(month+slot)%regions.length],quantity,unitPrice:product.unitPrice,revenue:quantity*product.unitPrice});
    }
  }
  root.DASHBOARD_SALES=sales;
  if(typeof module!=="undefined"&&module.exports) module.exports={sales,products};
})(typeof window!=="undefined"?window:globalThis);
