const mongoose = require('mongoose');
const { addressSchema } = require('./user.model');
mongoose.set('strictQuery', true);

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shipTo: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        qty: { type: Number, required: true },
        pricePaid: { type: Number, required: true },
    }],
    payment: {
        cardName: { type: String, required: true },
        cardNumber: { type: Number, required: true },
    },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["otw", "delivered"] },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
