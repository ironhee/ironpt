import React from 'react'

const Cover = ({ children, ...props }) => (
  <div className='ironpt__cover' {...props}>
    { children }
  </div>
)

export default Cover
