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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/board/AttackBoard.js":
/*!****************************************!*\
  !*** ./assets/js/board/AttackBoard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./assets/js/board/Board.js");


class AttackBoard extends _Board__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(rootElm) {
    super(rootElm);
    this.addEventClick(); // add event on click
  }

  addEventClick() {
    const cells = this.table.querySelectorAll('td');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log({
          posX: cell.dataset.x,
          posY: cell.dataset.y
        });
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AttackBoard);

/***/ }),

/***/ "./assets/js/board/Board.js":
/*!**********************************!*\
  !*** ./assets/js/board/Board.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Board {
  constructor(rootElm, boardSize = 10) {
    this.cellByRow = boardSize;
    this.tBody = null;
    this.wrapper = document.createElement('div');
    this.table = document.createElement('table');

    this._create(rootElm);
  }

  addClass(className) {
    this.table.classList.add(className);
  } // Create table elments


  _create(rootElm) {
    this.wrapper.classList.add('wrapper');
    this.wrapper.appendChild(this.table);
    this.addClass('board'); // add class to table

    const tHead = this.table.createTHead();
    const tBody = this.table.createTBody();
    this.tBody = tBody; // thead

    let tr = this.table.insertRow();

    for (let i = 0; i < this.cellByRow; i++) {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      const heading = String.fromCharCode(65 + i);
      th.appendChild(document.createTextNode(heading));
      tr.appendChild(th);
    }

    tHead.appendChild(tr); // tBody

    for (let y = 0; y < this.cellByRow; y++) {
      const tr = this.table.insertRow(y);

      for (let x = 0; x < this.cellByRow; x++) {
        const td = tr.insertCell(x);
        const div = document.createElement('div');
        div.classList.add('square');
        td.appendChild(div);
        td.dataset.x = x;
        td.dataset.y = y + 1;
      }

      tBody.appendChild(tr);
    }

    rootElm.appendChild(this.wrapper); // add table to dom root element
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./assets/js/board/ShipBoard.js":
/*!**************************************!*\
  !*** ./assets/js/board/ShipBoard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./assets/js/board/Board.js");


class ShipBoard extends _Board__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(rootElm) {
    super(rootElm);
    this.tBody.id = 'shipBoard';
  }

  addShip() {}

  removeShip() {}

}

/* harmony default export */ __webpack_exports__["default"] = (ShipBoard);

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_AttackBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/AttackBoard */ "./assets/js/board/AttackBoard.js");
/* harmony import */ var _board_ShipBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/ShipBoard */ "./assets/js/board/ShipBoard.js");
/* harmony import */ var _rules_Rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/Rules */ "./assets/js/rules/Rules.js");



const app = document.getElementById('app'); // const boardSize = 10
// exemple

const matrix = [[1, 1, 1, 1, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]];
const shipBoard = new _board_ShipBoard__WEBPACK_IMPORTED_MODULE_1__["default"](app);
shipBoard.addClass('blue');
const attackBoard = new _board_AttackBoard__WEBPACK_IMPORTED_MODULE_0__["default"](app);
attackBoard.addClass('red'); // const rules = new Rules()
// console.log(rules.matrix)

/***/ }),

/***/ "./assets/js/rules/Rules.js":
/*!**********************************!*\
  !*** ./assets/js/rules/Rules.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Rules {
  constructor(boardSize = 10) {
    this.boardSize = boardSize;
    this.matrix = null;
    this.createMatrix();
  }

  createMatrix() {
    const matrix = [];
    const size = this.boardSize;

    for (let y = 0; y < size; y++) {
      const row = [];

      for (let x = 0; x < size; x++) {
        row.push([0]);
      }

      matrix.push(row);
    }

    this.matrix = matrix;
  }

  placeShip() {
    const martix = this.matrix;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rules);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map