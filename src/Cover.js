import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Cover = ({ children }, { style }) => (
  <div
    className='ironpt__cover'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </div>
)

Cover.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Cover)

const styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  [STYLES.SIMPLE]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
