"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = require("../database/user");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

_dotenv["default"].config({
  path: require("path").resolve(__dirname, "../.env")
}); // Database Model


var JWTStratergy = _passportJwt["default"].Strategy;
var ExtractJwt = _passportJwt["default"].ExtractJwt;
var options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoAPP"
};

var _default = function _default(passport) {
  passport.use(new JWTStratergy(options, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(jwt__payload, done) {
      var doesUserExist;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user.UserModel.findById(jwt__payload.user);

            case 3:
              doesUserExist = _context.sent;

              if (doesUserExist) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", done(null, false));

            case 6:
              return _context.abrupt("return", done(null, doesUserExist));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
};

exports["default"] = _default;