function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity);
}

class Pay {
  makePay(quantity) {
    return {
      realized: true,
      quantity: quantity,
    }
  }
}

class PayPal extends Pay {
  constructor(email) {
    super();
    this._email = email;
  }

  makePay(quantity) {
    return { 
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this._email,
    }
  }
}

class Card extends Pay {
  constructor(creditCard) {
    super();
    this._creditCard = creditCard;
  }

  makePay(quantity) {
    if (this._creditCard.length !== 16) {
      throw new Error("Ingrese una tarjeta valida")
    }

    return {
      ...super.makePay(quantity),
      lastCardNumbers: this._creditCard.substring(this._creditCard.length - 4),
    }
  }
}

class Cash extends Pay {
  makePay(quantity) {
    return super.makePay(quantity);
  }
}

const card = new Card("4913478952471122");

console.log(processPay(card, 100));

// Output:
// {
//   realized: true,
//   quantity: 100,
//   lastCardNumbers: "1122",
// }

const paypal = new PayPal("test@mail.com");
console.log(processPay(paypal, 240));


// Output:
// {
//   realized: true,
//   quantity: 240,
//   platform: "PayPal",
//   email: "test@mail.com",
// }

const cash = new Cash();

console.log(processPay(cash, 400));

// Output:
// {
//   realized: true,
//   quantity: 400,
// }