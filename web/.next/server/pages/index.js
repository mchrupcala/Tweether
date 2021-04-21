module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3-utils */ \"web3-utils\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/provider */ \"./web3/provider.js\");\n\nvar _jsxFileName = \"/Users/michaelchrupcala/projects/eth/tweether/web/pages/index.js\";\n\n\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  async componentDidMount() {\n    try {\n      await ethereum.enable(); // Prompt user to let our DApp access their addresses\n\n      const addresses = await _web3_provider__WEBPACK_IMPORTED_MODULE_3__[\"eth\"].getAccounts(); // Get user's ETH addresses\n\n      console.log(addresses);\n      const balance = await _web3_provider__WEBPACK_IMPORTED_MODULE_3__[\"eth\"].getBalance(addresses[0]);\n      console.log(balance);\n    } catch (err) {\n      console.error(\"User denied access to their ETH addresses!\");\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hello world!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJldGhlcmV1bSIsImVuYWJsZSIsImFkZHJlc3NlcyIsImV0aCIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImJhbGFuY2UiLCJnZXRCYWxhbmNlIiwiZXJyIiwiZXJyb3IiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsTUFBTUEsU0FBTixTQUF3QkMsNENBQUssQ0FBQ0MsU0FBOUIsQ0FBd0M7QUFDbkQsUUFBTUMsaUJBQU4sR0FBMEI7QUFDdEIsUUFBSTtBQUNBLFlBQU1DLFFBQVEsQ0FBQ0MsTUFBVCxFQUFOLENBREEsQ0FDd0I7O0FBQ3hCLFlBQU1DLFNBQVMsR0FBRyxNQUFNQyxrREFBRyxDQUFDQyxXQUFKLEVBQXhCLENBRkEsQ0FFMkM7O0FBQzNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUVBLFlBQU1LLE9BQU8sR0FBRyxNQUFNSixrREFBRyxDQUFDSyxVQUFKLENBQWVOLFNBQVMsQ0FBQyxDQUFELENBQXhCLENBQXRCO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFaO0FBQ0gsS0FQRCxDQU9FLE9BQU9FLEdBQVAsRUFBWTtBQUNWSixhQUFPLENBQUNLLEtBQVIsQ0FBYyw0Q0FBZDtBQUNIO0FBQ0o7O0FBRURDLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFHSDs7QUFsQmtEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNVc2VyRXRoZXJldW1BZGRyZXNzSW5CbG9vbSB9IGZyb20gJ3dlYjMtdXRpbHMnO1xuaW1wb3J0IHsgZXRoIH0gZnJvbSAnLi4vd2ViMy9wcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7ICAgIFxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKCkgLy8gUHJvbXB0IHVzZXIgdG8gbGV0IG91ciBEQXBwIGFjY2VzcyB0aGVpciBhZGRyZXNzZXNcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpOyAvLyBHZXQgdXNlcidzIEVUSCBhZGRyZXNzZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3Nlcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBldGguZ2V0QmFsYW5jZShhZGRyZXNzZXNbMF0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgZGVuaWVkIGFjY2VzcyB0byB0aGVpciBFVEggYWRkcmVzc2VzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDE+aGVsbG8gd29ybGQhPC9oMT5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/*! exports provided: eth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eth\", function() { return eth; });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst provider = () => {\n  if (typeof web3 !== 'undefined') {\n    return web3.currentProvider;\n  } else {\n    console.error(\"You need to install Metamask for this app to work!\");\n  }\n};\n\nconst eth = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider()).eth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIzL3Byb3ZpZGVyLmpzPzUyY2MiXSwibmFtZXMiOlsicHJvdmlkZXIiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImVycm9yIiwiZXRoIiwiV2ViMyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixNQUFJLE9BQU9DLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsV0FBT0EsSUFBSSxDQUFDQyxlQUFaO0FBQ0gsR0FGRCxNQUVPO0FBQ0hDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjLG9EQUFkO0FBQ0g7QUFDSixDQU5EOztBQVFPLE1BQU1DLEdBQUcsR0FBRyxJQUFJQywyQ0FBSixDQUFTTixRQUFRLEVBQWpCLEVBQXFCSyxHQUFqQyIsImZpbGUiOiIuL3dlYjMvcHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5cbmNvbnN0IHByb3ZpZGVyID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdlYjMuY3VycmVudFByb3ZpZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBuZWVkIHRvIGluc3RhbGwgTWV0YW1hc2sgZm9yIHRoaXMgYXBwIHRvIHdvcmshXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGV0aCA9IG5ldyBXZWIzKHByb3ZpZGVyKCkpLmV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3/provider.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ }),

/***/ "web3-utils":
/*!*****************************!*\
  !*** external "web3-utils" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3-utils\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLXV0aWxzXCI/MWI2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy11dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3-utils\n");

/***/ })

/******/ });