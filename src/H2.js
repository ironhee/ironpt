import React from 'react'
import { CLASS_NAMES } from './constants'

const H2 = ({ children, ...props }) => (
  <h3 className={CLASS_NAMES.H2} {...props}>
    { children }
  </h3>
)

export default H2
