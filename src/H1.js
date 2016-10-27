import React from 'react'
import Radium from 'radium'

const H1 = ({ children }, { style }) => (
  <h2
    className='ironhee-pt__h1'
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
  simple: {
    margin: '0 20px 30px 20px',
    padding: 0,
    fontSize: '5em',
    fontFamilly: '바른고딕 helvetica',
    borderBottom: '1px solid #555'
  }
}
