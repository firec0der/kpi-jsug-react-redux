// import from vendor deps
import React, { PropTypes } from 'react';

// import from components
import { NavBar } from '../';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="container">
          <NavBar />
        </div>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    );
  }
}
