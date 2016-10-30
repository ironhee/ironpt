import React from 'react'
import { Style } from 'radium'

const developer = (
  <Style
    name='developer'
    scopeSelector='.ironpt__presentation.developer'
    rules={{
      fontFamily: 'monospace',
      background: '#222',
      color: 'white',

      '.ironpt__slide': {
        padding: '2em'
      },

      '.ironpt__slide-index': {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'right',
        fontSize: '1.5em'
      },

      '.ironpt__cover': {},

      '.ironpt__h1': {
        margin: '0 20px 30px 20px',
        fontSize: '4em',
        color: '#f44'
      },

      '.ironpt__h2': {
        margin: '0 20px 30px 20px',
        fontSize: '2em',
        color: '#fdd'
      },

      '.ironpt__p': {
        margin: '10px 20px',
        fontSize: '2em'
      },

      '.ironpt__li': {
        fontSize: '2em',
        marginLeft: '1em',
        marginBottom: '1em'
      },

      '.ironpt__code': {
        margin: '10px 20px'
      }
    }}
  />
)

export default developer
