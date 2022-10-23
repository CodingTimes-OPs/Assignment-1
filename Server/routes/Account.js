let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Account.js connected to ../controllers/Account.js
let Contact = require('../models/namelist');

let contactControl = require('../controllers/Account');

//Route to display contacts pages
router.get('/', contactControl.displayContactForm);

//Route to display add page
router.get('/add', contactControl.displayAddView);

//Route to process adding contact
router.post('/add', contactControl.addAccount);

//Router to display edit page
router.get('/edit/:id', contactControl.displayEditView);

//Router to process editing contact
router.post('/edit/:id', contactControl.processEditView);

//Router to process deleting contact.
router.get('/delete/:id', contactControl.processDelete);

module.exports=router;