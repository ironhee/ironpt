import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide />
        <Slide />
      </Presentation>
    </Controller>
  )
})
