// import from vendor deps
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/" activeClassName="active">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/slides" activeClassName="active">
            <NavItem>Slides</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }

}
