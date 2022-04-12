const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
    services: {
        type: String
    },
}, {
        collection: 'services'
    });
module.exports = mongoose.model('Services', servicesSchema);