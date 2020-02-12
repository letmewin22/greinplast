/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Button = __webpack_require__(/*! ./ui/Button.js */ \"./ui/Button.js\");\n\n__webpack_require__(/*! ./ui/mainScreen.js */ \"./ui/mainScreen.js\");\n\nnew _Button.Button();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9ufSBmcm9tICcuL3VpL0J1dHRvbi5qcydcclxuaW1wb3J0ICcuL3VpL21haW5TY3JlZW4uanMnXHJcblxyXG5uZXcgQnV0dG9uKClcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./ui/Button.js":
/*!**********************!*\
  !*** ./ui/Button.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Button = exports.Button = function () {\n    function Button() {\n        _classCallCheck(this, Button);\n\n        this.btn = [].concat(_toConsumableArray(document.querySelectorAll('.button')));\n\n        this.btn.forEach(function (elem) {\n            return elem.addEventListener('mouseenter', Button.btnHover);\n        });\n        this.btn.forEach(function (elem) {\n            return elem.addEventListener('mouseleave', Button.btnHover);\n        });\n    }\n\n    _createClass(Button, null, [{\n        key: 'btnHover',\n        value: function btnHover(e) {\n\n            var btnBg = this.querySelector('.bg');\n\n            var bgPosX = e.pageX - this.getBoundingClientRect().left;\n            var bgPosY = e.clientY - this.getBoundingClientRect().top;\n\n            btnBg.style.top = bgPosY + 'px';\n            btnBg.style.left = bgPosX + 'px';\n        }\n    }]);\n\n    return Button;\n}();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9CdXR0b24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3VpL0J1dHRvbi5qcz9mZDQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLmJ0biA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyldXHJcblxyXG4gICAgdGhpcy5idG4uZm9yRWFjaChlbGVtID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEJ1dHRvbi5idG5Ib3ZlcikpXHJcbiAgICB0aGlzLmJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgQnV0dG9uLmJ0bkhvdmVyKSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBidG5Ib3ZlcihlKSB7XHJcblxyXG4gICAgY29uc3QgYnRuQmcgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5iZycpXHJcblxyXG4gICAgY29uc3QgYmdQb3NYID0gZS5wYWdlWCAtIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgY29uc3QgYmdQb3NZID0gZS5jbGllbnRZIC0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuXHJcbiAgICBidG5CZy5zdHlsZS50b3AgPSBiZ1Bvc1kgKyAncHgnXHJcbiAgICBidG5CZy5zdHlsZS5sZWZ0ID0gYmdQb3NYICsgJ3B4J1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/Button.js\n");

/***/ }),

/***/ "./ui/mainScreen.js":
/*!**************************!*\
  !*** ./ui/mainScreen.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar h1 = document.querySelector('.main-h1');\nvar h1Span = h1.querySelectorAll('.h1-links');\nvar lines = document.querySelectorAll('.line');\nvar bg = document.querySelectorAll('.header-bg');\n\nfunction Hover() {\n  var line = this.querySelector('.line');\n\n  h1.style.color = 'rgba(255, 255, 255, 0.5)';\n  this.style.color = 'white';\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var curLine = _step.value;\n\n      curLine.style.opacity = '0.3';\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  line.style.opacity = '1';\n\n  for (var i = 0; i < bg.length; i++) {\n    if (i !== this.getAttribute('data-bg')) {\n      bg[i].style.opacity = 0;\n    }\n    bg[this.getAttribute('data-bg')].style.opacity = 1;\n  }\n}\n\nfunction HoverOut() {\n\n  h1.style.color = 'white';\n  this.style.color = '';\n\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var curLine = _step2.value;\n\n      curLine.style.opacity = '1';\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  for (var i = 0; i < bg.length; i++) {\n    bg[i].style.opacity = 0;\n    bg[1].style.opacity = 1;\n  }\n}\n\nh1Span.forEach(function (span) {\n  return span.addEventListener('mouseenter', Hover);\n});\nh1Span.forEach(function (span) {\n  return span.addEventListener('mouseleave', HoverOut);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9tYWluU2NyZWVuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy91aS9tYWluU2NyZWVuLmpzPzYwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oMScpXHJcbmNvbnN0IGgxU3BhbiA9IGgxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oMS1saW5rcycpXHJcbmNvbnN0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKVxyXG5jb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItYmcnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvdmVyKCkge1xyXG4gIGNvbnN0IGxpbmUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5saW5lJylcclxuXHJcbiAgaDEuc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xyXG4gIHRoaXMuc3R5bGUuY29sb3IgPSAnd2hpdGUnXHJcblxyXG4gIGZvciAobGV0IGN1ckxpbmUgb2YgbGluZXMpIHtcclxuICBcdGN1ckxpbmUuc3R5bGUub3BhY2l0eSA9ICcwLjMnXHJcbiAgfVxyXG5cclxuICBsaW5lLnN0eWxlLm9wYWNpdHkgPSAnMSdcclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJnLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRpZiAoaSAhPT0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKSkge1xyXG4gIFx0XHRiZ1tpXS5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gIFx0fSBcclxuICBcdFx0YmdbdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKV0uc3R5bGUub3BhY2l0eSA9IDFcclxuICBcdFxyXG4gIH1cclxuICBcclxuICBcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvdmVyT3V0KCkge1xyXG5cclxuICBoMS5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcclxuICB0aGlzLnN0eWxlLmNvbG9yID0gJydcclxuXHJcbiAgZm9yIChsZXQgY3VyTGluZSBvZiBsaW5lcykge1xyXG4gIFx0Y3VyTGluZS5zdHlsZS5vcGFjaXR5ID0gJzEnXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmcubGVuZ3RoOyBpKyspIHtcclxuICBcdGJnW2ldLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgXHRiZ1sxXS5zdHlsZS5vcGFjaXR5ID0gMVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbmgxU3Bhbi5mb3JFYWNoKHNwYW4gPT4gc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgSG92ZXIpKVxyXG5oMVNwYW4uZm9yRWFjaChzcGFuID0+IHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIEhvdmVyT3V0KSlcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/mainScreen.js\n");

/***/ })

/******/ });