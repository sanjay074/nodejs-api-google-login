const express = require('express');
const router = express.Router();
const{addservices,allfindServices,findOne} = require('../controllers/servicesControllers');


router.post('/addservices',addservices);
router.get('/allfindServices',allfindServices);
router.get('/findOne/:id',findOne);
module.exports=router;