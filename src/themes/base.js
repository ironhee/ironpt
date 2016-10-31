import React from 'react'
import { Style } from 'radium'

const base = (
  <Style
    name='base'
    scopeSelector='.ironpt__presentation'
    rules={{
      position: 'relative',
      overflow: 'hidden',

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
