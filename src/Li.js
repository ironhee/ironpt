import React from 'react'
import { CLASS_NAMES } from './constants'

const Li = ({ children, ...props }) => (
  <li className={CLASS_NAMES.LI} {...props}>
    { children }
  </li>
)

export default Li
