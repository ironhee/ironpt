import React, { Component } from 'react'
import Radium from 'radium'
import { STYLES } from './constants'
import Scale from './Scale'
import SlideIndex from './SlideIndex'

class Presentation extends Component {
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
    const { children } = this.props
    const { style, slideIndex } = this.context
    return (
      <div
        className='ironpt__presentation'
        style={[
          styles.base,
          styles[style]
        ]}
      >
        <Scale
          width={960}
          height={700}
          minScale={0.2}
          maxScale={1.5}
        >
          <div
            className='ironpt__slides'
            style={slidesStyle}
            ref={(c) => { this.$slides = c }}
          >
            { children }
          </div>
          <SlideIndex
            slideIndex={slideIndex}
            slideLength={children.length}
          />
        </Scale>
      </div>
    )
  }
}

Presentation.contextTypes = {
  style: React.PropTypes.string.isRequired,
  slideIndex: React.PropTypes.number.isRequired
}

export default Radium(Presentation)

const styles = {
  base: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  [STYLES.SIMPLE]: {
    fontFamily: 'helvetica',
    background: '#fff',
    color: 'black'
  },
  [STYLES.DEVELOPER]: {
    fontFamily: 'monospace',
    background: '#222',
    color: 'white'
  }
}

const slidesStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}
