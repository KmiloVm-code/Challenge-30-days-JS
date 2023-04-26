// Singly Linked List

class Node {
  constructor(name, age, bedNumber) {
    // Tu código aquí 👈🏻
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}

class PatientList {
  constructor(beds) {
    // Tu código aquí 👈🏻
    this.beds = beds;
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.availableBeds = new Array(beds);
    for (let i = 0; i < beds; i++) {
      this.availableBeds[i] = i + 1;
    }
  }

  addPatient(name, age) {
    // Tu código aquí 👈🏻
    if (this.availableBeds.length === 0) {
      throw new Error("No hay camas disponibles");
    }
    const newNode = new Node(name, age, this.availableBeds[0]);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.availableBeds.shift();
  }

  removePatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    if (this.head.name === name) {
      this.head = this.head.next;
      this.length--;
      this.availableBeds.unshift(this.head.bedNumber);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        currentNode.next = currentNode.next.next;
        this.length--;
        this.availableBeds.unshift(currentNode.next.bedNumber);
        return;
      }
      currentNode = currentNode.next;
    }
  }

  getPatient(name) {
    // Tu código aquí 👈🏻
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    if (this.head.name === name) {
      return {
        name: this.head.name,
        age: this.head.age,
        bedNumber: this.head.bedNumber,
      }
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        return {
          name: currentNode.next.name,
          age: currentNode.next.age,
          bedNumber: currentNode.next.bedNumber,
        }
      }
      currentNode = currentNode.next;
    }
    throw new Error("Paciente no encontrado");
  }

  getPatientList() {
    // Tu código aquí 👈🏻
    let patiens = [];
    let currentNode = this.head;
    while (currentNode) {
      patiens.push({
        name: currentNode.name,
        age: currentNode.age,
        bedNumber: currentNode.bedNumber,
      });
      currentNode = currentNode.next;    
    }
    return patiens;
  }

  getAvailableBeds() {
    // Tu código aquí 👈🏻
    return this.availableBeds.length;
  }
}

// Input:
const list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);

console.log(list.getPatientList());
// Output:
// [
//   { name: "Paciente 1", age: 20, bedNumber: 1 },
//   { name: "Paciente 2", age: 30, bedNumber: 2 },
// ]

// Input:
const list2 = new PatientList(3);
list2.addPatient("Paciente 1", 20);
list2.addPatient("Paciente 2", 30);

console.log(list2.getPatient("Paciente 1"));
// Output:
// {
//   name: "Paciente 1",
//   age: 20,
//   bedNumber: 1,
// }

// Input:
const list3 = new PatientList(3);
list3.addPatient("Paciente 1", 20);
list3.addPatient("Paciente 2", 30);

list3.removePatient("Paciente 1");

console.log(list3.getPatientList());
// Output:

// [
//   { name: "Paciente 2", age: 30, bedNumber: 2 },
// ]