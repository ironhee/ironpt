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

var SlideIndex = function SlideIndex(_ref, _ref2) {
  var slideIndex = _ref.slideIndex,
      slideLength = _ref.slideLength;
  var style = _ref2.style;
  return _react2.default.createElement(
    'div',
    {
      style: [styles.base, styles[style]]
    },
    _react2.default.createElement(
      'span',
      {
        style: { display: 'inline-block' }
      },
      slideIndex + 1,
      ' / ',
      slideLength
    )
  );
};

SlideIndex.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(SlideIndex);


var styles = (_styles = {}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  fontSize: '1.5em'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  textAlign: 'right',
  fontSize: '1.5em'
}), _styles);