# `<Presentation>`

Presentation component. It receive [<Slide>](/docs/api/Slide.md) as `props.children`.

#### Props

- `theme` *([Theme](/docs/api/Theme.md))*: theme of the presentation.

#### Context

- `slideIndex` *(Number)*: Index of slides.

#### ChildContext
- `themeName` *(String)*: Name of the [Theme](/docs/api/Theme.md).

#### Example

```js
<Presentation theme={simple}>
  <Slide>{/* Some contents... */}</Slide>
  <Slide>{/* Some contents... */}</Slide>
</Presentation>
```
