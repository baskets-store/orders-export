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


// URL voor demo versie (jordaan)

// javascript:(function()%7Bvar%20script%20%3D%20document.createElement('script')%3Bscript.src%20%3D%20%22https%3A%2F%2Funpkg.com%2Fobject-exporter%403.2.1%2Fdist%2Fobjectexporter.min.js%22%3Bdocument.getElementsByTagName('head')%5B0%5D.appendChild(script)%3Bconst%20checked%20%3D%20document.querySelectorAll(%22.-checked%22)%3Blet%20ordername%20%3D%20document.querySelectorAll('.-checked%20.-primary%20a')%3Bconst%20ordersId%20%3D%20%5B%5D%3Blet%20order%20%3D%5B%5D%3Blet%20random%20%3D%20%5B%5D%3Bconst%20array%20%3D%20%5B%5D%3Bconst%20exportData%20%3D%20%5B%5D%3Bconst%20activeStore%20%20%3D%20'Jordaan%20Fictief'%3Basync%20function%20f%20()%20%7Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20checked.length%3B%20i%2B%2B)%7BordersId.push(checked%5Bi%5D.getAttribute('data-id'))%3Bawait%20fetch(%60https%3A%2F%2Ffreshcotton-343466.webshopapp.com%2Fadmin%2Forders%2F%24%7BordersId%5Bi%5D%7D%2Fproducts%2Fedit_locations.json%60).then(data%20%3D%3E%20data.json()).then(data%20%3D%3E%20order.push(data.orderProducts))%3B%7D%3Bfor%20(let%20i%20%3D%200%3B%20i%20%3Cordername.length%3B%20i%2B%2B)%7Brandom.push(%7B%22ordername%22%3A%20ordername%5Bi%5D.innerText%7D)%3B%7Dawait%20order.forEach(order%20%3D%3E%20%7Border.forEach(item%20%3D%3E%20%20array.push(%7B%22ordername%22%3A%20document.querySelector(%60tr%5Bdata-id%3D%22%24%7Bitem.order_id%7D%22%5D%60).querySelector('a').innerHTML.trim()%2C%20%22date%22%3A%20item.created_at%2C%20%22product-title%22%3A%20item.variant.product.nl.title%2C%20%22qnty%22%3A%20item.order_product.quantity%2C%20%22sku%22%3A%20item.order_product.sku%20%2C%22size%22%3A%20item.order_product.variant_title%2C%20%22location%22%3A%20item.location_name%2C%20%22status%22%3A%20document.querySelector(%60tr%5Bdata-id%3D%22%24%7Bitem.order_id%7D%22%5D%60).querySelector('.LabelNoWrap').innerHTML.trim()%20%7D))%7D)%3Bfor%20(let%20i%20%3D%200%3B%20i%3C%20array.length%3B%20i%2B%2B)%7Bif%20(array%5Bi%5D.location%20%3D%3D%20activeStore)%20%7Bawait%20exportData.push(array%5Bi%5D)%7D%7Dawait%20objectExporter(%7Bexportable%3A%20exportData%2Ctype%3A%20'xls'%2CfileName%3A%20'export'%2Cheaders%3A%20%5B%22Order%22%2C%20%22Datum%20Order%22%2C%20%22Item%22%2C%20%22Qnty%22%2C%20%22SKU%20(Itemcode)%22%2C%20%22Size%22%2C%20%22Location%22%2C%20%22Status%22%5D%2C%7D)%7Df()%7D)()


//new code

// var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
    
// const checked = document.querySelectorAll(".-checked");
// let ordername = document.querySelectorAll('.-checked .-primary a');

// const ordersId = [];
// let order = [];
// const array = [];
// const exportData = [];

// const activeStore  = 'Jordaan Fictief';

// //location Inventory 

// let inventoryData = [];
// let data = [];
// let location_uuid ;

// if (activeStore == "Jordaan Fictief"){
//   location_uuid =  "a161be7b-da02-4790-b8d4-ad0bc93ff965"
// }
// else if (activeStore == "Pijp Fictief"){
//   location_uuid =  "1910212e-35b7-4808-8909-06b3543b0ea3"
// }
// else {
//   location_uuid =  "8a8f069f-f851-4cbc-aa45-9d0d82299da2" //kantoor
// }


// async function f () {
//     for (var i = 0; i < checked.length; i++){ 
//     ordersId.push(checked[i].getAttribute('data-id'));
    
//      await fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data));
//     //  await fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => invet.push(data.inventory));
// };

// await order.forEach(order => {
//     order.orderProducts.forEach(item => {

//       let currentItem = { 
//       "ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), 
//       "date": item.created_at, 
//       "product-title": item.variant.product.nl.title, 
//       "qnty": item.order_product.quantity, 
//       "sku": item.order_product.sku ,
//       "size": item.order_product.variant_title, 
//       "location": item.location_name, 
//       "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim(),
//       "variant-id": item.variant_id,
//       "location_uuid" :  location_uuid 
//     }

//     let currentInventory = order.inventory[item.variant_id][location_uuid].inventory

//     currentItem 
//   }
// )
// });



// // if (array[i].inventory-current < array[i].qnty)
// // { 
// //   array[i].qnty = `MULTILOCATON (Jordaan: ${ jordaanInventory} stuks, Pijp: ${ pijpInventory} stuks,  Freshcotton: ${freshcottonInventory} stuks’) `
// // }

// for (let i = 0; i< array.length; i++){
//     if (array[i].location == activeStore) {
//       if (array[i].inventory-current < array[i].qnty)
//       { 
//        array[i].location = `MULTILOCATON (Jordaan: ${ jordaanInventory} stuks, Pijp: ${ pijpInventory} stuks,  Freshcotton: ${freshcottonInventory} stuks’) `
//       }
      
//       await exportData.push(array[i])
// }}

// await objectExporter({
//     exportable: exportData,
//     type: 'xls',
//     fileName: 'export',
//     headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status", "Variant-id", "test"],
//   })

// }

// f();


// DATE FORMATTING 
// Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
// year = item.order[i].created_at.substr(0, 4);
// maand = item.order[i].created_at.substr(5, 2);
// dag =item.order[i].created_at.substr(8, 2);


//locatie logica

// let inventoryData;
// let jordaan_uuid = "a161be7b-da02-4790-b8d4-ad0bc93ff965" //beter schrijven je wilt dit voor elke locactie
// let pijp_uuid = "1910212e-35b7-4808-8909-06b3543b0ea3" //beter schrijven je wilt dit voor elke locactie
// let freshcotton_uuid = "8a8f069f-f851-4cbc-aa45-9d0d82299da2" //beter schrijven je wilt dit voor elke locactie



// fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/228028884/products/edit_locations.json`).then(data => data.json()).then(data => inventoryData = data.inventory); //ordernummer toevoegen

// let jordaanInventory = inventoryData['274589674'][jordaan_uuid].inventory //variantId van product toevoegen
// let pijpInventory = inventoryData['274589674'][pijp_uuid].inventory //variantId van product toevoegen
// let freshcottonInventory = inventoryData['274589674'][freshcotton_uuid].inventory //variantId van product toevoegen

 //  await fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => inventoryData.push(data.inventory));

//array[index] kan worden toegevoegd in de loop 


