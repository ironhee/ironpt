import React from 'react'
import { Style } from 'radium'
import { QUERY_SELECTORS } from '../constants'

const simple = (
  <Style
    name='simple'
    scopeSelector={QUERY_SELECTORS.PRESENTATION + '.simple'}
    rules={{
      fontFamily: 'helvetica',
      background: '#fff',
      color: 'black',

      [QUERY_SELECTORS.SLIDE]: {
        padding: '2em'
      },

      [QUERY_SELECTORS.SLIDE_INDEX]: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5em'
      },

      [QUERY_SELECTORS.COVER]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },

      [QUERY_SELECTORS.H1]: {
        margin: '0 20px 30px 20px',
        fontSize: '4em',
        borderBottom: '1px solid #555'
      },

      [QUERY_SELECTORS.H2]: {
        margin: '0 20px 20px 20px',
        fontSize: '2.5em',
        color: '#555'
      },

      [QUERY_SELECTORS.P]: {
        margin: '10px 20px',
        fontSize: '2em'
      },

      [QUERY_SELECTORS.LI]: {
        margin: '10px 20px',
        fontSize: '2em'
      },

      [QUERY_SELECTORS.CODE]: {
        margin: '10px 20px'
      }
    }}
  />
)

export default simple
