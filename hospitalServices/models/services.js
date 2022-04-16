const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
    services:{
        type: Array
    }
    })
module.exports = mongoose.model('Services', servicesSchema);