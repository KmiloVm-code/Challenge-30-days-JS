function sortByAvailabilityAndPrice(products) {
  // Tu código aquí 👈
  const newArray = [...products].sort((a, b) => b.inStock - a.inStock || a.price - b.price);
  return newArray
}

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

console.log(sortByAvailabilityAndPrice(products));

// Output:
// [
//   { name: "product1", price: 10, inStock: true },
//   { name: "product3", price: 15, inStock: true },
//   { name: "product4", price: 5, inStock: false },
//   { name: "product2", price: 20, inStock: false },
// ]