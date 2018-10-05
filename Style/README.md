# Style

## Inline Style

```javascript
render() {
    return `
        <style>
            .mood {
                color: #00beef;
            }
        </style>
    `
}
```

## File Style

```js
render() {
    const style = loadFromFile()

    return `<style>${style}</style>`
}
```

## Sass Style

```js
render() {
    const style = loadTranspiledSass()

    return `<style>${style}</style>`
}
```

## CSS Variables
Assuming you have set a variable externally from this element called `--mood-color`

```js
render() {
    return `
        <style>
            .mood {
                color: var(--mood-color)
            }
        </style>
    `
}
```

## Host

`:host` refers to the custom element itself.

```js
render() {
    return `<style>
        :host {
            display: block;
        }
    </style>`
}
```