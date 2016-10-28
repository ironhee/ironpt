import React, { Component } from 'react'
import classNames from 'classnames'
import Scale from './Scale'
import SlideIndex from './SlideIndex'
import base from './styles/base'

class Presentation extends Component {
  getChildContext () {
    const { style } = this.props
    return {
      styleName: style ? style.props.name : null
    }
  }

  componentDidMount () {
    if (!this.$slides) return
    this.scrollToSlide()
  }

  componentDidUpdate () {
    if (!this.$slides) return
    this.scrollToSlide()
  }

  scrollToSlide () {
    if (!this.$slides) return
    const { slideIndex } = this.context
    this.$slides.scrollTop = 700 * slideIndex
  }

  render () {
    const { children, style, ...props } = this.props
    const { slideIndex } = this.context
    return (
      <div
        className={classNames(
          'ironpt__presentation',
          style ? style.props.name : null
        )}
        {...props}
      >
        <Scale
          width={960}
          height={700}
          minScale={0.2}
          maxScale={1.5}
        >
          <div
            className='ironpt__slides'
            ref={(c) => { this.$slides = c }}
          >
            { children }
          </div>
          <SlideIndex
            slideIndex={slideIndex}
            slideLength={[].concat(children).length}
          />
        </Scale>
        { base }
        { style }
      </div>
    )
  }
}

Presentation.childContextTypes = {
  styleName: React.PropTypes.string
}

Presentation.contextTypes = {
  slideIndex: React.PropTypes.number.isRequired
}

export default Presentation
