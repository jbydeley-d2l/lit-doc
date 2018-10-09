import { LitElement, html } from '@polymer/lit-element';

class LifeCycle extends LitElement {

    static get properties() {
        return {
            mood: {
                type: String
            }
        }
    }

    constructor() {
        super()
        console.log('constructor')
    }

    connectedCallback() {
        super.connectedCallback()
        console.log('connectedCallback')
    }

    disconnectedCallback() {
        super.disconnectedCallback()
        console.log('disconnectedCallback')
    }

    shouldUpdate(changedProperties) {
        super.shouldUpdate(changedProperties)
        console.log('shouldUpdate', changedProperties)
        return true;
    }

    update(changedProperties) {
        super.update(changedProperties)
        console.log('update', changedProperties)
    }

    firstUpdated(changedProperties) {
        console.log('firstUpdated', changedProperties)
    }

    updated(changedProperties) {
        super.updated(changedProperties)
        console.log('updated', changedProperties)
    }

    render() {
        console.log('render')
        return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood">${this.mood}</span>!`;
    }
}

customElements.define('life-cycle', LifeCycle);