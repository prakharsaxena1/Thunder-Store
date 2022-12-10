const mongoose = require('mongoose');
const Orders = require('./Orders.model.js');
const Reviews = require('./Reviews.model.js');

const addressSchema = new mongoose.Schema({
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pin: {
        type: Number,
        required: true,
    },
});

const cardSchema = new mongoose.Schema({
    holderName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        enum: ["Credit", "Debit"],
        required: true,
    },
    expireDate: {
        type: Date,
        required: true,
    },
    cvv: {
        type: Number
    }
});

const cartSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: String,
    orders: [Orders.Schema],
    reviews: [Reviews.Schema],
    address: [addressSchema],
    card: [cardSchema],
    cart: [cartSchema],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);