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
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/


Router.get("/", _passport["default"].authenticate("jwt"), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$session$passport, email, fullname, phoneNumber, address;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$session$passport = req.session.passport.user._doc, email = _req$session$passport.email, fullname = _req$session$passport.fullname, phoneNumber = _req$session$passport.phoneNumber, address = _req$session$passport.address;
            return _context.abrupt("return", res.json({
              user: {
                email: email,
                fullname: fullname,
                phoneNumber: phoneNumber,
                address: address
              }
            }));

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/

Router.get("/:_id", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user, fullname;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _allModels.UserModel.findById(req.params._id);

          case 3:
            user = _context2.sent;
            fullname = user.fullname;
            return _context2.abrupt("return", res.json({
              user: {
                fullname: fullname
              }
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
Route     /update
Des       update user id
Params    _id
BODY      user data
Access    Public
Method    PUT  
*/

Router.put("/update/:userId", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, userData, updateUserData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userId = req.params.userId;
            userData = req.body.userData;
            _context3.next = 5;
            return _allModels.UserModel.findByIdAndUpdate(userId, {
              $set: userData
            }, {
              "new": true
            });

          case 5:
            updateUserData = _context3.sent;
            return _context3.abrupt("return", res.json({
              user: updateUserData
            }));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;