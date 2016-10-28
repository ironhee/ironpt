import React, { Component } from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

class Presentation extends Component {
  constructor (props) {
    super(props)
    this.state = { scale: '1' }
  }

  componentDidMount () {
    if (!this.$presentation) return
    const scale = this.getSlidesScale()
    this.setState({ scale })
    this.scrollToSlide()
  }

  componentDidUpdate () {
    this.scrollToSlide()
  }

  scrollToSlide () {
    if (!this.$slides) return
    const { slideIndex } = this.context
    this.$slides.scrollTop = 700 * slideIndex
  }

  getSlidesScale () {
    if (!this.$presentation || !this.$slides) return 1

    const minScale = 0.2
    const maxScale = 1.5
    let scale = Math.min(
      this.$presentation.offsetWidth / this.$slides.offsetWidth,
      this.$presentation.offsetHeight / this.$slides.offsetHeight
    )
    scale = Math.max(scale, minScale)
    scale = Math.min(scale, maxScale)
    return scale || 1
  }

  render () {
    const { scale } = this.state
    const { children } = this.props
    const { style, slideIndex } = this.context
    return (
      <div
        className='ironhee-pt__presentation'
        style={[
          styles.base,
          styles[style]
        ]}
        ref={(c) => { this.$presentation = c }}
      >
        <div
          className='ironhee-pt__slides'
          style={getSlidesStyle(scale)}
          ref={(c) => { this.$slides = c }}
        >
          { children }
        </div>
        <div
          style={[
            indexStyle.base,
            indexStyle[style]
          ]}
        >
          <span
            style={getIndexTextStyle(scale)}
          >
            { slideIndex + 1 } / { children.length }
          </span>
        </div>
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

const getSlidesStyle = (scale) => ({
  position: 'absolute',
  width: '960px',
  height: '700px',
  overflow: 'hidden',
  left: '50%',
  top: '50%',
  bottom: 'auto',
  right: 'auto',
  transform: `translate(-50%, -50%) scale(${scale})`
})

const indexStyle = {
  [STYLES.SIMPLE]: {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    fontSize: '1.5em'
  },
  [STYLES.DEVELOPER]: {
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    position: 'absolute',
    fontSize: '1.5em'
  }
}

const getIndexTextStyle = (scale) => ({
  display: 'inline-block',
  transform: `scale(${scale})`
})
