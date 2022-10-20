//baskets demo versie
var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
    
const checked = document.querySelectorAll(".-checked");

const ordersId = [];
let order =[];
const array = [];
const exportData = [];

const activeStore  = 'Jordaan Fictief';

async function f () {
    for (var i = 0; i < checked.length; i++){ 
    ordersId.push(checked[i].getAttribute('data-id'));
    
     await fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
};
console.log(ordersId + order)

await order.forEach(order => {
    order.forEach(item =>  array.push({"ordernummer": item.order_id, "date": item.created_at, "productbrand": item.order_product.brand_name, "product-title": item.variant.product.nl.title,  "productbarcode": item.order_product.barcode, "qnty": item.order_product.quantity ,"sku": item.order_product.sku,"location": item.location_name }))
});

for (let i = 0; i< array.length; i++){
    if (array[i].location == activeStore) {
       await exportData.push(array[i])
}}

await objectExporter({
    exportable: exportData,
    type: 'csv',
    fileName: 'export',
    headers: ["order number", "date", "product brand", "product name", "product barcode", "qnty", "sku", "location"],
  })

}

f();



