import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import SlideIndex from '../SlideIndex'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <SlideIndex
            slideIndex={0}
            slideLength={2}
          />
        </Slide>
      </Presentation>
    </Controller>
  )
})
