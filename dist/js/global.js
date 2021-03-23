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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_binder__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_header_menu__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_language_picker__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_wrap_tables__ = __webpack_require__(5);
// import "babel-polyfill";







Object(__WEBPACK_IMPORTED_MODULE_0__libs_binder__["a" /* binder */])({
  bounds: {
    'html': __WEBPACK_IMPORTED_MODULE_1__modules_common__["a" /* constants */],
    '.js-header': __WEBPACK_IMPORTED_MODULE_2__modules_header_menu__["a" /* headerMenu */],
    '.js-header-language': __WEBPACK_IMPORTED_MODULE_3__modules_language_picker__["a" /* languagePicker */],
    '.content table': __WEBPACK_IMPORTED_MODULE_4__modules_wrap_tables__["a" /* wrapTables */]
  },
  runTests: false
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = binder;
/* unused harmony export fwa */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// v.2.2

function binder(_ref) {
    var bounds = _ref.bounds,
        runTests = _ref.runTests;

    var t0 = void 0,
        t1 = void 0;
    if (runTests) t0 = performance.now();
    // polyfill for ".matches()" method
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    // gather all selectors in array
    var selectorsToFind = Object.keys(bounds);
    // find selectors in document
    var foundElements = [].concat(_toConsumableArray(document.querySelectorAll(selectorsToFind.join(","))));
    // filter bounds for not founded selectors
    var filteredBounds = {};

    var _loop = function _loop(key) {
        if (foundElements.some(function (element) {
            return element.matches(key);
        })) {
            filteredBounds[key] = bounds[key];
        } else {
            if (runTests) console.log("- " + key + " was not found");
        }
    };

    for (var key in bounds) {
        _loop(key);
    }
    // gather all modules in one object
    var mergedModules = {};
    for (var bound in filteredBounds) {
        var module = filteredBounds[bound];
        var nature = Object.prototype.toString.call(module);
        if (nature === "[object Array]") {
            module.forEach(function (script) {
                if (Object.prototype.toString.call(script) === "[object Function]") {
                    mergedModules[script.name] = script;
                    mergedModules[script.name]();
                } else {
                    mergedModules = Object.assign(mergedModules, script);
                }
            });
        } else if (nature === "[object Object]") {
            if (module.f !== undefined) {
                var _mergedModules;

                // call function with arguments
                mergedModules[module.f.name] = module.f;
                (_mergedModules = mergedModules)[module.f.name].apply(_mergedModules, _toConsumableArray(module.a));
            } else {
                // or just merge object
                mergedModules = Object.assign(mergedModules, module);
            }
        } else if (nature === "[object Function]") {
            mergedModules[module.name] = module;
            mergedModules[module.name]();
        } else {
            console.log("! unsupported format: ", module);
        }
    }
    if (runTests) console.log("binderResultObject: ", mergedModules);
    if (runTests) t1 = performance.now();
    if (runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
}

// for function with arguments
var fwa = function fwa() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return { f: args.shift(), a: args };
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
// these properties will be available from anywhere via this.property
var constants = {
  isTouch: 'ontouchstart' in window ? function () {
    document.body.classList.add('touch');
    return true;
  }() : function () {
    document.body.classList.add('no-touch');
    return false;
  }()
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = headerMenu;
function headerMenu() {
  var header = document.querySelector('.js-header');
  var btn = header.querySelector('.js-menu-button');
  var headerIsWithoutShadow = !header.classList.contains('with-shadow');
  var openedClass = 'menu-opened';
  var showShadowClass = 'with-shadow';

  /*
  * Toggle Header Menu
  * */
  btn.addEventListener('click', function () {
    header.classList.toggle(openedClass);
  });

  /*
  * Add shadow to header in case if it hasn't the shadow
  * */
  window.addEventListener('scroll', function () {
    if (headerIsWithoutShadow) {
      if (window.pageYOffset > 0) {
        header.classList.add(showShadowClass);
      } else {
        header.classList.remove(showShadowClass);
      }
    }
  }, { passive: true });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = languagePicker;
function languagePicker() {
  var languagePicker = document.querySelector('.js-header-language');
  var languageDropdown = document.querySelector('.js-language-dropdown');
  var activeClass = 'is-opened';

  languagePicker.addEventListener('click', toggleDropdown);

  window.addEventListener('load', function () {
    languageDropdown.removeAttribute('style');
  });

  function toggleDropdown(e) {
    e.stopPropagation();
    this.classList.toggle(activeClass);

    /*
    * add or remove click outside close
    * */
    if (!this.classList.contains(activeClass)) {
      window.removeEventListener('click', closeOutside);
    } else {
      window.addEventListener('click', closeOutside, { once: true });
    }
  }

  function closeOutside(e) {
    if (!e.target.closest('.js-header-language')) {
      languagePicker.classList.remove(activeClass);
    }
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapTables;
function wrapTables() {
  var contentTables = document.querySelectorAll('.content table');

  contentTables.forEach(function (table) {
    var parentNode = table.parentNode;
    var tableWrapper = document.createElement('div');
    tableWrapper.classList.add('table-wrapper');
    parentNode.insertBefore(tableWrapper, table);
    tableWrapper.appendChild(table);
  });
}

/***/ })
/******/ ]);