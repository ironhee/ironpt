'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pragraph = function Pragraph(_ref, _ref2) {
  var children = _ref.children;
  var style = _ref2.style;
  return _react2.default.createElement(
    'p',
    {
      className: 'ironhee-pt__paragraph',
      style: [styles.base, styles[style]]
    },
    children
  );
};

Pragraph.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _radium2.default)(Pragraph);


var styles = {
  base: {
    margin: 0,
    padding: 0
  },
  simple: {
    margin: '10px 20px',
    fontSize: '2em',
    fontFamilly: 'helvetica'
  }
};