import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pin: { type: Number, required: true },
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
