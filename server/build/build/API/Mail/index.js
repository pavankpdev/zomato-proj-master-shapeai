"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault2(require("@babel/runtime/regenerator"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mailgunJs = _interopRequireDefault(require("mailgun-js"));

var _mail = require("../../config/mail.config");

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
Route     /
Des       send a mail
Params    none
Access    Public
Method    POST  
body      from, to, subject, text  
*/


Router.post("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body$mailData, from, to, subject, text, sendMail;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0; // the mailData object should contain exact properties as below.

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