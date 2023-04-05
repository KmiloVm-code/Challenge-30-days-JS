class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    // Tu código aquí 👈

    if (this.capacity > 0) {
      const {name, lastName, age} = passenger;
      this.passengers.push({
        fullName: `${name} ${lastName}`,
        age,
      })
      this.capacity--;
      passenger.addFlight(this);
      return new Reservation(this, passenger);
    }
  }
}

class Passenger{
  // Tu código aquí 👈
  constructor(name, lastName, age,) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }

  addFlight(flight) {
    const {origin, destination, date, price} = flight;
    this.flights.push({
      origin, 
      destination, 
      date, 
      price
    });
  }
}

class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger =  passenger;
  }

  reservationDetails() {
    // Tu código aquí 👈
    const {origin, destination, date} = this.flight;
    const {name, lastName} = this.passenger;

    return {
      origin,
      destination,
      date,
      reservedBy: `${name} ${lastName}`
    }
  }
} 

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date,capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    this.price += this.specialService;
    return {
      ...super.sellTicket(passenger),
    }
  }
}

class EconomicFlight extends Flight {
  sellTicket(passenger) {
    // Tu código aquí 👇
    if (passenger.age < 18 || passenger.age > 65) {
      this.price *= 0.80;
    }
    return {
      ...super.sellTicket(passenger),
    }
  }
}

const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger = new Passenger("Juan", "Perez", 30);
const reservation = flight.sellTicket(passenger);
console.log(passenger.flights)

const flight2 = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);

const passenger2 = new Passenger("Pedro", "Gutierrez", 17);

const reservation2 = flight2.sellTicket(passenger2);

console.log(reservation2.flight.price)