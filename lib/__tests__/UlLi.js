'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Controller = require('../Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _Presentation = require('../Presentation');

var _Presentation2 = _interopRequireDefault(_Presentation);

var _Slide = require('../Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Ul = require('../Ul');

var _Ul2 = _interopRequireDefault(_Ul);

var _Li = require('../Li');

var _Li2 = _interopRequireDefault(_Li);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders', function () {
  _reactTestRenderer2.default.create(_react2.default.createElement(
    _Controller2.default,
    null,
    _react2.default.createElement(
      _Presentation2.default,
      null,
      _react2.default.createElement(
        _Slide2.default,
        null,
        _react2.default.createElement(
          _Ul2.default,
          null,
          _react2.default.createElement(
            _Li2.default,
            null,
            'hello world'
          ),
          _react2.default.createElement(
            _Li2.default,
            null,
            'hello world'
          )
        )
      )
    )
  ));
});