import React from 'react'

const SlideIndex = ({ slideIndex, slideLength }) => (
  <div className='ironpt__slide-index'>
    <span style={{ display: 'inline-block' }}>
      { slideIndex + 1 } / { slideLength }
    </span>
  </div>
)

export default SlideIndex
