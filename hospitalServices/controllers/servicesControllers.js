const services = require('../models/services');
const Services = require('../models/services');

exports.addservices = async(req,res)=>{
    const newServices = await new Services(req.body);
    try{
     const saveServices = await newServices.save();
     res.render(services);
    }catch(err){
        res.status(500).json(err);
    }
} 
exports.allfindServices = async (req ,res)=>{
    try{
        const SeervicesFind = await Services.find();
        res.status(200).json(SeervicesFind);
        }catch(err){
            res.status(500).json(err)
        }
    }  
  