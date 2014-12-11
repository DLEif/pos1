function printInventory(tags) {
  var cartItems = CartItem.getcartItems(tags);
  var inventorytext = InventoryText.getText(cartItems);
  console.log(inventorytext);
}

// function getpromotionText(cartItems){
//   var promotionText = '';
//   var promotions = loadPromotions();
//
//   for(var i = 0; i < cartItems.length; i++) {
//     var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
//     if( promotionitem) {
//       promotionText += '名称：' + cartItems[i].item.name +
//       '，数量：' + Math.floor(cartItems[i].count / 3)
//       + cartItems[i].item.unit + '\n';
//     }
//   }
//   return promotionText;
// }
