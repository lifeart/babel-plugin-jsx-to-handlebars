import React from 'react';

export default class TestClass extends React.Component {
  static defaultProps = {
    key: 'some-value'
  }

  render() {
    return <div>{this.props.key}</div>;
  }
}
