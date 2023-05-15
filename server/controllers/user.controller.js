import User from '../models/User.model.js';
import Review from '../models/Review.model.js';
import Product from '../models/Product.model.js';
import auth from '../auth/auth.js';

const userLogin = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const user = await User.findOne({ email: req.body.email }).populate('cart');
            if (user.password === req.body.password) {
                res = auth.setAuthCookie(res, user);
                return res.status(200).json({
                    success: true,
                    message: 'Login successful',
                    data: {
                        username: user.username,
                        email: user.email,
                        id: user._id,
                        profilePhoto: user.profilePhoto,
                        cart: user.cart.map((item) => ({
                            discount: item.discount,
                            image: item.images[0],
                            price: item.price,
                            productID: item._id,
                            stock: item.stock,
                            title: item.title,
                        })),
                    },
                    token: res.token,
                });
            }
        }
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: 'Invalid credentials' }) 
    }
}

const userRegister = async (req, res) => {
    try {
        if (req.body.username && req.body.email && req.body.password) {
            const user = await User.create({ username: req.body.username, email: req.body.email, password: req.body.password });
            res = auth.setAuthCookie(res, user);
            return res.status(201).json({
                success: true,
                message: 'Account registered successfully',
                data: {
                    username: user.username,
                    email: user.email,
                    id: user._id,
                    cart: user.cart,
                    profilePhoto: user.profilePhoto,
                },
                token: res.token,
            });
        }
        return res.status(401).json({ success: false, message: 'Credentials missing' });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Failed to register account' });
    }
}

const userLogout = (req, res) => {
    res.clearCookie('authorization');
    res.status(200).json({ success: true, message: 'Successful logout' });
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        if (id) {
            // Delete all reviews
            const reviewsByUser = await Review.find({ userID: id });
            for (let review of reviewsByUser) {
                const productData = await Product.findById(review.productID);
                productData.rating.rate -= review.rating;
                productData.rating.count -= 1;
                productData.save();
                review.remove();
            }
            await User.findByIdAndDelete(id);
        }
        return res.status(200).json({ success: true, message: 'Account deleted' });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const refreshUser = async (req, res) => {
    const data = await auth.issueRefreshToken(req.body.token);
    if (data.isAuth) {
        res = auth.setCookieResponse(res, data.token);
    }
    return res.status(200).json({ ...data, success: true });
}

const deleteAddress = async (req, res) => {
    try {
        const addressID = req.body.addressID;
        await User.findByIdAndUpdate(req.user._id, { $pull: { address: { _id: addressID } } }, { new: true });
        return res.sendStatus(204);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const addAddress = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid user' });
        }
        user.address.push({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pin: req.body.pin,
        });
        await user.save();
        return res.status(201).json({ success: true, data: [...user.address] });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const getAddress = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid user' });
        }
        return res.status(200).json({ success: true, data: [...user.address] });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const updateCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid user' });
        }
        let cart = [...user.cart]
        if (req.body.operation === 'delete') {
            const index = cart.findIndex(item => item.productId === req.body.productId);
            cart.splice(index, 1);
        } else if (req.body.operation === 'add') {
            if (Array.isArray(req.body.productId)) {
                cart = req.body.productId;
            } else {
                cart.push(req.body.productId);
            }
        }
        user.cart = cart;
        await user.save();
        return res.status(200).json({ success: true, data: [...user.cart] });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default {
    userLogin,
    userRegister,
    userLogout,
    deleteUser,
    refreshUser,
    deleteAddress,
    addAddress,
    getAddress,
    updateCart,
}
