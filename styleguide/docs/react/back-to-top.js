/*doc
---
title: Back to Top
name: back_to_top_react
categories:
- react_components_back-to-top
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-back-to-top --save

<img src="/styleguide/download.svg" width="16" height="16"/>
npm install babel-loader svg-react-loader --save-dev
</code>

(The extra loaders are for the [Iconography](/react_base_iconography.html) component.)

Require the subcomponent:

```
const {BackToTop} = require('pui-react-back-to-top');
```

You can use this component to scroll to the top of a page.

The button will be fixed to the bottom right hand corner of the page.

If `alwaysVisible` is not set, the component will only appear after the window has been scrolled.

You can place the link anywhere in your markup, but best practices are either towards the top or bottom of your markup.

```react_wrapped_example
<BackToTop alwaysVisible />
```
*/
