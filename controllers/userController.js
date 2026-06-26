// const Home = require("../models/home");

//
exports.getIndex = (req, res, next) => {
    res.render("store/home", {
      pageTitle: "Ticket Booking",
      currentPage: "index",
    })
  
};


