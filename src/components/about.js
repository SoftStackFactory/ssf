import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



function About() {

    return (
        <Container
          id="about"
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: '100%', md: '80%' },
              textAlign: { sm: 'left', md: 'center' },
            }}
          >
            <Typography component="h2" variant="h4" color="text.primary">
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
            At SoftStack Factory, we believe technology careers should be accessible 
            to everyone. We solve human problems with technology by connecting community to opportunity.
            SoftStack Factory is a network of students, volunteers, sponsors and partners empowering the 
            local San Diego community.
            </Typography>
          </Box>
        </Container>
      );
}

export default About;