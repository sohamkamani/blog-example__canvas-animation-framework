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
	renderer.addComponent(new _Component2.default({
	  motion: motion,
	  drawing: square
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWM5ZjllMTMwY2YxMzMwZjg0YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2luZ3MvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Rpb25zL0xpbmVhck1vdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYixLQUFNLFFBQVEsR0FBRyx1QkFBYSxVQUFVLENBQUMsQ0FBQzs7QUFFMUMsS0FBSSxNQUFNLEdBQUcsMkJBQWlCO0FBQzVCLFNBQU0sRUFBRyxHQUFHO0FBQ1osd0JBQXFCLEVBQUcsRUFBRTtFQUMzQixDQUFDLENBQUM7QUFDSCxLQUFJLE1BQU0sR0FBRyxxQkFBVztBQUN0QixRQUFLLEVBQUcsRUFBRTtBQUNWLFNBQU0sRUFBRyxFQUFFO0FBQ1gsV0FBUSxFQUFHO0FBQ1QsTUFBQyxFQUFHLEdBQUc7QUFDUCxNQUFDLEVBQUcsRUFBRTtJQUNQO0VBQ0YsQ0FBQyxDQUFDO0FBQ0gsU0FBUSxDQUFDLFlBQVksQ0FBQyx3QkFBYztBQUNsQyxTQUFNLEVBQU4sTUFBTTtBQUNOLFVBQU8sRUFBRyxNQUFNO0VBQ2pCLENBQUMsQ0FBQyxDQUFDOztBQUVKLEtBQU0sTUFBTSxH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LFFBQVEsR0FDZCxJQUFJLENBREUsUUFBUTtPQUFFLEtBQUssR0FDckIsSUFBSSxDQURZLEtBQUs7T0FBRSxxQkFBcUIsR0FDNUMsSUFBSSxDQURtQixxQkFBcUI7O0FBRWhELE9BQUcsSUFBSSxDQUFDLGVBQWUsRUFBQztBQUN0QixhQUFRLElBQUksS0FBSyxDQUFDO0lBQ25CLE1BQU07QUFDTCxhQUFRLElBQUksS0FBSyxDQUFDO0lBQ25COztBQUVELE9BQUkseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDNUQsT0FBRyx5QkFBeUIsSUFBSSxxQkFBcUIsRUFBRTtBQUNyRCxTQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5Qzs7QUFFRCxPQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztFQUMxQixDQUFDOztBQUVGLGFBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsWUFBVTtBQUNwRCxPQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3RCLFVBQU87QUFDTCxNQUFDLEVBQUQsQ0FBQztJQUNGLENBQUM7RUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYWM5ZjllMTMwY2YxMzMwZjg0YTFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IFNxdWFyZSBmcm9tICcuL2RyYXdpbmdzL1NxdWFyZSc7XG5pbXBvcnQgTGluZWFyTW90aW9uIGZyb20gJy4vbW90aW9ucy9MaW5lYXJNb3Rpb24nO1xuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcignbXlDYW52YXMnKTtcblxubGV0IG1vdGlvbiA9IG5ldyBMaW5lYXJNb3Rpb24oe1xuICBjZW50ZXIgOiAxMDAsXG4gIG1heERpc3RhbmNlRnJvbUNlbnRlciA6IDUwXG59KTtcbmxldCBzcXVhcmUgPSBuZXcgU3F1YXJlKHtcbiAgd2lkdGggOiAyNSxcbiAgaGVpZ2h0IDogMjUsXG4gIHBvc2l0aW9uIDoge1xuICAgIHggOiAxMDAsXG4gICAgeSA6IDEwXG4gIH1cbn0pO1xucmVuZGVyZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoe1xuICBtb3Rpb24sXG4gIGRyYXdpbmcgOiBzcXVhcmVcbn0pKTtcblxuY29uc3QgcmVuZGVyID0gKCk9PntcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIHJlbmRlcmVyLnVwZGF0ZSgpO1xuICByZW5kZXJlci5wYWludCgpO1xufTtcbnJlbmRlcigpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmxldCBSZW5kZXJlciA9IGZ1bmN0aW9uKGNhbnZhc0lkKXtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY2FudmFzID0gY2FudmFzO1xuICBzZWxmLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBzZWxmLmNvbXBvbmVudHMgPSBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG5cblJlbmRlcmVyLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihkcmF3T2JqZWN0KXtcbiAgdGhpcy5jb21wb25lbnRzLnB1c2goZHJhd09iamVjdCk7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goZHJhd09iamVjdCA9PiB7XG4gICAgZHJhd09iamVjdC51cGRhdGUoKTtcbiAgfSk7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFpbnQgPSBmdW5jdGlvbigpe1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY3R4LmNsZWFyUmVjdCgwLDAsc2VsZi5jYW52YXMud2lkdGgsc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29tcG9uZW50LmRyYXcoc2VsZi5jdHgpO1xuICB9KTtcbiAgc2VsZi5jdHguc3Ryb2tlKCk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5cbmxldCBDb21wb25lbnQgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKXtcbiAgbGV0IHttb3Rpb24sIGRyYXdpbmd9ID0gdGhpcztcbiAgbW90aW9uLm1vdmUoKTtcbiAgYXNzaWduKGRyYXdpbmcucG9zaXRpb24gLG1vdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKSk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBsZXQge2RyYXdpbmd9ID0gdGhpcztcbiAgZHJhd2luZy5kcmF3KGN0eCk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5sZXQgU3F1YXJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgbGV0IHNlbGYgPSB0aGlzO1xuICBhc3NpZ24oc2VsZiwgb3B0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFyZTtcblxuU3F1YXJlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHgucmVjdChzZWxmLnBvc2l0aW9uLngsIHNlbGYucG9zaXRpb24ueSwgc2VsZi53aWR0aCwgc2VsZi5oZWlnaHQpO1xuICBjdHguZmlsbCgpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RyYXdpbmdzL1NxdWFyZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcblxubGV0IExpbmVhck1vdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgdGhpcy5pc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSB8fCB0aGlzLmNlbnRlciA7XG4gIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkIHx8IDIgO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lYXJNb3Rpb247XG5cbkxpbmVhck1vdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHtcbiAgICBjZW50ZXIsIGRpc3RhbmNlLCBzcGVlZCwgbWF4RGlzdGFuY2VGcm9tQ2VudGVyXG4gIH0gPSB0aGlzO1xuICBpZih0aGlzLmlzTW92aW5nRm9yd2FyZCl7XG4gICAgZGlzdGFuY2UgKz0gc3BlZWQ7XG4gIH0gZWxzZSB7XG4gICAgZGlzdGFuY2UgLT0gc3BlZWQ7XG4gIH1cblxuICBsZXQgY3VycmVudERpc3RhbmNlRnJvbUNlbnRlciA9IE1hdGguYWJzKGNlbnRlciAtIGRpc3RhbmNlKTtcbiAgaWYoY3VycmVudERpc3RhbmNlRnJvbUNlbnRlciA+PSBtYXhEaXN0YW5jZUZyb21DZW50ZXIgKXtcbiAgICB0aGlzLmlzTW92aW5nRm9yd2FyZCA9ICF0aGlzLmlzTW92aW5nRm9yd2FyZDtcbiAgfVxuXG4gIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbn07XG5cbkxpbmVhck1vdGlvbi5wcm90b3R5cGUuZ2V0Q3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24oKXtcbiAgbGV0IHggPSB0aGlzLmRpc3RhbmNlO1xuICByZXR1cm4ge1xuICAgIHhcbiAgfTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb3Rpb25zL0xpbmVhck1vdGlvbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=