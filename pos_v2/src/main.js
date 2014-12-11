function printInventory(tags) {
  var cartItems = CartItem.getcartItems(tags);
  var inventorytext = InventoryText.getText(cartItems);
  console.log(inventorytext);
}
