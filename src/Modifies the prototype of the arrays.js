function arrayModified() {
  // Tu código aquí 👈
  Array.prototype.myFilter = function(callback) {
    const array = [];
    for (const i of this) {
      if(callback(i))
      array.push(i);
    }
    return array;
  };

  const array = [1,2,3,4,5,6];

  return array.myFilter(num => num % 2 === 0);
}

const arrayMod = new arrayModified();

console.log(arrayMod);
// Output: [2,4,6]