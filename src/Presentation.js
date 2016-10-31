import React, { Component } from 'react'
import classNames from 'classnames'
import { CLASS_NAMES } from './constants'
import Scale from './Scale'
import SlideIndex from './SlideIndex'
import base from './themes/base'

class Presentation extends Component {
  getChildContext () {
    const { theme } = this.props
    return {
      themeName: theme ? theme.props.name : null
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
    const { children, theme, ...props } = this.props

    const { slideIndex } = this.context
    return (
      <div
        className={classNames(
          CLASS_NAMES.PRESENTATION,
          theme ? theme.props.name : null
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
            className={CLASS_NAMES.SLIDES}
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
        { theme }
      </div>
    )
  }
}

Presentation.childContextTypes = {
  themeName: React.PropTypes.string
}

Presentation.contextTypes = {
  slideIndex: React.PropTypes.number.isRequired
}

export default Presentation
