const fileupload = require('../models/fileupload');
exports.multipleFiles = async (req, res) => {
    const newfileupload = new fileupload({
         title: req.body.title,
         category: req.body.category,
         description: req.body.description,
         imgURL: req.file.path,
         whitePaperLink: req.file.path,
    });
    try {
         const addfile = await newfileupload.save()
         res.status(201).json({
              message: 's Added Succesfully.'
         })
    } catch (error) {
         console.log(error);
         res.status(500).json({
              message: error
         })
   
    }
   }  