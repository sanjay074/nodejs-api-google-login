const Joi =require ("joi");
const Hospital = require('../models/hospitalmodel');
exports.addHospital = async(req,res)=>{
    const hospitalSchema = Joi.object({
        HospitalName:Joi.string().min(3).max(30).required(),
        hospitalLocation:Joi.string().min(10).max(50).required(),
        allDoctors:Joi.number().required(),
        ALLBeds:Joi.number().required(),
        Ambulances:Joi.number().required()
      
      });
      const {error} =hospitalSchema.validate(req.body);
      if(error){
        res.status(500).json(error)
      }

    try{
        const exist = await Hospital.exists({HospitalName:req.body. HospitalName});
        if(exist){
            return  res.status(400).send("Hospital already registered!");
        } 

    }catch(err){
        res.status(500).json(err)
    }
    const { HospitalName ,hospitalLocation ,allDoctors ,ALLBeds ,Ambulances }= req.body ;
    const newHospital = new Hospital({
        HospitalName,
        hospitalLocation,
        allDoctors,
        ALLBeds,
        Ambulances
    });
    try{
        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
        }catch(err){
            res.status(500).json(err)
        }
} 

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns json
 * @description addHospital  API & findHospital
 * @date 27/03/2022
 * @author Sanjay kuamr
 */
   
module.exports.findHospital= async(req ,res)=>{
    try{
    const HospitalFind = await Hospital.find();
    res.status(200).json(HospitalFind);
    }catch(err){
        res.status(500).json(err)
    }
}  

module.exports.findOne = async(req,res)=>{
   try{
    const  HospitalFind = await Hospital.findById(req.params.id);
    res.status(200).json(HospitalFind);
   }catch(err){
       res.status(500).json(err);
   }
}
