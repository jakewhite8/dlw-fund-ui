import * as React from 'react'
import NavBar from './navBar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <NavBar selectedPage={pageTitle}></NavBar>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout