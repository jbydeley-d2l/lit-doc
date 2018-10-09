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

## Forms

```js
import { LitElement, html } from '@polymer/lit-element';

class TextInput extends LitElement {
    static get properties() {
        return {
            text: String
        }
    }

    constructor() {
        super()
        this.text = ''
    }
    
    _onChange(e) {
        // handle onChangeEvent
    }

    render() {
        return html`<input type="text" value="${this.text}" @keypress=${(e) => this._onChange(e)}>`
    }
}

customElements.define('text-input', TextInput);
```

## QuerySelectors

```js
this.shadowRoot.querySelector()
```

## Observers

Observers don't actually exist in LitElement. Instead you can create getters / settings and properties.

```js
class MyObserver extends LitElement {
    static get properties() {
        return {
            __href: String
        }
    }

    get href() {
        return this.__href
    }

    set href(value) {
        console.log('Observed change on href: ', value)
        this.__href = value
    }
    render() {
        return html`${this.href}`
    }
}
```
