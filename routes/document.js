const express = require('express');
const router = express.Router();
const {sendRequest,confirmRequest, getAllReceivedRequsts, getApprovedRequests,sentRequests, approvedRequests} = require('../controllers/document')

router.post('/sendrequest',sendRequest);
router.post('/confirmrequest',confirmRequest);

// for patients

router.get('/patient/receivedrequests/:patientId',getAllReceivedRequsts);
router.get('/patient/approvedrequests/:patientId',getApprovedRequests);

//for doctors

router.get('/doctor/sentrequests/:doctorId',sentRequests);
router.get('/doctor/approvedrequests/:doctorId',approvedRequests)

module.exports = router;