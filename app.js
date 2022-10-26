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
    order.forEach(item =>  array.push({
    "ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), 
    "date": item.created_at, 
    "product-title": item.variant.product.nl.title, 
    "qnty": item.order_product.quantity, 
    "sku": item.order_product.sku ,
    "size": item.order_product.variant_title, 
    "location": item.location_name, 
    "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
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


// DATE FORMATTING 
// Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
// year = item.order[i].created_at.substr(0, 4);
// maand = item.order[i].created_at.substr(5, 2);
// dag =item.order[i].created_at.substr(8, 2);


//locatie logica

let inventoryData;
let jordaan_uuid = "a161be7b-da02-4790-b8d4-ad0bc93ff965" //beter schrijven je wilt dit voor elke locactie
let pijp_uuid = "1910212e-35b7-4808-8909-06b3543b0ea3" //beter schrijven je wilt dit voor elke locactie
let freshcotton_uuid = "8a8f069f-f851-4cbc-aa45-9d0d82299da2" //beter schrijven je wilt dit voor elke locactie



fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/228028884/products/edit_locations.json`).then(data => data.json()).then(data => inventoryData = data.inventory); //ordernummer toevoegen

let jordaanInventory = inventoryData['274589674'][jordaan_uuid].inventory //variantId van product toevoegen
let pijpInventory = inventoryData['274589674'][pijp_uuid].inventory //variantId van product toevoegen
let freshcottonInventory = inventoryData['274589674'][freshcotton_uuid].inventory //variantId van product toevoegen



if (jordaanInventory < array[0].qnty) //forloop/ foreach gebruiken
{ 
  array[0].qnty = `MULTILOCATON (Jordaan: ${ jordaanInventory} stuks, Pijp: ${ pijpInventory} stuks,  Freshcotton: ${freshcottonInventory} stuks’) `
}

