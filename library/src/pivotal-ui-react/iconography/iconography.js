import {mergeProps} from 'pui-react-helpers';
import React from 'react';
import {Svg} from 'pui-react-svg';
import 'pui-css-iconography';

const types = React.PropTypes;

class SvgIcon extends Svg {
  svgPathLoader = src => require(`!!babel!svg-react!pui-css-iconography/svgs/${src}.svg`);
}

export class Icon extends React.Component {
  static propTypes = {
    src: types.string.isRequired,
    style: types.object,
    verticalAlign: types.oneOf(['middle', 'baseline'])
  };

  static defaultProps = {
    size: 'inherit',
    style: {},
    verticalAlign: 'middle'
  };

  render() {
    const {src, style, verticalAlign, ...others} = this.props;

    const props = mergeProps(others, {className: `svgicon svg-${verticalAlign}`});
    return <span {...props}>
      <SvgIcon {...{src, style, className: `icon-${src}`, key: src}}/>
    </span>;
  }
}
