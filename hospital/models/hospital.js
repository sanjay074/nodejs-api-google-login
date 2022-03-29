const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hospitalSchema = new Schema({
    HospitalName:{
        type:String,
        required: true
    },
    hospitalLocation:{
        type:String,
        required: true
    },
    alldoctors:{
        type:Number,
        required:true
    },
    Allbeds:{
        type:Number,
        required:true
    },
    Ambulances:{
        type:Number,
        required:true 
    }
});
module.exports = mongoose.model('Hospital', hospitalSchema);