"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = require("../database/user");

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
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(jwt__payload, done) {
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