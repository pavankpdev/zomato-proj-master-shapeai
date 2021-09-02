"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateSignin = exports.ValidateSignup = void 0;

var _joi = _interopRequireDefault(require("joi"));

var ValidateSignup = function ValidateSignup(userData) {
  var Schema = _joi["default"].object({
    fullname: _joi["default"].string().required().min(5),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(5),
    address: _joi["default"].array().items(_joi["default"].object({
      detail: _joi["default"].string(),
      "for": _joi["default"].string()
    })),
    phoneNumber: _joi["default"].number()
  });

  return Schema.validateAsync(userData);
};

exports.ValidateSignup = ValidateSignup;

var ValidateSignin = function ValidateSignin(userData) {
  var Schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(5).required()
  });

  return Schema.validateAsync(userData);
};

exports.ValidateSignin = ValidateSignin;