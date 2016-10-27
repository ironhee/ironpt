import React from 'react'
import Radium from 'radium'

const Presentation = ({ children }, { style, slideIndex }) => (
  <div
    className='ironhee-pt__presentation'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { [].concat(children).map((child, index) =>
      <child.type
        key={index}
        {...child.props}
        isActive={slideIndex === index}
      />
    ) }
  </div>
)

Presentation.contextTypes = {
  style: React.PropTypes.string.isRequired,
  slideIndex: React.PropTypes.number.isRequired
}

export default Radium(Presentation)

const styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  simple: {}
}
