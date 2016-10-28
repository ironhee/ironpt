import React from 'react'

const Cover = ({ children, ...props }) => (
  <ul className='ironpt__ul' {...props}>
    { children }
  </ul>
)

export default Cover
