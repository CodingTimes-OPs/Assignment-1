let mongoose = require('mongoose');

// create username format class
let useFormat = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
},
{
    collection: "username"
});

let busFormat = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
},
{
    collection: "contact"
});

//links to Account.js.
module.exports= mongoose.model('Contact', busFormat);