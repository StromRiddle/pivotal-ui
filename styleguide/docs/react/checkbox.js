/*doc
---
title: Checkbox
name: 00_form_checkbox_react
parent: form_react
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-checkbox --save
</code>

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
displayError   | no | Boolean | false | Displays the error message when true
errorMessage   | no | Node    |       | Message that gets displayed when displayError is true
inputClassName | no | String  |       | Classname of the inner input element
id             | no | String  |       | The inner label will specify htmlFor=id
label          | no | Node    |       | The content of this label
labelClassName | no | String  |       | Sets the wrapping label classname

## Basic usage

Import the subcomponent:

```
import {Checkbox} from 'pui-react-checkbox';
```

A Checkbox component renders a checkbox with a label. It accepts standard
checkbox input properties (such as `placeholder`).

```react_example
<Checkbox label="Label"/>
```

A Checkbox component display a custom `errorMessage` when the `displayError` parameter is truthy.

```react_example
<Checkbox label="Label!"
          labelClassName="hello"
          displayError={true}
          errorMessage="You must accept the terms and conditions!"
          inputClassName="hey" />
```
*/
