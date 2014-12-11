function InventoryText(cartItems) {
  this.cartItems = cartItems;
}

InventoryText.getsummaryText = function(sumtotal) {
  var summaryText = '';
  summaryText = '总计：' + sumtotal.toFixed(2) + '(元)\n';
  return summaryText;
}

InventoryText.getText = function(cartItems){
  var inventorytext = '***<没钱赚商店>购物清单***\n';
  var promotionText = '';
  var promotions = loadPromotions();
  var sumtotal = 0;
  var saveMoney = 0;
  var itemsText= '';
  var promotionText = Promotion.getpromotionText(cartItems);
  var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');

  for(var i = 0; i < cartItems.length; i++) {
    var summaryText = 0;
    var count = cartItems[i].count;
    var promotionitem = Promotion.findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      count = cartItems[i].count - Math.floor(cartItems[i].count / 3);
    }
    saveMoney += cartItems[i].item.price * Math.floor(cartItems[i].count / 3);
    subtotal = (cartItems[i].item.price) * count;
    sumtotal += subtotal;
    itemsText += CartItem.getitemsText(cartItems, subtotal, i);
    summaryText = InventoryText.getsummaryText(sumtotal);
  }

  inventorytext += '打印时间：' + currTime +'\n' + '----------------------\n'
  + itemsText +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  promotionText +
  '----------------------\n'
  + summaryText
  + '节省：' + saveMoney.toFixed(2) + '(元)\n'+
  '**********************';

  return inventorytext;
}
