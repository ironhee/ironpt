import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Cover = ({ children }, { style }) => (
  <ul
    className='ironhee-pt__ul'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </ul>
)

Cover.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Cover)

const styles = {
  base: {
  },
  [STYLES.SIMPLE]: {
  }
}
