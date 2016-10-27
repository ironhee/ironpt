'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles, _indexStyle;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Presentation = function Presentation(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style,
      slideIndex = _ref2.slideIndex,
      slideLength = _ref2.slideLength;
  return _react2.default.createElement(
    'div',
    {
      className: 'ironhee-pt__presentation',
      style: [styles.base, styles[style]]
    },
    [].concat(children).map(function (child, index) {
      return _react2.default.createElement(child.type, _extends({
        key: index
      }, child.props, {
        isActive: slideIndex === index
      }));
    }),
    _react2.default.createElement(
      'div',
      {
        style: [indexStyle.base, indexStyle[style]]
      },
      slideIndex + 1,
      ' / ',
      slideLength
    )
  );
};

Presentation.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired,
  slideIndex: _react2.default.PropTypes.number.isRequired,
  slideLength: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _radium2.default)(Presentation);


var styles = (_styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  }
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  fontFamily: 'helvetica',
  color: 'black'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  fontFamily: 'monospace',
  color: 'white'
}), _styles);

var indexStyle = (_indexStyle = {
  base: {}
}, _defineProperty(_indexStyle, _constants.STYLES.SIMPLE, {
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  fontSize: '1.5em'
}), _defineProperty(_indexStyle, _constants.STYLES.DEVELOPER, {
  bottom: 0,
  width: '100%',
  textAlign: 'right',
  position: 'absolute',
  fontSize: '1.5em'
}), _indexStyle);