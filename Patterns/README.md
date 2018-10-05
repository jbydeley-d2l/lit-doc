# Common Patterns

## Lists

```js
render() {
    const items = [1, 2, 3]
        .map( i => html`<li>${i}</li>`)

    return html`
        <ul>
            ${items}
        </ul>
    `
}
```

## Conditional Rendering

```js
render() {
    const isHappy = true;

    return isHappy
        ? html`<p>HAPPY</p>`
        : html`<p>Not Happy :(</p>`
}
```

```js
render() {
    const isHappy = true;

    return html`<p>
    ${ isHappy ? 'HAPPY' : 'Not Happy :('}
    </p>`
}
```
