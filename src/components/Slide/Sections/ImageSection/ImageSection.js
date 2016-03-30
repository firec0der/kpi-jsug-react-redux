// import from vendor deps
import React, { PropTypes as toBe } from 'react';
import { Image } from 'react-bootstrap';

export default class ImageSection extends React.Component {

  static propTypes = {
    source: toBe.string
  };

  render() {
    const { source } = this.props;

    return (
      <Image src={source} rounded responsive />
    );
  }

}
