import { LitElement, html } from '@polymer/lit-element';
import Maybe from 'maybe-small';

class TopicName extends LitElement {
    static get is() {
        return 'topic-name'
    }

    static get properties() {
        return {
            href: {type: String},
            token: {type: String},
            entity: {type: Object},
        }
    }

    constructor() {
        super()

        this.updateComplete.then( () => {
            fetch(this.href)
                .then(r => r.json())
                .then(data => {
                    this.entity = Maybe.of(data);
                })
        })
    }

    updated(changedProperties) {
        if( changedProperties.has('href') ) {
            console.log('href: ', this.href);
        }
    }

    get title() {
        return Maybe.of(this.entity)
            .chain(
                e => e.properties,
                p => p.title
            ).__value
    }
    render() {
        return html`
            <style>
                :host { background: #00beef; }
            </style>

            <div>
                <my-element mood="Crazy"></my-element>
                ${this.title}
            </div>
        `
    }
}

customElements.define(TopicName.is, TopicName);