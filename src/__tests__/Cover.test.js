import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import Cover from '../Cover'
import H1 from '../H1'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <Cover>
            <H1>hello world</H1>
          </Cover>
        </Slide>
      </Presentation>
    </Controller>
  )
})
