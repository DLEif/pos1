function printInventory(tags) {
  var cartItems = CartItem.getcartItems(tags);
  var inventorytext = getText(cartItems);
  console.log(inventorytext);
}

// function getText(cartItems) {
//   var inventorytext = '***<没钱赚商店>购物清单***\n';
//   var promotionText = '';
//   var summaryText = '';
//   var promotions = loadPromotions();
//   var sumtotal = 0;
//   var subtotal = 0;
//   var saveMoney = 0;
//   var itemsText= '';
//   var promotionText = getpromotionText(cartItems);
//   var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');
//
//   for(var i = 0; i < cartItems.length; i++) {
//     var count = cartItems[i].count;
//     var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
//     if( promotionitem) {
//       count = cartItems[i].count - Math.floor(cartItems[i].count / 3);
//     }
//     saveMoney += cartItems[i].item.price * Math.floor(cartItems[i].count / 3);
//     subtotal = (cartItems[i].item.price) * count;
//     sumtotal += subtotal;
//     itemsText += '名称：' + cartItems[i].item.name +
//     '，数量：' + cartItems[i].count + cartItems[i].item.unit
//     + '，单价：' + cartItems[i].item.price.toFixed(2) +'(元)' +
//     '，小计：' + subtotal.toFixed(2) + '(元)\n';
//   }
//   summaryText = '总计：' + sumtotal.toFixed(2) + '(元)\n';
//   inventorytext += '打印时间：' + currTime +'\n' + '----------------------\n'
//   + itemsText +
//   '----------------------\n' +
//   '挥泪赠送商品：\n' +
//   promotionText +
//   '----------------------\n'
//   + summaryText
//   + '节省：' + saveMoney.toFixed(2) + '(元)\n'+
//   '**********************';
//   return inventorytext;
// }
function getpromotionText(cartItems){
  var promotionText = '';
  var promotions = loadPromotions();

  for(var i = 0; i < cartItems.length; i++) {
    var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      promotionText += '名称：' + cartItems[i].item.name +
      '，数量：' + Math.floor(cartItems[i].count / 3)
      + cartItems[i].item.unit + '\n';
    }
  }
  return promotionText;
}
function findpromotionitem(barcode,promotions) {
  var promotionitem;
  for(var i = 0;i < promotions.barcodes.length;i++) {
    if(promotions.barcodes[i] === barcode) {
      promotionitem = promotions.barcodes[i];
    }
  }
  return promotionitem;
}
