const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const genKeyPair = require('../bin/generateKeys.js');

const createKeysIfNotExist = () => {
    const privKeyPath = path.join('bin', 'id_rsa_priv.pem')
    const pubKeyPath = path.join('bin', 'id_rsa_pub.pem')
    if (!(fs.existsSync(privKeyPath) || fs.existsSync(pubKeyPath))) {
        genKeyPair();
    }
};

const issueJWT = (user) => {
    const PRIV_KEY = fs.readFileSync(path.join('bin', 'id_rsa_priv.pem'), 'utf8');
    const expiresIn = '1d';
    const payload = { sub: user._id, iat: Date.now() };
    const token = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
    return { token, expiresIn }
};

const issueRefreshToken = async (token) => {
    const PUB_KEY = fs.readFileSync(path.join('bin', 'id_rsa_pub.pem'), 'utf8');
    const PRIV_KEY = fs.readFileSync(path.join('bin', 'id_rsa_priv.pem'), 'utf8');
    try {
        const decoded = jsonwebtoken.verify(token, PUB_KEY);
        if (decoded.exp < new Date(Date.now())) {
            throw new Error('Token has expired');
        }
        const newPayload = { sub: decoded.sub, iat: Date.now() };
        const newJwt = jsonwebtoken.sign(newPayload, PRIV_KEY, { expiresIn: '1d', algorithm: 'RS256' });
        return { isAuth: true, token: newJwt };
    } catch (err) {
        return { isAuth: false };
    }
};

const setAuthCookie = (res, user) => {
    createKeysIfNotExist();
    const token = issueJWT(user);
    res.token = 'Bearer ' + token.token;
    res.cookie('authorization', res.token, {
        expires: new Date(Date.now() + 60 * 60 * 1000),
        path: '/',
        secure: true,
        sameSite: 'none',
    });
    return res;
};

module.exports = {
    setAuthCookie,
    createKeysIfNotExist,
    issueRefreshToken,
}
