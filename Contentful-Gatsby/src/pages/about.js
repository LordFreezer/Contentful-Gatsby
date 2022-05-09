import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About me</h1>
            <p>I am a person</p>
            <p><Link to="/contact">Want to work with me?</Link></p>

        </Layout>
    )
}

export default AboutPage