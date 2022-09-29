"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _marcus = _interopRequireDefault(require("./imgs folder/marcus.png"));

var _chief = _interopRequireDefault(require("./imgs folder/chief.png"));

var _zoey = _interopRequireDefault(require("./imgs folder/zoey.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mcObj = {
  id: "Chief",
  img: _chief["default"],
  alt: "master-chief",
  found: false
};
var marcusObj = {
  id: "Marcus",
  img: _marcus["default"],
  alt: "marcus",
  found: false
};
var zoeyObj = {
  id: "Zoey",
  img: _zoey["default"],
  alt: "zoey",
  found: false
};
var chars = [mcObj, zoeyObj, marcusObj];
var _default = chars;
exports["default"] = _default;