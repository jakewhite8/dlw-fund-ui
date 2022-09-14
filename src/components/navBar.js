import * as React from 'react'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import DLWLogo from '../images/dlwlogo.jpeg'
import { Link } from 'gatsby'

import * as navBarStyles from '../styles/navBar.module.css'

const NavBar = () => {
  return (
    <div>
      <Navbar className={navBarStyles.navBar} variant="dark">
          <Container>
            <Link to ="/">
              <img
                alt=""
                src={DLWLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            </Link>
            <Link to="/photos">
              <span>Photos</span>
            </Link>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar