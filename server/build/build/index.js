"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _passport = _interopRequireDefault(require("passport"));

var _google = _interopRequireDefault(require("./config/google.config"));

var _route = _interopRequireDefault(require("./config/route.config"));

var _Auth = _interopRequireDefault(require("./API/Auth"));

var _Restaurant = _interopRequireDefault(require("./API/Restaurant"));

var _Food = _interopRequireDefault(require("./API/Food"));

var _Image = _interopRequireDefault(require("./API/Image"));

var _orders = _interopRequireDefault(require("./API/orders"));

var _reviews = _interopRequireDefault(require("./API/reviews"));

var _User = _interopRequireDefault(require("./API/User"));

var _menu = _interopRequireDefault(require("./API/menu"));

var _Mail = _interopRequireDefault(require("./API/Mail"));

var _Payments = _interopRequireDefault(require("./API/Payments"));

var _connection = _interopRequireDefault(require("./database/connection"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // Importing Env Variables


require("dotenv").config(); // Libraries


var zomato = (0, _express["default"])();
console.log(process.env); // application middlewares

zomato.use(_express["default"].json());
zomato.use(_express["default"].urlencoded({
  extended: false
}));
zomato.use((0, _helmet["default"])());
zomato.use((0, _cors["default"])());
zomato.use(_passport["default"].initialize());
zomato.use(_passport["default"].session()); // passport cofiguration

(0, _google["default"])(_passport["default"]);
(0, _route["default"])(_passport["default"]); // Application Routes

zomato.use("/auth", _Auth["default"]);
zomato.use("/restaurant", _Restaurant["default"]);
zomato.use("/food", _Food["default"]);
zomato.use("/image", _Image["default"]);
zomato.use("/order", _orders["default"]);
zomato.use("/reviews", _reviews["default"]);
zomato.use("/user", _User["default"]);
zomato.use("/menu", _menu["default"]);
zomato.use("/mail", _Mail["default"]);
zomato.use("/payments", _Payments["default"]);
zomato.get("/", function (req, res) {
  return res.json({
    message: "Setup success"
  });
});
var port = process.env.PORT || 4000;
zomato.listen(port, function () {
  return (0, _connection["default"])().then(function () {
    return console.log("Server is running 🚀");
  })["catch"](function () {
    return console.log("Server is running, but database connection failed... ");
  });
});