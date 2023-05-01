const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const itemSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    pricePaid: { type: Number, required: true },
});

const cardSchema = new mongoose.Schema({
    cardName: { type: String, required: true },
    cardNumber: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: { type: [itemSchema], required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["otw", "delivered"] },
    payment: cardSchema,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
