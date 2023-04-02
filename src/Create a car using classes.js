class Car {
  // Tu código aquí 👈
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = false;
  }

  turnOn() {
    this.state = true;
    return this.state
  }

  turnOff() {
    this.state = false;
    return this.state;
  }

  drive(kilometers) {
    if (!this.state) {
      throw new Error("El auto está apagado")
    }

    this.mileage += kilometers;
    return this.mileage;
  }
}

const toyota = new Car("Toyota", "Corolla", 2020, 0);
console.log(toyota)
toyota.turnOn();
toyota.drive(100);
console.log(toyota.mileage)
// Output: 100

const toyota2 = new Car("Toyota", "Corolla", 2020, 0);
toyota2.turnOff()
toyota2.drive(100)
// Output: Error("El auto está apagado")