const Joi =require ("joi");
const Doctor = require('../models/doctor');
exports.createdoctor = async(req,res)=>{
  let {DoctorName,Exp,Fees,img ,Rate }= req.body 
  const DoctorSchema = Joi.object({
    DoctorName:Joi.string().required(),
    Exp:Joi.string().required(),
    Fees:Joi.string().required(),
    img:Joi.string().required(),
    Rate:Joi.number().required(),  
  });
   let result =DoctorSchema.validate(req.body)
   if(result.error){
       res.status(400).send(result.error.details[0].message)
       return ;
   }
   const exist = await Doctor.exists({DoctorName:req.body. DoctorName});
        if(exist){
            return  res.status(400).send("Hospital already registered!");
        } 
  const newDoctor = new Doctor({
   DoctorName,
   Exp,
   Fees,
   img,
   Rate

});
 try{
  const savedDoctor = await newDoctor.save();
  res.status(201).json(savedDoctor);
 }catch(err){
     res.status(500).json(err)
 }
} 

exports.getAllDoctor= async(req ,res)=>{
    try{
    const HospitalFind = await Doctor.find();
    res.status(200).json(HospitalFind);
    }catch(err){
        res.status(500).json(err)
    }
}  




