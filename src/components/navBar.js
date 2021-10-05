import * as React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'


import './navBar.css'

const NavBar = ({selectedPage}) => {
  return (
    <div>
    <h1>{selectedPage}</h1>
      <ButtonToolbar className="custom-btn-toolbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
      </ButtonToolbar>
    </div>
  )
}

export default NavBar