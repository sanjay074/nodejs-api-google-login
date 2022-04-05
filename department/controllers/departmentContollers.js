const Doctordepartment = require('../models/doctordepartment');
exports.createdoctorDepartment = async (req, res, next) => {
    try{
        
        let medicalDepartment = new Doctordepartment(req.body);
     
        medicalDepartment.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(result);
        });
}
catch(error) {
    console.log("errror",error)
}
};
exports.getAllDoctorBydepartment = async (req, res, next) => {

    Doctordepartment.find()

        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({ "data": posts });
        });

} 

