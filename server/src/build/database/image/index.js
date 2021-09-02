"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ImageSchema = new _mongoose["default"].Schema({
  images: [{
    location: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

var ImageModel = _mongoose["default"].model("Images", ImageSchema);

exports.ImageModel = ImageModel;