import React from 'react'
import { CLASS_NAMES } from './constants'

const Cover = ({ children, ...props }) => (
  <div className={CLASS_NAMES.COVER} {...props}>
    { children }
  </div>
)

export default Cover
