webpackHotUpdate("static/development/pages/catalog/[name].js",{

/***/ "./pages/catalog/[name].js":
/*!*********************************!*\
  !*** ./pages/catalog/[name].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/body */ "./components/body.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/content */ "./components/content.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/images */ "./components/images.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/pages/catalog/[name].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index(_ref) {
  var item = _ref.item;
  return __jsx(_components_body__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_images__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: item.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "content_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " ", item.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, item.description, " "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " \u0426\u0415\u041D\u0410: ", item.price))));
}; //   return(
//     <Body>
//     <Content>
//     <Image src={props.post.image}/>
//     <div className="content_item">
//       <h1> {props.post.title}</h1>
//       <p>{props.post.description} </p>
//       <p> ЦЕНА: {props.post.price}</p>
//     </div>
//     </Content>
//     </Body>
//   )
// }


Index.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var item = _config__WEBPACK_IMPORTED_MODULE_4__["Catalog"].find(function (item) {
    return item.link === query.name;
  });
  return {
    item: item
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=[name].js.5d18c420090998b7fefe.hot-update.js.map