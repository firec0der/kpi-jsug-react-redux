// import from vendor deps
import React from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <Jumbotron>
        <PageHeader>Hello world!</PageHeader>
      </Jumbotron>
    );
  }

}
