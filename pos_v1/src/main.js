// function printInventory(barcode) {
//
  var items = [];
  var allItems = loadAllItems();

  for(var i = 0; i < barcode.length; i++){
    var item = findItem(allItems, barcode[i]);
    items.push(item);
//
//   }
//
//   var cartItems = [];
//
//   for(var i = 0; i < items.length; i++) {
//     var cartItem = findCartItem(cartItems, items[i].barcode);
//     if (cartItem) {
//       cartItem.count++;
//     } else {
//       cartItems.push({ item: items[i], count: 1 });
//     }
//   }
//
//   var totalAmount = 0;
//   var cartItemsText = '';
//
//   for(var x = 0; x < cartItems.length; x++) {
//     var cartItem = cartItems[x];
//     var item = cartItem.item;
// 运用英语语言运用英语语言运用英语语言运用英语语言运用英语语言运用英语语言英语语言运用英语语言运用英语语言运用英语语言运用英语语言运用英语语言运用于
//     var subtotal = getSubtotal(item.price, cartItem.count);
//
//     cartItemsText += '名称：' + item.name +
//     '，数量：' + cartItem.count + item.unit +
//     '，单价：' + item.price.toFixed(2) +
//     '(元)，小计：' + subtotal.toFixed(2) +
//     '(元)\n';
//
//     totalAmount += subtotal;
//   }
//
//   var inventoryText = '***<没钱赚商店>购物清单***\n' +
//   cartItemsText +
//   '----------------------\n' +
//   '总计：' + totalAmount.toFixed(2) + '(元)\n' +
//   '**********************';
//
//   console.log(inventoryText);
// }
function findItem(allItems, barcode){
  var item;
  for(var i = 0; i < allItems.length; i++){
    if(allItems[i].barcode === barcode){
      item = allItems[i];
    }
  }
  return item;
}
//
// function findCartItem(cartItems, barcode){
//   var cartItem;
//   for(var i = 0; i < cartItems.length; i++){
//     if(cartItems[i].item.barcode == barcode){
//       cartItem = cartItems[i];
//     }
//   }
//   return cartItem;
// }
//
// function getSubtotal(price, count){
//   return price * count;
// }
//
//
//
function printInventory(barcode){
  var items = [];
  var arr = barcode.split('-');
  var allItems = loadAllItems();

  for(var i = 0; i < barcode.length; i++){
    var item = findItem(allItems, arr[0]);
    items.push(item);
  }

  var cartItems = [];

  for(var i = 0; i < items.length; i++) {
    var cartItem = findCartItem(cartItems, items[i].barcode);
    if(Items[i].split('-').length > 1){
      cartItems.push({ item: items[i], count: arr[1] });
    }else if (cartItem) {
      cartItem.count++;
    } else {
      cartItems.push({ item: items[i], count: 1 });
    }

}

function findItem(allItems, barcode){
  var item;
  var arr = barcode.split('-');
  for(var i = 0; i < allItems.length; i++){
    if(allItems[i].barcode === arr[0]){
      item = allItems[i];
    }
  }
  return item;
}
  cartItems[cartItems.length] = { barcode : arr[0], num : arr[1]};
  b = false;
  continue;
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
