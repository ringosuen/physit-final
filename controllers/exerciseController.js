// Get exercise
exports.getExercise = (req, res) => {
  res.render('exercise', {
    title: 'Exercises',
    exerciseJSCSS: true,
    patient: req.session.patientInfo
  });
};
