'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _constants = require('./constants');

var _Scale = require('./Scale');

var _Scale2 = _interopRequireDefault(_Scale);

var _SlideIndex = require('./SlideIndex');

var _SlideIndex2 = _interopRequireDefault(_SlideIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Presentation = function (_Component) {
  _inherits(Presentation, _Component);

  function Presentation() {
    _classCallCheck(this, Presentation);

    return _possibleConstructorReturn(this, (Presentation.__proto__ || Object.getPrototypeOf(Presentation)).apply(this, arguments));
  }

  _createClass(Presentation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.$slides) return;
      this.scrollToSlide();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.$slides) return;
      this.scrollToSlide();
    }
  }, {
    key: 'scrollToSlide',
    value: function scrollToSlide() {
      if (!this.$slides) return;
      var slideIndex = this.context.slideIndex;

      this.$slides.scrollTop = 700 * slideIndex;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _context = this.context,
          style = _context.style,
          slideIndex = _context.slideIndex;

      return _react2.default.createElement(
        'div',
        {
          className: 'ironhee-pt__presentation',
          style: [styles.base, styles[style]]
        },
        _react2.default.createElement(
          _Scale2.default,
          {
            width: 960,
            height: 700,
            minScale: 0.2,
            maxScale: 1.5
          },
          _react2.default.createElement(
            'div',
            {
              className: 'ironhee-pt__slides',
              style: slidesStyle,
              ref: function ref(c) {
                _this2.$slides = c;
              }
            },
            children
          ),
          _react2.default.createElement(_SlideIndex2.default, {
            slideIndex: slideIndex,
            slideLength: children.length
          })
        )
      );
    }
  }]);

  return Presentation;
}(_react.Component);

Presentation.contextTypes = {
  style: _react2.default.PropTypes.string.isRequired,
  slideIndex: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _radium2.default)(Presentation);


var styles = (_styles = {
  base: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
}, _defineProperty(_styles, _constants.STYLES.SIMPLE, {
  fontFamily: 'helvetica',
  background: '#fff',
  color: 'black'
}), _defineProperty(_styles, _constants.STYLES.DEVELOPER, {
  fontFamily: 'monospace',
  background: '#222',
  color: 'white'
}), _styles);

var slidesStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};