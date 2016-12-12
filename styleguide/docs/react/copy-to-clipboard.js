/*doc
---
title: Copy To Clipboard
name: copy_to_clipboard_react
categories:
- react_components_copy-to-clipboard
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-copy-to-clipboard --save
</code>

`CopyToClipboardButton` uses the [Iconography](/react_base_iconography.html) component.
You will need to add an svg loader:

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install babel-loader svg-react-loader --save-dev
</code>

Require the subcomponents:

```
const {CopyToClipboard} = require('pui-react-copy-to-clipboard');
const {CopyToClipboardButton} = require('pui-react-copy-to-clipboard');
```

```react_example_table
<CopyToClipboard text="I got copied by a button"><button>Click Me To Copy</button></CopyToClipboard>

<CopyToClipboardButton text="I got copied by a good looking button"/>
```

The CopyToClipboard Components require the following property:

Property           |  Type         | Description
-------------      | --------------| --------------------------------------------------------------------------
`text`       | String        | Text that is copied when the user clicks

Below is a common example combining a readonly input and a copy button.
Note that there is custom css on the styleguide to get the positioning right.

```
var Input = require('pui-react-inputs').Input
```

```react_example_table
<div className="copy-input">
  <Input label="shareable link" value="bar.com/1234.jpg" readOnly />
  <CopyToClipboardButton text="bar.com/1234.jpg" />
</div>
```

*/
