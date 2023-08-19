const express = require('express');
const router = express.Router();
const {postDoctor,getDoctor,addDoctorsDetails} = require('../controllers/auth')

router.get('/getAddress/:id',getDoctor);
router.post('/addAddress',postDoctor)
router.post('/addDoctor',addDoctorsDetails)

module.exports = router;