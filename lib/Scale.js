'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scale = function (_Component) {
  _inherits(Scale, _Component);

  function Scale(props) {
    _classCallCheck(this, Scale);

    var _this = _possibleConstructorReturn(this, (Scale.__proto__ || Object.getPrototypeOf(Scale)).call(this, props));

    _this.state = { scale: 1 };
    return _this;
  }

  _createClass(Scale, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.$scale) return;
      var scale = this.getScale();
      this.setState({ scale: scale });
    }
  }, {
    key: 'getScale',
    value: function getScale() {
      if (!this.$scale) return 1;
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          minScale = _props.minScale,
          maxScale = _props.maxScale;

      var scale = Math.min(this.$scale.offsetWidth / width, this.$scale.offsetHeight / height);
      if (minScale) scale = Math.max(scale, minScale);
      if (maxScale) scale = Math.min(scale, maxScale);
      return scale || 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var scale = this.state.scale;
      var _props2 = this.props,
          children = _props2.children,
          width = _props2.width,
          height = _props2.height;

      return _react2.default.createElement(
        'div',
        {
          className: 'ironpt__scale',
          style: style,
          ref: function ref(c) {
            _this2.$scale = c;
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'ironpt__scale__content',
            style: getContentStyle({ scale: scale, width: width, height: height }),
            ref: function ref(c) {
              _this2.$scaleContent = c;
            }
          },
          children
        )
      );
    }
  }]);

  return Scale;
}(_react.Component);

Scale.propTypes = {
  width: _react2.default.PropTypes.number.isRequired,
  height: _react2.default.PropTypes.number.isRequired,
  minScale: _react2.default.PropTypes.number,
  maxScale: _react2.default.PropTypes.number
};

exports.default = (0, _radium2.default)(Scale);


var style = {
  position: 'relative',
  width: '100%',
  height: '100%'
};

var getContentStyle = function getContentStyle(_ref) {
  var scale = _ref.scale,
      width = _ref.width,
      height = _ref.height;
  return {
    position: 'absolute',
    left: '50%',
    top: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%) scale(' + scale + ')',
    width: width + 'px',
    height: height + 'px'
  };
};