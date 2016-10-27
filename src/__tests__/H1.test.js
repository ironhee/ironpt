import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import H1 from '../H1'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <H1>hello world</H1>
        </Slide>
      </Presentation>
    </Controller>
  )
})
