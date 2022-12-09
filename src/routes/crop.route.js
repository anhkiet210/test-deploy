const CropController = require("../app/http/controllers/crop.controller");
const express = require("express");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");

const CropRouter = express.Router();

CropRouter.post("/create", isAuthAdmin, CropController.createCrop);
CropRouter.get("/:id", CropController.getCropById);
CropRouter.put("/update/:id", isAuthAdmin, CropController.updateCrop);
CropRouter.delete("/:id", isAuthAdmin, CropController.deleteCropById);
CropRouter.get("/", CropController.getAllCrop);

module.exports = CropRouter;
