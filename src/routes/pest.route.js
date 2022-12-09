const PestController = require("../app/http/controllers/pest.controller");
const express = require("express");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");

const PestRouter = express.Router();

PestRouter.post("/create", isAuthAdmin, PestController.createPest);
PestRouter.put("/update/:id", isAuthAdmin, PestController.updatePest);
PestRouter.get("/get-pest-by-id/:id", PestController.getPestById);
PestRouter.post("/detect-pest", PestController.detectPest);
PestRouter.get("/", PestController.getAllPests);

module.exports = PestRouter;
