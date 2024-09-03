import React from 'react'
import { Helmet } from 'react-helmet'
import './index.css' // Optional: For any custom styles
import Header from "../components/header";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Divider from '@mui/material/Divider';
import Construction from '../components/construction';
import Box from '@mui/material/Box';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <title>Softstack Factory</title>
        <meta name="description" content="Softstack Factory - Site Under Construction" />
      </Helmet>
      <Header />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Construction />
        <Divider />
        <Testimonials />
        <Divider />
        <Footer />
      </Box>
    </main>
    
  )
}

export default IndexPage