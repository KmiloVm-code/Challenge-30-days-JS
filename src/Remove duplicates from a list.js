function removeDuplicates(values) {
  // Tu código aquí 👈
  let set = new Set(values);
  return [...set];
}

// Input:
const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits))
// Output: ["melon", "mango", "banana", "apple"]

// Input:
const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))
// Output: [1, 2, 3]