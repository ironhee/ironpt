# Elements

ironpt has some predefined elements. It help you to create presentation quickly. Predefined element's styles are changed by [`Theme`](/docs/api/Theme) passed to [`<Presentation>`](/docs/api/Presentation).

# `<H1>`, `<H2>`

Header component.

#### Example

```js
<H1>Main header</H1>
```

```js
<H2>Sub header</H2>
```

# `<P>`

Paragraph component.

#### Example

```js
<P>Paragraph</P>
```

# `<Ul>`, `<Li>`

List component.

#### Example

```js
<Ul>
  <Li>List Item 1</Li>
  <Li>List Item 2</Li>
</Ul>
```

# `<Cover>`

Cover style component.

#### Example

```js
<Cover>
  <H1>Title of presentation</H1>
  <H2>Sub title</H2>
</Cover>
```

# `<Code>`

Code component. Support syntax highlight

#### Props

- `language` *(String)*: Language of the code

#### Example

```js
<Code language='javascript'>
  {`
const a = 1
const b = 2
console.log(a + b)
  `.trim()}
</Code>
```
