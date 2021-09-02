"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _allModels = require("../../database/allModels");

var _food = require("../../validation/food");

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

var Router = _express["default"].Router();
/*
Route     /r
Des       Get all food based on particular restaurant
Params    id
Access    Public
Method    GET  
*/


Router.get("/r/:_id", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _id, foods;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _food.ValidateRestaurantId)(req.params);

          case 3:
            _id = req.params._id;
            _context.next = 6;
            return _allModels.FoodModel.find({
              restaurant: _id
            });

          case 6:
            foods = _context.sent;
            return _context.abrupt("return", res.json({
              foods: foods
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/*
Route     /:_id
Des       Get food based on id
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _id, foods;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params._id;
            _context2.next = 4;
            return _allModels.FoodModel.findById(_id);

          case 4:
            foods = _context2.sent;
            return _context2.abrupt("return", res.json({
              foods: foods
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/*
Route     /c
Des       Get all food based on particular category
Params    category
Access    Public
Method    GET  
*/

Router.get("/r/:category", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var category, foods;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _food.Validatecategory)(req.params);

          case 3:
            category = req.params.category;
            _context3.next = 6;
            return _allModels.FoodModel.find({
              category: {
                $regex: category,
                $options: "i"
              }
            });

          case 6:
            foods = _context3.sent;
            return _context3.abrupt("return", res.json({
              foods: foods
            }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;