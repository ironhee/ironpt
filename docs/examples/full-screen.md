# Example: Full screen presentation

This is the complete source code of full screen presentation.

## Entry Point

#### `index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

## Presentation Component

#### `App.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Controller,
  Presentation,
  Slide,
  H1,
  H2,
  Ul,
  Li,
  Code,
  P,
  developer
} from 'ironpt'

const App = () => (
  <div
    className='App'
    style={{
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0
    }}
  >
    <Controller>
      <Presentation style={developer}>
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
      </Presentation>
    </Controller>
  </div>
)

export default App
```
