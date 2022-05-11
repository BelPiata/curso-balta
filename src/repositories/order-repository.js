'use strict'


const mongoose = require ('mongoose');
const Order = mongoose.model('Order');


exports.get =async (date) =>{
    var res = await Order
        .find({},'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create =async (date) =>{
    var order = new Order (data);
    await Order.save();
}

