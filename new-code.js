// getting data from a different json page

var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
const checked = document.querySelectorAll(".-checked");
let ordername = document.querySelectorAll('.-checked .-primary a');
const ordersId = [];
let order =[];
const array = [];
let orders =[];
const exportData = [];
const activeStore  = 'Baskèts Jordaan';

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();


async function f () {
    for (var i = 0; i < checked.length; i++){
    ordersId.push(checked[i].getAttribute('data-id'));
     await fetch(`https://baskets.webshopapp.com/admin/orders/${ordersId[i]}.json`).then(data => data.json()).then(data => orders.push(data.order));
};


 await orders.forEach(order =>{

    order.order_products.forEach(product => {

    const lineItem = {
        ordername: order.number,
        date: order.location_order_products.find(item => item.order_product_id === product.id)?.created_at || order.created_at,
        name: product.product_title,
        qnty: product.quantity,
        sku: product.sku,
        size: product.variant_title,
        location: order.location_order_products.find(item => item.order_product_id === product.id)?.location_name || order.inventory_location,
        status: order.location_order_products.find(item => item.order_product_id === product.id)?.stock_status   ||  order.status,
        shipment: order.shipment_title
    };
    array.push(lineItem);    
    })
});
 

for (let i = 0; i< array.length; i++){
    if (array[i].location == activeStore) {
       await exportData.push(array[i])
}
}

let fileName = `${activeStore.replace(/\s/g,'-')}_export_${day}_${month}_${year}_${hours}:${minutes}`;

await objectExporter({
    exportable: exportData,
    type: 'xls',
    fileName: fileName,
    headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status", "Shipment"],
  })
}
f();


