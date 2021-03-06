const express = require('express');

const router = express.Router();
const patientListController = require('../controllers/patientListController');
const auth = require('../util/auth');

router.route('/patientList').get(auth, patientListController.renderPatientList);

module.exports = router;
