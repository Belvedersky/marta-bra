webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/images */ "./components/images.js");
/* harmony import */ var _components_listMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/listMenu */ "./components/listMenu.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta */ "./components/meta.js");

var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nh2,h1 {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n      \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n      sans-serif;\n  color: #575757;\n  font-size:1rem;\n  font-weight: 300;\n  text-align: center;\n  }\n  html {\n    margin: 0;\n\t  padding: 0;\n    height: 100%;\n  }\n  body,li {\n    // margin: 0;\n    height: 100%;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\",\n      \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  h2,a,p {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\",\n      \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n      \"Helvetica Neue\", sans-serif;\n    color: #9c9c9c;\n  }\n  .siteMenu ul {\n    justify-content: center;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    padding-left: 0;\n  }\n  .siteMenu li {\n    padding: 1rem;\n  }\n  .catalog_image{\n    width: 260px;\n    padding-top:30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  @media ", "{\n    .siteMenu{\n      display:none;\n    }\n  }\n  .content-body{\n    padding-top: 60px;\n    padding-bottom: 130px;\n    height: 100%;\n\n  }\n  .Footer{ \n    position: absolute;\n    left:0;\n    margin-top: 130px;\n    width: 100%;\n    height: 130px;\n    text-align:center;\n    /* background: #575757; */\n    \n    p{\n      color: #575757;\n    }\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_5__["DEVICE"].tablet);

var Body = function Body(props) {
  return __jsx(BodyContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_meta__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("div", {
    className: "content-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_components_images__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/img/bra.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, " ", _config__WEBPACK_IMPORTED_MODULE_5__["TITLE"].subtitle), __jsx("div", {
    className: "siteMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_components_listMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "titleMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), props.children), __jsx("div", {
    className: "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Marta bra"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=index.js.3649d3a79c27d5637183.hot-update.js.map