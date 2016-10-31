import React from 'react'
import { CLASS_NAMES } from './constants'

const Slide = ({ children, ...props }) => (
  <div className={CLASS_NAMES.SLIDE} {...props}>
    { children }
  </div>
)

export default Slide
