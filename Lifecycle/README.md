# Lifecycle

## Native lifecycle

1. constructor
2. connectedCallback
3. disconnectedCallback

## LitElement lifecycle events

`changedProperties` is a Map of <property,value>

`shouldUpdate(changedProperties)` (protected): Implement to control if updating and rendering should occur when property values change or requestUpdate() is called. The changedProperties argument is a Map with keys for the changed properties pointing to their previous values. By default, this method always returns true, but this can be customized as an optimization to avoid updating work when changes occur, which should not be rendered.

`firstUpdated(changedProperties)` (protected): This method calls render() and then uses lit-html in order to render the template DOM. It also updates any reflected attributes based on property values. Setting properties inside this method will not trigger another update.

`update(changedProperties)` (protected) Called after the element's DOM has been updated the first time, immediately before updated() is called. This method can be useful for capturing references to rendered static nodes that must be directly acted upon, for example in updated(). Setting properties inside this method will trigger the element to update.

`updated(changedProperties)` (protected) Called whenever the element's DOM has been updated and rendered. Implement to perform post updating tasks via DOM APIs, for example, focusing an element. Setting properties inside this method will trigger the element to update.

`updateComplete` Returns a Promise that resolves when the element has completed updating. The Promise value is a boolean that is true if the element completed the update without triggering another update. The Promise result is false if a property was set inside updated(). This getter can be implemented to await additional state. For example, it is sometimes useful to await a rendered element before fulfilling this Promise. To do this, first await super.updateComplete then any subsequent state.

```js
async doThing() {
    this.mood = 'Awesome';
    await this.updateComplete();

    // Do something based on update being complete
}
```

`requestUpdate(name?, oldValue?)` Call to request the element to asynchronously update regardless of whether or not any property changes are pending. This should be called when an element should update based on some state not triggered by setting a property. In this case, pass no arguments. It should also be called when manually implementing a property setter. In this case, pass the property name and oldValue to ensure that any configured property options are honored. Returns the updateComplete Promise which is resolved when the update completes.

`render()` (protected): Implement to describe the element's DOM using lit-html. Ideally, the render implementation is a pure function using only the element's current properties to describe the element template. This is the only method that must be implemented by subclasses. Note, since render() is called by update(), setting properties does not trigger an update, allowing property values to be computed and validated.