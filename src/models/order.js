const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    image: {type: 'string', required: true},
    price: {type: 'string', required: true},
    status: {type: 'string', required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const Order = mongoose.model("Order", orderSchema);


module.exports = Order;