function printInventory(items) {

  // 1. 循环items
  // 2. 我们想把每一次循环的结果放在一个新的集合(cartItems)中用于统计
  // 3. 从cartItems中寻找是否存在已有的cartItem
  // 4. 如果cartItem存在，那么更新其数量(count)
  // 5. 如果不存在，则添加一个新的cartItem对象(包括两个属性：item, count)

  var cartItems = [];

  for(var i = 0; i < items.length; i++) {
    var cartItem = findCartItem(cartItems, items[i].barcode);
    if (cartItem) {
      cartItem.count++;
    } else {
      cartItems.push({ item: items[i], count: 1 });
    }
  }

  // 1. 我们已经嗯有了cartItems
  // 2. 我们需要循环cartItems
  // 3. 计算出每一个cartItem的小计(subtotal)
  // 4. 生成这个cartItem的清单文字
  // 5. 将小计累加，生成总金额(totalAmount)
  // 6. 拼接以上所有结果，生成最终文本
  // 7. 在Console中输出最终结果


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
