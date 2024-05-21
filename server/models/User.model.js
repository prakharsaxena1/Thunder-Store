import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const addressSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: Number },
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    profilePhoto: { type: String, default: '' },
    address: [addressSchema],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}, { timestamps: true }
);

export default mongoose.model("User", userSchema);
