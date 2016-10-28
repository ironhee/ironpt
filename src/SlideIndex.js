import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const SlideIndex = ({ slideIndex, slideLength }, { style }) => (
  <div
    style={[
      styles.base,
      styles[style]
    ]}
  >
    <span
      style={{ display: 'inline-block' }}
    >
      { slideIndex + 1 } / { slideLength }
    </span>
  </div>
)

SlideIndex.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(SlideIndex)

const styles = {
  [STYLES.SIMPLE]: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: '1.5em'
  },
  [STYLES.DEVELOPER]: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    fontSize: '1.5em'
  }
}
