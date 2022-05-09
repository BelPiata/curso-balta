'use strict'


const mongoose = require ('mongoose');
const Customer = mongoose.model('Customer');


exports.create =async (date) =>{
    var customer = new Customer (data);
    await Customer.save();
}

