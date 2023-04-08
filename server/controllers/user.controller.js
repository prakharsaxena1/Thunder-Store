const User = require('../models/user.model');
const auth = require('../auth/auth');

const userLogin = async (req, res) => {
    try {
        if (req.body.email !== undefined && req.body.password !== undefined) {
            const user = await User.findOne({ email: req.body.email });
            if (user.password === req.body.password) {
                res = auth.setAuthCookie(res, user);
                return res.status(200).send(`${user.username} has logged in successfully`);
            }
        }
        return res.status(401).send("Login failed :( ");
    } catch (err) {
        res.status(404).send(`Account login failed: ${err.message}`); 
    }
}

const userRegister = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).send("Account registered successfully");
    } catch (err) {
        res.status(500).send(`Account registeration failed: ${err.message}`);
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
        return res.status(401).send("Account deleted");
    } catch (err) {
        res.status(500).send(`Account deletion failed: ${err.message}`);
    }
}

module.exports = {
    userLogin,
    userRegister,
    userLogout,
    deleteUser
}