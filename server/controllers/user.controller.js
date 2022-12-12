const User = require('../models/User.model.js');

const userLogin = async (req, res) => {
    try {
        if (req.body.email !== undefined && req.body.password !== undefined) {
            const user = await User.findOne({
                email: req.body.email,
            }, {
                password: 1,
                username: 1,
            });
            if (user.password === req.body.password) {
                return res.status(200).send(`${user.username} has logged in successfully`);
            }
        }
        return res.status(401).send("Login failed :( ");
    } catch (err) {
        res.status(500).send(`Account login failed: ${err.message}`);
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

}

const deleteUser = (req, res) => {

}

module.exports = {
    userLogin,
    userRegister,
    userLogout,
    deleteUser
}