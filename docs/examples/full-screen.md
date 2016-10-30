# Example: Full screen presentation

This is the complete source code of full screen presentation.

## Entry Point

#### `index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import MyPresentation from './MyPresentation'

ReactDOM.render(
  <Controller>
    <MyPresentation />
  </Controller>,
  document.getElementById('root')
)
```

## Presentation Component

#### `MyPresentation.js`

```js
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
  simple
} from 'ironpt'
import './index.css'

const MyPresentation = () => (
  <Presentation
    theme={simple}
    style={{
      width: window.innerWidth,
      height: window.innerHeight
    }}
  >
    <Slide>
      <Cover>
        <H1>Full screen presentation</H1>
        <H2>Hello world</H2>
      </Cover>
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
    <Slide>
      <Cover>
        <H2>End</H2>
      </Cover>
    </Slide>
  </Presentation>
)

export default MyPresentation
```
