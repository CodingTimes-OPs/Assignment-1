let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Accounts = require('../models/namelist');

module.exports.displayContactForm = (req,res,next) => {
    Accounts.find((err, contactform) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //Folder path for form.ejs if successful load
            res.render('namelist/form', {ContactForm: contactform});
        }
    });
};

//displays add page
module.exports.displayAddView = (req,res,next) => {
    res.render('Contact/add');
};

//process to add account
module.exports.addAccount = (req,res,next)=>{
    let newAccount = Account ({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "name": req.body.name
    });
    
    Account.create(newAccount,(err, Account) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refreshing the account form
            res.redirect('/account-form');
        }
    });
};

module.exports.displayEditView = (req,res,next) =>{
    let
}
