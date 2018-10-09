# Getting Started

LitElement uses ES modules so a common approach is to use the [Polymer CLI](https://github.com/Polymer/polymer-cli).

## Install dependencies

Install the webcomponents polyfill as a dev dependency if you are planning to use the component as a dependency of another lit-element. Only the root element should include the polyfill.

```text
mkdir my-element
cd my-element
npm init -y
npm install -D @webcomponents/webcomponentsjs
npm install @polymer/lit-element
npm install -g polymer-cli
```

## Create MyElement

Create an `index.js` with the following code.

```javascript
import {LitElement, html} from '@polymer/lit-element';
    
class MyElement extends LitElement {

    static get properties() {
      return {
        mood: String
      }
    }

    render() {
        return html`<style> .mood { color: green; } </style>
        Web Components are <span class="mood">${this.mood}</span>!`;
    }
    
}

customElements.define('my-element', MyElement);
```

Create an `index.html` in the root folder

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MyElement</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script type="module" src="./index.js"></script>
</head>
<body>
    <my-element mood="wonderful"></my-element>
</body>
</html>
```

## Try It
To run with the Polymer CLI, you'll first need to install it.

```text
polymer serve
```
