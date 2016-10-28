'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles, _codeStyles, _syntaxStyles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    'div',
    {
      className: 'ironpt__code',
      style: [styles.base, styles[style]]
    },
    _react2.default.createElement(
      _reactSyntaxHighlighter2.default,
      {
        language: language,
        style: syntaxStyles[style],
        codeTagProps: {
          style: Object.assign({}, codeStyles.base, codeStyles[style])
        }
      },
      children
    )
  );
};

Code.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(Code);


var styles = (_styles = {
  base: {}
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  margin: '10px 20px'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  margin: '10px 20px'
}), _styles);

var codeStyles = (_codeStyles = {
  base: {}
}, _defineProperty(_codeStyles, _constants.STYLES.SIMPLE, {
  fontFamily: 'monospace',
  fontSize: '24px'
}), _defineProperty(_codeStyles, _constants.STYLES.DEVELOPER, {
  fontFamily: 'monospace',
  fontSize: '24px'
}), _codeStyles);

var syntaxStyles = (_syntaxStyles = {}, _defineProperty(_syntaxStyles, _constants.STYLES.SIMPLE, _styles2.xcode), _defineProperty(_syntaxStyles, _constants.STYLES.DEVELOPER, _styles2.xt256), _syntaxStyles);