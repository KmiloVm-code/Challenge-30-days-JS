function createTaskPlanner() {

  let taskPlanners = [];

  const addTask = task => {
    task.completed = false; taskPlanners.push(task)
  };

  const removeTask = task => taskPlanners = taskPlanners.filter(item => (item.name !== task && item.id !== task));

  const getTasks = () => taskPlanners;

  const getPendingTasks = () => taskPlanners.filter(item => !item.completed);

  const getCompletedTasks = () => taskPlanners.filter(item => item.completed);

  const markTaskAsCompleted = task => {
    const find = taskPlanners.find(item => (item.name === task || item.id === task)); 
    find.completed = true
  };

  const getSortedTasksByPriority = () => [...taskPlanners].sort((a, b) => a.priority - b.priority);

  const filterTasksByTag = tag => taskPlanners.filter(({tags}) => tags.includes(tag));

  const updateTask = (taskId, updates) => {
    const index = taskPlanners.findIndex(({id}) => id === taskId);
    if (index !== -1) {
      taskPlanners = [].concat(taskPlanners);
      return taskPlanners[index] = Object.assign({}, taskPlanners[index], updates);
    }
  };
  

  return {
    addTask,
    getTasks,
    removeTask,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask
  }
}

const planner = createTaskPlanner();

console.log(planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
}));

console.log(planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"]
}));

console.log(planner.addTask({
  id: 3,
  name: "Pasear al perro",
  priority: 2,
  tags: ["personal"]
}));

console.log(planner.addTask({
  id: 4,
  name: "Comprar detergente",
  priority: 3,
  tags: ["personal"]
}));

console.log(planner.getTasks());
console.log(planner.removeTask(1));
console.log(planner.getSortedTasksByPriority());
console.log(planner.markTaskAsCompleted(2));
console.log(planner.markTaskAsCompleted(4));
console.log(planner.getCompletedTasks());
console.log(planner.getPendingTasks());
console.log(planner.filterTasksByTag("shopping"));
console.log(planner.updateTask(2, {priority: 10}));
