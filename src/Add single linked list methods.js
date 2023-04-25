class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

class LinkedListRecharged extends LinkedList {
  get(index){
   // Tu código aquí 👈
    if (index >= this.length || index < 0) {
      return null;
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }

  insertAt(index, value){
    // Tu código aquí 👈
    if (index >= this.length || index < 0) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    const newNode = new Node(value);
    const leader = currentNode;
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  toArray(){
    // Tu código aquí 👈
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  removeAt(index){
    // Tu código aquí 👈
    if (index >= this.length || index < 0) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    const leader = currentNode;
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return currentNode.value;
  }
}

// Test

// Input:
const linkedList = new LinkedListRecharged();

linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");

console.log(linkedList.get(1));

// Output:
// "Días"

// Input:
const linkedList2 = new LinkedListRecharged();

linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.insertAt(1, 5)

console.log(linkedList2.toArray())

// Output:
// [1, 5, 2, 3]

// Input:
const linkedList3 = new LinkedListRecharged();

linkedList3.append(1);
linkedList3.append(2);
linkedList3.append(3);

linkedList3.removeAt(1);

console.log(linkedList3.toArray());

// Output:
// [1, 3]