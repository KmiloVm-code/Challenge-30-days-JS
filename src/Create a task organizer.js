function taskManager() {
  // Tu código aquí 👈
  let map = new Map();

  function addTask(task, tags) {
    task = task.toLowerCase();
    if (map.has(task)) {
      const taskTags = map.get(task);
      tags.forEach(tag => taskTags.add(tag));
    }else{
      map.set(task, new Set(tags))
    }
  }

  function printTasks() {
    return map;
  }

  return {
    addTask,
    printTasks
  }
}

// Input:
const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);

console.log(myTaskManager.printTasks());
// Output:
// Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }

// Input:
const myTaskManager2 = taskManager()
myTaskManager2.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager2.addTask("Sacar al perro", ["mascotas"]);
myTaskManager2.addTask("Hacer ejercicio", ["salud"]);
myTaskManager2.addTask("Comprar leche", ["lácteos"]);

console.log(myTaskManager2.printTasks());
// Output:
// Map(3) { "comprar leche" → Set(3), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }