// import from vendor deps
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { url } from '../../utils/urls';

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <IndexLinkContainer to={url('/')} activeClassName="active">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={url('/slides')} activeClassName="active">
            <NavItem>Slides</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }

}
