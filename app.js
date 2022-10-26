//baskets demo versie
var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
    
const checked = document.querySelectorAll(".-checked");
let ordername = document.querySelectorAll('.-checked .-primary a');

const ordersId = [];
let order =[];
let random = [];
const array = [];
const exportData = [];

const activeStore  = 'Jordaan Fictief';

async function f () {
    for (var i = 0; i < checked.length; i++){ 
    ordersId.push(checked[i].getAttribute('data-id'));
    
     await fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
    
};

for (let i = 0; i <ordername.length; i++){
  random.push({"ordername": ordername[i].innerText});
}


await order.forEach(order => {
    order.forEach(item =>  array.push({"ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), "date": item.created_at, "product-title": item.variant.product.nl.title, "qnty": item.order_product.quantity, "sku": item.order_product.sku ,"size": item.order_product.variant_title, "location": item.location_name, "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
});


for (let i = 0; i< array.length; i++){
    if (array[i].location == activeStore) {
       await exportData.push(array[i])
}}

await objectExporter({
    exportable: exportData,
    type: 'xls',
    fileName: 'export',
    headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status"],
  })

}

f();

// Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
// year = item.order[i].created_at.substr(0, 4);
// maand = item.order[i].created_at.substr(5, 2);
// dag =item.order[i].created_at.substr(8, 2);

