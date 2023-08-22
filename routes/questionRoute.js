const express = require("express");
const addQuestion = require("../controllers/addQuestionController");
const { model } = require("mongoose");
const getAllQuestions = require("../controllers/getAllQuestionsController");
const getSpecificQuestion = require("../controllers/getSpecificQuestionController");
const addAnswer = require('../controllers/addAnswerController');
const questionRouter = express.Router();

questionRouter.post('/questions', addQuestion);
questionRouter.get('/questions', getAllQuestions);
questionRouter.get('/questions/:id', getSpecificQuestion);
questionRouter.get('/questions/:id/answers', addAnswer)


module.exports = questionRouter;