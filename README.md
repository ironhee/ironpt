 [![Build Status](https://travis-ci.org/ironhee/ironpt.svg?branch=master)](https://travis-ci.org/ironhee/ironpt)

# Ironpt

Simple presentation react components library.

Support mobile and desktop. (touch, keyboard)

Easy to customize, support styling.

__Just put in your existing component!__

# Demo & Tutorial

[http://ironhee.github.io/ironpt/](http://ironhee.github.io/ironpt/)

# Install

```bash
npm install -S ironpt
```

# Example

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
  STYLES
} from 'ironpt'

const App = () => (
  <div
    className='App'
    style={{
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0
    }}
  >
    <Controller
      defaultStyle={STYLES.SIMPLE}
    >
      <Presentation>
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

ReactDOM.render(
  <App />,
  document.body
)
```

# API

## `STYLES`

Style contants.

- `SIMPLE`
- `DEVELOPER`

## `<Controller>`

Controller of presentation component.
Handling __touch__, __keyboard__ events.

__Props__
- `defaultStyle` - String: Initial style of presentation.
- `defaultSlideIndex` - Number: Initial index of slides.

__ChildContext__
- `style` - String: Style of presentation.
- `slideIndex` - Number: Index of slides.

__Usage__

```js
<Controller
  defaultStyle={STYLES.SIMPLE}
  defaultSlideIndex={1}
>
  {/* Presentation here */}
</Controller>
```

## `<Presentation>`

Presentation component.

__Usage__

```js
<Presentation>
  {/* Slides here */}
</Presentation>
```

## `<Slide>`

Slide of presentation component.

__Usage__

```js
<Slide>
  {/* Slide content here */}
</Slide>
```

## `<H1>`, `<H2>`

Header component.

__Usage__

```js
<Slide>
  <H1>Main header</H1>
  <H2>Sub Header</H2>
</Slide>
```

## `<P>`

Paragraph component.

__Usage__

```js
<Slide>
  <P>Paragraph</P>
</Slide>
```

## `<Ul>`, `<Li>`

List component.

__Usage__

```js
<Slide>
  <Ul>
    <Li>List Item 1</Li>
    <Li>List Item 2</Li>
  </Ul>
</Slide>
```

## `<Cover>`

Cover Style component.

__Usage__

```js
<Slide>
  <Cover>
    <H1>Title of presentation</H1>
    <H2>Sub title</H2>
  </Cover>
</Slide>
```

## `<Code>`

Code component. Support syntax highlight


__Props__
- `language` - String: Language of the code

__Usage__

```js
<Slide>
  <Code language='javascript'>
    {`
const a = 1
const b = 2
console.log(a + b)
    `.trim()}
  </Code>
</Slide>
```
