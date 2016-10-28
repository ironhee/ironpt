import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode, xt256 } from 'react-syntax-highlighter/dist/styles'
import { STYLES } from './constants'

const Code = ({ children, language }, { style }) => (
  <SyntaxHighlighter
    language={language}
    style={codeStyles[style]}
    codeTagProps={{
      style: Object.assign(
        {},
        styles.base,
        styles[style]
      )
    }}
  >
    {children}
  </SyntaxHighlighter>
)

Code.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Code

const codeStyles = {
  [STYLES.SIMPLE]: xcode,
  [STYLES.DEVELOPER]: xt256
}

const styles = {
  base: {},
  [STYLES.SIMPLE]: {
    margin: '10px 20px',
    fontFamily: 'monospace',
    fontSize: '24px'
  },
  [STYLES.DEVELOPER]: {
    margin: '10px 20px'
  }
}
