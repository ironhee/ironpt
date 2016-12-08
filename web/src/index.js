import React from 'react'
import ReactDOM from 'react-dom'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  Center,
  H1,
  H2,
  Ul,
  Li,
  P,
  Code,
  simple
} from 'ironpt'
import './index.css'

const App = () => (
  <Controller defaultSlideIndex={2}>
    <Presentation
      theme={simple}
      style={{
        width: window ? window.innerWidth : 0,
        height: window ? window.innerHeight : 0
      }}
    >
      <Slide>
        <Cover>
          <H1>Tutorial</H1>
          <H2>How to use ironpt</H2>
        </Cover>
      </Slide>

      {/* Controller & Presentation */}
      <Slide>
        <H1>Move slides</H1>
        <P>Stroke ← & → key to move slide</P>
        <P>Or swipe ← & → direction</P>
      </Slide>

      {/* Controller & Presentation */}
      <Slide>
        <H1>Controller & Presentation</H1>
        <Code language='jsx'>
          {`
const constroller = (
  <Controller>
    <Presentation theme={simple}>
      <Slide>
        <H1>Hello world</H1>
      </Slide>
    </Presentation>
  </Controller>
)
          `.trim()}
        </Code>
      </Slide>
      <Slide>
        <Controller
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <Presentation
            theme={simple}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Slide>
              <H1>Hello world</H1>
            </Slide>
          </Presentation>
        </Controller>
      </Slide>

      {/* Slide */}
      <Slide>
        <H1>Slide</H1>
        <Code language='jsx'>
          {`
const slide = (
  <Slide>
    <H1>Slide Result</H1>
  </Slide>
)
          `.trim()}
        </Code>
      </Slide>
      <Slide>
        <H1>Slide Result</H1>
      </Slide>

      {/* Elements */}
      <Slide>
        <H1>Elements</H1>
        <Code language='jsx'>
          {`
const slide = (
  <Slide>
    <H1>H1 Result</H1>
    <H2>H2 Result</H2>
    <P>P Result1</P>
    <P>P Result2</P>
    <Ul>
      <Li>Li Result1</Li>
      <Li>Li Result2</Li>
    </Ul>
    <Code language='js'>
      const foo = 'bar'
    </Code>
  </Slide>
)
          `.trim()}
        </Code>
      </Slide>
      <Slide>
        <H1>H1 Result</H1>
        <H2>H2 Result</H2>
        <P>P Result1</P>
        <P>P Result2</P>
        <Ul>
          <Li>Li Result1</Li>
          <Li>Li Result2</Li>
        </Ul>
        <Code language='js'>
          const foo = 'bar'
        </Code>
      </Slide>

      {/* Cover */}
      <Slide>
        <H1>Cover</H1>
        <Code language='jsx'>
          {`
const slide = (
  <Slide>
    <Cover>
      <H1>H1 Result</H1>
      <H2>H2 Result</H2>
    </Cover>
  </Slide>
)
          `.trim()}
        </Code>
      </Slide>
      <Slide>
        <Cover>
          <H1>H1 Result</H1>
          <H2>H2 Result</H2>
        </Cover>
      </Slide>

      <Slide>
        <H1>H1 Result</H1>
        <Center>
          <Ul>
            <Li>Li Result1</Li>
            <Li>Li Result2</Li>
          </Ul>
        </Center>
      </Slide>

      {/* END */}
      <Slide>
        <Cover>
          <H1>END</H1>
        </Cover>
      </Slide>

      {/* Contribute */}
      <Slide>
        <Cover>
          <H1>Contribute!</H1>
          <P>
            <a href='https://github.com/ironhee/ironpt'>
              {'https://github.com/ironhee/ironpt'}
            </a>
          </P>
        </Cover>
      </Slide>
    </Presentation>
  </Controller>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
