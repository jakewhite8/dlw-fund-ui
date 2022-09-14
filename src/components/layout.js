import * as React from 'react'
import NavBar from './navBar'

//Universal style sheet
import '../styles/styles.css'

import * as layoutStyles from '../styles/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.websiteBackgroundColor}>
      <NavBar selectedPage={pageTitle}></NavBar>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout