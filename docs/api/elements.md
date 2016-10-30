# `<Slide>`

Slide of presentation component.

#### Example

```js
<Slide>
  {/* Slide content here */}
</Slide>
```

# `<H1>`, `<H2>`

Header component.

#### Example

```js
<Slide>
  <H1>Main header</H1>
  <H2>Sub Header</H2>
</Slide>
```

# `<P>`

Paragraph component.

#### Example

```js
<Slide>
  <P>Paragraph</P>
</Slide>
```

# `<Ul>`, `<Li>`

List component.

#### Example

```js
<Slide>
  <Ul>
    <Li>List Item 1</Li>
    <Li>List Item 2</Li>
  </Ul>
</Slide>
```

# `<Cover>`

Cover Style component.

#### Example

```js
<Slide>
  <Cover>
    <H1>Title of presentation</H1>
    <H2>Sub title</H2>
  </Cover>
</Slide>
```

# `<Code>`

Code component. Support syntax highlight


#### Props

- `language` - String: Language of the code

#### Example

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
