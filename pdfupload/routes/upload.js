const express = require('express');
const router = express.Router();
const{multipleFiles} = require('../controllers/pdfControllers');
const multer = require('multer');
const destination = (req, file, cb) => {
    switch (file.mimetype) {
         case 'image/jpeg':
              cb(null, './images/');
              break;
         case 'image/png':
              cb(null, './images/');
              break;
         case 'file/pdf':
              cb(null, './file/');
              break;
         default:
              cb('invalid file');
              break;
    }
}

const storage = multer.diskStorage({
    destination: destination,
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'file/pdf') {
         cb(null, true)
    } else {
         cb(null, false)
    }
};

const uploads = multer({
    storage: storage,
    limits: {
         fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter
});

// add post
router.post('/multipleFile', uploads.fields([{ name: 'imgURL', maxCount: 1 }, { name: 'file', maxCount: 1 }]), multipleFiles);

module.exports=router;