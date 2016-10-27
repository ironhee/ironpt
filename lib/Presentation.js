'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Presentation = function Presentation(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style,
      slideIndex = _ref2.slideIndex;
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
    })
  );
};

Presentation.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired,
  slideIndex: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _radium2.default)(Presentation);


var styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  simple: {}
};