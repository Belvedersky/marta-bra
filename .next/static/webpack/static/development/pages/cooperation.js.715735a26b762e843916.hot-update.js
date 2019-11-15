webpackHotUpdate("static/development/pages/cooperation.js",{

/***/ "./components/toolbar.js":
/*!*******************************!*\
  !*** ./components/toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _listMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listMenu */ "./components/listMenu.js");

var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    background: black;\n    color: white;\n    width: 100%;\n    height: 70px;\n    top: 0%;\n    left: 0%;\n\n    .flex {\n      display: flex;\n      height: 100%;\n      align-items: center;\n      padding: 0 1rem;\n    }\n\n    .logo {\n      padding-top: 1.5rem;\n      color: white;\n      text-decoration: none;\n      font-size: 1.5rem;\n      padding-left:1rem;\n    }\n    .space {\n      flex: 2;\n    }\n\n    .menu{\n        padding-top:1rem;\n        display:flex;\n        width:40px;\n        height:'auto';\n        filter: invert(100%);\n        cursor: pointer;\n    }\n    .bra_menu{\n        padding-top:1rem;\n        display: flex;\n        width: 60px; \n        filter: invert(100%);\n        margin: 0;\n        padding: 0 1rem;\n    }\n    .list ul {\n      \n      margin: 0;\n      padding: 0;\n      padding-top: 25px;\n      display: flex;\n      \n    }\n    .list a{\n      text-decoration:none;\n    }\n\n    .list li {\n   \n      padding: 0 1rem;\n      list-style: none;\n    }\n\n    .list li:hover {\n      color: gray;\n    }\n\n    @media ", " {\n        .bra_menu{\n            display:none;\n        }\n        .menu{\n            display:none;\n        }\n        \n    }\n    @media ", "{\n      overflow: hidden;\n      height: 55px;\n        .menu{\n          width:30px;\n        }\n        .list {\n            display:none;\n        }\n       .logo{\n           display:none\n       }\n    }\n    \n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ToolBar = function ToolBar(props) {
  var Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_3__["DEVICE"].laptop, _config__WEBPACK_IMPORTED_MODULE_3__["DEVICE"].tablet);
  return __jsx(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("img", {
    onClick: props.SideBarOpen,
    className: "menu",
    src: "/menu.svg",
    alt: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("a", {
    className: "logo",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "MARTA BRA"), __jsx("div", {
    className: "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("div", {
    className: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_listMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToolBar);

/***/ })

})
//# sourceMappingURL=cooperation.js.715735a26b762e843916.hot-update.js.map