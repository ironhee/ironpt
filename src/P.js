import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Pragraph = ({ children }, { style }) => (
  <p
    className='ironhee-pt__paragraph'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </p>
)

Pragraph.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Pragraph)

const styles = {
  base: {
    margin: 0,
    padding: 0
  },
  [STYLES.SIMPLE]: {
    margin: '10px 20px',
    fontSize: '2em'
  },
  [STYLES.DEVELOPER]: {
    margin: '10px 20px',
    fontSize: '2em'
  }
}
