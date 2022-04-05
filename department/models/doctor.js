const boolean = require("joi/lib/types/boolean");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const   DoctorSchema = new mongoose.Schema({ 
    DoctorDepartment: {
        type: ObjectId,
        ref: 'DoctorDepartment'

    },

    DoctorName: {
        type: String,
        required: true

    },
   Exp:{
      type:String,
      required:true
   },
   Fees:{
       type:String,
       required:true
   },
   img:
    {
        data: Buffer,
        contentType: String
    },
   Rate:{
       type:String,
       required:true
   }
   
});


module.exports = mongoose.model("Doctor", DoctorSchema);


