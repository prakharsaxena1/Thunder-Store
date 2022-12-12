const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const detailsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    items: {
        type: String,
        required: true,
    },
});

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    images: [String],
    details: detailsSchema,
    discount: {
        type: Number,
    },
});

module.exports = mongoose.model('Product', productSchema);