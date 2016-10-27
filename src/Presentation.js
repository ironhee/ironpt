import React from 'react'
import Radium from 'radium'
import { STYLES } from './constants'

const Presentation = ({ children }, { style, slideIndex, slideLength }) => (
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

    <div
      style={[
        indexStyle.base,
        indexStyle[style]
      ]}
    >
      { slideIndex + 1 } / { slideLength }
    </div>
  </div>
)

Presentation.contextTypes = {
  style: React.PropTypes.string.isRequired,
  slideIndex: React.PropTypes.number.isRequired,
  slideLength: React.PropTypes.number.isRequired
}

export default Radium(Presentation)

const styles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  [STYLES.SIMPLE]: {
    fontFamily: 'helvetica',
    color: 'black'
  },
  [STYLES.DEVELOPER]: {
    fontFamily: 'monospace',
    color: 'white'
  }
}

const indexStyle = {
  base: {},
  [STYLES.SIMPLE]: {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    fontSize: '1.5em'
  },
  [STYLES.DEVELOPER]: {
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    position: 'absolute',
    fontSize: '1.5em'
  }
}
