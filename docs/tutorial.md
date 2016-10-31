# Tutorial

1. Create react project with [create-react-app](https://github.com/facebookincubator/create-react-app)

  ```bash
  npm install -g create-react-app
  create-react-app YOUR_APP_NAME
  ```

1. Install ironpt

  ```bash
  npm install --save ironpt
  ```

1. Edit */src/index.js*

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

  const presentationStyle = {
    width: 600,
    height: 600
  }

  ReactDOM.render(
    <Controller>
      <Presentation
        theme={simple}
        style={presentationStyle}
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
    </Controller>,
    document.getElementById('root')
  )
  ```

1. Edit */src/index.css*

  ```css
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  ```

1. Start dev server

  ```bash
  npm start
  ```

1. See presentation in your browser

  ```bash
  open http://localhost:3000
  ```

1. Build presentation

  ```bash
  npm run build
  ```

1. Install [gh-pages](https://github.com/tschaub/gh-pages)

  ```bash
  npm install gh-pages --save-dev
  ```

1. Add your [Github Pages](https://pages.github.com/) URL in your *package.json*

  ```json
  {
    "homepage": "http://ironhee.github.io/ironpt/"
  }
  ```

1. Deploy to your github pages!

  ```bash
  gh-pages -d build
  ```

1. See presentation in your github page

  ```bash
  open http://ironhee.github.io/ironpt/
  ```
