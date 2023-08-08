const express = require('express');
const router = express.Router();
const {postDoctor,getDoctor} = require('../controllers/auth')

router.get('/getAddress/:id',getDoctor);
router.post('/addAddress',postDoctor)

module.exports = router;