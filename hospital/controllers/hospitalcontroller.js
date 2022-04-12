const Joi =require ("joi");
const Hospital = require('../models/hospital');
exports.addHospital = async(req,res)=>{
  let {HospitalName,hospitalLocation,latitude,longitude,alldoctors,Allbeds,Ambulances,TotalBeds, Vacant }= req.body 
  const hospitalSchema = Joi.object({
    HospitalName:Joi.string().required(),
    hospitalLocation:Joi.string().required(),
    latitude:Joi.number().required(),
    longitude:Joi.number().required(),
    alldoctors:Joi.number().required(),
    Allbeds:Joi.number().required(),
    Ambulances:Joi.number().required(),
    TotalBeds:Joi.number().required(),
    Vacant:Joi.number().required(),
  
  });
   let result =hospitalSchema.validate(req.body)
   if(result.error){
       res.status(400).send(result.error.details[0].message)
       return ;
   } 
   const exist = await Hospital.exists({HospitalName:req.body.HospitalName});
        if(exist){
            return  res.status(400).send("Hospital already registered!");
        } 
  const newHospital = new Hospital({
    HospitalName,
    hospitalLocation,
    latitude,
    longitude,
    alldoctors,
    Allbeds,
    Ambulances,
    TotalBeds,
    Vacant
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
