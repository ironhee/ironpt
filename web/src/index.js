import React from 'react'
import ReactDOM from 'react-dom'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  H1,
  H2,
  Ul,
  Li,
  P,
  Code,
  STYLES
} from 'ironpt'
import './index.css'

const TutorialPresentation = () => (
  <Presentation>
    <Slide>
      <Cover>
        <H1>Tutorial</H1>
        <H2>How to use ironpt</H2>
      </Cover>
    </Slide>

    {/* Controller & Presentation */}
    <Slide>
      <H1>Move</H1>
      <P>Stroke ← & → to move slide</P>
    </Slide>

    {/* Style */}
    <Slide>
      <H1>Move</H1>
      <P>Stroke ↑ & ↓ to change style</P>
    </Slide>

    {/* Controller & Presentation */}
    <Slide>
      <H1>Controller & Presentation</H1>
      <Code language='jsx'>
        {`
const constroller = (
  <Controller
    defaultStyle={STYLES.DEVELOPER}
  >
    <Presentation>
      <Slide>
        <H1>Hello world</H1>
      </Slide>
      <Slide>
        <H1>Bye world</H1>
      </Slide>
    </Presentation>
  </Controller>
)
        `.trim()}
      </Code>
    </Slide>
    <Slide>
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <Controller
          defaultStyle={STYLES.DEVELOPER}
        >
          <Presentation>
            <Slide>
              <H1>Hello world</H1>
            </Slide>
            <Slide>
              <H1>Bye world</H1>
            </Slide>
          </Presentation>
        </Controller>
      </div>
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
)

const App = () => (
  <div
    className='App'
    style={{
      display: 'border-box',
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0
    }}
  >
    <Controller
      defaultStyle={STYLES.SIMPLE}
      defaultSlideIndex={2}
    >
      <TutorialPresentation />
    </Controller>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
