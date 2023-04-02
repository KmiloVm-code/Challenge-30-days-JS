function protectDog(dog) {
  // Tu código aquí 👈
  const protectedDog = Object.assign({}, dog);

  Object.freeze(protectedDog)

  for (const dog in protectedDog) {
    const value = protectedDog[dog];
    if (typeof value === 'object') {
      Object.freeze(value);
    }
  }

  return protectedDog
}

protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

// Output:
// protectedDog.name = "Toro"
// protectedDog.name // "Romeo"