import React from 'react'
import { Style } from 'radium'
import normalize from 'radium-normalize'

const controller = (
  <Style
    name='controller'
    scopeSelector='.ironpt__controller'
    rules={{
      ...normalize,
      position: 'relative',
      width: '100%',
      height: '100%',

      '.ironpt__input-for-keydown': {
        width: 0,
        height: 0,
        position: 'absolute',
        outline: 'none',
        border: 'none',
        margin: 0,
        padding: 0,
        boxShadow: 'none'
      }
    }}
  />
)

export default controller
