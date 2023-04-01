function hotelSystem(rooms) {
  // Tu código aquí

  let guests = [];

  function searchReservation(id) {
    const index = guests.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("La reservación no fue encontrada")
    }
    return guests.find(item => item.id === id);
  }

  function getSortReservations() {
    return [...guests].sort((a,b) => a.checkIn.localeCompare(b.checkIn));
  }

  function addReservation(reservation) {
    if (!isAvailable(reservation.checkIn, reservation.checkOut, reservation.roomNumber)) {
      throw new Error("La habitación no está disponible");
    }
    guests.push(reservation);
    return 'Reserva exitosa'
  }

  function removeReservation(id) {
    const index = guests.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error("La reservación que se busca remover no existe")
    }

    const del = guests[index];
    guests = guests.filter(item => item.id !== id);
    return del;
  }

  function getReservations() {
    return guests    
  }

  function getAvailableRooms(checkIn, checkOut) {
    const availableRooms = [];
    for (let i = 1; i <= rooms; i++) {
      if (isAvailable(checkIn, checkOut, i)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  function isAvailable(checkIn, checkOut, roomNumber){

    const fechaInicioCheckIn  = new Date('2023/' + checkIn);
    const fechaFinCheckOut  = new Date('2023/' + checkOut);

    for (let guest of guests) {
      const fechaInicioReserva = new Date('2023/' + guest.checkIn);
      const fechaFinReserva = new Date('2023/' + guest.checkOut);

      if ((fechaInicioCheckIn >= fechaInicioReserva && fechaInicioCheckIn <= fechaFinReserva) ||
      (fechaFinCheckOut >= fechaInicioReserva && fechaFinCheckOut <= fechaFinReserva)) {
        if (guest.roomNumber === roomNumber) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
    isAvailable
  }
  
}

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "02/02",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

hotel.addReservation({
  id: 3,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
});

console.log(hotel.getReservations());

console.log(hotel.removeReservation(2));

console.log("Busqueda", hotel.searchReservation(1));

console.log(hotel.getAvailableRooms("01/01", "05/01"));

console.log(hotel.getReservations());

console.log(hotel.getSortReservations());