const express = require('express');
const router = express.Router();
const{addHospital,findHospital,findOne} = require('../controllers/hospitalControllers');


router.post('/addHospital',  addHospital);
router.get('/findHospital',  findHospital);
router.get('/findHospitalOne/:id',  findOne);
module.exports=router;
