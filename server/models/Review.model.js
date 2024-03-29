import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 0.5, max: 5 },
    title: { type: String, required: true },
    description: { type: String },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
}, {
    timestamps: true
});

reviewSchema.index({ userID: 1, productID: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
