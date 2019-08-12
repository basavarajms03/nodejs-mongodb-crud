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
        res.render('all_customer', {
            title : 'All customer Information',
            list : docs 
        });
    });
});


router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        res.render('index', {
            employee : doc
        });
    });
});

module.exports = router;