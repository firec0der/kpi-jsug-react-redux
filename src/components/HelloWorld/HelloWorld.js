// import from vendor deps
import React from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <Jumbotron>
        <PageHeader>Hello world!</PageHeader>
        <div>
          <a href="https://github.com/firec0der/kpi-jsug-react-redux" target="_blank">
            Look at my code, my code is amazing
          </a>
          <span> &#8592; GitHub </span>
        </div>
      </Jumbotron>
    );
  }

}
