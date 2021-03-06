import React from 'react';

export default class Props extends React.Component {
  render() {
    let obj = {
      key: 'value'
    };
    return (
      <div data-key={obj.key} data-key2={obj['key']}>
        {this.props.property}
        <link href={this.props['text-element']} />
      </div>
    );
  }
}
