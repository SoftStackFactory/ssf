import React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import '../pages/index.css' // Optional: For any custom styles


const Header = () => {

  return (
    <header className="site-header">
        <div id="logo-wrapper">
            <StaticImage
                src="../images/logo.png" // Update this path to your logo's location
                alt="Softstack Factory Logo"
                placeholder="none"
                layout="fixed"
                width={185} // Adjust the width as necessary
            />
        </div>

    </header>
  );
}

export default Header;
