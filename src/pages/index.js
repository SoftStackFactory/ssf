import React from 'react'
import { Helmet } from 'react-helmet'
import './index.css' // Optional: For any custom styles
import Header from "../components/header";
import Footer from "../components/footer";
import Divider from '@mui/material/Divider';
import Hero from '../components/hero';
import Box from '@mui/material/Box';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <title>Softstack Factory</title>
        <meta name="description" content="Softstack Factory - Site Under Construction" />
      </Helmet>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Header />
        <Hero />
        <Divider />
        <Footer />
      </Box>
    </main>
    
  )
}

export default IndexPage
