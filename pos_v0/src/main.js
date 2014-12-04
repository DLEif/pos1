function printInventory(items) {

  var inventoryText = '***<没钱赚商店>购物清单***\n';

  var totalAmount = 0;

  for (var i= 0; i< items.length; i++){

    var item = items[i];

    var subtotal = item.count * item.price;

    totalAmount += subtotal;

    inventoryText += '名称：' + item.name +
                     '，数量：' + item.count + item.unit +
                     '，单价：' + item.price.toFixed(2) +
                     '(元)，小计：' + subtotal.toFixed(2) +
                     '(元)\n';
  }

  inventoryText += '----------------------\n' +
    '总计：' + totalAmount.toFixed(2) +
    '(元)\n' + '**********************';

  console.log(inventoryText);

}
