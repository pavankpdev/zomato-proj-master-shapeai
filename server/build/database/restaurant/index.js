"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var RestaurantSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mapLocation: {
    type: String,
    required: true
  },
  cuisine: [String],
  restaurantTimings: String,
  contactNumber: Number,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenties: [String],
  menuImages: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  },
  menu: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Menus"
  },
  reviews: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Reviews"
  }],
  photos: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  }
}, {
  timestamps: true
});

var RestaurantModel = _mongoose["default"].model("Restaurants", RestaurantSchema);

exports.RestaurantModel = RestaurantModel;