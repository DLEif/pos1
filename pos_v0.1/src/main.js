function printInventory(inputs) {
  var tagArray = [];
  var sutotal = 0;
  var totalAmount = 0;
  var inventoryText = '***<没钱赚商店>购物清单***\n';

  for(var i = 0; i < inputs.length; i++){
    if(tagArray !== inputs[i].name){
      tagArray.push({
        borcade : inputs[i].barcode,
        name : inputs[i].name,
        unit: inputs[i].nuit,
        price: inputs[i].price,
        count : 1
      });
    }else{
      tagArray[i].count++;
    }
  }

  for(var i = 0; i < tagArray.length; i++){

    var subtotal = getSubtotal(item.count, item.price);

    totalAmount += sutotal;
    inventoryText += '名称：' + item.name +
                     '，数量：' + item.count + item.unit +
                     '，单价：' + item.price.toFixed(2) +
                     '(元)，小计：' + subtotal.toFixed(2) +
                     '(元)\n';
  }

  inventoryText += '----------------------\n' +
                   '总计：' + totalAmount.toFixed(2) +
                   '(元)\n' + '**********************'；

  console.log(inventoryText);
}
//var count = 0;
// for(var j = 0; j < tagArray.length; j++){
//       if(tagArray[j] === inputs[i].name){
//         tagArray = tagArray[j];
//       }
//     var tagArray = inputs[i].name;
//
//   }
//   console.log(tagArray)
// }



    // if(tagArray[i] === inputs[i].name){
    //     tagArray[i].count++;
    // }
  //   var  inputs[i] = ('count = 0');
  //   console.log(inputs);
  //  }
  // // for(var i = 0; i < inputs.length; i++){
  //   if(inputs[i].barcode === tagArray){
  //     tagArray.push = inputs[i];
  //   }
//     console.log(tagArray);
//   }
//   //return ;
// }
