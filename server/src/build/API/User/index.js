"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _allModels = require("../../database/allModels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$session$passport, email, fullname, phoneNumber, address;

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, fullname;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var userId, userData, updateUserData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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