import * as React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button'
// import { Link } from 'gatsby'


import './navBar.css'

const NavBar = ({selectedPage}) => {
  return (
    <div>
    <h1>{selectedPage}</h1>
      <ButtonToolbar className="custom-btn-toolbar">
        <ul>
          <li><Button bsPrefix='failure-button'>Home</Button></li>
          <li><Button variant='success'>Photos</Button></li>
        </ul>
      </ButtonToolbar>
    </div>
  )
}

export default NavBar