import React from 'react'
import renderer from 'react-test-renderer'
import Scale from '../Scale'

it('renders', () => {
  renderer.create(
    <div style={{ width: 1000, height: 1000 }}>
      <Scale
        width={500}
        height={500}
      >
        <div>hello world</div>
      </Scale>
    </div>
  )
})
