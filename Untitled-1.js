

let orders = [{"orderId":228028884,"orderProducts":[{"created_at":"2022-10-25T17:26:02+02:00","id":81420,"is_stock_available":false,"location_name":"Jordaan Fictief","location_uuid":"a161be7b-da02-4790-b8d4-ad0bc93ff965","order_id":228028884,"order_product_id":455038618,"shop_id":343466,"stock_status":"stock_action_required","updated_at":"2022-10-25T17:26:02+02:00","variant_id":274589674,"order_product":{"additional_cost_excl":null,"additional_cost_incl":null,"additional_cost_tax_rate":null,"article_code":"TEST-004","barcode":"","base_additional_cost_excl":null,"base_additional_cost_incl":null,"base_price_excl":8.2645,"base_price_incl":10.0,"brand_name":"","colli":0,"cost_price":0.0,"credited_quantity":4,"custom_data":[],"discount_excl":0.0,"discount_incl":0.0,"hs_code":null,"id":455038618,"invoiced_quantity":4,"is_partially_refunded":false,"is_partially_returned":false,"is_refunded":true,"is_returned":false,"order_id":228028884,"price_excl":33.06,"price_incl":40.0,"product_id":138875867,"product_title":"Test Sweatpant (All locations)","quantity":4,"reference_id":null,"returned_quantity":0,"shipped_quantity":4,"shop_id":343466,"size_x":0,"size_y":0,"size_z":0,"sku":"TEST-004","supplier_name":"","tax_rate":0.21,"tax_rates":null,"variant_id":274589674,"variant_title":"Size : XL","volume":0.0,"weight":0},"variant":{"additional_cost_id":null,"article_code":"TEST-004","barcode":"","colli":0,"created_at":"2022-10-25T16:56:53+02:00","hs_code":null,"id":274589674,"image_id":null,"inventory_allow_backorders":false,"inventory_level":4,"inventory_minimum":0,"inventory_remaining":4,"inventory_sold":4,"inventory_tracking_enabled":true,"inventory_warning_level":0,"is_available":true,"is_default":false,"is_product_set_bound":false,"matrix":null,"maximum_quantity":10000,"minimum_quantity":1,"position":4,"price_cost":0.0,"price_excl":8.2645,"price_incl":10.0,"price_old_excl":0.0,"price_old_incl":0.0,"product_id":138875867,"reference_id":null,"shop_id":343466,"size_unit":"cm","size_x":0.0,"size_x_value":0.0,"size_y":0.0,"size_y_value":0.0,"size_z":0.0,"size_z_value":0.0,"sku":"TEST-004","tax_auto":false,"tax_id":1180262,"tax_type":null,"unit_price":null,"unit_unit":null,"updated_at":"2022-10-25T17:30:28+02:00","volume":0.0,"volume_unit":"ml","volume_value":0.0,"weight":0.0,"weight_unit":"g","weight_value":0.0,"wishlists_count":0,"product":{"article_code":"TEST-004","barcode":"","brand_id":null,"created_at":"2022-10-25T16:56:46+02:00","data01":"","data02":"","data03":"","delivery_date_id":null,"has_custom_fields":false,"has_discounts":false,"has_matrix":true,"hits":26,"hs_code":null,"id":138875867,"image_id":null,"is_visible":true,"missing_info":{"type":"recommended","fields":["Afbeelding","Categorie","Inhoud","SEO"]},"price_excl":8.2645,"price_incl":10.0,"price_old_excl":0.0,"price_old_incl":0.0,"product_set_id":null,"product_type_id":null,"search_context":"test-004","shop_id":343466,"sku":"TEST-004","supplier_id":null,"updated_at":"2022-10-25T17:30:30+02:00","variant_prices":{"min_price_incl":10.0,"min_price_excl":8.2645,"max_price_incl":10.0,"max_price_excl":8.2645},"variants_count":4,"visibility":"visible","weight":0,"metafields":{"meta_title_nl":"Test Sweatpant (All locations)"},"image":null,"nl":{"content":"","description":"","fulltitle":"Test Sweatpant (All locations)","slug":"test-sweatpant-all-locations","title":"Test Sweatpant (All locations)"}},"nl":{"title":"Size : XL"}}}],"inventory":{"274589674":{"8a8f069f-f851-4cbc-aa45-9d0d82299da2":{"location_uuid":"8a8f069f-f851-4cbc-aa45-9d0d82299da2","product_uuid":"f703921b-4c5d-5b32-96cf-7c33280acdbe","variant_id":274589674,"location_title":"Freshcotton","inventory":"0"},"1910212e-35b7-4808-8909-06b3543b0ea3":{"location_uuid":"1910212e-35b7-4808-8909-06b3543b0ea3","product_uuid":"f703921b-4c5d-5b32-96cf-7c33280acdbe","variant_id":274589674,"location_title":"Pijp fictief","inventory":"2"},"a161be7b-da02-4790-b8d4-ad0bc93ff965":{"location_uuid":"a161be7b-da02-4790-b8d4-ad0bc93ff965","product_uuid":"f703921b-4c5d-5b32-96cf-7c33280acdbe","variant_id":274589674,"location_title":"Jordaan Fictief","inventory":"2"}}}}];


// orders.forEach(order => {
//     order.orderProducts.forEach(item => {

//         let currentItem = { 
//         "date": item.created_at, 
//         "product-title": item.variant.product.nl.title, 
//         "qnty": item.order_product.quantity, 
//         "sku": item.order_product.sku ,
//         "size": item.order_product.variant_title, 
//         "location": item.location_name, 
//         "variant_id": item.variant_id,
//         "location_uuid" : item.location_uuid
//       }

//       if(order.inventory[currentItem.variant_id][currentItem.location_uuid].inventory > currentItem.qnty){
//         currentItem.location == 'Multi';

//       }
// })
// ///    push naar array doen
// })

orders.forEach(order => {
    console.log(order)
    order.orderProducts.forEach(item => {
        for (location in order.inventory){
            console.log(location[item.location_uuid])
        }

    })

})