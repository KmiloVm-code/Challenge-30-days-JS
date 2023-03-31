function myMap(array, func) {
  let nArray = [];
  
  for (let a of array){
    nArray.push(func(a));
  }

  return nArray;
}

console.log(myMap([1,2,3,4], (num) => num * 2));
console.log(myMap([{name: "michi", age: 2}, {name: "firulais", age: 6}], (pet) => pet.name));