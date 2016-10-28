import React from 'react'

const SlideIndex = ({ slideIndex, slideLength, ...props }) => (
  <div className='ironpt__slide-index' {...props}>
    <span style={{ display: 'inline-block' }}>
      { slideIndex + 1 } / { slideLength }
    </span>
  </div>
)

export default SlideIndex
