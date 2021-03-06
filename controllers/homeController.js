const homeModel = require('../models/homeData');

// Get home
exports.getHome = async (req, res) => {
  try {
    if (req.query.appointmentID && req.query.patientID) {
      req.session.appointmentID = req.query.appointmentID;
      req.session.patientID = req.query.patientID;
    }
    const appID = req.session.appointmentID;
    const getPatient = await homeModel.getAppointmentDetail(appID);
    const patient = parsePatientInfo(getPatient);

    req.session.patientInfo = patient;

    res.render('home', {
      title: 'Patient Home',
      homepageJSCSS: true,
      patient: req.session.patientInfo,
    });
  } catch (error) {
    throw error;
  }
};

const parsePatientInfo = info => {
  try {
    const data = info[0][0];
    const patientInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      height: data.height,
      weight: data.weight,
    };

    return patientInfo;
  } catch (error) {
    throw error;
  }
};
