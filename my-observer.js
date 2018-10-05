import { LitElement, html } from '@polymer/lit-element'

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

customElements.define('my-observer', MyObserver)