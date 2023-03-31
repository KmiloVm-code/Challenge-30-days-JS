function searchValue(array, value) {
  // Tu código aquí 👈
  if (!array.flat().some(item => item === value)) {
    throw new Error("Valor no encontrado");
  }

  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    if (row.includes(value)) {
      return {
        row: i,
        column: (row.indexOf(value))
      }
    }
  }
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 5

console.log(searchValue(array, value));

// Output:
// {
//   row: 1,
//   column: 1,
// }