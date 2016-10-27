import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import P from '../P'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <P>hello world</P>
        </Slide>
      </Presentation>
    </Controller>
  )
})
