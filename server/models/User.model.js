const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pin: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
    quantity: { type: Number, required: true, },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const cardSchema = new mongoose.Schema({
    cardName: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    expiry: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    profilePhoto: String,
    address: [addressSchema],
    cart: [cartSchema],
    cards: [cardSchema]
}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
