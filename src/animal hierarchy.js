class Animal {
  // Tu código aquí 👈
  constructor(name, age, species) {
    this._name = name;
    this._age = age;
    this._species = species;
  }

  getInfo() {
    return {
      name: this._name,
      age: this._age,
      specie: this._species,
    }
  }
}

class Mammal extends Animal{
  // Tu código aquí 👈
  constructor(name, age, species, hasFur) {
    super(name, age, species);
    this._hasFur = hasFur;
  }

  getInfo() {
    return {
      name: this._name,
      age: this._age,
      specie: this._species,
      hasFur: this._hasFur,
    }
  }
}

class Dog extends Mammal{
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur, species = "dog") {
    super(name, age, species, hasFur);
    this._breed = breed;
  }

  getInfo() {
    return {
      name: this._name,
      age: this._age,
      specie: this._species,
      breed: this._breed,
      hasFur: this._hasFur
    }
  }

  bark() {
    return "woof!";
  }
}

const bird = new Animal("pepe", 1, "bird")
console.log(bird.getInfo());

// Output:
// {
//   name: "pepe",
//   age: 1,
//   specie: "bird",
// }

const hippo = new Mammal("bartolo", 3, "hippo", false)
console.log(hippo.getInfo());

// Output:
// {
//   name: "bartolo",
//   age: 3,
//   specie: "hippo",
//   hasFur: false,
// }

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark());

// Output:
// "woof!"