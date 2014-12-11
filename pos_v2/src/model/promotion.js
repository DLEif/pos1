function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.getpromotionText = function(cartItems) {
  var promotionText = '';
  var promotions = loadPromotions();

  for(var i = 0; i < cartItems.length; i++) {
    var promotionitem = Promotion.findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      promotionText += '名称：' + cartItems[i].item.name +
      '，数量：' + Math.floor(cartItems[i].count / 3)
      + cartItems[i].item.unit + '\n';
    }
  }
  return promotionText;
}
Promotion.findpromotionitem = function(barcode,promotions) {
  var promotionitem;

  for(var i = 0;i < promotions.barcodes.length;i++) {
    if(promotions.barcodes[i] === barcode) {
      promotionitem = promotions.barcodes[i];
    }
  }
  return promotionitem;
}
