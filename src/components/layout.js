import * as React from 'react'
import NavBar from './navBar'

import './layout.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='website-background-color'>
      <NavBar selectedPage={pageTitle}></NavBar>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout