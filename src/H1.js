import React from 'react'
import { CLASS_NAMES } from './constants'

const H1 = ({ children, ...props }) => (
  <h2 className={CLASS_NAMES.H1} {...props}>
    { children }
  </h2>
)

export default H1
