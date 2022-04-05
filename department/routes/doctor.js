const express = require('express');
const router = express.Router();
const{createdoctor,getAllDoctor} = require('../controllers/doctorContollers');
const{createdoctorDepartment,getAllDoctorBydepartment,} = require('../controllers/departmentContollers')


router.post('/createdoctor',createdoctor);
router.get('/getAllDoctor',getAllDoctor)
router.post('/createdoctorDepartment',createdoctorDepartment);
router.get('/getAllDoctorBydepartment',getAllDoctorBydepartment);
//router.get('/getAllDoctor',fetcDoctro);
module.exports=router;
