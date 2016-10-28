import React from 'react'
import { Style } from 'radium'

const simple = (
  <Style
    name='simple'
    scopeSelector='.ironpt__presentation.simple'
    rules={{
      fontFamily: 'helvetica',
      background: '#fff',
      color: 'black',

      '.ironpt__slide': {
        padding: '2em'
      },

      '.ironpt__slide-index': {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5em'
      },

      '.ironpt__cover': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },

      '.ironpt__h1': {
        margin: '0 20px 30px 20px',
        fontSize: '4em',
        borderBottom: '1px solid #555'
      },

      '.ironpt__h2': {
        margin: '0 20px 20px 20px',
        fontSize: '2.5em',
        color: '#555'
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

export default simple
