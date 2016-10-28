'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles, _indexStyle;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Presentation = function (_Component) {
  _inherits(Presentation, _Component);

  function Presentation(props) {
    _classCallCheck(this, Presentation);

    var _this = _possibleConstructorReturn(this, (Presentation.__proto__ || Object.getPrototypeOf(Presentation)).call(this, props));

    _this.state = { scale: '1' };
    return _this;
  }

  _createClass(Presentation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.$presentation) return;
      var scale = this.getSlidesScale();
      this.setState({ scale: scale });
      this.scrollToSlide();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
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
    key: 'getSlidesScale',
    value: function getSlidesScale() {
      if (!this.$presentation || !this.$slides) return 1;

      var minScale = 0.2;
      var maxScale = 1.5;
      var scale = Math.min(this.$presentation.offsetWidth / this.$slides.offsetWidth, this.$presentation.offsetHeight / this.$slides.offsetHeight);
      scale = Math.max(scale, minScale);
      scale = Math.min(scale, maxScale);
      return scale || 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var scale = this.state.scale;
      var children = this.props.children;
      var _context = this.context,
          style = _context.style,
          slideIndex = _context.slideIndex;

      return _react2.default.createElement(
        'div',
        {
          className: 'ironhee-pt__presentation',
          style: [styles.base, styles[style]],
          ref: function ref(c) {
            _this2.$presentation = c;
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'ironhee-pt__slides',
            style: getSlidesStyle(scale),
            ref: function ref(c) {
              _this2.$slides = c;
            }
          },
          children
        ),
        _react2.default.createElement(
          'div',
          {
            style: [indexStyle.base, indexStyle[style]]
          },
          _react2.default.createElement(
            'span',
            {
              style: getIndexTextStyle(scale)
            },
            slideIndex + 1,
            ' / ',
            children.length
          )
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

var getSlidesStyle = function getSlidesStyle(scale) {
  return {
    position: 'absolute',
    width: '960px',
    height: '700px',
    overflow: 'hidden',
    left: '50%',
    top: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%) scale(' + scale + ')'
  };
};

var indexStyle = (_indexStyle = {}, _defineProperty(_indexStyle, _constants.STYLES.SIMPLE, {
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

var getIndexTextStyle = function getIndexTextStyle(scale) {
  return {
    display: 'inline-block',
    transform: 'scale(' + scale + ')'
  };
};