// import from vendor deps
import React, { PropTypes as toBe } from 'react';
import hl from 'highlight.js';

export default class CodeSection extends React.Component {

  static propTypes = {
    lang: toBe.string,
    children: toBe.node
  };

  componentDidMount() {
    hl.highlightBlock(this.refs.code);
  }

  componentDidUpdate() {
    hl.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre>
        <code ref="code" className={this.props.lang}>
          {this.props.children}
        </code>
      </pre>
    );
  }

}
