import React from "react";
import { Link } from "gatsby";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './index.css' // Optional: For any custom styles


const Footer = () => {
const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="social-media-links">
            <a href="http://www.facebook.com/softstackfactory" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
            </a> 
            <a href="https://twitter.com/SoftStack" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            </a> 
            <a href="https://www.linkedin.com/company/softstackfactory" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            </a>
        </div>
      <ul className="footer-links">
        <li><Link to="/eula">EULA</Link></li>
        <li><Link to="/terms-of-use">Terms of Use</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <br></br>
        <li>SoftStack Factory is a 501(c)3 nonprofit company |</li>
        <li>Copyright © {currentYear} SoftStack Factory</li>
      </ul>

    </footer>
  );
}

export default Footer;
