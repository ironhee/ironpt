'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _codeStyles, _styles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSyntaxHighlighter = require('react-syntax-highlighter');

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _styles2 = require('react-syntax-highlighter/dist/styles');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Code = function Code(_ref, _ref2) {
  var children = _ref.children,
      language = _ref.language;
  var style = _ref2.style;
  return _react2.default.createElement(
    _reactSyntaxHighlighter2.default,
    {
      language: language,
      style: codeStyles[style],
      codeTagProps: {
        style: Object.assign({}, styles.base, styles[style])
      }
    },
    children
  );
};

Code.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = Code;


var codeStyles = (_codeStyles = {}, _defineProperty(_codeStyles, _constants.STYLES.SIMPLE, _styles2.xcode), _defineProperty(_codeStyles, _constants.STYLES.DEVELOPER, _styles2.xt256), _codeStyles);

var styles = (_styles = {
  base: {}
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  margin: '10px 20px',
  fontFamily: 'monospace',
  fontSize: '24px'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  margin: '10px 20px'
}), _styles);