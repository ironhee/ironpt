'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_Component) {
  _inherits(Controller, _Component);

  function Controller(props) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, props));

    _this.state = {
      slideIndex: props.defaultSlideIndex - 1 || 0,
      style: props.defaultStyle || _constants.STYLES.SIMPLE,
      slideLength: 0
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onNextSlide = _this.onNextSlide.bind(_this);
    _this.onPrevSlide = _this.onPrevSlide.bind(_this);
    _this.onRandomStyle = _this.onRandomStyle.bind(_this);
    return _this;
  }

  _createClass(Controller, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        style: this.state.style,
        slideIndex: this.state.slideIndex
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.$controller) return;
      var presentationChildren = this.$controller.querySelector('.ironhee-pt__presentation .ironhee-pt__slides').children;
      var slides = _fp2.default.filter(function (el) {
        return el.className === 'ironhee-pt__slide';
      })(presentationChildren);
      this.setState({ slideLength: slides.length });

      // Touch support
      this.hammer = new _hammerjs2.default(this.$controller, {});
      this.hammer.get('swipe').set({ direction: _hammerjs2.default.DIRECTION_ALL });
      this.hammer.on('swipeleft', this.onNextSlide);
      this.hammer.on('swiperight', this.onPrevSlide);
      this.hammer.on('swipeup', this.onRandomStyle);
      this.hammer.on('swipedown', this.onRandomStyle);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.$controller) return;
      this.hammer.off('swipeleft', this.onNextSlide);
      this.hammer.off('swiperight', this.onPrevSlide);
      this.hammer.off('swipeup', this.onRandomStyle);
      this.hammer.off('swipedown', this.onRandomStyle);
    }
  }, {
    key: 'selectSlide',
    value: function selectSlide(slideIndex) {
      var slideLength = this.state.slideLength;

      (0, _assert2.default)(_fp2.default.isInteger(slideIndex));
      (0, _assert2.default)(slideIndex >= 0 || slideIndex < slideLength, 'slide out of range (should 0 <= slide < ' + slideLength + ')');
      this.setState({ slideIndex: slideIndex });
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.$input.focus();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      switch (e.key) {
        case 'ArrowLeft':
          this.onPrevSlide();
          break;
        case 'ArrowRight':
          this.onNextSlide();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          this.onRandomStyle();
          break;
      }
    }
  }, {
    key: 'onRandomStyle',
    value: function onRandomStyle() {
      var style = this.state.style;

      this.setState({
        style: _fp2.default.sample(_fp2.default.omitBy(function (val) {
          return val === style;
        })(_constants.STYLES))
      });
    }
  }, {
    key: 'onNextSlide',
    value: function onNextSlide() {
      var _state = this.state,
          slideIndex = _state.slideIndex,
          slideLength = _state.slideLength;

      var nextSlide = slideIndex + 1;
      if (nextSlide < slideLength) {
        this.selectSlide(nextSlide);
      }
    }
  }, {
    key: 'onPrevSlide',
    value: function onPrevSlide() {
      var slideIndex = this.state.slideIndex;

      var prevSlide = slideIndex - 1;
      if (prevSlide >= 0) {
        this.selectSlide(prevSlide);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        {
          className: 'ironhee-pt__controller',
          style: controllerStyle,
          onClick: this.onClick,
          onKeyDown: this.onKeyDown,
          ref: function ref(c) {
            _this2.$controller = c;
          }
        },
        children,
        _react2.default.createElement('input', {
          type: 'text',
          ref: function ref(c) {
            _this2.$input = c;
          },
          style: hiddenInputStyle
        })
      );
    }
  }]);

  return Controller;
}(_react.Component);

Controller.propTypes = {
  defaultSlide: _react2.default.PropTypes.number,
  defaultStyle: _react2.default.PropTypes.string
};

Controller.childContextTypes = {
  style: _react2.default.PropTypes.string.isRequired,
  slideIndex: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _radium2.default)(Controller);


var controllerStyle = {
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  position: 'relative'
};

var hiddenInputStyle = {
  width: 0,
  height: 0,
  position: 'absolute',
  outline: 'none',
  border: 'none',
  margin: 0,
  padding: 0,
  boxShadow: 'none'
};