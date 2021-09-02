"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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

var UserSchema = new _mongoose["default"].Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  address: [{
    detail: {
      type: String
    },
    "for": {
      type: String
    }
  }],
  phoneNumber: [{
    type: Number
  }]
}, {
  timestamps: true
});

UserSchema.methods.generateJwtToken = function () {
  return _jsonwebtoken["default"].sign({
    user: this._id.toString()
  }, "ZomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var email, phoneNumber, checkUserByEmail, checkUserByPhone;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref.email, phoneNumber = _ref.phoneNumber;
            _context.next = 3;
            return UserModel.findOne({
              email: email
            });

          case 3:
            checkUserByEmail = _context.sent;
            _context.next = 6;
            return UserModel.findOne({
              phoneNumber: phoneNumber
            });

          case 6:
            checkUserByPhone = _context.sent;

            if (!(checkUserByEmail || checkUserByPhone)) {
              _context.next = 9;
              break;
            }

            throw new Error("User Already Exist...!");

          case 9:
            return _context.abrupt("return", false);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

UserSchema.statics.findByEmailAndPassword = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3) {
    var email, password, user, doesPasswordMatch;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref3.email, password = _ref3.password;
            _context2.next = 3;
            return UserModel.findOne({
              email: email
            });

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            throw new Error("User does no exist!!!");

          case 6:
            _context2.next = 8;
            return _bcryptjs["default"].compare(password, user.password);

          case 8:
            doesPasswordMatch = _context2.sent;

            if (doesPasswordMatch) {
              _context2.next = 11;
              break;
            }

            throw new Error("invalid Password!!!");

          case 11:
            return _context2.abrupt("return", user);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}();

UserSchema.pre("save", function (next) {
  var user = this; // password is modified

  if (!user.isModified("password")) return next(); // generate bcrypt salt

  _bcryptjs["default"].genSalt(8, function (error, salt) {
    if (error) return next(error); // hash the password

    _bcryptjs["default"].hash(user.password, salt, function (error, hash) {
      if (error) return next(error); // assigning hashed password

      user.password = hash;
      return next();
    });
  });
});

var UserModel = _mongoose["default"].model("Users", UserSchema);

exports.UserModel = UserModel;