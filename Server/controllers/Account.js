let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//reference to the model
let Accounts = require('../models/namelist');

module.exports.displayContactForm = (req,res,next) => {
    Contact.find((err, contactform) => {
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
    let newContact = Contact({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "name": req.body.name
    });
    
    Account.create(newContact,(err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refreshing the account form
            res.redirect('/namelist-form');
        }
    });
};

module.exports.displayEditView = (req,res,next) =>{
    let id = req.params.id;

    Contacts.findById(id,(err, EditContact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/edit', {Contact : EditContact});
        }
    });
};

//process edits
module.exports.processEditView = (req,res,next) => {
    let id = req.params.id

    let updateContact = Contact({
        "_id":id,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "name": req.body.name
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
}

//delete contacts
module.exports.processDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/book-list');
        }
    });
};
