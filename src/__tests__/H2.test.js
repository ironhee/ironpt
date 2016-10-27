import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import H2 from '../H2'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <H2>hello world</H2>
        </Slide>
      </Presentation>
    </Controller>
  )
})
