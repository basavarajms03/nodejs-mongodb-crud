const express = require('express');
const router = express.Router();

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

mongoose.model('Employee', EmployeeSchema);

const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render('index', {
        title : 'Home Page'
    });
});

router.post('/add_employee_details', (req, res) => {
    var employee = new Employee();
    employee.fullname = req.body.fname;
    employee.email = req.body.email;
    employee.mobile = req.body.number;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err)
             res.redirect('/');
        else 
            console.log("Insertion Error" + err);
    });
});

router.get('/all-customers-info', (req, res) => {
    Employee.find( (err, docs) => {
        console.log(docs);
    });
});

module.exports = router;