const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);