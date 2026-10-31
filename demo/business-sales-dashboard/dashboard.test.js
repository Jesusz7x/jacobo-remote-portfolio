const test=require('node:test');
const assert=require('node:assert/strict');
const {sales}=require('./sales-data.js');
const core=require('./dashboard-core.js');

test('synthetic data is deterministic and revenue matches units times price',()=>{
  assert.equal(sales.length,24);
  assert.ok(sales.every(row=>row.revenue===row.quantity*row.unitPrice));
  assert.equal(new Set(sales.map(row=>row.orderId)).size,24);
});
test('summary is computed and empty selection has zero-valued metrics',()=>{
  assert.deepEqual(core.summarize([{quantity:2,unitPrice:5},{quantity:1,unitPrice:7}]),{orders:2,revenue:17,units:3,averageOrder:8.5});
  assert.deepEqual(core.summarize([]),{orders:0,revenue:0,units:0,averageOrder:0});
});
test('date/category/region filters combine inclusively',()=>{
  const rows=core.filterSales(sales,{from:'2025-01-01',to:'2025-01-31',category:'Office'});
  assert.ok(rows.length>0);
  assert.ok(rows.every(row=>row.date.startsWith('2025-01')&&row.category==='Office'));
});
test('monthly revenue and top products derive from filtered rows',()=>{
  const rows=core.filterSales(sales,{region:'Central'});
  assert.equal(core.monthly(rows).reduce((sum,row)=>sum+row.revenue,0),core.summarize(rows).revenue);
  assert.ok(core.topProducts(rows).every((row,index,list)=>index===0||list[index-1].units>=row.units));
});
test('sorting does not mutate source and CSV escapes quotes',()=>{
  const rows=[{name:'b'},{name:'a'}];
  assert.deepEqual(core.sortRows(rows,'name').map(row=>row.name),['a','b']);
  assert.deepEqual(rows.map(row=>row.name),['b','a']);
  assert.match(core.toCsv([{orderId:'S,"1',date:'2025-01-01',product:'Cup',category:'Home',region:'West',quantity:1,unitPrice:2,revenue:2}]),/"S,""1"/);
});
test('Spanish display labels do not change stored filter values',()=>{
  assert.equal(core.localize('Office','es'),'Oficina');
  assert.equal(core.localize('Office','en'),'Office');
  const officeRows=core.filterSales(sales,{category:'Office'});
  assert.ok(officeRows.length>0);
  assert.ok(officeRows.every(row=>row.category==='Office'));
  assert.equal(core.localize('West','es'),'Occidente');
});
