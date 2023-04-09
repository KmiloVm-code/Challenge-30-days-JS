class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getAll() {
    return this.data;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length --;
  }

unshift(item) {
  if (item !== undefined){
    for (let i = this.length; i--; ) {
      this.data[i + 1] = this.data[i];      
    }
    this.data[0] = item;
    this.length++;
  }
  return this.length;
}


  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }

  map(func) {
    // Tu código aquí 👈
    const newArray = new MyArray();
    for (let i in this.data) {
      newArray.push(func(this.data[i]));
    }
    return newArray
  }

  filter(func) {
    // Tu código aquí 👈
    const newArray = new MyArray();
    for (let i in this.data) {
      if (func(this.data[i])) {
        newArray.push(this.data[i]);
      }
    }
    return newArray
  }

  join(character = ",") {
    // Tu código aquí 👈
    let join = "";
    for (let i = 0; i < this.length; i++) {
      if (this.length - 1 !== i) {
        join += this.data[i] + character;
      } else {
        join += this.data[i];
      }
    }
    return join;
  }
}

// Input:
const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray.data)

// Output: { 0: 1, 1: 2, 2: 3 }

// Input:
const myArray2 = new MyArray()

myArray2.push("Platzinauta");
myArray2.unshift("Hola!")

console.log(myArray2.data)

// Output: { 0: "Hola!", 1: "Platzinauta" }