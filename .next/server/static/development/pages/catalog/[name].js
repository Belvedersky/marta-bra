module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/ActiveLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ActiveLink = ({
  children,
  router,
  href,
  styled
}) => {
  let link = ["/", router.pathname.split("/")[1]].join("");

  if (link == "/catalog") {
    link = "/";
  }

  const style = {
    color: link === href ? 'black' : 'grey',
    textDecoration: "none"
  }; // console.log(styled)

  if (styled == "toolbar") {
    style.color = link === href ? 'white' : 'grey';
  }

  if (styled == "sidebar") {
    style.color = link === href ? 'black' : 'grey';
  }

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/images */ "./components/images.js");
/* harmony import */ var _components_listMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/listMenu */ "./components/listMenu.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
h2,h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  color: #575757;
  font-size:1rem;
  font-weight: 300;
  text-align: center;
  }
  html {
    margin: 0;
	  padding: 0;
    height: 100%;
  }
  body,li {
    // margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h2,a,p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    color: #9c9c9c;
  }
  .siteMenu ul {
    justify-content: center;
    list-style: none;
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  .siteMenu li {
    padding: 1rem;
  }
  .catalog_image{
    width: 260px;
    padding-top:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${_config__WEBPACK_IMPORTED_MODULE_4__["DEVICE"].tablet}{
    .siteMenu{
      display:none;
    }
  }
  .content-body{
    padding-top: 60px;
    padding-bottom: 130px;
    height: 100%;

  }
  .Footer{ 
    position: absolute;
    left:0;
    margin-top: 130px;
    width: 100%;
    height: 130px;
    text-align:center;
    /* background: #575757; */
    
    p{
      color: #575757;
    }

  }
`;

const Body = props => {
  return __jsx(BodyContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx("div", {
    className: "content-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(_components_images__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/img/bra.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, " ", _config__WEBPACK_IMPORTED_MODULE_4__["TITLE"].subtitle), __jsx("div", {
    className: "siteMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_components_listMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "titleMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })), props.children), __jsx("div", {
    className: "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Marta bra"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/content.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DivContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    padding-left: 12rem;
    padding-right: 12rem;
    padding-top: 4rem;
    p,a{
        font-size: 1.1rem;
        color: black;
        text-decoration:none;
    }
    h1{
        font-size: 2rem; 
    }
    .catalog_image{
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
        width: 360px;
        height: auto;
        max-height: 400px;
    }
    .content_item{
        order: 0;
        flex: 2 1 auto;
        align-self: auto;
        padding-left: 3rem;
        max-width: 550px;

    }
    @media ${_config__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].tablet} {
        padding: 3rem;
        padding-left: 2rem;
        padding-right: 3rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: stretch;
        align-items: center;
        .catalog_image{
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
    }
    .content_item{
        order: 0;
        flex: 2 1 auto;
        align-self: auto;
        padding-left:0;
    }

  }
`;

const ContentPage = props => {
  return __jsx(DivContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentPage);

/***/ }),

/***/ "./components/images.js":
/*!******************************!*\
  !*** ./components/images.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image */ "react-progressive-image");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/images.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Images = props => {
  const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`

  `;
  return __jsx(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_progressive_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "titleimage",
    src: props.src,
    placeholder: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, (src, loading) => __jsx("img", {
    style: {
      filter: loading ? "blur(2px)" : blur(0)
    },
    src: src,
    className: "catalog_image",
    alt: "Marta bra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/listMenu.js":
/*!********************************!*\
  !*** ./components/listMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ActiveLink */ "./components/ActiveLink.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/listMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ((props, style) => __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  styled: props.style,
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\u041A\u0410\u0422\u0410\u041B\u041E\u0413")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  styled: props.style,
  href: "/cooperation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\u0421\u041E\u0422\u0420\u0423\u0414\u041D\u0418\u0427\u0415\u0421\u0422\u0412\u041E")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  styled: props.style,
  href: "/certificate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\u0421\u0415\u0420\u0422\u0418\u0424\u0418\u041A\u0410\u0422")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  styled: props.style,
  href: "/contacts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B")), props.children));

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toolbar */ "./components/toolbar.js");
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sideMenu */ "./components/sideMenu.js");

var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Menu extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      SideBarOpened: false,
      visible: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SideBarClickOpen", () => {
      this.setState(prevState => {
        return {
          SideBarOpened: !prevState.SideBarOpened
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SideBarClickClose", () => {
      this.setState({
        SideBarOpened: false
      });
    });
  }

  componentDidMount() {// console.log('window.innerHeight', window.pageYOffset);
  }

  render() {
    let SideBarOpen = null;

    if (this.state.SideBarOpened) {
      SideBarOpen = __jsx(_components_sideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        SideBarClose: this.SideBarClickOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      SideBarOpen: this.SideBarClickOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), SideBarOpen);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("meta", {
  name: "theme-color",
  content: "#050505",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-navbutton-color",
  content: "#050505",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-status-bar-style",
  content: "black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("title", {
  key: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].title), __jsx("link", {
  href: "/img/favicon.png",
  rel: "icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/img/favicon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-status-bar-style",
  content: "black-translucent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("meta", {
  key: "description",
  name: "description",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].description,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("meta", {
  key: "og:type",
  name: "og:type",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].openGraph.type,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  key: "og:title",
  name: "og:title",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].openGraph.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("meta", {
  key: "og:description",
  name: "og:description",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].openGraph.description,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("meta", {
  key: "og:url",
  name: "og:url",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].openGraph.url,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("meta", {
  key: "og:image",
  name: "og:image",
  content: _config__WEBPACK_IMPORTED_MODULE_2__["SEO"].openGraph.image,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/sideMenu.js":
/*!********************************!*\
  !*** ./components/sideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_listMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/listMenu */ "./components/listMenu.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Side = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height:100%;
background: white;
box-shadow: 2px 0 8px rgba(0,0,0,0.5);
z-index:200;
display: block;
overflow: hidden;

scrollbar-width: none;
::-webkit-scrollbar {
    display: block;
}

.side_list ul{
    width:100%;
    height: 100%;
    justify-content: center;
    padding-top:50%;
    flex-direction: column;
    list-style: none;
    display: flex;
}
.side_list li{
    margin: 0.3rem;
}
.side_list a{
    font-size: 1.4rem;
    text-decoration: none;

}
a{
    cursor: pointer;
    color: grey;
}

`;

const sideMenu = props => {
  return __jsx(Side, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "side_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_components_listMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("a", {
    onClick: props.SideBarClose,
    className: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "X")))));
};

/* harmony default export */ __webpack_exports__["default"] = (sideMenu);

/***/ }),

/***/ "./components/toolbar.js":
/*!*******************************!*\
  !*** ./components/toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_listMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/listMenu */ "./components/listMenu.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/components/toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ToolBar = props => {
  const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: fixed;
    background: black;
    color: white;
    width: 100%;
    height: 70px;
    top: 0%;
    left: 0%;

    .flex {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1rem;
    }

    .logo {
      padding-top: 1.5rem;
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      padding-left:1rem;
    }
    .space {
      flex: 2;
    }

    .menu{
        padding-top:1rem;
        display:flex;
        width:40px;
        height:'auto';
        filter: invert(100%);
        cursor: pointer;
    }
    .bra_menu{
        padding-top:1rem;
        display: flex;
        width: 60px; 
        filter: invert(100%);
        margin: 0;
        padding: 0 1rem;
    }
    .list ul {
      
      margin: 0;
      padding: 0;
      padding-top: 25px;
      display: flex;
      
    }
    .list a{
      text-decoration:none;
    }

    .list li {
   
      padding: 0 1rem;
      list-style: none;
    }

    .list li:hover {
      color: gray;
    }

    @media ${_config__WEBPACK_IMPORTED_MODULE_2__["DEVICE"].laptop} {
        .bra_menu{
            display:none;
        }
        .menu{
            display:none;
        }
        
    }
    @media ${_config__WEBPACK_IMPORTED_MODULE_2__["DEVICE"].tablet}{
      overflow: hidden;
      height: 55px;
        .menu{
          width:30px;
        }
        .list {
            display:none;
        }
       .logo{
           display:none
       }
    }
    
  `;
  return __jsx(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("img", {
    onClick: props.SideBarOpen,
    className: "menu",
    src: "/menu.svg",
    alt: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx("a", {
    className: "logo",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "MARTA BRA"), __jsx("div", {
    className: "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx("div", {
    className: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_components_listMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToolBar);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: TITLE, SEO, DEVICE, Catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE", function() { return DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
const TITLE = {
  title: "Marta bra",
  subtitle: "белье ручной работы",
  about: `Marta bra - это российский бренд нижнего белья. Мы шьём красивое и 
                качественное белье, в котором женщинам не нужно отказываться от комфорта,
                чтобы выглядеть сексуально каждый день. Естественная красота и женственность
                лежит в основе нашего вдохновения, поэтому у нас вы не найдете плотных push-up чашек.
                Но мы поможем подобрать модель, чтобы подчеркнуть талию, скрыть беда или 
                визуально увеличить грудь`
};
const SEO = {
  title: "Мартабра ",
  description: "Кружевное нижнее белье ручной работы на заказ. Пошив нижнего белья по индивидуальным меркам.",
  openGraph: {
    type: "website",
    url: "https://martabra.belvedersky.now.sh",
    title: " Мартабра Кружевное нижнее белье ручной работы на заказ",
    description: " Пошив нижнего белья по индивидуальным меркам.",
    image: "https://martabra.belvedersky.now.sh/bra.jpg'"
  }
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const DEVICE = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const Catalog = [{
  image: "/lingerie/lingerie_1.jpg",
  title: "Комплект 1",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_1",
  price: "3600"
}, {
  image: "/lingerie/lingerie_2.jpg",
  title: "Комплект 2",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_2",
  price: "2600"
}, {
  image: "/lingerie/lingerie_3.jpg",
  title: "Комплект 3",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_3",
  price: "1900"
}, {
  image: "/lingerie/lingerie_4.jpg",
  title: "Комплект 4",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_4",
  price: "3300"
}, {
  image: "/lingerie/lingerie_5.jpg",
  title: "Комплект 5",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_5",
  price: "2200"
}, {
  image: "/lingerie/lingerie_6.jpg",
  title: "Комплект 6",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_6",
  price: "1750"
}, {
  image: "/lingerie/lingerie_7.jpg",
  title: "Комплект 7",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_7",
  price: "2400"
}, {
  image: "/lingerie/lingerie_8.jpg",
  title: "Комплект 8",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_8",
  price: "1700"
}, {
  image: "/lingerie/lingerie_9.jpg",
  title: "Комплект 9",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_9",
  price: "2800"
}, {
  image: "/lingerie/lingerie_10.jpg",
  title: "Комплект 10",
  description: `Бюстгальтер Curie сделан из мягкой сеточки и глянцевого кружева.
    чашки лифа сделаны с закрытыми швами: это самая нежная технология пошива
    двойная сеточка обеспечивает пуш-ап для тяжелой груди
    элегантность граничащая с сексуальностью
    Cочетатйте с высокими стрингами или слипами.`,
  link: "complect_10",
  price: "2200"
}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/catalog/[name].js":
/*!*********************************!*\
  !*** ./pages/catalog/[name].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/body */ "./components/body.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/content */ "./components/content.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/images */ "./components/images.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/Users/belvedersky/Code/next-js/marta-bra/pages/catalog/[name].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Index = ({
  item
}) => {
  return __jsx(_components_body__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_components_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_images__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: item.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("div", {
    className: "content_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " ", item.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, item.description, " "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, " \u0426\u0415\u041D\u0410: ", item.price))));
};

Index.getInitialProps = ({
  query
}) => {
  const item = _config__WEBPACK_IMPORTED_MODULE_4__["Catalog"].find(item => {
    return item.link === query.name;
  });
  return {
    item
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/catalog/[name].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/belvedersky/Code/next-js/marta-bra/pages/catalog/[name].js */"./pages/catalog/[name].js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-progressive-image":
/*!******************************************!*\
  !*** external "react-progressive-image" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-progressive-image");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[name].js.map