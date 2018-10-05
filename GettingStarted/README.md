# Getting Started

## Basic example

A very basic example can be copied into copied into a single file and will run in modern browsers. 

```Html
<html>
<head>
  <!-- Polyfills only needed for Firefox and Edge. -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@next/webcomponents-loader.js"></script>
</head>
<body>
  <!-- Works only on browsers that support Javascript modules like
       Chrome, Safari, Firefox 60, Edge 17 -->
  <script type="module">
    import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
    
    class MyElement extends LitElement {

      static get properties() { return { mood: String }}

      _render({mood}) {
        return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood">${mood}</span>!`;
      }
      
    }

    customElements.define('my-element', MyElement);
  </script>
  
  <my-element mood="great"></my-element>
  
</body>
</html>
```

## NPM Example

LitElement requires a module compatible tool chain to run and [Polymer CLI](https://github.com/Polymer/polymer-cli) is recommended for that.

### Install dependencies

Install the webcomponents polyfill as a dev dependency if you are planning to use the component as a dependency of another lit-element. Only the root element should include the polyfill
`npm install -D @webcomponents/webcomponentsjs`

Install LitElement
`npm install @polymer/lit-element`

Create an `index.js` in the root folder

```javascript
import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
    
class MyElement extends LitElement {

    static get properties() { return { mood: String }}

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

To run with the Polymer CLI, you'll first need to install it.

`npm install -g polymer-cli`

And then from your root project folder:
`polymer serve`
