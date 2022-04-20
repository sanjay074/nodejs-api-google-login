const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  amenitiesSchema = new Schema({
   Amenities:{
       type:String,
       required:true
   },
   AmenitiesCharges:{
       type:Number,
       required:true
   }
});
module.exports = mongoose.model('Amenities', amenitiesSchema);