function groupProducts(products, category) {
  // Tu código aqu

  const productsByCategory = products.filter(item => item.category === category)

  const object = {
    products: productsByCategory.map(item => item.name).join(", "),
    totalPrice: productsByCategory.reduce((acum, sum) => acum + sum.price, 0)
  }

  return object
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")

// Output: {
//   products: "Smartphone, Laptop",
//   totalPrice: 2000,
// }