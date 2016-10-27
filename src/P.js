import React from 'react'
import Radium from 'radium'

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
  simple: {
    margin: '10px 20px',
    fontSize: '2em',
    fontFamilly: 'helvetica'
  }
}
