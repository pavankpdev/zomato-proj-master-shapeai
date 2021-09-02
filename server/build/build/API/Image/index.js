"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _multer = _interopRequireDefault(require("multer"));

var _allModels = require("../../database/allModels");

var _s = require("../../Utils/AWS/s3");

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

var Router = _express["default"].Router(); // Multer Config


var storage = _multer["default"].memoryStorage();

var upload = (0, _multer["default"])({
  storage: storage
});
/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var image;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _allModels.ImageModel.findById(req.params._id);

          case 3:
            image = _context.sent;
            return _context.abrupt("return", res.json({
              image: image
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/

Router.post("/", upload.single("file"), /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var file, bucketOptions, uploadImage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            file = req.file; // s3 bucket options

            bucketOptions = {
              Bucket: "shapeaijunebatch123",
              Key: file.originalname,
              Body: file.buffer,
              ContentType: file.mimetype,
              ACL: "public-read" // Access Control List

            };
            _context2.next = 5;
            return (0, _s.s3Upload)(bucketOptions);

          case 5:
            uploadImage = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              uploadImage: uploadImage
            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;