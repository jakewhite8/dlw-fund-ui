import * as React from 'react'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      {/*navigation bar*/}
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout