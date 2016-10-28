import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const H1 = ({ children }, { style }) => (
  <h2
    className='ironpt__h1'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </h2>
)

H1.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(H1)

const styles = {
  base: {
    margin: 0,
    padding: 0
  },
  [STYLES.SIMPLE]: {
    margin: '0 20px 30px 20px',
    fontSize: '4em',
    borderBottom: '1px solid #555'
  },
  [STYLES.DEVELOPER]: {
    margin: '0 20px 30px 20px',
    fontSize: '4em',
    color: '#f44'
  }
}
