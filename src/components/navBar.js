import * as React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button'

import './navBar.css'

const NavBar = ({selectedPage}) => {
  return (
    <div>
    <h1>Navigation Bar</h1>
      <ButtonToolbar className="custom-btn-toolbar">
        <Button>{selectedPage}</Button>
        <Button>Photos</Button>
      </ButtonToolbar>
    </div>
  )
}

export default NavBar