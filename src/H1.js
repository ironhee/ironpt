import React from 'react'

const H1 = ({ children, ...props }) => (
  <h2 className='ironpt__h1' {...props}>
    { children }
  </h2>
)

export default H1
