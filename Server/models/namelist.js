let mongoose = require('mongoose');

// create naming format class
let busFormat = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
},
{
    collection: "contacts"
});

//links to Account.js.
module.exports= mongoose.model('Contacts', busFormat);