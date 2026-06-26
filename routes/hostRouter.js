// core module
const path = require('require');

// external modules
const express = require('express');
const hostRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtil');

// book hotel page
hostRouter.get("/hotels", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'bookHotel.html'));
});

// book flights page
hostRouter.get("/flights", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'bookFlight.html'));
});

// book cars page
hostRouter.get("/cars", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'bookCar.html'));
});

// hotel booked page
hostRouter.post("/hotel-booked", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'hotelBooked.html'));
});

// flight booked pg
hostRouter.post("/flight-booked", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'flightBooked.html'));
});

// car booked pg
hostRouter.post("/car-booked", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'carBooked.html'));
});

module.exports = hostRouter;
