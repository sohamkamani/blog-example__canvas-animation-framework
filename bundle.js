/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Renderer = __webpack_require__(2);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Square = __webpack_require__(5);
	
	var _Square2 = _interopRequireDefault(_Square);
	
	var _LinearMotion = __webpack_require__(6);
	
	var _LinearMotion2 = _interopRequireDefault(_LinearMotion);
	
	var _SpringMotion = __webpack_require__(7);
	
	var _SpringMotion2 = _interopRequireDefault(_SpringMotion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var renderer = new _Renderer2.default('myCanvas');
	
	var motion = new _LinearMotion2.default({
	  center: 100,
	  maxDistanceFromCenter: 50
	});
	
	var square = new _Square2.default({
	  width: 25,
	  height: 25,
	  position: {
	    x: 100,
	    y: 10
	  }
	});
	
	var springSquare = new _Square2.default({
	  width: 25,
	  height: 25,
	  position: {
	    x: 100,
	    y: 40
	  }
	});
	
	var springMotion = new _SpringMotion2.default({
	  center: 100,
	  s: 150,
	  k: 3e-3
	});
	
	renderer.addComponent(new _Component2.default({
	  motion: motion,
	  drawing: square
	}));
	
	renderer.addComponent(new _Component2.default({
	  motion: springMotion,
	  drawing: springSquare
	}));
	
	var render = function render() {
	  requestAnimationFrame(render);
	  renderer.update();
	  renderer.paint();
	};
	render();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var Renderer = function Renderer(canvasId) {
	  var canvas = document.getElementById(canvasId);
	  var self = this;
	  self.canvas = canvas;
	  self.ctx = canvas.getContext('2d');
	  self.components = [];
	};
	
	module.exports = Renderer;
	
	Renderer.prototype.addComponent = function (drawObject) {
	  this.components.push(drawObject);
	};
	
	Renderer.prototype.update = function () {
	  this.components.forEach(function (drawObject) {
	    drawObject.update();
	  });
	};
	
	Renderer.prototype.paint = function () {
	  var self = this;
	  self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
	  self.ctx.beginPath();
	  this.components.forEach(function (component) {
	    component.draw(self.ctx);
	  });
	  self.ctx.stroke();
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Component = function Component(options) {
	  (0, _objectAssign2.default)(this, options);
	};
	
	module.exports = Component;
	
	Component.prototype.update = function () {
	  var motion = this.motion;
	  var drawing = this.drawing;
	
	  motion.move();
	  (0, _objectAssign2.default)(drawing.position, motion.getCurrentPosition());
	};
	
	Component.prototype.draw = function (ctx) {
	  var drawing = this.drawing;
	
	  drawing.draw(ctx);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Square = function Square(options) {
	  var self = this;
	  (0, _objectAssign2.default)(self, options);
	};
	
	module.exports = Square;
	
	Square.prototype.draw = function (ctx) {
	  var self = this;
	  ctx.fillStyle = 'black';
	  ctx.rect(self.position.x, self.position.y, self.width, self.height);
	  ctx.fill();
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LinearMotion = function LinearMotion(options) {
	  (0, _objectAssign2.default)(this, options);
	  this.isMovingForward = true;
	  this.distance = this.distance || this.center;
	  this.speed = this.speed || 2;
	};
	
	module.exports = LinearMotion;
	
	LinearMotion.prototype.move = function () {
	  var center = this.center;
	  var distance = this.distance;
	  var speed = this.speed;
	  var maxDistanceFromCenter = this.maxDistanceFromCenter;
	
	  if (this.isMovingForward) {
	    distance += speed;
	  } else {
	    distance -= speed;
	  }
	
	  var currentDistanceFromCenter = Math.abs(center - distance);
	  if (currentDistanceFromCenter >= maxDistanceFromCenter) {
	    this.isMovingForward = !this.isMovingForward;
	  }
	
	  this.distance = distance;
	};
	
	LinearMotion.prototype.getCurrentPosition = function () {
	  var x = this.distance;
	  return {
	    x: x
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SpringMotion = function SpringMotion(options) {
	  (0, _objectAssign2.default)(this, options);
	};
	
	module.exports = SpringMotion;
	
	SpringMotion.prototype.move = function () {
	  var a = this.a;
	  var v = this.v;
	  var s = this.s;
	  var center = this.center;
	  var k = this.k;
	
	  v = v || 0;
	  var distanceFromCenter = center - s;
	  a = k * distanceFromCenter;
	  v += a;
	  s += v;
	  (0, _objectAssign2.default)(this, { a: a, v: v, s: s });
	};
	
	SpringMotion.prototype.getCurrentPosition = function () {
	  var s = this.s;
	
	  return {
	    x: s
	  };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmUwYjExNmQ4YzBlMDUwY2E2ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2luZ3MvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Rpb25zL0xpbmVhck1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW90aW9ucy9TcHJpbmdNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLEtBQU0sUUFBUSxHQUFHLHVCQUFhLFVBQVUsQ0FBQyxDQUFDOztBQUUxQyxLQUFJLE1BQU0sR0FBRywyQkFBaUI7QUFDNUIsU0FBTSxFQUFHLEdBQUc7QUFDWix3QkFBcUIsRUFBRyxFQUFFO0VBQzNCLENBQUMsQ0FBQzs7QUFFSCxLQUFJLE1BQU0sR0FBRyxxQkFBVztBQUN0QixRQUFLLEVBQUcsRUFBRTtBQUNWLFNBQU0sRUFBRyxFQUFFO0FBQ1gsV0FBUSxFQUFHO0FBQ1QsTUFBQyxFQUFHLEdBQUc7QUFDUCxNQUFDLEVBQUcsRUFBRTtJQUNQO0VBQ0YsQ0FBQyxDQUFDOztBQUVILEtBQUksWUFBWSxHQUFHLHFCQUFXO0FBQzVCLFFBQUssRUFBRyxFQUFFO0FBQ1YsU0FBTSxFQUFH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LENBQUM7SUFDRixDQUFDO0VBQ0gsQzs7Ozs7O0FDcENELGFBQVksQ0FBQzs7Ozs7Ozs7QUFHYixLQUFJLFlBQVksR0FBRyxTQUFmLFlBQVksQ0FBWSxPQUFPLEVBQUM7QUFDbEMsK0JBQU8sSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZCLENBQUM7O0FBRUYsT0FBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7O0FBRTlCLGFBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVU7T0FDakMsQ0FBQyxHQUFxQixJQUFJLENBQTFCLENBQUM7T0FBRSxDQUFDLEdBQWtCLElBQUksQ0FBdkIsQ0FBQztPQUFFLENBQUMsR0FBZSxJQUFJLENBQXBCLENBQUM7T0FBRSxNQUFNLEdBQU8sSUFBSSxDQUFqQixNQUFNO09BQUUsQ0FBQyxHQUFJLElBQUksQ0FBVCxDQUFDOztBQUN2QixJQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNYLE9BQUksa0JBQWtCLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBRTtBQUNyQyxJQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0FBQzNCLElBQUMsSUFBSSxDQUFDLENBQUM7QUFDUCxJQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1AsK0JBQU8sSUFBSSxFQUFDLEVBQUMsQ0FBQyxFQUFELENBQUMsRUFBRSxDQUFDLEVBQUQsQ0FBQyxFQUFFLENBQUMsRUFBRCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7O0FBRUYsYUFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxZQUFVO09BQy9DLENBQUMsR0FBSSxJQUFJLENBQVQsQ0FBQzs7QUFDTixVQUFPO0FBQ0wsTUFBQyxFQUFHLENBQUM7SUFDTixDQUFDO0VBQ0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGZlMGIxMTZkOGMwZTA1MGNhNmY1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9SZW5kZXJlcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9kcmF3aW5ncy9TcXVhcmUnO1xuaW1wb3J0IExpbmVhck1vdGlvbiBmcm9tICcuL21vdGlvbnMvTGluZWFyTW90aW9uJztcbmltcG9ydCBTcHJpbmdNb3Rpb24gZnJvbSAnLi9tb3Rpb25zL1NwcmluZ01vdGlvbic7XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCdteUNhbnZhcycpO1xuXG5sZXQgbW90aW9uID0gbmV3IExpbmVhck1vdGlvbih7XG4gIGNlbnRlciA6IDEwMCxcbiAgbWF4RGlzdGFuY2VGcm9tQ2VudGVyIDogNTBcbn0pO1xuXG5sZXQgc3F1YXJlID0gbmV3IFNxdWFyZSh7XG4gIHdpZHRoIDogMjUsXG4gIGhlaWdodCA6IDI1LFxuICBwb3NpdGlvbiA6IHtcbiAgICB4IDogMTAwLFxuICAgIHkgOiAxMFxuICB9XG59KTtcblxubGV0IHNwcmluZ1NxdWFyZSA9IG5ldyBTcXVhcmUoe1xuICB3aWR0aCA6IDI1LFxuICBoZWlnaHQgOiAyNSxcbiAgcG9zaXRpb24gOiB7XG4gICAgeCA6IDEwMCxcbiAgICB5IDogNDBcbiAgfVxufSk7XG5cbmxldCBzcHJpbmdNb3Rpb24gPSBuZXcgU3ByaW5nTW90aW9uKHtcbiAgICBjZW50ZXI6IDEwMCxcbiAgICBzOiAxNTAsXG4gICAgazogM2UtM1xuICB9KTtcblxucmVuZGVyZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoe1xuICBtb3Rpb24sXG4gIGRyYXdpbmcgOiBzcXVhcmVcbn0pKTtcblxucmVuZGVyZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoe1xuICBtb3Rpb24gOiBzcHJpbmdNb3Rpb24sXG4gIGRyYXdpbmcgOiBzcHJpbmdTcXVhcmVcbn0pKTtcblxuY29uc3QgcmVuZGVyID0gKCk9PntcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIHJlbmRlcmVyLnVwZGF0ZSgpO1xuICByZW5kZXJlci5wYWludCgpO1xufTtcbnJlbmRlcigpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmxldCBSZW5kZXJlciA9IGZ1bmN0aW9uKGNhbnZhc0lkKXtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY2FudmFzID0gY2FudmFzO1xuICBzZWxmLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBzZWxmLmNvbXBvbmVudHMgPSBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG5cblJlbmRlcmVyLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihkcmF3T2JqZWN0KXtcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goZHJhd09iamVjdCk7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZHJhd09iamVjdCA9PiB7XG4gICAgZHJhd09iamVjdC51cGRhdGUoKTtcbiAgfSk7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFpbnQgPSBmdW5jdGlvbigpe1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY3R4LmNsZWFyUmVjdCgwLDAsc2VsZi5jYW52YXMud2lkdGgsc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29tcG9uZW50LmRyYXcoc2VsZi5jdHgpO1xuICB9KTtcbiAgc2VsZi5jdHguc3Ryb2tlKCk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5cbmxldCBDb21wb25lbnQgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgbGV0IHttb3Rpb24sIGRyYXdpbmd9ID0gdGhpcztcbiAgbW90aW9uLm1vdmUoKTtcbiAgYXNzaWduKGRyYXdpbmcucG9zaXRpb24gLG1vdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKSk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBsZXQge2RyYXdpbmd9ID0gdGhpcztcbiAgZHJhd2luZy5kcmF3KGN0eCk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5sZXQgU3F1YXJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgbGV0IHNlbGYgPSB0aGlzO1xuICBhc3NpZ24oc2VsZiwgb3B0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFyZTtcblxuU3F1YXJlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHgucmVjdChzZWxmLnBvc2l0aW9uLngsIHNlbGYucG9zaXRpb24ueSwgc2VsZi53aWR0aCwgc2VsZi5oZWlnaHQpO1xuICBjdHguZmlsbCgpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RyYXdpbmdzL1NxdWFyZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcblxubGV0IExpbmVhck1vdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgdGhpcy5pc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSB8fCB0aGlzLmNlbnRlciA7XG4gIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkIHx8IDIgO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lYXJNb3Rpb247XG5cbkxpbmVhck1vdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHtcbiAgICBjZW50ZXIsIGRpc3RhbmNlLCBzcGVlZCwgbWF4RGlzdGFuY2VGcm9tQ2VudGVyXG4gIH0gPSB0aGlzO1xuICBpZih0aGlzLmlzTW92aW5nRm9yd2FyZCl7XG4gICAgZGlzdGFuY2UgKz0gc3BlZWQ7XG4gIH0gZWxzZSB7XG4gICAgZGlzdGFuY2UgLT0gc3BlZWQ7XG4gIH1cblxuICBsZXQgY3VycmVudERpc3RhbmNlRnJvbUNlbnRlciA9IE1hdGguYWJzKGNlbnRlciAtIGRpc3RhbmNlKTtcbiAgaWYoY3VycmVudERpc3RhbmNlRnJvbUNlbnRlciA+PSBtYXhEaXN0YW5jZUZyb21DZW50ZXIgKXtcbiAgICB0aGlzLmlzTW92aW5nRm9yd2FyZCA9ICF0aGlzLmlzTW92aW5nRm9yd2FyZDtcbiAgfVxuXG4gIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbn07XG5cbkxpbmVhck1vdGlvbi5wcm90b3R5cGUuZ2V0Q3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24oKXtcbiAgbGV0IHggPSB0aGlzLmRpc3RhbmNlO1xuICByZXR1cm4ge1xuICAgIHhcbiAgfTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb3Rpb25zL0xpbmVhck1vdGlvbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5cbmxldCBTcHJpbmdNb3Rpb24gPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpbmdNb3Rpb247XG5cblNwcmluZ01vdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKCl7XG4gIGxldCB7YSwgdiwgcywgY2VudGVyLCBrfSA9IHRoaXM7XG4gIHYgPSB2IHx8IDA7XG4gIGxldCBkaXN0YW5jZUZyb21DZW50ZXIgPSBjZW50ZXIgLSBzIDtcbiAgYSA9IGsgKiBkaXN0YW5jZUZyb21DZW50ZXI7XG4gIHYgKz0gYTtcbiAgcyArPSB2O1xuICBhc3NpZ24odGhpcyx7YSwgdiwgc30pO1xufTtcblxuU3ByaW5nTW90aW9uLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zaXRpb24gPSBmdW5jdGlvbigpe1xuICBsZXQge3N9ID0gdGhpcztcbiAgcmV0dXJuIHtcbiAgICB4IDogc1xuICB9O1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vdGlvbnMvU3ByaW5nTW90aW9uLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==