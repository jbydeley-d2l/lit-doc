# Documentation

## Introduction
What is LitElement?
How does it relate to Polymer?
What is the purpose of it?

## Getting Started
CDN & NPM.
How do I get a basic sample?
How do I start my own project?
What are the requirements?

## Template
Use `render()`
Examples of templates
Slots

## Style
inline
file
sass?
css variables
:host

## Properties
Basic usage (One way binding only)
Types
Default Values
Reflect to Attribute
Private / Protected
Read Only
Computed Properties

## Binding
One Way Binding only
Use Events for two way binding
Standard binding: `.prop=${property}`
Native binding (say `class` or `href`) `prop=${property}`
Boolean binding: `?checked=[[property]]`
Event binding: `@click={(e) => this._onClick(e)}`

## Events
Binding
```JavaScript
this._boundOnClick = this._onClick.bind(this)

@click={this._boundOnClick}
```
Unbinding
```JavaScript
constructor() {
  super();
  this._boundOnClick = this._onClick.bind(this);
}

connectedCallback() {
  super.connectedCallback();
  this.addEventListener('click', this._boundOnClick);
}

disconnectedCallback() {
  super.disconnectedCallback();
  this.removeEventListener('click', this._boundOnClick);
}
```

## Lifecycle
???
connectedCallback
disconnectedCallback
---
render()
shouldUpdate(changedProperties)
update(changedProperties)
firstUpdated(changedProperties)
updated(changedProperties)
updateComplete (promise)
requestUpdate(name?, oldvalue?)
createRenderRoot()

## Common Patterns
Lists
Conditional rendering
Forms
Focus
Observable with setter
Mixins?

## Tools
TypeScript?
Documentation?
State Management (Redux)
Routing (page.js, director, etc)
Internationalization?