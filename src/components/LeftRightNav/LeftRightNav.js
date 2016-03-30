// import from vendor deps
import React, { PropTypes } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

export default class LeftRightNav extends React.Component {

  static propTypes = {
    onClickLeft: PropTypes.func,
    onClickRight: PropTypes.func,
    disableLeft: PropTypes.bool,
    disableRight: PropTypes.bool,
    listenKeyboard: PropTypes.bool
  };

  static defaultProps = {
    onClickLeft: () => {},
    onClickRight: () => {},
    disableLeft: true,
    disableRight: false
  };

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  render() {
    const { onClickLeft, onClickRight, disableLeft, disableRight } = this.props;

    return (
      <ButtonGroup>
        <Button
          disabled={disableLeft}
          onClick={onClickLeft}
          bsSize="small"
          bsStyle="primary">Previous</Button>
        <Button
          disabled={disableRight}
          onClick={onClickRight}
          bsSize="small"
          bsStyle="primary">Next</Button>
      </ButtonGroup>
    );
  }

}
