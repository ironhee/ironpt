import React from 'react'
import { CLASS_NAMES } from './constants'

const SlideIndex = ({ slideIndex, slideLength, ...props }) => (
  <div className={CLASS_NAMES.SLIDE_INDEX} {...props}>
    <span style={{ display: 'inline-block' }}>
      { slideIndex + 1 } / { slideLength }
    </span>
  </div>
)

export default SlideIndex
