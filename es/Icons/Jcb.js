(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Jcb = mod.exports;
  }
})(this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgJcb = function SvgJcb(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), _react["default"].createElement("defs", null, _react["default"].createElement("style", null, ".jcb_svg__cls-1{fill:#0c489c}")), _react["default"].createElement("g", {
      id: "jcb_svg__Layer_2",
      "data-name": "Layer 2"
    }, _react["default"].createElement("g", {
      id: "jcb_svg__Layer_1-2",
      "data-name": "Layer 1"
    }, _react["default"].createElement("rect", {
      className: "jcb_svg__cls-1",
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18
    }), _react["default"].createElement("path", {
      d: "M84.55 41.86c.15 4.57.3 9.29.07 13.93a6.31 6.31 0 01-3 4.65 9 9 0 01-4.57 1L71 61.35V22.59a6.57 6.57 0 014.65-5.48 85.34 85.34 0 018.83-.31l.15 2v22l-.07.08zm-43.86-1.45V22.13a6.65 6.65 0 014-4.72c3-.91 6.4-.37 9.45-.45.15 3 0 6.7.07 9.29l.15 23.83c-.38 3.66 1 8.61-3.58 10.66-2.89 1.45-6.77.54-10.05.84l-.07-.53V40.41zm28.7-20.94l.08 37.08a6.7 6.7 0 01-3.81 4.34c-2.89 1-6.47.54-9.67.54l-.15-39.07a6 6 0 013-4.41 7.74 7.74 0 014-1.07h6.47z",
      fill: "#fff"
    }), _react["default"].createElement("path", {
      className: "jcb_svg__cls-1",
      d: "M40.69 41.17a6.6 6.6 0 005 2.89c2.51.24 5.78.46 7.46-1.9 1.14-1.22.46-2.89.69-4.49l-.08-2.89c-1.45-.31-2.74 0-4.42-.08-.83 3.12 1.37 6.62-2.21 8.22a3.94 3.94 0 01-2.89-.45c-1.37-.31-.61-2.52-2.44-1.91l-1.06-.15zm28.1-6.39a7.42 7.42 0 01.07 1.37c-2.28-.61-5.1-1.3-7.15.38a3.78 3.78 0 001.21 6.24c2 .61 4 .08 5.87-.38a2.29 2.29 0 010 1.22H60a4.55 4.55 0 01-3.43-2.67 4.69 4.69 0 01.76-4.64A4.44 4.44 0 0161 34.7zm15.76 7.08a2.55 2.55 0 01-1.91 1.9H72l-.38-.15c0-3-.07-5.94.08-8.91h6.78c2.11.23 4.52-.7 5.46 1.3a2 2 0 01-.31 2.14c-.3.53-1 .61-1.14 1a3.14 3.14 0 012.06 1.75zm-9.14-6.25a7.41 7.41 0 00-.08 2.9c1.6-.08 3.66.53 4.73-.69a1.51 1.51 0 00-.08-1.6c-1.22-1.06-3.05-.38-4.57-.61zm4.11 4.19a20.32 20.32 0 00-4.26-.08 14.05 14.05 0 00.15 3.13c1.52 0 3.2.22 4.57-.46a1.63 1.63 0 00.46-1.52 1.6 1.6 0 00-.92-1.07z"
    }))));
  };

  var _default = SvgJcb;
  _exports["default"] = _default;
});