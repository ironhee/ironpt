import React from 'react'
import Radium from 'radium'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode, xt256 } from 'react-syntax-highlighter/dist/styles'

const Code = ({ children, language }, { styleName }) => (
  <div className='ironpt__code'>
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
  styleName: React.PropTypes.string.isRequired
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
