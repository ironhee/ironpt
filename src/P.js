import React from 'react'
import { CLASS_NAMES } from './constants'

const P = ({ children, ...props }) => (
  <p className={CLASS_NAMES.P} {...props}>
    { children }
  </p>
)

export default P
