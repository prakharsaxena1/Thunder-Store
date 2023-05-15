import passportJWT from 'passport-jwt';
import User from '../models/User.model.js';

const JwtStrategy = passportJWT.Strategy;
const cookieExtractor = (req) => {
    try {
        const token = req?.cookies['authorization']?.split(' ')[1];
        return token || null;
    } catch (err) {
        return null;
    }
};

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.PUB_KEY,
    algorithms: ['RS256']
};

const verifyCallback = async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ _id: jwt_payload.sub });
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (err) {
        return done(err, false);
    }
}

const strategy = new JwtStrategy(options, verifyCallback);

const passportFunction = (passport) => {
    passport.use(strategy);
}

export default passportFunction;
