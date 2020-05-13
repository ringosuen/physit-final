const exerciseModel = require('../models/exerciseData');

// Get exercise
exports.getExercise = async (req, res) => {
  try {

    console.log(req.session.appointmentID);
    console.log(req.session.patientID);

    const bodypart = await exerciseModel.getAppointmentDetail(
      req.session.patientID,
      req.session.appointmentID,
    );
    
    console.log(bodypart[0][0].bodypart);
    const exercises = await exerciseModel.generateExercises(
      bodypart[0][0].bodypart
    );
    
    console.log(exercises[0]);
    res.render('exercise', {
      exercises: exercises[0],
      title: 'Exercises',
      exerciseJSCSS: true,
    });
  } catch (error) {
    throw error;
  }
};
