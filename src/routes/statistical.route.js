const StatisticalController = require("../app/http/controllers/statistical.controller");
const express = require("express");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");
const StatisticalRouter = express.Router();

StatisticalRouter.get(
  "/",
  isAuthAdmin,
  StatisticalController.getAllStatistical
);

module.exports = StatisticalRouter;
