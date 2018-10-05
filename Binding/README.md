# Binding

LitElement has removed two way data binding for the more efficient one way binding with events.

## Text Binding

Supports many types: String, Number, Boolean, null, undefined
Primitives values are converted to strings when interpolated. They are checked for equality to the previous value so that the DOM is not updated if the value hasn't changed.

```js
render() {
    const val = "Hello"
    return html`
        <h1>${val}</h1>
    `
}
```

## Attribute Binding

All values are converted to strings.

```js
render() {
    const val = "mood"
    return html`
        <p class=${val}>Hello</p>
    `
}
```

## Boolean Binding

All values evaluated for truthiness.

```js
render() {
    const checked = true;
    return html`
        <input type="checkbox" ?checked=${checked}>
    `
}
```

## Property Binding

Any type of value

```js
render() {
    const mood = "happy"
    return html`
        <my-element .mood=${mood}></my-element>
    `
}
```

## Event Binding

Event handler functions or objects only

```js
_onClick(e) {
    console.log(e)
}

render() {
    return html`
        <button @click=${(e) => this._onClick(e)}>
            Click Me
        </button>
    `
}
```

To bind to the correct context you can bind in the constructor

```js
constructor() {
    super()
    this._boundClick = this._onClick.bind(this)
}

_onClick(e) {
    console.log(e)
}

render() {
    return html`
        <button @click=${this._boundClick}>
            Click Me
        </button>
    `
}
```

To bind directly on the custom element itself, you can add an event listener directly. Use the native lifecycle elements to add and remove the event.

```js
constructor() {
    super()
    this._boundClick = this._onClick.bind(this)
}

connectedCallback() {
    super()
    this.addEventListener('click', this._boundClick)
}

disconnectedCallback() {
    this.removeEventListener('click', this._boundClick)
}

_onClick(e) {
    console.log(e)
}
```