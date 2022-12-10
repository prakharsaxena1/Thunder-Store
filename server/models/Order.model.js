const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        requrired: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    soldBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
    }
})

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    items: [itemsSchema],
    status: {
        type: String,
        enum: ["otw", "delivered"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);