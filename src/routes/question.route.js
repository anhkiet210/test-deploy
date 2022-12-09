const express = require("express");
const QuestionController = require("../app/http/controllers/question.controller");
const isAuth = require("../app/http/middlewares/auth.middleware");

const QuestionRouter = express.Router();

QuestionRouter.post("/create", isAuth, QuestionController.createQuestion);
QuestionRouter.get("/:id", QuestionController.getQuestionById);
QuestionRouter.get("/", QuestionController.getAllQuestions);

module.exports = QuestionRouter;
