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

var _razorpay = _interopRequireDefault(require("razorpay"));

var _uuid = require("uuid");

var _allModels = require("../../database/allModels");

// Libraries
// Database modal
var Router = _express["default"].Router();
/*
Route     /list
Des       Get all list menu based on id
Params    _id
Access    Public
Method    GET  
*/


Router.post("/new", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var instance, options, order;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            instance = new _razorpay["default"]({
              key_id: process.env.RZR_PAY_ID,
              key_secret: process.env.RZR_PAY_SECRET
            });
            options = {
              amount: req.body.amount * 100,
              // amount in the smallest currency unit
              currency: "INR",
              receipt: "".concat((0, _uuid.v4)())
            };
            _context.next = 5;
            return instance.orders.create(options);

          case 5:
            order = _context.sent;
            return _context.abrupt("return", res.json({
              order: order
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;