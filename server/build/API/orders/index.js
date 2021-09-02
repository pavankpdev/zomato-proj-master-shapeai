"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _allModels = require("../../database/allModels");

// Libraries
// Database modal
var Router = _express["default"].Router();
/*
Route     /
Des       Get all orders based on id
Params    _id
Access    Public
Method    GET  
*/


Router.get("/:_id", _passport["default"].authenticate("jwt", {
  session: false
}), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _id, getOrders;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _id = req.params._id;
            _context.next = 4;
            return _allModels.OrderModel.findOne({
              user: _id
            });

          case 4:
            getOrders = _context.sent;

            if (getOrders) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              error: "User not found"
            }));

          case 7:
            return _context.abrupt("return", res.status(200).json({
              orders: getOrders
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
Route     /new
Des       Add new order
Params    _id
Access    Public
Method    POST  
*/

Router.post("/new", _passport["default"].authenticate("jwt"), /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _id, orderDetails, addNewOrder;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.session.passport.user._doc._id;
            orderDetails = req.body.orderDetails;
            _context2.next = 5;
            return _allModels.OrderModel.findOneAndUpdate({
              user: _id
            }, {
              $push: {
                orderDetails: orderDetails
              }
            }, {
              "new": true
            });

          case 5:
            addNewOrder = _context2.sent;
            return _context2.abrupt("return", res.json({
              order: addNewOrder
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