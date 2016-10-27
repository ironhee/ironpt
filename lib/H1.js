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

var H1 = function H1(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style;
  return _react2.default.createElement(
    'h2',
    {
      className: 'ironhee-pt__h1',
      style: [styles.base, styles[style]]
    },
    children
  );
};

H1.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(H1);


var styles = (_styles = {
  base: {
    margin: 0,
    padding: 0
  }
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  margin: '0 20px 30px 20px',
  fontSize: '4em',
  borderBottom: '1px solid #555'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  margin: '0 20px 30px 20px',
  fontSize: '4em',
  color: '#f44'
}), _styles);