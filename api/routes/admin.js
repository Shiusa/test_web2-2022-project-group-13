const express = require('express');
const { readAllQuiz, readUnverifiedQuizzes, deleteQuiz } = require('../models/quiz');

const router = express.Router();


router.get('/', (req, res)=>{
    const unverifiedQuizList = readUnverifiedQuizzes();
    return res.json(unverifiedQuizList);
});

router.get('/all', (req, res)=>{
    const quizList = readAllQuiz();
    return res.json(quizList);
});

router.delete('/remove/:id', async (req, res) => { 
    await deleteQuiz(req.params.id);
    // return res.json(quizList);
});

module.exports = router;