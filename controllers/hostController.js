//
exports.getHotels = (req, res, next) => {
    res.render("store/bookHotel", {
      pageTitle: "Hotels",
      currentPage: "hotels",
    })
  
};

//
exports.getFlights = (req, res, next) => {
    res.render("store/bookFlight", {
      pageTitle: "Flights",
      currentPage: "flights",
    })
  
};

//
exports.getCars = (req, res, next) => {
    res.render("store/bookCar", {
      pageTitle: "Cars",
      currentPage: "cars",
    })
  
};


//
exports.postCarsBooked = (req, res, next) => {
    res.render("store/carBooked", {
      pageTitle: "Car Bookings",
      currentPage: "car booked",
    })
  
};

//
exports.postHotelsBooked = (req, res, next) => {
    res.render("store/hotelBooked", {
      pageTitle: "Hotel Bookings",
      currentPage: "hotel booked",
    })
  
};

//
exports.postFlightsBooked = (req, res, next) => {
    res.render("store/flightBooked", {
      pageTitle: "Flight Bookings",
      currentPage: "flight booked",
    })
  
};
