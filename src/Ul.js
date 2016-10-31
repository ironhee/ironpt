import React from 'react'
import { CLASS_NAMES } from './constants'

const Ul = ({ children, ...props }) => (
  <ul className={CLASS_NAMES.UL} {...props}>
    { children }
  </ul>
)

export default Ul
