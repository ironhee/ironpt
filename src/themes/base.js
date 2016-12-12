import React from 'react'
import { Style } from 'radium'
import { QUERY_SELECTORS } from '../constants'

const base = (
  <Style
    name='base'
    scopeSelector={QUERY_SELECTORS.PRESENTATION}
    rules={{
      position: 'relative',
      overflow: 'hidden',

      [QUERY_SELECTORS.SCALE]: {
        position: 'relative',
        width: '100%',
        height: '100%'
      },

      [QUERY_SELECTORS.SLIDES]: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },

      [QUERY_SELECTORS.SLIDE]: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%'
      },

      [QUERY_SELECTORS.COVER]: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%'
      },

      [QUERY_SELECTORS.H1]: {
        margin: 0,
        padding: 0
      },

      [QUERY_SELECTORS.H2]: {
        margin: 0,
        padding: 0
      },

      [QUERY_SELECTORS.P]: {
        margin: 0,
        padding: 0
      },
      [QUERY_SELECTORS.CENTER]: {
        textAlign: "center",
        margin: 0,
        padding: 0
      }
    }}
  />
)

export default base
