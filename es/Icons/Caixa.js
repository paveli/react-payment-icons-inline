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
    global.Caixa = mod.exports;
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

  var SvgCaixa = function SvgCaixa(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 126 79"
    }, props), _react["default"].createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, _react["default"].createElement("rect", {
      fill: "#F1F2F2",
      fillRule: "nonzero",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), _react["default"].createElement("path", {
      d: "M44.533 35.099l-2.554 6.49h3.534l-.969-6.518-.01.028zM31 50l10.48-22h7.92l4.419 22h-6.956l-.511-2.932h-6.749L38.051 50H31zm26.112 0l3.036-22h7.008l-3.035 22h-7.009zm46.612-14.929l-2.565 6.519h3.534l-.969-6.519zM90.18 50l10.48-22h7.92L113 50h-6.956l-.512-2.932h-6.748L97.232 50H90.18zM74 39h8.902L89 49h-8.902L74 39",
      fill: "#00679B"
    }), _react["default"].createElement("path", {
      fill: "#E77A34",
      d: "M75 38h9.098L92 28h-9.098L75 38m-9 11h9.098L83 39h-9.098L66 49"
    }), _react["default"].createElement("path", {
      fill: "#00679B",
      d: "M69 28h8.308L83 38h-8.308L69 28m-38 .207l-.68 6.247c-2.606-3.509-8.647-1.087-9.121 3.283-.603 5.548 5.21 6.842 8.374 3.575l-.681 6.26c-.945.454-1.868.804-2.779 1.043-.906.238-1.815.364-2.716.382-1.133.023-2.16-.092-3.085-.346a7.614 7.614 0 01-2.503-1.183c-1.428-1.02-2.46-2.315-3.098-3.891-.635-1.582-.845-3.367-.628-5.361.174-1.603.588-3.065 1.248-4.391.654-1.325 1.56-2.529 2.713-3.62 1.09-1.042 2.277-1.827 3.562-2.36 1.28-.53 2.676-.812 4.186-.843a10.58 10.58 0 012.644.273 12.01 12.01 0 012.564.932"
    })));
  };

  var _default = SvgCaixa;
  _exports["default"] = _default;
});