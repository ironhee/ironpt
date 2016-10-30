import React from 'react'
import { Style } from 'radium'
import normalize from 'radium-normalize'

const base = (
  <Style
    name='base'
    scopeSelector='.ironpt__presentation'
    rules={{
      ...normalize,
      position: 'relative',

      '.ironpt__scale': {
        position: 'relative',
        width: '100%',
        height: '100%'
      },

      '.ironpt__slides': {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },

      '.ironpt__slide': {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%'
      },

      '.ironpt__cover': {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%'
      },

      '.ironpt__h1': {
        margin: 0,
        padding: 0
      },

      '.ironpt__h2': {
        margin: 0,
        padding: 0
      },

      '.ironpt__p': {
        margin: 0,
        padding: 0
      }
    }}
  />
)

export default base
