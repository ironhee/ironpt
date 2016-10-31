import React from 'react'
import Radium from 'radium'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode, xt256 } from 'react-syntax-highlighter/dist/styles'
import { CLASS_NAMES } from './constants'

const Code = ({ children, language, ...props }, { themeName }) => (
  <div
    className={CLASS_NAMES.CODE}
    {...props}
  >
    <SyntaxHighlighter
      language={language}
      style={syntaxStyles[themeName]}
      codeTagProps={codeStyles[themeName]}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

Code.contextTypes = {
  themeName: React.PropTypes.string
}

export default Radium(Code)

const codeStyles = {
  simple: {
    fontFamily: 'monospace',
    fontSize: '24px'
  },
  developer: {
    fontFamily: 'monospace',
    fontSize: '24px'
  }
}

const syntaxStyles = {
  simple: xcode,
  developer: xt256
}
