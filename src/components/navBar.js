import * as React from 'react'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import DLWLogo from '../images/dlwlogo.jpeg'
// import { Link } from 'gatsby'


import './navBar.css'

const NavBar = ({selectedPage}) => {
  return (
    <div>
      <h1>{selectedPage}</h1>
      <Navbar className="nav-bar" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={DLWLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Home
            </Navbar.Brand>
            <Nav.Link href="/photos">Photos</Nav.Link>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar