import * as React from 'react'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import DLWLogo from '../images/dlwlogo.jpeg'
// import { Link } from 'gatsby'


import './navBar.css'

const NavBar = ({selectedPage}) => {
  return (
    <div>
      <h1>{selectedPage}</h1>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={DLWLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar