import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import './index.css' // Optional: For any custom styles

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Softstack Factory</title>
        <meta name="description" content="Softstack Factory - Site Under Construction" />
      </Helmet>
      <div className="container">
        <StaticImage
          src="../images/logo.png" // Update this path to your logo's location
          alt="Softstack Factory Logo"
          placeholder="none"
          layout="fixed"
          width={420} // Adjust the width as necessary
        />
        <p>Our site is currently under construction. Check back soon for updates!</p>
      </div>
    </main>
  )
}

export default IndexPage
