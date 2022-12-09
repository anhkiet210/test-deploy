const AnwserController = require("../app/http/controllers/answer.controller");
const express = require("express");
const isAuth = require("../app/http/middlewares/auth.middleware");

const AnwserRouter = express.Router();

AnwserRouter.post("/create", isAuth, AnwserController.createAnwser);
AnwserRouter.get(
  "/get-answer-by-id-question/:id",
  AnwserController.getAnwserByIdQuestion
);

module.exports = AnwserRouter;
