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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/back-1.jpg */ \"./src/img/back-1.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/back-2.jpg */ \"./src/img/back-2.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"*{\\r\\n    margin: 0px;;\\r\\n    padding: 0;\\r\\n}\\r\\n.nav-one{\\r\\n    height: 40px;\\r\\n    background-color:#2c3e50;\\r\\n}\\r\\n.nav-one-content{\\r\\n    height: 40px;\\r\\n    width: 80%;\\r\\n    margin: auto;\\r\\n    display: grid;          \\r\\n    grid-template-columns: max-content max-content  max-content max-content 1.4fr 0.3fr 0.3fr 0.3fr 0.3fr;\\r\\n    grid-template-rows: 40px;\\r\\n    grid-column-gap: 20px;\\r\\n    justify-content: space-between;\\r\\n    justify-items: center;\\r\\n}\\r\\n\\r\\n.nav-one-content div{\\r\\n    line-height: 40px;\\r\\n}\\r\\n.agent span,.customer span,.call span{\\r\\n    color:#ffffff;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.register span:nth-child(2){\\r\\n    color:#ffffff;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.register span:nth-child(3){\\r\\n    color:#1dd2af;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.nav-two{\\r\\n    height: 90px;\\r\\n    background-color: #ffffff;\\r\\n}\\r\\n.nav-two-content{\\r\\n    height: 90px;\\r\\n    width: 80%;\\r\\n    margin: auto;\\r\\n    display: grid; \\r\\n    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\\r\\n    grid-column-gap: 15px;\\r\\n    align-content: center;\\r\\n    justify-content: space-between;\\r\\n    justify-items: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.voyage{\\r\\n    justify-self: start;\\r\\n}\\r\\n.home span{\\r\\n    color: #1dd2af;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.destinations span,.criuses span,.specials span,.holidays span,.blog span{\\r\\n    color:#5d6e80;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.search{\\r\\n    justify-self: end;\\r\\n}\\r\\n\\r\\n.neck{\\r\\n    position: relative;\\r\\n    height: 800px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n} \\r\\n.neck:after,.neck:before{\\r\\n    content: \\\"\\\";\\r\\n    display: table;\\r\\n    clear:both;\\r\\n}\\r\\n.neck-content{\\r\\n    margin-top: 280px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.btn-1{\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n    text-align: center;\\r\\n    margin-top:20px;\\r\\n    background-color:rgba(116, 106, 106, 0.466);\\r\\n    font-size: 50px;\\r\\n    color: #92a2a8;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n.btn-2{\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n    line-height: 80px;\\r\\n    text-align: center;\\r\\n    margin-top:20px;\\r\\n    background-color:#1dd2af;\\r\\n    font-size: 50px;\\r\\n    color: #ffffff;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n.neck-content-center{\\r\\n    display: grid;\\r\\n    grid-template-rows: 50px 25px 60px;\\r\\n    grid-template-columns: max-content;\\r\\n    grid-row-gap: 20px;\\r\\n    align-items: center;\\r\\n    justify-items: center;\\r\\n}\\r\\n.neck-content-center p:nth-child(1){\\r\\n    font-size: 50px;\\r\\n    color: #ffffff;\\r\\n\\r\\n}\\r\\n.neck-content-center p:nth-child(2){\\r\\n    font-size: 25px;\\r\\n    color: #ffffff;\\r\\n    \\r\\n}\\r\\n.show-more {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.show-more span:nth-child(1){\\r\\n    display: block;\\r\\n    height: 42px;\\r\\n    width: 225px;\\r\\n    line-height: 42px;\\r\\n    text-align: center;\\r\\n    font-size: 20px;\\r\\n    color: #ffffff;\\r\\n    background-color: #1dd2af;\\r\\n    border-radius: 3px;\\r\\n    margin-right: 50px;\\r\\n}\\r\\n.show-more span:nth-child(2){\\r\\n    display: block;\\r\\n    height: 36px;\\r\\n    width: 160px;\\r\\n    line-height: 36px;\\r\\n    text-align: center;\\r\\n    font-size: 20px;\\r\\n    color: #ffffff;\\r\\n    border:3px #ffffff solid;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n.cover{\\r\\n    height: 105px;\\r\\n    margin-top: 240px;\\r\\n    background-color:#2c3e50 ;\\r\\n}\\r\\n\\r\\n.neck-bottom{\\r\\n    background-color: #2c3e50;\\r\\n    margin:0 auto;\\r\\n    width: 80%;\\r\\n    height: 105px;\\r\\n    left: 10%;\\r\\n    display: grid;\\r\\n    grid-template-columns: 2fr 1fr 4fr 1fr 4fr 2fr;\\r\\n    grid-column-gap: 30px;\\r\\n   align-items: center;\\r\\n}\\r\\n\\r\\n.find p:nth-child(1){\\r\\n    color: #9fb0c0;\\r\\n    font-size: 18px;\\r\\n}\\r\\n.find p:nth-child(2){\\r\\n    color: #ffffff;\\r\\n    font-size: 20px;\\r\\n}\\r\\n.when,.where{\\r\\n    color:#9fb0c0 ;\\r\\n    font-size: 18px;\\r\\n}\\r\\n.site,.date{\\r\\n    display: line-block;\\r\\n    width: 326px;\\r\\n    height: 40px;\\r\\n    background-color: #ffffff;\\r\\n    line-height: 40px;\\r\\n   \\r\\n    color: #a4a4a4;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n.site span,.date span{\\r\\n    margin-left: 12px;\\r\\n}\\r\\n.site img,.date img{\\r\\n    margin-top: 8px;\\r\\n    margin-left:200px;\\r\\n}\\r\\n.searching{\\r\\n    width: 110px;\\r\\n    height: 45px;\\r\\n    background-color: #1dd2af;\\r\\n    border-radius: 3px;\\r\\n    line-height: 45px;\\r\\n    text-align: center;\\r\\n    color: #ffffff;\\r\\n    font-size: 18px;\\r\\n}\\r\\n.body-summary{\\r\\n    margin-top: 55px;\\r\\n    text-align: center;\\r\\n}\\r\\n.body-summary p:nth-child(1){\\r\\n    text-align: center;\\r\\n    color: #2c3e50;\\r\\n    font-size: 25px;\\r\\n}\\r\\n.body-summary p:nth-child(2){\\r\\n   \\r\\n    text-align: center;\\r\\n    color: #626262;\\r\\n    font-size: 25px;\\r\\n}\\r\\n.body-pic{\\r\\n    margin-top: 109px;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\\r\\n    grid-column-gap: 30px;\\r\\n}\\r\\n.body-pic div{\\r\\n    border-radius: 3px;\\r\\n    border: 4px solid #eeeeee;\\r\\n    background-color: #eeeeee;\\r\\n    height: 250px;\\r\\n}\\r\\n.body-pic img{\\r\\n    width: 220px;\\r\\n    height: 183px;\\r\\n}\\r\\n.body-pic p{\\r\\n    margin-top: 10px;\\r\\n    color: #626262;\\r\\n    bottom: 0px;\\r\\n}\\r\\n.body-center{\\r\\n    margin-top: 150px;\\r\\n    height: 520px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n.type{\\r\\n    text-align: center;\\r\\n}\\r\\n.type p:nth-child(1){\\r\\n    padding-top: 80px;\\r\\n    color: #ffffff;\\r\\n    font-size: 25px;\\r\\n}\\r\\n.type p:nth-child(2){\\r\\n    color:#9eafc0;\\r\\n    font-size: 20px;\\r\\n}\\r\\n.icons{\\r\\n    padding-top: 150px;\\r\\n    margin: auto;\\r\\n    width: 80%;\\r\\n    display: grid;\\r\\n    grid-template-columns: max-content max-content max-content max-content max-content max-content;\\r\\n    grid-column-gap: 50px;\\r\\n}\\r\\n.icons img{\\r\\n    width: 160px;\\r\\n    height: 160px;\\r\\n\\r\\n}\\r\\n.clent{\\r\\n    text-align: center;\\r\\n    margin-top: 80px;\\r\\n}\\r\\n.clent p:nth-child(1){\\r\\n    color: #2c3e50;\\r\\n    font-size: 25px;\\r\\n    margin-top: 55px;\\r\\n}\\r\\n.clent p:nth-child(2){\\r\\n    color: #626262;\\r\\n    font-size: 20px;\\r\\n}\\r\\n.borad{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n    grid-column-gap: 20px;\\r\\n}\\r\\n.borad-div{\\r\\n    position: relative;\\r\\n    margin-top: 80px;\\r\\n    height: 145px;\\r\\n    width: 350px;\\r\\n    border: 2px solid #eeeeee;\\r\\n}\\r\\n.borad-div p:nth-child(1){\\r\\n    margin-top: 20px;\\r\\n    color: #4d4d4d;\\r\\n    margin-left: 3px;\\r\\n\\r\\n}\\r\\n.borad-div p:nth-child(2){\\r\\n    margin-top: 10px;\\r\\n    color:#1dd2af ;\\r\\n    font-size: 18px;\\r\\n    margin-left: 3px;\\r\\n}\\r\\n.borad-div p:nth-child(3){\\r\\n    margin-top: 10px;\\r\\n    color:#b2b2b2 ;\\r\\n    margin-left: 3px;\\r\\n}\\r\\n.triangle1{\\r\\n    width: 0px;\\r\\n    height: 0px;\\r\\n    margin-left: 280px;\\r\\n    border-left: 20px solid transparent;\\r\\n    border-right: 20px solid transparent;\\r\\n    border-bottom: 20px solid transparent;\\r\\n    border-top: 20px solid #ffffff;\\r\\n    margin-top: 20px;\\r\\n    position: absolute;\\r\\n    bottom:-40px;\\r\\n}\\r\\n.triangle2{\\r\\n    width: 0px;\\r\\n    height: 0px;\\r\\n    border-left: 22px solid transparent;\\r\\n    border-right: 22px solid transparent;\\r\\n    border-bottom: 22px solid transparent;\\r\\n    border-top: 22px solid #dedede;\\r\\n    margin-top: 20px;\\r\\n    margin-left: 278px;\\r\\n}\\r\\n.footer{\\r\\n    margin-top: 150px;\\r\\n    background-color: #2c3e50;\\r\\n    height: 450px;\\r\\n}\\r\\n.footer-layer1{\\r\\n    color: #1dd2af;\\r\\n    font-size: 25px;\\r\\n    padding: 64px;\\r\\n    width: 80%;\\r\\n    margin: auto;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n    grid-template-rows: 22px 130px;\\r\\n    grid-row-gap: 20px;\\r\\n    grid-column-gap: 50px;\\r\\n}\\r\\n#news{\\r\\n    color: #ffffff;\\r\\n    font-size: 16px;\\r\\n}\\r\\n#subscribe{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n#subscribe span:nth-child(1){\\r\\n    line-height: 33px;\\r\\n    font-size: 15px;\\r\\n    display: block;\\r\\n    line-height: 33px;\\r\\n    color: #626262;\\r\\n    background-color: #ffffff;\\r\\n    width: 150px;\\r\\n    height: 33px;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n#subscribe span:nth-child(2){\\r\\n    display: block;\\r\\n    width: 47px;\\r\\n    height: 33px;\\r\\n    border-radius: 3px;\\r\\n    color: #ffffff;\\r\\n    background-color: #1dd2af;\\r\\n    line-height: 33px;\\r\\n    text-align: center;\\r\\n}\\r\\n#latest{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 3fr;\\r\\n    grid-template-rows: 1fr 1fr;\\r\\n    grid-column-gap:10px;\\r\\n    grid-row-gap:30px;\\r\\n    justify-items: start;\\r\\n    align-items: flex-start;\\r\\n}\\r\\n#latest-1 p:nth-child(1),#latest-2 p:nth-child(1){\\r\\n    color: #ffffff;\\r\\n    font-size: 16px;\\r\\n}\\r\\n#latest-1 p:nth-child(2),#latest-2 p:nth-child(2){\\r\\n    color: #20b49c;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.tag {\\r\\n    color: #ffffff;\\r\\n    font-size: 16px;\\r\\n    display: grid;\\r\\n    grid-template-columns: 23px 23px 23px 23px 23px 23px 23px 23px 23px 23px 23px;\\r\\n   grid-template-rows: 30px 30px 30px 30px;\\r\\n    grid-column-gap: 10px;\\r\\n    grid-template-rows: 30px;\\r\\n    grid-gap: 5px;\\r\\n}\\r\\n.tag div{\\r\\n    border-radius: 3px;\\r\\n    border: 1px solid #ffffff;\\r\\n    height: 30px;\\r\\n    line-height: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n.tag div:nth-child(1){\\r\\n    grid-column: span 4;\\r\\n}\\r\\n.tag div:nth-child(2){\\r\\n    grid-column: span 6;\\r\\n}\\r\\n\\r\\n.tag div:nth-child(4){\\r\\n    grid-column: span 5;\\r\\n}\\r\\n.tag div:nth-child(5){\\r\\n    grid-column: span 3;\\r\\n}\\r\\n.tag div:nth-child(9){\\r\\n    grid-column: span 5;\\r\\n}\\r\\n.tag div:nth-child(10){\\r\\n    grid-column: span 3;\\r\\n}\\r\\n.tag div:nth-child(11){\\r\\n    grid-column: span 2;\\r\\n}\\r\\n.tag div:nth-child(13){\\r\\n    grid-column: span 2;\\r\\n}\\r\\n.tag div:nth-child(14){\\r\\n    grid-column: span 3;\\r\\n}\\r\\n.tag div:nth-child(15){\\r\\n    grid-column: span 4;\\r\\n}\\r\\n.address{\\r\\n    color: #ffffff;\\r\\n    font-size: 16px;\\r\\n}\\r\\n.email{\\r\\n    color: #1dd2af;\\r\\n}\\r\\n.iocns img{\\r\\n    width: 20px;\\r\\n    height: 22px;\\r\\n}\\r\\n.iocns{\\r\\n    margin: 20px;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n}\\r\\nhr{\\r\\n    margin-top: 30px;\\r\\n    border-bottom: none;\\r\\n}\\r\\n.footer-layer2{\\r\\n    margin: auto;\\r\\n    text-align: center;\\r\\n    background-color: #2c3e50;\\r\\n}\\r\\n.footer-layer2 p:nth-child(1){\\r\\n    margin-top: 35px;\\r\\n    color: #ffffff;\\r\\n}\\r\\n.footer-layer2 p:nth-child(2){\\r\\n    margin-top: 20px;\\r\\n    font-size: 15px;\\r\\n    color: #9dafc0;\\r\\n\\r\\n}\\r\\n.footer-img{\\r\\n    margin-top: 60px;\\r\\n    width: 50px;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/img/back-1.jpg":
/*!****************************!*\
  !*** ./src/img/back-1.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a0062af477fe632e79607b116f2e0f80.jpg\");\n\n//# sourceURL=webpack:///./src/img/back-1.jpg?");

/***/ }),

/***/ "./src/img/back-2.jpg":
/*!****************************!*\
  !*** ./src/img/back-2.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9418cf3bf832f29658e284fd1806594a.jpg\");\n\n//# sourceURL=webpack:///./src/img/back-2.jpg?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconsole.log('Hello');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });