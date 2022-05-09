' use strict'

 const mongoose = require ('mongoose');
 const Schema =  mongoose.Schema;

 const schema = new Schema({
     name: { // titulo
         type: String,
         required: true,
     },
     email: { // titulo
        type: String,
        required: true,
    },
    passwoard: { // titulo
        type: String,
        required: true,
    },
 });

 module.exports = mongoose.model('Customer', schema);
