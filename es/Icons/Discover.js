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
    global.Discover = mod.exports;
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

  var SvgDiscover = function SvgDiscover(props) {
    return _react["default"].createElement("svg", _extends({
      viewBox: "0 0 125.43 78.39"
    }, props), _react["default"].createElement("defs", null, _react["default"].createElement("radialGradient", {
      id: "discover_svg__radial-gradient",
      cx: 57.82,
      cy: -446.88,
      r: 6.18,
      gradientTransform: "translate(6.42 486.08)",
      gradientUnits: "userSpaceOnUse"
    }, _react["default"].createElement("stop", {
      offset: 0.01,
      stopColor: "#ffeee0"
    }), _react["default"].createElement("stop", {
      offset: 0.11,
      stopColor: "#fee9d7"
    }), _react["default"].createElement("stop", {
      offset: 0.28,
      stopColor: "#fddbbf"
    }), _react["default"].createElement("stop", {
      offset: 0.49,
      stopColor: "#fbc597"
    }), _react["default"].createElement("stop", {
      offset: 0.74,
      stopColor: "#f8a560"
    }), _react["default"].createElement("stop", {
      offset: 1,
      stopColor: "#f48120"
    })), _react["default"].createElement("style", null, ".discover_svg__cls-5{fill:#231f20}")), _react["default"].createElement("g", {
      id: "discover_svg__Layer_2",
      "data-name": "Layer 2"
    }, _react["default"].createElement("g", {
      id: "discover_svg__Layer_1-2",
      "data-name": "Layer 1"
    }, _react["default"].createElement("rect", {
      width: 125.43,
      height: 78.39,
      rx: 4.18,
      ry: 4.18,
      fill: "#f1f2f2"
    }), _react["default"].createElement("path", {
      d: "M34.48 78.39h86.77a4.18 4.18 0 004.18-4.18V44.86c-8.33 5.28-39.73 23.48-90.95 33.53z",
      fill: "#f58220"
    }), _react["default"].createElement("path", {
      d: "M64.25 33.09a6.15 6.15 0 00-6.26 6 6.25 6.25 0 106.26-6z",
      fill: "url(#discover_svg__radial-gradient)"
    }), _react["default"].createElement("path", {
      d: "M28.71 33.31h-3.36v11.74h3.34a6.14 6.14 0 004.19-1.35A5.92 5.92 0 0035 39.19c0-3.47-2.58-5.88-6.29-5.88zm2.68 8.82a4.37 4.37 0 01-3.14.93h-.62V35.3h.62a4.24 4.24 0 013.14 1 3.93 3.93 0 011.26 2.92 4 4 0 01-1.26 2.91zm4.68-8.82h2.29v11.74h-2.29zm7.93 4.5c-1.37-.51-1.78-.84-1.78-1.47s.72-1.3 1.71-1.3a2.39 2.39 0 011.85.94l1.2-1.56a5.12 5.12 0 00-3.46-1.3 3.45 3.45 0 00-3.66 3.36c0 1.62.74 2.44 2.89 3.22a8.06 8.06 0 011.59.67 1.41 1.41 0 01.66 1.21 1.67 1.67 0 01-1.78 1.65 2.68 2.68 0 01-2.49-1.56l-1.51 1.43a4.57 4.57 0 004.06 2.23 3.78 3.78 0 004-3.85c.05-1.87-.72-2.71-3.28-3.67zm4.05 1.38a6.08 6.08 0 006.2 6.12 6.34 6.34 0 002.87-.68v-2.7a3.67 3.67 0 01-2.77 1.29 3.84 3.84 0 01-3.94-4 3.9 3.9 0 013.84-4 3.84 3.84 0 012.87 1.32v-2.77a5.83 5.83 0 00-2.82-.72 6.17 6.17 0 00-6.25 6.14zm27.62 2.01l-3.14-7.89h-2.5l4.99 12.04h1.23l5.07-12.04h-2.48l-3.17 7.89zm6.69 3.85h6.49v-1.99h-4.21v-3.17h4.05V37.9h-4.05v-2.6h4.21v-1.99h-6.49v11.74zm15.55-8.27c0-2.2-1.51-3.47-4.15-3.47h-3.4v11.74h2.29v-4.72H93l3.17 4.72h2.82l-3.7-4.95a3.12 3.12 0 002.62-3.32zm-4.59 1.93h-.67v-3.55h.71c1.43 0 2.2.6 2.2 1.74s-.77 1.81-2.24 1.81z",
      fill: "#001722"
    }), _react["default"].createElement("path", {
      className: "discover_svg__cls-5",
      d: "M99.53 34.19c0-.21-.14-.32-.39-.32h-.33v1h.24v-.4l.29.4h.31l-.35-.43a.27.27 0 00.23-.25zm-.43.14v-.27c.12 0 .18 0 .18.13s-.06.14-.18.14z"
    }), _react["default"].createElement("path", {
      className: "discover_svg__cls-5",
      d: "M99.19 33.48a.91.91 0 10.89.9.9.9 0 00-.89-.9zm0 1.64a.74.74 0 11.71-.74.73.73 0 01-.71.74z"
    }))));
  };

  var _default = SvgDiscover;
  _exports["default"] = _default;
});