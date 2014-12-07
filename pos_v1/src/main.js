function printInventory(barcodes){
  var items = [];
  // var arr = barcode[i].split('-');
  var allItems = loadAllItems();

  // for(var i = 0; i < barcode.length; i++){
  //   var item = findItem(allItems, arr[0]);
  //   items.push(item);
  // }

  var cartItems = [];
  //  var Inventory = getInventory();

  for(var i = 0; i < barcodes.length; i++) {
    var arr = barcodes[i].split('-');
    barcode = arr[0];
    count = 1;
    if(arr[1]){
      count = parseFloat(arr[1]);
    }
    var cartItem = findCartItem(cartItems, barcode);
    if(cartItem){
      cartItem.count += count;
    }else {
      var newItem = findItem(allItems,barcode);
      cartItems.push({ item: newItem, count: count });
    }
  }
  console.log(cartItems);
  var inventorytext = '***<没钱赚商店>购物清单***\n';
  var promotionText = '';
  var summaryText = '';
  var promotions = loadPromotions();
  var sumtotal = 0;
  var subtotal = 0;
  var saveMoney = 0;
  var itemsText= '';
  for(var i = 0; i < cartItems.length; i++) {
    var promotionItem= findPromotionItem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      promotionText += '名称：' + cartItems[i].item.name +
      '，数量：' + Math.floor(cartItems[i].count / 3)
      + cartItems[i].item.unit + '\n';
      saveMoney += cartItems[i].item.price * Math.floor(cartItems[i].count / 3);
    }
  }
  for(var i = 0; i < cartItems.length; i++) {
    var count = cartItems[i].count;
    varpromotionItem=findPromotionItem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      count = cartItems[i].count - Math.floor(cartItems[i].count / 3);
    }
    subtotal = (cartItems[i].item.price) * count;
    sumtotal += subtotal;
    itemsText += '名称：' + cartItems[i].item.name +
    '，数量：' + cartItems[i].count + cartItems[i].item.unit
    + '，单价：' + cartItems[i].item.price.toFixed(2) +'(元)' +
    '，小计：' + subtotal.toFixed(2) + '(元)\n';
  }
  summaryText = '总计：' + sumtotal.toFixed(2) + '(元)\n';
  inventorytext += itemsText +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  promotionText +
  '----------------------\n'
  + summaryText
  + '节省：' + saveMoney.toFixed(2) + '(元)\n'+
  '**********************';
  return inventorytext;
}

function findItem(allItems,barcode){
  var item;
  for(var i = 0; i < allItems.length; i++){
    if(allItems[i].barcode === barcode){
      item = allItems[i];
    }
  }
  return item;
}

function findCartItem(cartItems, barcode){
  var cartItem;
  for(var i = 0; i < cartItems.length; i++){
    if(cartItems[i].item.barcode === barcode){
      cartItem = cartItems[i];
    }
  }
  return cartItem;
}

function getSubtotal(price, count){
  return price * count;
}

function findPromotionItem(barcode,promotions) {
  var promotionitem;
  for(var i = 0;i < promotions.barcodes.length;i++) {
    if(promotions.barcodes[i] === barcode) {
     promotionItem= promotions.barcodes[i];
    }
  }
  return promotionitem;
}
