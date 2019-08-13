const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    fullname : {
        type : String
    },
    email : {
        type : String
    },
    mobile : {
        type : String
    },
    city : {
        type : String
    }
});

var schemaEmployee = mongoose.model('Employee', EmployeeSchema);

module.exports = schemaEmployee;