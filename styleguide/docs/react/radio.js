/*doc
---
title: Radio
name: 00_form_radio_react
parent: form_react
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-radio --save
</code>

## Props

RadioGroup

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
id       | no  | String   | | The id of the element
name     | yes | String   | | This name is passed to all children, so you don't have to specify name manually each time
onChange | no  | Function | | Callback that fires each time selection is changed

Radio

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
defaultChecked | no  | Boolean  | false | Whether this element is default checked
value          | yes | String   |       | Value of the radio element
onChange       | no  | Function |       | Callback that fires when this element selection is changed
id             | no  | String   |       | The id of the element
className      | no  | String   |       | The classname of the element
style          | no  | Object   |       | Individual styling of the element
disabled       | no  | Boolean  | false | Whether the radio is disabled

## Basic usage

For the example, you also need to install [Grids](#grid_react) and require `Col` from it.

Import the subcomponents:

```
import {RadioGroup, Radio} from 'pui-react-radio';
```

Using React radio buttons in a form is fairly straightforward.

```react_example
<RadioGroup name="field_name">
  <Radio value="firstValue">You could click this radio button</Radio>
  <Radio value="SecondValue" defaultChecked>This is also a radio button</Radio>
  <Radio value="ThirdValue" disabled>This is a disabled radio button</Radio>
</RadioGroup>
```

In this case, the `name` attached to `RadioGroup` will be applied to all of Radio children.

Additionally, special behaviors can be added to the `onChange` event handler
exposed by radio groups. In this example, additional form controls are displayed
when the user selects the third radio button.

Similar to the `name` property, the `onChange` handlers is passed down to all child components.

```jsx_example
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selection: null};
  }

  render() {
    return (
      <form role="form" className="form-horizontal">
        <div className="form-group">
          <Col md={3}>
            <label>Options</label>
          </Col>
          <Col md={21}>
            <RadioGroup name="stuff" onChange={event => this.setState({selection: event.target.value})}>
              <Radio value="others">Others</Radio>
              <Radio value="others1" defaultChecked>More others</Radio>
              <Radio value="special">Click for more!</Radio>
            </RadioGroup>
          </Col>
        </div>
        {this.state.selection === 'special' && (
          <div className="form-group">
            <Col md={3}>
              <label>Stuff that appears</label>
            </Col>
            <Col md={21}>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
            </Col>
          </div>
        )}
      </form>
    );
  }
}
```

```react_example
<MyComponent />
```
*/
