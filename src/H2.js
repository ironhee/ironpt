import React from 'react'
import Radium from 'radium'

const H2 = ({ children }, { style }) => (
  <h3
    className='ironhee-pt__h2'
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
  simple: {
    margin: '0 20px 20px 20px',
    padding: 0,
    fontSize: '2.5em',
    fontFamilly: 'helvetica',
    color: '#555'
  }
}
