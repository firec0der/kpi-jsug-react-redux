// import from vendor deps
import React, { PropTypes as toBe } from 'react';

export default class PlainHtmlSection extends React.Component {

  static propTypes = {
    content: toBe.string
  };

  prepareContent = () => ({
    __html: this.props.content
  });

  render() {
    return (
      <div dangerouslySetInnerHTML={this.prepareContent()} />
    );
  }

}
