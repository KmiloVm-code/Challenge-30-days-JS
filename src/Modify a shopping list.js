function processShoppingList(list) {
  // Tu código aquí 👈
  let total = 0;
  list.map(item => {
    if (item.name.includes('oferta')) {
      item.price *= 0.8;
    }
    item.price *= item.quantity;
    delete item.quantity;
    total += item.price; 
    return item
  })
  return total;
}

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

console.log(processShoppingList(shoppingList));

console.log(shoppingList)