'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H2 = function H2(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style;
  return _react2.default.createElement(
    'h3',
    {
      className: 'ironhee-pt__h2',
      style: [styles.base, styles[style]]
    },
    children
  );
};

H2.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(H2);


var styles = {
  base: {
    margin: 0,
    padding: 0
  },
  simple: {
    margin: '0 20px 20px 20px',
    padding: 0,
    fontSize: '2.5em',
    fontFamilly: 'helvetica',
    color: '#555'
  }
};