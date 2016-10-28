[![Build Status](https://travis-ci.org/ironhee/ironpt.svg?branch=master)](https://travis-ci.org/ironhee/ironpt)

# Ironpt

Create presentation with react component.


# Demo & Tutorial

[http://ironhee.github.io/ironpt/](http://ironhee.github.io/ironpt/)

# Install

```bash
npm install -S ironpt
```

# Usage

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
  STYLES
} from 'ironpt'

const MyPresentation = () => (
  <Presentation
    defaultStyle={STYLES.SIMPLE}
    defaultSlide={1}
  >
    <Slide>
      <Cover>
        <H1>Hello world</H1>
        <H2>My presentation - Ironhee</H2>
      </Cover>
    </Slide>
    <Slide>
      <H1>Section 1</H1>
      <P>Hello world!</P>
      <P>Bye world!</P>
    </Slide>
    <Slide>
      <H1>Section 2</H1>
      <Ul>
        <Li>Bla</Li>
        <Li>Bla</Li>
      </Ul>
    </Slide>
    <Slide>
      <Cover>
        <H1>Q&A</H1>
      </Cover>
    </Slide>
  </Presentation>
)

const App = () => (
  <div
    className='App'
    style={{
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0
    }}
  >
    <Controller>
      <MyPresentation />
    </Controller>
  </div>
)

ReactDOM.render(
  <App />,
  document.body
)
```
