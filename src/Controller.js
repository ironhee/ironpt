import React, { Component } from 'react'
import Radium from 'radium'
import fp from 'lodash/fp'
import assert from 'assert'
import { STYLES } from './constants'

class Controller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: props.defaultSlideIndex - 1 || 0,
      style: props.defaultStyle || STYLES.SIMPLE,
      slideLength: 0
    }
    this.onClick = this.onClick.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onNextSlide = this.onNextSlide.bind(this)
    this.onPrevSlide = this.onPrevSlide.bind(this)
    this.onRandomStyle = this.onRandomStyle.bind(this)
  }

  getChildContext () {
    return {
      style: this.state.style,
      slideIndex: this.state.slideIndex,
      slideLength: this.state.slideLength
    }
  }

  componentDidMount () {
    if (!this.$controller) return
    const presentationChildren = this
      .$controller
      .getElementsByClassName('ironhee-pt__presentation')[0]
      .children
    const slides = fp.filter(el => el.className === 'ironhee-pt__slide')(presentationChildren)

    this.setState({
      slideLength: slides.length
    })
  }

  selectSlide (slideIndex) {
    const { slideLength } = this.state
    assert(fp.isInteger(slideIndex))
    assert(slideIndex >= 0 || slideIndex < slideLength, `slide out of range (should 0 <= slide < ${slideLength})`)
    this.setState({ slideIndex })
  }

  onClick (e) {
    this.$input.focus()
  }

  onKeyDown (e) {
    switch (e.key) {
      case 'ArrowLeft':
        this.onPrevSlide()
        break
      case 'ArrowRight':
        this.onNextSlide()
        break
      case 'ArrowUp':
        this.onRandomStyle()
        break
      case 'ArrowDown':
        this.onRandomStyle()
        break
    }
  }

  onRandomStyle () {
    const { style } = this.state
    this.setState({
      style: fp.sample(fp.omitBy(val => val === style)(STYLES))
    })
  }

  onNextSlide () {
    const { slideIndex, slideLength } = this.state
    const nextSlide = slideIndex + 1
    if (nextSlide < slideLength) {
      this.selectSlide(nextSlide)
    }
  }

  onPrevSlide () {
    const { slideIndex } = this.state
    const prevSlide = slideIndex - 1
    if (prevSlide >= 0) {
      this.selectSlide(prevSlide)
    }
  }

  render () {
    const { children } = this.props
    const { slideIndex, slideLength } = this.state
    const hasPrevSlide = slideIndex - 1 >= 0
    const hasNextSlide = slideIndex + 1 < slideLength

    return (
      <div
        className='ironhee-pt__controller'
        style={controllerStyle}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        ref={(c) => { this.$controller = c }}
      >
        { children }

        <input
          type='text'
          ref={(c) => { this.$input = c }}
          style={hiddenInputStyle}
        />

        <div
          style={[
            buttonStyles.base,
            prevButtonStyles.base,
            ...hasPrevSlide ? [] : [buttonStyles.disabled]
          ]}
          key='prev'
          onClick={this.onPrevSlide}
        >
          prev
        </div>

        <div
          style={[
            buttonStyles.base,
            nextButtonStyles.base,
            ...hasNextSlide ? [] : [buttonStyles.disabled]
          ]}
          key='next'
          onClick={this.onNextSlide}
        >
          next
        </div>
      </div>
    )
  }
}

Controller.propTypes = {
  defaultSlide: React.PropTypes.number,
  defaultStyle: React.PropTypes.string
}

Controller.childContextTypes = {
  style: React.PropTypes.string.isRequired,
  slideIndex: React.PropTypes.number.isRequired,
  slideLength: React.PropTypes.number.isRequired
}

export default Radium(Controller)

const controllerStyle = {
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  position: 'relative'
}

const hiddenInputStyle = {
  width: 0,
  height: 0,
  position: 'absolute',
  outline: 'none',
  border: 'none',
  margin: 0,
  padding: 0,
  boxShadow: 'none'
}

const buttonStyles = {
  base: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: '0 10px',
    color: '#fff',
    backgroundColor: '#555',
    fontSize: '2em',
    opacity: '0',
    ':hover': {
      opacity: '0.5'
    }
  },
  disabled: {
    ':hover': {
      opacity: '0'
    }
  }
}

const prevButtonStyles = {
  base: {
    left: 0
  }
}

const nextButtonStyles = {
  base: {
    right: 0
  }
}
