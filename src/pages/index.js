import * as React from "react"
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
// styles
import * as indexStyles from '../styles/index.module.css'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={indexStyles.headerBackground}>Doug White Memorial Sports and Recreation Fund</h1>
    </Layout>
  )
}

export default IndexPage
