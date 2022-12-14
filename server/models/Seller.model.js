const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const sellerSchema = new mongoose.Schema({
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
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Seller", sellerSchema);