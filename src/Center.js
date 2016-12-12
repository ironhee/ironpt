import React from 'react'
import { CLASS_NAMES } from './constants'

const Center = ({ children, ...props }) => (
  <h2 className={CLASS_NAMES.CENTER} {...props}>
    { children }
  </h2>
)

export default Center
