/*doc
---
title: Modals
name: modal_react
categories:
- react_components_modals
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-modals --save
</code>

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
animation       | no | Boolean  | true     | Opens and closes the modal widow with sliding and fading animations.
size            | no | String   |          | Size variations
dialogClassName | no | String   |          | A CSS class to apply to the modal dialog
keyboard        | no | Boolean  | true     | Set to false to prevent escape from closing the modal dialog
onEntered       | no | Function |          | Callback that fires after the modal has finished animating in
onExited        | no | Function |          | Callback that fires after the modal has finished animating out
onHide          | no | Function | () => () | Callback that fires as soon as the modal begins closing
show            | no | Boolean  |          | Whether the modal should be opened or closed
title           | no | Node     |          | Title of the modal, shown at the top of the modal

## Basic usage

Import the subcomponents:

```
import {BaseModal, ModalBody, ModalFooter} from 'pui-react-modals';

// for the example
import {DefaultButton} from 'pui-react-buttons';
```

We provide 3 components that can be used to assemble modals:

* `BaseModal`
* `ModalBody`
* `ModalFooter`

**Note**: A modal will be rendered at the end of `body` instead of the DOM node
it is given. This makes positioning work regardless of where you render the
modal. One side effect is `ReactDOM.findDOMNode`does not actually find the
modal DOM node.

```jsx_example
class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};
  }

  render() {
    return (
      <div>
        <DefaultButton onClick={() => this.setState({modalOpen: true})}>
          Open Stateless Modal
        </DefaultButton>
        <BaseModal title='What a Header!'
                   className='optional-custom-class'
                   show={this.state.modalOpen}
                   onHide={() => this.setState({modalOpen: false})}>
          <ModalBody>Text in a body</ModalBody>
          <ModalFooter>
            <DefaultButton onClick={() => this.setState({modalOpen: false})}>
              Close
            </DefaultButton>
          </ModalFooter>
        </BaseModal>
      </div>
    );
  }
}
```

```react_example_table
<MyModal/>
```
*/
