const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config/keys");
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });
    const checkedPassword = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (checkedPassword) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
});
exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });
    const checkedPassword = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (checkedPassword) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
});

exports.jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },

  async (jwtPayload, done) => {
    try {
      if (Date.now() > jwtPayload.exp) {
        done(null, false);
      } else {
        const user = await User.findOne({ _id: jwtPayload.id });
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      }
    } catch (error) {
      done(error);
    }
  }
);
