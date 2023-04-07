class Product {
  // Este código no debe ser editado ❌
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    throw new Error("Este método debe ser implementado en las subclases");
  }
}

class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product = product;
  }

  getPrice() {
    // Tu código aquí 👈
    return this.product.getPrice() + 20;
  }

  getDescription() {
    // Tu código aquí 👈
    return `${this.product.getDescription()} con seguro de envío`
  }
}

class WarrantyDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product = product;
  }

  getPrice() {
    // Tu código aquí 👈
    return this.product.getPrice() + 20;
  }

  getDescription() {
    // Tu código aquí 👈
    return `${this.product.getDescription()} con garantía`;
  }
}

class BasicProduct extends Product {
  constructor(price, description) {
    // Tu código aquí 👈
    super(price);
    this.description = description;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description;
  }
}

//Input:
const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
// Output:
// 140
// "Camisa de algodón con garantía con seguro de envío"

//Input:
const basicProduct2 = new BasicProduct(5000, "Refrigerador");
const withWarranty2 = new WarrantyDecorator(basicProduct2);
console.log(withWarranty2.getPrice());
console.log(withWarranty2.getDescription());
// Output:
// 5020
// "Refrigerador con garantía"

// Input:
const basicProduct3 = new BasicProduct(5000, "Refrigerador");
const withShippingInsurance3 = new ShippingInsuranceDecorator(basicProduct3);
console.log(withShippingInsurance3.getPrice());
console.log(withShippingInsurance3.getDescription());
// Output:
// 5020
// "Refrigerador con seguro de envío"