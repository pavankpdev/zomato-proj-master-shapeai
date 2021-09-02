"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateRestaurantSearchString = exports.ValidateRestaurantCity = void 0;

var _joi = _interopRequireDefault(require("joi"));

var ValidateRestaurantCity = function ValidateRestaurantCity(restaurantObj) {
  var Schema = _joi["default"].object({
    city: _joi["default"].string().required()
  });

  return Schema.validateAsync(restaurantObj);
};

exports.ValidateRestaurantCity = ValidateRestaurantCity;

var ValidateRestaurantSearchString = function ValidateRestaurantSearchString(restaurantObj) {
  var Schema = _joi["default"].object({
    searchString: _joi["default"].string().required()
  });

  return Schema.validateAsync(restaurantObj);
};

exports.ValidateRestaurantSearchString = ValidateRestaurantSearchString;