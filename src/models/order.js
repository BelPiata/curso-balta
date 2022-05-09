' use strict'

 const mongoose = require ('mongoose');
 const Schema =  mongoose.Schema;


 const schema = new Schema({
    customer: { // titulo
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },

     number: { // titulo
         type: String,
         required: true,
     },

     createDate: { // titulo
        type: Date,
        required: true,
        default:Date.now
    },
    status: { // titulo
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },

    items:[{ // titulo
        quantity: {
            type: Number,
            required: true,
            default: 1  
        },
        price: {
            type: Number,
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },

        
    }],
 });

 module.exports = mongoose.model('Order', schema);
