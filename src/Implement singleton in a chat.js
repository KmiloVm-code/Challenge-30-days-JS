class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  // Tu código aquí 👈
  constructor() {
    if (!Chat.instance) {
      this.users = [];
      Chat.instance = Object.freeze(this);      
    }
    return Chat.instance;
  }

  sendMessage(message) {
    this.users.forEach(user => user.receiveMessage(message))
  }

  addUser(user) {
    if(user instanceof User){
      this.users.push(user);
    }
  }

  removeUser(name) {
    const index = this.users.findIndex(user => user.name === name);
    if (index !== -1) {
      return this.users.splice(index, 1)
    }
    return null;
  }
}

const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2)

// Output: true

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)

console.log(chat.removeUser("Pepito"))

// Output:
// ["Nunca pares de aprender!"]
// ["Nunca pares de aprender!"]