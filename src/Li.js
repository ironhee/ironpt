import React from 'react'

const Li = ({ children, ...props }) => (
  <li className='ironpt__li' {...props}>
    { children }
  </li>
)

export default Li
