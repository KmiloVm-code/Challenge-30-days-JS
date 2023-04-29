class Mail {
  constructor(from, to, body, subject) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.subject = subject;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    // Tu código aquí 👈🏻
    const mail = new Mail(from, to, body, subject);
    if (this.length === 0) {
      this.first = mail;
      this.last = mail;
    } else {
      this.last.next = mail;
      this.last = mail;
    }
    this.length++;
    return mail;
  }

  dequeue() {
    // Tu código aquí 👈🏻
    if (this.length === 0) {
      throw new Error('No hay correos en la cola');
    }
    const mail = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return {
      from: mail.from,
      to: mail.to,
      body: mail.body,
      subject: mail.subject,
    };
  }

  peek() {
    // Tu código aquí 👈🏻
    return this.first ? this.first : null;
  }

  size() {
    // Tu código aquí 👈🏻
    return this.length;
  }
}

// Input:
const emailQueue = new Queue();

emailQueue.enqueue(
  'jane@ejemplo.com',
  'support@ejemplo.com',
  'No puedo iniciar sesión en mi cuenta',
  'Problema de inicio de sesión'
);

emailQueue.enqueue(
  'joe@ejemplo.com',
  'support@ejemplo.com',
  'Mi pedido no ha llegado todavía',
  'Estado del pedido'
);

console.log(emailQueue.dequeue());
// Output:
// {
//   from: 'jane@ejemplo.com',
//   to: 'support@ejemplo.com',
//   body: 'No puedo iniciar sesión en mi cuenta',
//   subject: 'Problema de inicio de sesión'
// }