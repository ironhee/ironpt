import React from 'react'
import Radium from 'radium'

const Cover = ({ children }, { style }) => (
  <li
    className='ironhee-pt__li'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </li>
)

Cover.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Cover)

const styles = {
  base: {
  },
  simple: {
    fontSize: '2em',
    marginLeft: '1em',
    marginBottom: '1em'
  }
}
