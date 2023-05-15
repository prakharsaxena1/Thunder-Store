import jsonwebtoken from 'jsonwebtoken';
const time = 24 * 60 * 60 * 1000; // 24 hours

const issueJWT = (user) => {
    const expiresIn = time;
    const payload = { sub: user._id, iat: Date.now() };
    const token = jsonwebtoken.sign(payload, process.env.PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
    return { token, expiresIn }
};

export const issueRefreshToken = async (token) => {
    token = token.split(" ")[1];
    try {
        const decoded = jsonwebtoken.verify(token, process.env.PUB_KEY, { algorithm: 'RS256' });
        if (decoded.exp < Date.now()) {
            throw new Error('Token has expired');
        }
        const newPayload = { sub: decoded.sub, iat: Date.now() };
        const newJwt = jsonwebtoken.sign(newPayload, process.env.PRIV_KEY, { expiresIn: time, algorithm: 'RS256' });
        return { isAuth: true, token: `Bearer ${newJwt}` };
    } catch (err) {
        console.log(err.message);
        return { isAuth: false };
    }
};

export const setCookieResponse = (res, token) => {
    res.cookie('authorization', token, {
        expires: new Date(Date.now() + time),
        path: '/',
        secure: true,
        sameSite: 'none',
    });
    return res;
};

export const setAuthCookie = (res, user) => {
    const token = issueJWT(user);
    res.token = 'Bearer ' + token.token;
    return setCookieResponse(res, res.token);
};

export default {
    issueRefreshToken,
    setCookieResponse,
    setAuthCookie,
};
