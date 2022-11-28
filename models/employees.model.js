const mongoose = require('mongoose');                                        //19 require mongoose

//Schema definition                                                          //20 schema creation
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        unique:true,
        required: true
    },
    bloodGroup: {
        type: String
    }
});

//Model creation                                                                   //21 model creation
module.exports = mongoose.model('employees', employeeSchema);                      //'employess'-collection name userdefined //22 import in emp routes