let mongoose = require('mongoose');

// create username format class
let busFormat = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
},
{
    collection: 'contacts'
});

//links to Account.js.
module.exports= mongoose.model('Contact', busFormat);