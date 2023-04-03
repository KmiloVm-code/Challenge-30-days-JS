class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product{
  // Tu código aquí 👈
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
  }
}

class Service extends Product{
  // Tu código aquí 👈
  constructor(name, price, quantity) {
  super(name, price, quantity);
  }

  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`
  }
}

class Cart {
  // Tu código aquí 👈
  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    this.products = this.products.filter(item => item.name !== product.name);
  }

  calculateTotal() {
    return this.products.reduce((acum, sum) => acum + (sum.price * sum.quantity), 0);
  }

  getProducts() {
    return this.products;
  }

}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 3);

const cart = new Cart();
console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
console.log(cart.deleteProduct(book));
console.log(cart.calculateTotal());
console.log(cart.getProducts());


// Output:
// Agregando 2 unidades del artículo Libro al carrito
// Agregando el servicio Curso al carrito
// 320