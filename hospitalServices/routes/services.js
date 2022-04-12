const express = require('express');
const router = express.Router();
const{addservices,allfindServices} = require('../controllers/servicesControllers');


router.post('/addservices',  addservices);
router.get('/allfindServices',  allfindServices);

module.exports=router;