import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Slide = ({ children }, { style }) => (
  <div
    className='ironpt__slide'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </div>
)

Slide.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Slide)

const styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  [STYLES.SIMPLE]: {
    padding: '2em'
  },
  [STYLES.DEVELOPER]: {
    padding: '2em'
  }
}
