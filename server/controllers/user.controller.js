const User = require('../models/user.model');
const auth = require('../auth/auth');

const userLogin = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const user = await User.findOne({ email: req.body.email });
            if (user.password === req.body.password) {
                res = auth.setAuthCookie(res, user);
                return res.status(200).json({
                    status: 'success',
                    message: 'Login successful',
                    data: {
                        username: user.username,
                        email: user.email,
                        id: user._id,
                        cart: user.cart,
                    },
                    token: res.token,
                });
            }
        }
        return res.status(400).json({
            status: 'failed',
            message: 'Invalid credentials',
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'Invalid credentials',
        }) 
    }
}

const userRegister = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res = auth.setAuthCookie(res, user);
        return res.status(201).json({
            status: 'success',
            message: 'Account registered successfully',
            data: {
                username: user.username,
                email: user.email,
                id: user._id,
                cart: user.cart,
            },
            token: res.token,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'Failed to register account',
        })
    }
}

const userLogout = (req, res) => {
    res.clearCookie('authorization');
    res.status(200).json({
        message: 'Successful logout'
    });
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        if (id) {
            await User.findByIdAndDelete(id);
        }
        return res.status(200).json({
            status: 'success',
            message: 'Account deleted',
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'Unable to delete account'
        });
    }
}

const checkAuthUser = async (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Authenticated'
    });
}

module.exports = {
    userLogin,
    userRegister,
    userLogout,
    deleteUser,
    checkAuthUser
}