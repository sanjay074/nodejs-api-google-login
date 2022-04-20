const express = require('express');
const router = express.Router();
const{addAmenities,allfindAmenities ,findOne} = require('../controllers/faciliescontroller');


router.post('/addAmenities',addAmenities);
router.get('/allfindAmenities',allfindAmenities);
router.get('/findHospitalOne/:id',  findOne);
module.exports=router;
