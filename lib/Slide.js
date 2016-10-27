'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Slide = function Slide(_ref, _ref2) {
  var children = _ref.children,
      isActive = _ref.isActive;
  var style = _ref2.style;
  return _react2.default.createElement(
    'div',
    {
      className: 'ironhee-pt__slide',
      style: [styles.base, styles[style]].concat(_toConsumableArray(isActive ? [] : [styles.inactive]))
    },
    children
  );
};

Slide.propTypes = {
  isActive: _react2.default.PropTypes.bool
};

Slide.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(Slide);


var styles = (_styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  }
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  background: '#fff',
  padding: '40px'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  background: '#222',
  color: '#fff',
  padding: '40px'
}), _defineProperty(_styles, 'inactive', {
  display: 'none'
}), _styles);