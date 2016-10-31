# `<Controller>`

Controller of [<Presentation>](/docs/api/Presentation.md).
Manage `slideIndex` and pass it as [context](https://facebook.github.io/react/docs/context.html)

#### Props

- `defaultSlideIndex` *(Number)*: Initial Slide index of [<Presentation>](/docs/api/Presentation.md).

#### ChildContext

- `slideIndex` *(Number)*: Slide index of [<Presentation>](/docs/api/Presentation.md).

#### Example

```js
<Controller
  defaultSlideIndex={1}
>
  <Presentation theme={simple}>
    <Slide>
      <H1>Hello world</H1>
    </Slide>
    <Slide>
      <H1>Bye world</H1>
    </Slide>
  </Presentation>
</Controller>
```
