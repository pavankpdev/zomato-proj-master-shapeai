"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth20"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _allModels = require("../database/allModels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config({
  path: require("path").resolve(__dirname, "../.env")
});

var GoogleStrategy = _passportGoogleOauth["default"].Strategy;

var _default = function _default(passport) {
  passport.use(new GoogleStrategy({
    clientID: "448325328376-0noqmrddvmqm9lp1jin5c42jjna76ldc.apps.googleusercontent.com",
    clientSecret: "_ROue0E0m9cfiC6bLEJ6iMCz",
    callbackURL: "http://localhost:4000/auth/google/callback"
  }, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {
      var newUser, user, token, _user, _token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // creating a new user object
              newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
              };
              _context.prev = 1;
              _context.next = 4;
              return _allModels.UserModel.findOne({
                email: newUser.email
              });

            case 4:
              user = _context.sent;

              if (!user) {
                _context.next = 10;
                break;
              }

              // generate token
              token = user.generateJwtToken(); // return user

              done(null, {
                user: user,
                token: token
              });
              _context.next = 15;
              break;

            case 10:
              _context.next = 12;
              return _allModels.UserModel.create(newUser);

            case 12:
              _user = _context.sent;
              // generate token
              _token = _user.generateJwtToken(); // return user

              done(null, {
                user: _user,
                token: _token
              });

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              done(_context.t0, null);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 17]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
  passport.serializeUser(function (userData, done) {
    return done(null, _objectSpread({}, userData));
  });
  passport.deserializeUser(function (id, done) {
    return done(null, id);
  });
};

exports["default"] = _default;