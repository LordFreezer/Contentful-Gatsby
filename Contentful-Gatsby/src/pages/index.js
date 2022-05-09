import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
// Link is a React component. 
// It preloads the next page to eliminate redirect time.
import { Link } from 'gatsby'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1> Welcome, </h1>
      <h2>Aboard The Derflinger!</h2>
      {/*With anchors*/}
      {/*
      <p>Want to talk to me? <a href="/contact">Contact Me</a>.</p>
      <p>Want news from me? <a href="/blog">My blog</a>.</p>
      <p>Want to know more about me? <a href="/about">About Me</a>.</p>
      */}

      {/*With Links*/}
      <p>Want to talk to me? <Link to="/contact">Contact Me</Link>.</p>
      <p>Want news from me? <Link to="/blog">My blog</Link>.</p>
      <p>Want to know more about me? <Link to="/about">About Me</Link>.</p>

    </Layout>
  )
}

export default IndexPage
