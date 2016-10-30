# `<Presentation>`

Presentation component. It receive [`<Slide>`](/docs/api/Slide) as `props.children`.

#### Props

- `style` *([Style](/docs/api/styles.md))*: style of the presentation.

#### Context

- `slideIndex` *(Number)*: Index of slides.

#### ChildContext
- `styleName` *(String)*: Name of the [style](/docs/api/styles.md).

#### Example

```js
<Presentation style={simple}>
  <Slide>{/* Some contents... */}</Slide>
  <Slide>{/* Some contents... */}</Slide>
</Presentation>
```
