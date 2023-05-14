const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const genKeyPair = require('../bin/generateKeys.js');
const time = 24 * 60 * 60 * 1000; // 24 hours

const createKeysIfNotExist = () => {
    const privKeyPath = path.join('bin', 'id_rsa_priv.pem')
    const pubKeyPath = path.join('bin', 'id_rsa_pub.pem')
    if (!(fs.existsSync(privKeyPath) || fs.existsSync(pubKeyPath))) {
        genKeyPair();
    }
};

const issueJWT = (user) => {
    const PRIV_KEY = fs.readFileSync(path.join('bin', 'id_rsa_priv.pem'), 'utf8');
    const expiresIn = time;
    const payload = { sub: user._id, iat: Date.now() };
    const token = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
    return { token, expiresIn }
};

const issueRefreshToken = async (token) => {
    const PUB_KEY = fs.readFileSync(path.join('bin', 'id_rsa_pub.pem'), 'utf8');
    const PRIV_KEY = fs.readFileSync(path.join('bin', 'id_rsa_priv.pem'), 'utf8');
    token = token.split(" ")[1];
    try {
        const decoded = jsonwebtoken.verify(token, PUB_KEY, { algorithm: 'RS256' });
        if (decoded.exp < Date.now()) {
            throw new Error('Token has expired');
        }
        const newPayload = { sub: decoded.sub, iat: Date.now() };
        const newJwt = jsonwebtoken.sign(newPayload, PRIV_KEY, { expiresIn: time, algorithm: 'RS256' });
        return { isAuth: true, token: `Bearer ${newJwt}` };
    } catch (err) {
        console.log(err.message);
        return { isAuth: false };
    }
};

const setCookieResponse = (res, token) => {
    res.cookie('authorization', token, {
        expires: new Date(Date.now() + time),
        path: '/',
        secure: true,
        sameSite: 'none',
    });
    return res;
};

const setAuthCookie = (res, user) => {
    createKeysIfNotExist();
    const token = issueJWT(user);
    res.token = 'Bearer ' + token.token;
    return setCookieResponse(res, res.token);
};

module.exports = {
    setAuthCookie,
    createKeysIfNotExist,
    issueRefreshToken,
    setCookieResponse,
}
