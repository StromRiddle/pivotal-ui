import React from 'react';
import {mergeProps} from 'pui-react-helpers';
import 'pui-css-dividers';

const types = React.PropTypes;

export class Divider extends React.Component {
  static propTypes = {
    inverse: types.bool,
    size: types.oneOf(['large'])
  }

  render() {
    const {inverse, size, ...others} = this.props;
    const dividerClass = {
      'divider-1': inverse && size !== 'large',
      'divider-2': inverse && size === 'large',
      'divider-alternate-1': !inverse && size !== 'large',
      'divider-alternate-2': !inverse && size === 'large'
    };

    const props = mergeProps(others, {className: dividerClass});

    return <hr {...props}/>;
  }
}

const defDivider = props => {
  return class extends React.Component {
    static propTypes = {
      inverse: types.bool,
      size: types.oneOf(['large'])
    }

    render() {
      return <Divider {...props} {...this.props} />;
    }
  };
};

export const InverseDivider = defDivider({inverse: true});
