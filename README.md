[![Build Status](https://travis-ci.org/ironhee/ironpt.svg?branch=master)](https://travis-ci.org/ironhee/ironpt)

# Ironpt

Create presentation with react component.

# Install

```bash
npm install -S ironpt
```

# Usage

```js
import React from 'react'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  Title,
  Ul,
  Li,
  P,
} from 'ironpt'

const App = () => (
  <Controller>
    <Presentation>
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
  </Controller>
)

export default App
```
