

// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const userController = require("../controllers/userController");

userRouter.get("/", userController.getIndex);


// storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
// storeRouter.post("/favourites", storeController.postAddToFavourite);
// storeRouter.post("/favourites/delete/:homeId", storeController.postRemoveFromFavourite);

module.exports = userRouter;