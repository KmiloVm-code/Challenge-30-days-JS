class CarBuilder {
  // Tu código aquí 👇
  constructor() {
    this.year = 0;
    this.model = '';
    this.brand = '';
    this.color = '';
    this.price = 0;
    this.isAvailable = false;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setIsAvailable(isAvailable) {
    this.isAvailable = isAvailable;
    return this;
  }

  build() {
    return {
      year: this.year,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      isAvailable: this.isAvailable,
    };
  }
}

// Input:
const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()

console.log(car)
// Output: {
//   year: 2021,
//   model: "Model x",
//   brand: "Tesla",
//   color: "Red",
//   price: 50000,
//   isAvailable": false
// }