"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = gameOver;

var _lodash = _interopRequireDefault(require("lodash"));

var _firebase = require("../firebase");

var _characters = _interopRequireDefault(require("../imgs/characters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function gameOver() {
  var time = document.getElementById('timer');

  if (_characters["default"].every(function (_char) {
    return _char.found === true;
  })) {
    var name = prompt("Enter your name for the high score!");
    (0, _firebase.addScore)(name, time);
  }
}