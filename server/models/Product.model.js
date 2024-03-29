import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true },
    stock: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    rating: {
        rate: { type: Number, default: 0 },
        count: { type: Number, default: 0 },
    },
    keywords: [{ type: String, required: true }],
});

export default mongoose.model('Product', productSchema);
