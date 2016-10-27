import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Slide = ({ children, isActive }, { style }) => (
  <div
    className='ironhee-pt__slide'
    style={[
      styles.base,
      styles[style],
      ...isActive ? [] : [styles.inactive]
    ]}
  >
    { children }
  </div>
)

Slide.propTypes = {
  isActive: React.PropTypes.bool
}

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
    background: '#fff',
    padding: '40px'
  },
  [STYLES.DEVELOPER]: {
    background: '#222',
    color: '#fff',
    padding: '40px'
  },
  // status
  inactive: {
    display: 'none'
  }
}
