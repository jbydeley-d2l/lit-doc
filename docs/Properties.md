# Properties

Properties are used to store data that the components can interact with. Properties are One-Way Bound to the component.

## Basic Usage

When `mood` changes, the component will rerender the template with the new value. `Lit-Html` is smart enough to only render the required elements.

```js
static get properties() {
    return {
        mood: String
    }

    render() {
        return html`${this.mood}`
    }
}
```

## Types

- String
- Object
- Number
- Array
- Function

## Default Value

To set a default value, simply add it to the constructor. If no value is passed in to the component, the default value will be used during render.

```js
static get properties() {
    return {
        mood: String
    }
}

constructor() {
    super()
    this.mood = 'Weird'
}
```

## Reflect to Attribute

To reflect changes for the property to the element's attribute, add the `reflect: true` to the property declaration. When `mood` changes, the host element will change the `mood` attribute to the updated value.

```js
static get properties() {
    return {
        mood: {
            type: String,
            reflect: true
        }
    }
}
```

## Property Scope

Properties aren't reflected to attribute by default but they are always publicly available. If you want to declare a property private / protected, signify it with underscores.

```js
static get properties() {
    return {
        _mood: String
    }
}
```

To give read only access to a private property add a getter

```js
static get properties() {
    return {
        _mood: String
    }
}

get mood() {
    return this._mood;
}
```

## Computed Properties

Render is called whenever our properties change so our computed property should be called as well.
```js
static get properties() {
    return {
        first: String,
        last: String
    }
}

get fullName() {
    return `${this.first} ${this.last}`
}

render() {
    return `${this.fullName}`
}
```