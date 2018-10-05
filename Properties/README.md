# Properties

## Basic Usage

```js
static get properties() {
    return {
        mood: String
    }
}
```

## Types
???
- String
- Object
- Number
- Array
- Function

## Default Value
Set them in the constructor

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