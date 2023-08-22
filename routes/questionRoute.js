const express = require("express");
const addQuestion = require("../controllers/addQuestion");
const { model } = require("mongoose");
const getAllQuestions = require("../controllers/getAllQuestionsController");
const getSpecificQuestion = require("../controllers/getSpecificQuestion");
const questionRouter = express.Router();

questionRouter.post('/questions', addQuestion);
questionRouter.get('/questions', getAllQuestions);
questionRouter.get('/questions/:id', getSpecificQuestion);


module.exports = questionRouter;