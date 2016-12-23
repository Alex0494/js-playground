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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _desc, _value, _class;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	//fluent
	function fluent(fn) {
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			fn.apply(this, args);
			return this;
		};
	}
	//ES7 @decorators
	function decorateWith(decorator) {
		return function (traget, name, descriptor) {
			descriptor.value = decorator.call(target, descriptor.value);
		};
	}
	
	var Person = (_dec = decorateWith(fluent), _dec2 = decorateWith(fluent), (_class = function () {
		function Person() {
			_classCallCheck(this, Person);
		}
	
		_createClass(Person, [{
			key: 'setName',
			value: function setName(first, last) {
				this.first = first;
				this.last = last;
			}
		}, {
			key: 'sayName',
			value: function sayName() {
				console.log(this.first, this.last);
			}
		}]);
	
		return Person;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'setName', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'setName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sayName', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'sayName'), _class.prototype)), _class));
	
	
	var p = new Person();
	p.setName('Jane', 'Doe').sayName().setName('John', 'Doe').sayName();
	
	//ES5
	function PersonES5() {
	
		this.name;
		this.surname;
	
		this.getName = function () {
			console.log(this.name, this.surname);
		};
	
		this.sayName = function (name, surname) {
			this.name = name;
			this.surname = surname;
		};
	}
	
	var pES5 = new PersonES5();
	pES5.sentName('Jane', 'Doe');
	pES5.sayName();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGMwNDE5N2I0ZGE5NmI2MzBiYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOlsiZmx1ZW50IiwiZm4iLCJhcmdzIiwiYXBwbHkiLCJkZWNvcmF0ZVdpdGgiLCJkZWNvcmF0b3IiLCJ0cmFnZXQiLCJuYW1lIiwiZGVzY3JpcHRvciIsInZhbHVlIiwiY2FsbCIsInRhcmdldCIsIlBlcnNvbiIsImZpcnN0IiwibGFzdCIsImNvbnNvbGUiLCJsb2ciLCJwIiwic2V0TmFtZSIsInNheU5hbWUiLCJQZXJzb25FUzUiLCJzdXJuYW1lIiwiZ2V0TmFtZSIsInBFUzUiLCJzZW50TmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0EsVUFBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0I7QUFDbkIsU0FBTyxZQUFtQjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDekJELE1BQUdFLEtBQUgsQ0FBUyxJQUFULEVBQWVELElBQWY7QUFDQSxVQUFPLElBQVA7QUFDQSxHQUhEO0FBSUE7QUFDRDtBQUNBLFVBQVNFLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQ2hDLFNBQU8sVUFBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLFVBQWYsRUFBOEI7QUFDcENBLGNBQVdDLEtBQVgsR0FBbUJKLFVBQVVLLElBQVYsQ0FBZUMsTUFBZixFQUF1QkgsV0FBV0MsS0FBbEMsQ0FBbkI7QUFDQSxHQUZEO0FBR0E7O0tBRUtHLE0sV0FDSlIsYUFBYUosTUFBYixDLFVBS0FJLGFBQWFKLE1BQWIsQzs7Ozs7OzsyQkFKT2EsSyxFQUFPQyxJLEVBQU07QUFDcEIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs2QkFFUztBQUNUQyxZQUFRQyxHQUFSLENBQVksS0FBS0gsS0FBakIsRUFBd0IsS0FBS0MsSUFBN0I7QUFDQTs7Ozs7OztBQUdGLEtBQU1HLElBQUksSUFBSUwsTUFBSixFQUFWO0FBQ0FLLEdBQUVDLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCQyxPQUF6QixHQUFtQ0QsT0FBbkMsQ0FBMkMsTUFBM0MsRUFBbUQsS0FBbkQsRUFBMERDLE9BQTFEOztBQUdBO0FBQ0EsVUFBU0MsU0FBVCxHQUFxQjs7QUFFbkIsT0FBS2IsSUFBTDtBQUNBLE9BQUtjLE9BQUw7O0FBRUEsT0FBS0MsT0FBTCxHQUFlLFlBQVc7QUFDeEJQLFdBQVFDLEdBQVIsQ0FBWSxLQUFLVCxJQUFqQixFQUF1QixLQUFLYyxPQUE1QjtBQUNELEdBRkQ7O0FBSUEsT0FBS0YsT0FBTCxHQUFlLFVBQVNaLElBQVQsRUFBZWMsT0FBZixFQUF3QjtBQUNyQyxRQUFLZCxJQUFMLEdBQVlBLElBQVo7QUFDQSxRQUFLYyxPQUFMLEdBQWVBLE9BQWY7QUFDRCxHQUhEO0FBS0Q7O0FBRUQsS0FBTUUsT0FBTyxJQUFJSCxTQUFKLEVBQWI7QUFDQUcsTUFBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsS0FBdEI7QUFDQUQsTUFBS0osT0FBTCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGMwNDE5N2I0ZGE5NmI2MzBiYTYiLCIvL2ZsdWVudFxuZnVuY3Rpb24gZmx1ZW50KGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxufVxuLy9FUzcgQGRlY29yYXRvcnNcbmZ1bmN0aW9uIGRlY29yYXRlV2l0aChkZWNvcmF0b3IpIHtcblx0cmV0dXJuICh0cmFnZXQsIG5hbWUsIGRlc2NyaXB0b3IpID0+IHtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gZGVjb3JhdG9yLmNhbGwodGFyZ2V0LCBkZXNjcmlwdG9yLnZhbHVlKVxuXHR9XG59XG5cbmNsYXNzIFBlcnNvbiB7XG5cdEBkZWNvcmF0ZVdpdGgoZmx1ZW50KVxuXHRzZXROYW1lKGZpcnN0LCBsYXN0KSB7XG5cdFx0dGhpcy5maXJzdCA9IGZpcnN0XG5cdFx0dGhpcy5sYXN0ID0gbGFzdFxuXHR9XG5cdEBkZWNvcmF0ZVdpdGgoZmx1ZW50KVxuXHRzYXlOYW1lKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZmlyc3QsIHRoaXMubGFzdClcblx0fVxufVxuXG5jb25zdCBwID0gbmV3IFBlcnNvblxucC5zZXROYW1lKCdKYW5lJywgJ0RvZScpLnNheU5hbWUoKS5zZXROYW1lKCdKb2huJywgJ0RvZScpLnNheU5hbWUoKVxuXG5cbi8vRVM1XG5mdW5jdGlvbiBQZXJzb25FUzUoKSB7XG5cbiAgdGhpcy5uYW1lXG4gIHRoaXMuc3VybmFtZVxuXG4gIHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgdGhpcy5zdXJuYW1lKVxuICB9XG5cbiAgdGhpcy5zYXlOYW1lID0gZnVuY3Rpb24obmFtZSwgc3VybmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnN1cm5hbWUgPSBzdXJuYW1lXG4gIH1cblxufVxuXG5jb25zdCBwRVM1ID0gbmV3IFBlcnNvbkVTNVxucEVTNS5zZW50TmFtZSgnSmFuZScsICdEb2UnKVxucEVTNS5zYXlOYW1lKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3JzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==