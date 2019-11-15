webpackHotUpdate("static/development/pages/catalog/[name].js",{

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_listMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/listMenu */ "./components/listMenu.js");

var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight:100%;\nbackground: white;\nbox-shadow: 2px 0 8px rgba(0,0,0,0.5);\nz-index:200;\ndisplay: block;\noverflow: hidden;\n\nscrollbar-width: none;\n::-webkit-scrollbar {\n    display: block;\n}\n\n.side_list ul{\n    width:100%;\n    height: 100%;\n    justify-content: center;\n    padding-top:50%;\n    flex-direction: column;\n    list-style: none;\n    display: flex;\n}\n.side_list li{\n    margin: 0.3rem;\n}\n.side_list a{\n    font-size: 1.4rem;\n    text-decoration: none;\n\n}\na{\n    cursor: pointer;\n    color: grey;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Side = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var sideMenu = function sideMenu(props) {
  return __jsx(Side, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "side_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_listMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    onClick: props.SideBarClose,
    className: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "X")))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideMenu);

/***/ })

})
//# sourceMappingURL=[name].js.cd8fdad1bd690f982918.hot-update.js.map