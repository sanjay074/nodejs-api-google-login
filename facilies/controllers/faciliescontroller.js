const Amenities = require("../models/facilies");
exports.addAmenities = async(req,res)=>{
    const newamenities = await new Amenities(req.body);
    try{
     const saveAmenities = await newamenities.save();
     res.status(200).json(saveAmenities);
    }catch(err){
        res.status(500).json(err);
    }
} 
exports.allfindAmenities = async (req ,res)=>{
    try{
        const amenitiesFind = await Amenities.find();
        res.status(200).json(amenitiesFind);
        }catch(err){
            res.status(500).json(err)
        }
    }  
exports.findOne = async(req ,res)=>{
    try{
    const facilisFind = await Amenities.findById(req.params.id);
     res.status(200).json(facilisFind);
    }catch(err){
        res.status(500).json(err)
    }
}  