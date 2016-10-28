import React from 'react'

const Slide = ({ children, ...props }) => (
  <div className='ironpt__slide' {...props}>
    { children }
  </div>
)

export default Slide
