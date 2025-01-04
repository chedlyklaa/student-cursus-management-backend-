const express = require('express');
const evaluationController = require('../controllers/Evaluation');

const router = express.Router();

router.post('/submit', evaluationController.submitEvaluation);
router.get('/anonymous/:subjectId', evaluationController.getAnonymousEvaluations);

module.exports = router;
