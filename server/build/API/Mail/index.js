"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _mailgunJs = _interopRequireDefault(require("mailgun-js"));

var _mail = require("../../config/mail.config");

// Library
// config
var Router = _express["default"].Router();
/*
Route     /
Des       send a mail
Params    none
Access    Public
Method    POST  
body      from, to, subject, text  
*/


Router.post("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body$mailData, from, to, subject, text, sendMail;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // the mailData object should contain exact properties as below.
            _req$body$mailData = req.body.mailData, from = _req$body$mailData.from, to = _req$body$mailData.to, subject = _req$body$mailData.subject, text = _req$body$mailData.text; // Initializing mailgun library

            sendMail = (0, _mail.initializeMailgun)();
            _context.next = 5;
            return sendMail.messages().send({
              from: from,
              to: to,
              subject: subject,
              text: text
            });

          case 5:
            return _context.abrupt("return", res.status(200).json({
              status: "success sent"
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;