import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const courses = [
  {
    title: 'Intro to Programming',
    description: 'We provided students with a strong foundation in programming by teaching core concepts using Vanilla JavaScript along with essential HTML and CSS skills.',
    image: './images/htmlcssjs.png',  
  },
  {
    title: 'MEAN Stack',
    description: 'We equipped students with the skills to develop dynamic applications using the MEAN Stack (MongoDB, Express, Angular, Node.js) framework.',
    image: './images/mean-stack.png',
  },
  {
    title: 'Ionic Framework',
    description: 'We trained students to build robust hybrid mobile applications using the Ionic framework, guiding them through the process of deployment to the App Store for real-world experience.',
    image: './images/ionic.png',
  },
  {
    title: 'Team Project',
    description: 'Students collaborate on real-world projects, gaining hands-on experience with code reviews, Git collaboration, Heroku deployments, and unit testing.',
    image: './images/team-project.png',
  },
  {
    title: 'Intro to Python for Data Science',
    description: 'We taught students Python fundamentals along with essential libraries for data manipulation and visualization, preparing them for data science and model-building.',
    image: './images/python-sm.png',
  },
  {
    title: 'Data Science & Machine Learning',
    description: `
      We guided students through essential data science techniques, teaching them to build, tune, and evaluate machine learning models with a strong focus on data preparation, model 
      optimization, and testing using SciKit-Learn.`,
    image: './images/scikit-learn.svg',
  },
];

const Courses = () => {
    return (
      <Container id="about" sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Courses We Offered
        </Typography>
  
        {/* Description Section */}
        {/* <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mx: "auto", maxWidth: 600 }}> */}
        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Our coding school provided a wide array of classes designed to equip students with practical and in-demand skills. 
          From foundational programming principles to advanced data science and collaborative team projects, each course was crafted to 
          offer hands-on experience and real-world applications.
        </Typography>
  
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Card Logo */}
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={`${course.title} logo`}
                  sx={{
                    height: 140, // Fixed height to create uniformity across cards
                    width: 'auto', // Allows images to scale within the height constraint
                    objectFit: 'contain', // Keeps image proportions intact
                    padding: 2, // Adds padding to avoid image being too close to card edges
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default Courses;