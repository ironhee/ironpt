import React, { Component } from 'react'
import Radium from 'radium'

class Scale extends Component {
  constructor (props) {
    super(props)
    this.state = { scale: 1 }
  }

  componentDidMount () {
    if (!this.$scale) return
    const scale = this.getScale()
    this.setState({ scale })
  }

  getScale () {
    if (!this.$scale) return 1
    const { width, height, minScale, maxScale } = this.props
    let scale = Math.min(
      this.$scale.offsetWidth / width,
      this.$scale.offsetHeight / height
    )
    if (minScale) scale = Math.max(scale, minScale)
    if (maxScale) scale = Math.min(scale, maxScale)
    return scale || 1
  }

  render () {
    const { scale } = this.state
    const { children, width, height } = this.props
    return (
      <div
        className='ironhee-pt__scale'
        style={style}
        ref={(c) => { this.$scale = c }}
      >
        <div
          className='ironhee-pt__scale__content'
          style={getContentStyle({ scale, width, height })}
          ref={(c) => { this.$scaleContent = c }}
        >
          { children }
        </div>
      </div>
    )
  }
}

Scale.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  minScale: React.PropTypes.number,
  maxScale: React.PropTypes.number
}

export default Radium(Scale)

const style = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

const getContentStyle = ({ scale, width, height }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  bottom: 'auto',
  right: 'auto',
  transform: `translate(-50%, -50%) scale(${scale})`,
  width: width + 'px',
  height: height + 'px'
})
