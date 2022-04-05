const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;
 
 
const doctorDepartmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        trim: true,
        required: true
 
    },
    description: {
        type: String,
        trim: true,
        required: true
 
    },
}); 
module.exports = mongoose.model("DoctorDepartment", doctorDepartmentSchema);
