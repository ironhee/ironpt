import React, { Component } from 'react'
import Radium from 'radium'
import fp from 'lodash/fp'
import assert from 'assert'
import Hammer from 'hammerjs'
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
      slideIndex: this.state.slideIndex
    }
  }

  componentDidMount () {
    if (!this.$controller) return
    const presentationChildren = this
      .$controller
      .querySelector('.ironpt__presentation .ironpt__slides')
      .children
    const slides = fp.filter(el => el.className === 'ironpt__slide')(presentationChildren)
    this.setState({ slideLength: slides.length })

    // Touch support
    this.hammer = new Hammer(this.$controller, {})
    this.hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
    this.hammer.on('swipeleft', this.onNextSlide)
    this.hammer.on('swiperight', this.onPrevSlide)
    this.hammer.on('swipeup', this.onRandomStyle)
    this.hammer.on('swipedown', this.onRandomStyle)
  }

  componentWillUnmount () {
    if (!this.$controller) return
    this.hammer.off('swipeleft', this.onNextSlide)
    this.hammer.off('swiperight', this.onPrevSlide)
    this.hammer.off('swipeup', this.onRandomStyle)
    this.hammer.off('swipedown', this.onRandomStyle)
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
    return (
      <div
        className='ironpt__controller'
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
  slideIndex: React.PropTypes.number.isRequired
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
