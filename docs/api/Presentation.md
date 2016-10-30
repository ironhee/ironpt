# `<Presentation>`

Presentation component.

#### Props

- `style` - Style: style of the presentation.
  - `simple`
  - `developer`

#### ChildContext
- `styleName` - String: Name of the style.

#### Example

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
