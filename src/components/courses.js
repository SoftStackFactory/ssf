import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const courses = [
  {
    title: 'Intro to Programming',
    description: 'Learn programming fundamentals using Vanilla Javascript and basic HTML/CSS.',
    image: './images/htmlcssjs.png',  
  },
  {
    title: 'MEAN Stack',
    description: 'Create single-page applications using Mongo, Express, Angular, and Node.js.',
    image: './images/mean-stack.png',
  },
  {
    title: 'Ionic Framework',
    description: 'Learn how to create a hybrid mobile application.',
    image: './images/ionic.png',
  },
  {
    title: 'Team Project',
    description: 'Students work together on a real-world project. Code reviews, collaborative GIT, deployments with Heroku, and unit testing.',
    image: './images/team-project.png',
  },
  {
    title: 'Intro to Python for Data Science',
    description: 'Learn the fundamentals of Python and relevant libraries for data manipulation and visualization.',
    image: './images/python-sm.png',
  },
  {
    title: 'Data Science & Machine Learning',
    description: `
      Working with data: Cover techniques that real-life data scientists use to gain insight into datasets. 
      Building and Evaluating Models: Learn to build Machine Learning models, including data prep, parameter selection, and performance testing with SciKit Learn.`,
    image: './images/scikit-learn.svg',
  },
];

const Courses = () => {
    return (
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Courses We Offered
        </Typography>
  
        {/* Description Section */}
        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mx: "auto", maxWidth: 600 }}>
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