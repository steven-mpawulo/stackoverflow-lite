const express = require("express");
const addQuestion = require("../controllers/addQuestionController");
const { model } = require("mongoose");
const getAllQuestions = require("../controllers/getAllQuestionsController");
const getSpecificQuestion = require("../controllers/getSpecificQuestionController");
const addAnswer = require('../controllers/addAnswerController');
const deleteQuestion = require("../controllers/deleteQuestionController");
const signup = require("../controllers/signupController");
const login = require("../controllers/loginController");
const verifyToken = require("../middleware/verifyToken");
const updateAnswer = require("../controllers/updateAnswerController");
const questionRouter = express.Router();

questionRouter.post('/questions', verifyToken, addQuestion);
questionRouter.get('/questions', verifyToken, getAllQuestions);
questionRouter.get('/questions/:id',verifyToken, getSpecificQuestion);
questionRouter.post('/questions/:id/answers', verifyToken, addAnswer);
questionRouter.delete('/questions/:id', verifyToken, deleteQuestion);
questionRouter.post('/auth/signup', signup);
questionRouter.post('/auth/login', login);
questionRouter.put('/questions/:id/answers/:id2', updateAnswer);


module.exports = questionRouter;