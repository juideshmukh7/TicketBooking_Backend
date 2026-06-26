

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const hostController = require("../controllers/hostController");

hostRouter.get("/hotels", hostController.getHotels);
hostRouter.get("/cars", hostController.getCars);
hostRouter.get("/flights", hostController.getFlights);

hostRouter.post("/hotelBooked", hostController.postHotelsBooked);
hostRouter.post("/flightBooked", hostController.postFlightsBooked);
hostRouter.post("/carBooked", hostController.postCarsBooked);

module.exports = hostRouter;