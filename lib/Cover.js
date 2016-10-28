'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cover = function Cover(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style;
  return _react2.default.createElement(
    'div',
    {
      className: 'ironpt__cover',
      style: [styles.base, styles[style]]
    },
    children
  );
};

Cover.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(Cover);


var styles = _defineProperty({
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  }
}, _constants.STYLES.SIMPLE, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});