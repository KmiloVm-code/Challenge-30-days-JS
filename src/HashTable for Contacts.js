class ContactList {
  constructor(size) {
    // Tu código aquí 👈
    this.data = new Array(size);
    this.numBuckets = this.data.length
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    // Tu código aquí 👈
    const address = this.hash(name);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([name, phone]);
    return this.data;
  }

  get(name) {
    // Tu código aquí 👈
    const address = this.hash(name);
    if (!this.data[address]) {
      return null;
    }
    
    for (const element of this.data[address]) {
      if (element[0] === name) {
        return element[1];
      }      
    }
    return null
  }

  retrieveAll() {
    // Tu código aquí 👈
    let allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.data[i]) {
        for (const element of this.data[i]) {
          allValues.push(element);
        }
      }      
    }
    return allValues;
  }

  delete(name) {
    // Tu código aquí 👈
    const address = this.hash(name);
    if (this.data[address]) {
      return this.data[address] = [];
    }
    return null
  }

}

// Input:
const contactList = new ContactList(10);
contactList.insert("Mr michi", "123-456-7890");

console.log(contactList.retrieveAll());
// Output: [["Mr michi", "123-456-7890"]]

// Input:
const contactList2 = new ContactList(10);
contactList2.insert("Mr michi", "123-456-7890");

console.log(contactList2.get("Mr michi"));
// Output: "123-456-7890"

// Input:
const contactList3 = new ContactList(10);
contactList3.insert("Mr michi", "123-456-7890");
contactList3.delete("Mr michi");

console.log(contactList3.get("Mr Michi"));
// Output: null