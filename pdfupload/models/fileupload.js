const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fileSchema = new Schema({
    description: {
        type: String,
        required: true
      },
      imgURL: {
        data: Buffer,
        contentType: String
     },
     file: {
      data: Buffer,
      contentType: String
                  
     },
    });
module.exports = mongoose.model('Files', fileSchema);