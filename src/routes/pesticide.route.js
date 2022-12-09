const PesticideController = require("../app/http/controllers/pesticide.controller");
const express = require("express");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");

const PesticideRouter = express.Router();

PesticideRouter.post(
  "/create",
  isAuthAdmin,
  PesticideController.createPesticide
);
PesticideRouter.put(
  "/update/:id",
  isAuthAdmin,
  PesticideController.updatePesticide
);
PesticideRouter.get(
  "/get-pesticide-by-id-pest/:id",
  PesticideController.getPesticedeByIdPest
);
PesticideRouter.get("/", PesticideController.getAllPesticides);

module.exports = PesticideRouter;
