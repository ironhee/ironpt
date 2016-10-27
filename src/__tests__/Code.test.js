import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import Code from '../Code'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <Code>
            {'const a = 1'}
          </Code>
        </Slide>
      </Presentation>
    </Controller>
  )
})
