import React from 'react'

const H2 = ({ children, ...props }) => (
  <h3 className='ironpt__h2' {...props}>
    { children }
  </h3>
)

export default H2
