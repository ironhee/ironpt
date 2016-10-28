import React from 'react'
import Radium from 'radium'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode, xt256 } from 'react-syntax-highlighter/dist/styles'
import { STYLES } from './constants'

const Code = ({ children, language }, { style }) => (
  <div
    className='ironpt__code'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    <SyntaxHighlighter
      language={language}
      style={syntaxStyles[style]}
      codeTagProps={{
        style: Object.assign(
          {},
          codeStyles.base,
          codeStyles[style]
        )
      }}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

Code.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Code)

const styles = {
  base: {},
  [STYLES.SIMPLE]: {
    margin: '10px 20px'
  },
  [STYLES.DEVELOPER]: {
    margin: '10px 20px'
  }
}

const codeStyles = {
  base: {},
  [STYLES.SIMPLE]: {
    fontFamily: 'monospace',
    fontSize: '24px'
  },
  [STYLES.DEVELOPER]: {
    fontFamily: 'monospace',
    fontSize: '24px'
  }
}

const syntaxStyles = {
  [STYLES.SIMPLE]: xcode,
  [STYLES.DEVELOPER]: xt256
}
