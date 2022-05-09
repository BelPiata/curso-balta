' use strict'

 const mongoose = require ('mongoose');
 const Schema =  mongoose.Schema;

 const schema = new Schema({
     title: { // titulo
         type: String,
         required: true,
         trim: true
     },
     slug: { // cadeira gamer = cadeira-gamer
        type: String,
         required: [true, 'o slug é necessario'],
         trim:true,
         index: true,
         unique: true
     },
     description: { // descrição
         type: String,
         required:true
     },
     price  : { // preço
        type: Number,
        required: true
     },
     active : { // ativo
        type: Boolean,
        required: true,
        default: true
     } ,
     tags:[{
         type:String,
         required:true
     }]
 });

 module.exports = mongoose.model('Product', schema);
