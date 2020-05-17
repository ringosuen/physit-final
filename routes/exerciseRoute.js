const express = require('express');

const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// router.get('/exercise', exerciseController.getExercise);

// LOCAL - DON'T TOUCH
router.route('/exercise').get(exerciseController.getExercise);

module.exports = router;
