import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import Ul from '../Ul'
import Li from '../Li'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <Ul>
            <Li>hello world</Li>
            <Li>hello world</Li>
          </Ul>
        </Slide>
      </Presentation>
    </Controller>
  )
})
