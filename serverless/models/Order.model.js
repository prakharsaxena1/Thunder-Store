import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shipTo: { type: String, required: true },
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

export default mongoose.model('Order', orderSchema);
