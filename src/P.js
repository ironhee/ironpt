import React from 'react'

const P = ({ children, ...props }) => (
  <p className='ironpt__p' {...props}>
    { children }
  </p>
)

export default P
