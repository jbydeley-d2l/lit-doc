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
        console.log(e)
    }

    focus() {
        this.shadowRoot.querySelector('input').focus()
    }

    render() {
        return html`
            <div>
                <h1 @click=${() => this.focus()}>Hello</h1>
                <input id="input" type="text" value="${this.text}" @keypress=${(e) => this._onChange(e)}>
            </div>`
    }
}

customElements.define('text-input', TextInput);