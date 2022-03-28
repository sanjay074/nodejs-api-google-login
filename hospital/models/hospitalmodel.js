const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
hospitalLocation:{
    type:String,
    required:true
   
},
allDoctors:{
    type:Number,
    required:true
}, 
ALLBeds:{
    type:Number,
    required:true
},
Ambulances:{
    type:Number,
    required:true
},  
},{timestamps:true});

module.exports = mongoose.model("Hospitals", hospitalSchema);