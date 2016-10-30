# Styles

- `simple`
- `developer`

#### Example: `simple`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Presentation,
  Slide,
  H1,
  P,
  simple
}

const App = () => (
  <Presentation style={simple}>
    <Slide>
      <H1>Hello world</H1>
      <P>Bla Bla Bla</P>
    </Slide>
  </Presentation>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```
