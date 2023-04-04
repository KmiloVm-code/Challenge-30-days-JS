class User {
  // Tu código aquí 👈
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  addFriend(friend) {
    this._friends.push(friend)
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message);
  }

  showMessages() {
    return this._messages;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name.length > 0) {
      this._name = name;
    } else {
      throw new Error("El campo no pudede estar vacio");
    }
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (age > 0) {
      this._age = age;
    } else {
      throw new Error("El campo no pudede estar vacio");
    }
  }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
console.log(usuario1.addFriend(usuario2));
console.log(usuario1.sendMessage("Hola Maria!", usuario2));

console.log(usuario1.showMessages())

// Output:
// ["Hola Maria!"]
