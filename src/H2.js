import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const H2 = ({ children }, { style }) => (
  <h3
    className='ironpt__h2'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </h3>
)

H2.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(H2)

const styles = {
  base: {
    margin: 0,
    padding: 0
  },
  [STYLES.SIMPLE]: {
    margin: '0 20px 20px 20px',
    fontSize: '2.5em',
    color: '#555'
  },
  [STYLES.DEVELOPER]: {
    margin: '0 20px 30px 20px',
    fontSize: '2em',
    color: '#fdd'
  }
}
