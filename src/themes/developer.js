import React from 'react'
import { Style } from 'radium'
import { QUERY_SELECTORS } from '../constants'

const developer = (
  <Style
    name='developer'
    scopeSelector={QUERY_SELECTORS.PRESENTATION + '.developer'}
    rules={{
      fontFamily: 'monospace',
      background: '#222',
      color: 'white',

      [QUERY_SELECTORS.SLIDE]: {
        padding: '2em'
      },

      [QUERY_SELECTORS.SLIDE_INDEX]: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'right',
        fontSize: '1.5em'
      },

      [QUERY_SELECTORS.COVER]: {},

      [QUERY_SELECTORS.H1]: {
        margin: '0 20px 30px 20px',
        fontSize: '4em',
        color: '#f44'
      },

      [QUERY_SELECTORS.H2]: {
        margin: '0 20px 30px 20px',
        fontSize: '2em',
        color: '#fdd'
      },

      [QUERY_SELECTORS.P]: {
        margin: '10px 20px',
        fontSize: '2em'
      },

      [QUERY_SELECTORS.LI]: {
        fontSize: '2em',
        marginLeft: '1em',
        marginBottom: '1em'
      },

      [QUERY_SELECTORS.CODE]: {
        margin: '10px 20px'
      },
      [QUERY_SELECTORS.CENTER]: {
        textAlign: "center",
        margin: 0,
        padding: 0
      }
    }}
  />
)

export default developer
