import React from 'react'
import Radium from 'radium'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode, xt256 } from 'react-syntax-highlighter/dist/styles'

const Code = ({ children, language, ...props }, { styleName }) => (
  <div
    className='ironpt__code'
    {...props}
  >
    <SyntaxHighlighter
      language={language}
      style={syntaxStyles[styleName]}
      codeTagProps={codeStyles[styleName]}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

Code.contextTypes = {
  styleName: React.PropTypes.string
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
