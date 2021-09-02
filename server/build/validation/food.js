"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validatecategory = exports.ValidateRestaurantId = void 0;

var _joi = _interopRequireDefault(require("joi"));

var ValidateRestaurantId = function ValidateRestaurantId(resId) {
  var Schema = _joi["default"].object({
    _id: _joi["default"].string().required()
  });

  return Schema.validateAsync(resId);
};

exports.ValidateRestaurantId = ValidateRestaurantId;

var Validatecategory = function Validatecategory(category) {
  var Schema = _joi["default"].object({
    category: _joi["default"].string().required()
  });

  return Schema.validateAsync(category);
};

exports.Validatecategory = Validatecategory;