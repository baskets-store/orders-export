//alle code
// de code: voor alle locaties
// var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
// const checked = document.querySelectorAll(".-checked");
// let ordername = document.querySelectorAll('.-checked .-primary a');
// const ordersId = [];
// let order =[];
// let random = [];
// const array = [];
// const exportData = [];
// const activeStore  = '';
// async function f () {
//     for (var i = 0; i < checked.length; i++){
//     ordersId.push(checked[i].getAttribute('data-id'));
//      await fetch(`https://baskets.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
// };
// for (let i = 0; i <ordername.length; i++){
//   random.push({"ordername": ordername[i].innerText});
// }
// await order.forEach(order => {
//     order.forEach(item =>  array.push({"ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), "date": item.created_at, "product-title": item.variant.product.nl.title, "qnty": item.order_product.quantity, "sku": item.order_product.sku ,"size": item.order_product.variant_title, "location": item.location_name, "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
// });
// for (let i = 0; i< array.length; i++){

//        await exportData.push(array[i])
// }

// await objectExporter({
//     exportable: exportData,
//     type: 'xls',
//     fileName: 'export',
//     headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status"],
//   })
// }
// f();






// code voor de Jordaan
// var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
// const checked = document.querySelectorAll(".-checked");
// let ordername = document.querySelectorAll('.-checked .-primary a');
// const ordersId = [];
// let order =[];
// let random = [];
// const array = [];
// const exportData = [];
// const activeStore  = 'Baskèts Jordaan';
// async function f () {
//     for (var i = 0; i < checked.length; i++){
//     ordersId.push(checked[i].getAttribute('data-id'));
//      await fetch(`https://baskets.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
// };
// for (let i = 0; i <ordername.length; i++){
//   random.push({"ordername": ordername[i].innerText});
// }
// await order.forEach(order => {
//     order.forEach(item =>  array.push({"ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), "date": item.created_at, "product-title": item.variant.product.nl.title, "qnty": item.order_product.quantity, "sku": item.order_product.sku ,"size": item.order_product.variant_title, "location": item.location_name, "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
// });
// for (let i = 0; i< array.length; i++){
//     if (array[i].location == activeStore) {
//        await exportData.push(array[i])
// }}
// await objectExporter({
//     exportable: exportData,
//     type: 'xls',
//     fileName: 'export',
//     headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status"],
//   })
// }
// f();




// Code voor de Pijp
// var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
// const checked = document.querySelectorAll(".-checked");
// let ordername = document.querySelectorAll('.-checked .-primary a');
// const ordersId = [];
// let order =[];
// let random = [];
// const array = [];
// const exportData = [];
// const activeStore  = 'Baskèts De Pijp';
// async function f () {
//     for (var i = 0; i < checked.length; i++){
//     ordersId.push(checked[i].getAttribute('data-id'));
//      await fetch(`https://baskets.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
// };
// for (let i = 0; i <ordername.length; i++){
//   random.push({"ordername": ordername[i].innerText});
// }
// await order.forEach(order => {
//     order.forEach(item =>  array.push({"ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), "date": item.created_at, "product-title": item.variant.product.nl.title, "qnty": item.order_product.quantity, "sku": item.order_product.sku ,"size": item.order_product.variant_title, "location": item.location_name, "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
// });
// for (let i = 0; i< array.length; i++){
//     if (array[i].location == activeStore) {
//        await exportData.push(array[i])
// }}
// await objectExporter({
//     exportable: exportData,
//     type: 'xls',
//     fileName: 'export',
//     headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status"],
//   })
// }
// f();




//freshcotton / baskets kantoor
// var script = document.createElement('script');script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";document.getElementsByTagName('head')[0].appendChild(script);
// const checked = document.querySelectorAll(".-checked");
// let ordername = document.querySelectorAll('.-checked .-primary a');
// const ordersId = [];
// let order =[];
// let random = [];
// const array = [];
// const exportData = [];
// const activeStore  = 'Kantoor';
// async function f () {
//     for (var i = 0; i < checked.length; i++){
//     ordersId.push(checked[i].getAttribute('data-id'));
//      await fetch(`https://baskets.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts));
// };
// for (let i = 0; i <ordername.length; i++){
//   random.push({"ordername": ordername[i].innerText});
// }
// await order.forEach(order => {
//     order.forEach(item =>  array.push({"ordername": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('a').innerHTML.trim(), "date": item.created_at, "product-title": item.variant.product.nl.title, "qnty": item.order_product.quantity, "sku": item.order_product.sku ,"size": item.order_product.variant_title, "location": item.location_name, "status": document.querySelector(`tr[data-id="${item.order_id}"]`).querySelector('.LabelNoWrap').innerHTML.trim() }))
// });
// for (let i = 0; i< array.length; i++){
//     if (array[i].location == activeStore) {
//        await exportData.push(array[i])
// }}
// await objectExporter({
//     exportable: exportData,
//     type: 'xls',
//     fileName: 'export',
//     headers: ["Order", "Datum Order", "Item", "Qnty", "SKU (Itemcode)", "Size", "Location", "Status"],
//   })
// }
// f();