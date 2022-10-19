
//pushen naar array
// if(locationName == activeStore){
//     const newArray = array.push({ orderNummer: orderNummer, datum: datum, productName: productName, sku: sku, locatie: locationName})
// }



// console.log(ordersId)
//data we want to use
// let orderNummer;
// let datum;
// let productName;
// let sku;
// let locationName;
// let productsInOrder =  order.orderProducts

// for (let i = 0; i < order[i].length; i++){

// data
// let orderNummer = order[i].order_id
// let datum = order[i].created_at
// let productName = order[i].variant.product.nl.title
// let sku = order[i].order_product.sku
// let locationName = order[i].location_name

// }

// for (let i = 0; i < array.length; i++){
//     if(activeStore == array[i].location){
 

// }
//     else{
//         console.log("hallo")
//     }
// }

// const selectedOrders = []

//  const newSelectedOrders = selectedOrders.push(array)
//  console.log(selectedOrders)


// fetch orders 
const checked = document.querySelectorAll(".-checked")

const ordersId = [] 
let order =[]
const array = []
const exportData = []

// //verschillende stores
const activeStore  = 'Jordaan Fictief' // 'Pijp' , 'Freshcotton'

for (var i = 0; i < checked.length; i++){ 
    ordersId.push(checked[i].getAttribute('data-id'))
    
     fetch(`https://freshcotton-343466.webshopapp.com/admin/orders/${ordersId[i]}/products/edit_locations.json`).then(data => data.json()).then(data => order.push(data.orderProducts))
}


order.forEach(order => {
    order.forEach(item => array.push({"ordernummer": item.order_id, "date": item.created_at, "product-title": item.variant.product.nl.title,"sku": item.order_product.sku,"location": item.location_name }))
})

// // export only the active store location
for (let i = 0; i< array.length; i++){
    if (array[i].location == activeStore) {
         exportData.push(array[i])
}}


// naar csv

//test


// const exportData = [
//     {
//         "ordernummer": 226660880,
//         "date": "2022-10-06T16:20:02+02:00",
//         "product-title": "Gramicci Ghort Greige L",
//         "sku": "G101-OGT-GORTGREIGE",
//         "location": "Jordaan Fictief"
//     },
//     {
//         "ordernummer": 226727288,
//         "date": "2022-10-07T14:50:21+02:00",
//         "product-title": "Gramicci Ghort Greige L",
//         "sku": "G101-OGT-GORTGREIGE",
//         "location": "Jordaan Fictief"
//     }
// ]


objectExporter({
    exportable: exportData,
    type: 'csv',
    fileName: 'export',
    headers: ["ordernummer", "datum", "productnaam", "sku", "locatie"],
  })




