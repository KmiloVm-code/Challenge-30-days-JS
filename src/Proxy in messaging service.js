class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}

class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
    this._isLoggedIn = false;
  }

  login() {
    // Tu código aquí 👈
    this._isLoggedIn = true;
  }

  logout() {
    // Tu código aquí 👈
    this._isLoggedIn = false;
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this._isLoggedIn;
  }
}

class MessagesProxy {
  constructor(messages, user) {
    // Tu código aquí 👈
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    // Tu código aquí 👈
    if (!this.user.isLoggedIn()) {
      throw new Error("Usuario no registrado");
    }
    this.messages.sendMessage(text);
  }

  getHistory() { 
    // Tu código aquí 👈
    if (!this.user.isLoggedIn()) {
      throw new Error("Usuario no registrado")
    }
    return this.messages.getHistory();
  }
}

// Input:
const user = new User("John")
user.login();
console.log(user.isLoggedIn());
// Output: true

// Input:
const user2 = new User("John");
const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user2);

user2.login();
messagesProxy.sendMessage("Hola");
console.log(messagesProxy.getHistory());
// Output: ["Hola"]

// Input:
const user3 = new User("John")
const messages3 = new Messages()
const messagesProxy3 = new MessagesProxy(messages3, user3)

messagesProxy3.sendMessage("Hola")
// Output: Error("Usuario no registrado")