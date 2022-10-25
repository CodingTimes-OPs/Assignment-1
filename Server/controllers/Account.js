let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const db = require('../config/db');

//reference to the model
let Contact = require('../models/namelist');

module.exports.displayContactForm = (req,res,next) => {
    Contact.find((err, contactForm) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //Folder path for form.ejs if successful load
            res.render('namelist/form', {ContactForm: contactForm});
        }
    });
};

//displays add page
module.exports.displayAddView = (req,res,next) => {
    res.render('namelist/add');
};

//process to add account
module.exports.addAccount = (req,res,next)=>{
    let newContact = Contact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    
    Contact.create(newContact,(err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refreshing the account form
            res.redirect('/namelist-form');
            console.log(req.body.contactName);
        }
    });
};

module.exports.displayEditView = (req,res,next) =>{
    let id = req.params.id;

    Contact.findById(id,(err, EditContact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('namelist/edit', {contact : EditContact});
        }
    });
};

//process edits
module.exports.processEditView = (req,res,next) => {
    let id = req.params.id

    let updateContact = Contact({
        "_id":id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    Contact.updateOne({_id:id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/namelist-form');
        }
    });
};

//delete contacts
module.exports.processDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/namelist-form');
        }
    });
};
