import React, { Component } from 'react'
import fp from 'lodash/fp'
import assert from 'assert'
import Hammer from 'hammerjs'

class Controller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: props.defaultSlideIndex - 1 || 0,
      slideLength: 0
    }
    this.onClick = this.onClick.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onNextSlide = this.onNextSlide.bind(this)
    this.onPrevSlide = this.onPrevSlide.bind(this)
  }

  getChildContext () {
    return {
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
  }

  componentWillUnmount () {
    if (!this.$controller) return
    this.hammer.off('swipeleft', this.onNextSlide)
    this.hammer.off('swiperight', this.onPrevSlide)
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
    }
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
    const {
      children,
      // eslint-disable-next-line
      defaultSlideIndex,
      ...props
    } = this.props

    return (
      <div
        className='ironpt__controller'
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        ref={(c) => { this.$controller = c }}
        {...props}
      >
        { children }
        <input
          className='ironpt__input-for-keydown'
          type='text'
          ref={(c) => { this.$input = c }}
          style={{
            width: 0,
            height: 0,
            outline: 'none',
            border: 'none',
            margin: 0,
            padding: 0,
            boxShadow: 'none'
          }}
        />
      </div>
    )
  }
}

Controller.propTypes = {
  defaultSlideIndex: React.PropTypes.number,
  defaultStyle: React.PropTypes.string
}

Controller.childContextTypes = {
  slideIndex: React.PropTypes.number.isRequired
}

export default Controller
