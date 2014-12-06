function printInventory(barcode) {

  var items = [];
  var allItems = loadAllItems();

  for(var i = 0; i < barcode.length; i++){
    var item = findItem(allItems, barcode[i]);
      items.push(item);

  }

  var cartItems = [];

  for(var i = 0; i < items.length; i++) {
    var cartItem = findCartItem(cartItems, items[i].barcode);
    if (cartItem) {
      cartItem.count++;
    } else {
      cartItems.push({ item: items[i], count: 1 });
    }
  }

  var totalAmount = 0;
  var cartItemsText = '';

  for(var x = 0; x < cartItems.length; x++) {
    var cartItem = cartItems[x];
    var item = cartItem.item;

    var subtotal = getSubtotal(item.price, cartItem.count);

    cartItemsText += '名称：' + item.name +
    '，数量：' + cartItem.count + item.unit +
    '，单价：' + item.price.toFixed(2) +
    '(元)，小计：' + subtotal.toFixed(2) +
    '(元)\n';

    totalAmount += subtotal;
  }

  var inventoryText = '***<没钱赚商店>购物清单***\n' +
  cartItemsText +
  '----------------------\n' +
  '总计：' + totalAmount.toFixed(2) + '(元)\n' +
  '**********************';

  console.log(inventoryText);
}
function findItem(allItems, barcode){
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
    if(cartItems[i].item.barcode == barcode){
      cartItem = cartItems[i];
    }
  }
  return cartItem;
}

function getSubtotal(price, count){
  return price * count;
}
