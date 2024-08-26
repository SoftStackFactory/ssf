import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    avatar: <Avatar alt="Dusty Best" src="./images/dusty-best.jpg" />,
    name: 'Dusty Best',
    occupation: 'Database Administrator',
    testimonial:
      "When you're done trying to learn on your own through all of the free online resources, this is the place to be. When trying to get up to speed and job ready, this material is where it's easy to hit a wall and find things difficult. The faculty at Softstack will provide the curriculum, but the hard work is still up to you. When you finally succeed after putting in the effort it will be incredibly rewarding. The big difference between Softstack and going it on your own is the faculty. They are clearly invested in their students, and having them available to bounce questions off of when you are actually stuck is great for getting over road blocks. If you're thinking about it, just take the leap and give this place a shot.",
  },
  {
    avatar: <Avatar alt="Dilyara Tulegenova" src="./images/dilyara-tulegenova.jpg" />,
    name: 'Dilyara Tulegenova',
    occupation: 'Software Developer',
    testimonial:
      "SoftStack Factory is a great place to start if you want to learn how to code because this program provides with fundamental knowledge of programming. I had zero knowledge and skills of how to code, but just after a few months I’ve made huge progress and started developing web applications. The instructors are very helpful, they are not going to give you an answer right away, but they will help you come to the right answer yourself. Under their supervision, I saved so much time and struggle. The decision to go through this Bootcamp was the best decision I have ever made.",
  },
  {
    avatar: <Avatar alt="Florentina Hofbauer" src="./images/florentina-hofbauer.jpg" />,
    name: 'Florentina Hofbauer',
    occupation: 'Software Engineer',
    testimonial:
      'Apart from learning a whole lot of new concepts and being able to create an entire web-app after just two months of SoftStack, I also really enjoyed going to class. It was a whole lot of fun, since the environment of SoftStack is relaxed and welcoming. I was also lucky because apart from having amazing instructors I was also fortunate to have great classmates. All, except one (he found a job as a Software Engineer while at SoftStack) signed up for the next class for mobile development: The Ionic Module.',
  },
  {
    avatar: <Avatar alt="Jeanine Tran" src="./images/jeanine-tran.jpg" />,
    name: 'Jeanine Tran',
    occupation: 'Full Stack Developer',
    testimonial:
      "I am glad to have been a student at SoftStack Factory and I think it’s amazing that such a business model exists. Also, the team members and facilitators are one of the most dedicated and talented individuals I’ve learned from.  The actual class portion was fun and engaging, and my cohort members and I learned how to build an Ionic mobile app after only a few weeks. After our learning phase, we worked together on a team, practicing agile methodologies and industry practices."
      + 
      "Currently, I am working as a full-stack software developer on contract at a multinational Aerospace company in Seal Beach, CA. I have learned so much over this past year, and I would not have gotten to this point without SoftStack Factory. It’s a great point to start your journey into software programming and I recommend it to anyone who is new to the field and looking for a change, or for anyone who is just curious. SoftStack Factory provides the perfect environment for aspiring software developers not only because of the tools they teach, but because you’ll be learning from and growing alongside a motivated and talented team.",
  },
  {
    avatar: <Avatar alt="Gerardo Soto" src="./images/gerardo-soto.jpg" />,
    name: 'Gerardo Soto',
    occupation: 'Full Stack Developer',
    testimonial:
      "After completing the MEAN stack program, fellow cohort members and I are  continuing to polish our final collaborative project. The project consists of a multi-tenant test taking web app in which companies can access an assortment of open source personality tests to assess a prospective employees' compatibility with a company culture and/or team. As a team lead, I've learned how to adeptly manage four other programmers to deliver clean, modular, and scalable code. On a technical basis, I've learned how to use the MEAN stack in conjunction with ionic2 to deliver a progressive web app accessible on a desktop, iPhone and android devices."
      +
      "As of now I have successfully landed a web development internship for an agency whose mission of promoting healthy living aligns with my core values. As well as a software development internship with a company whose mission is to provide an adaptive self-paced learning platform for students in low-resource contexts."
      +
      "Thanks to Softstack factory, I now have the tools to continue to learn and become a competent full stack engineer that uses his breadth knowledge to facilitate civic engagement and collective action focused on social and public health issues",
  },
  {
    avatar: <Avatar alt="Oscar Cornejo" src="./images/oscar-cornejo.jpg" />,
    name: 'Oscar Cornejo',
    occupation: 'Software Engineer',
    testimonial:
      "The main curriculum at SSF was learning a development stack. For us, we focused on the MEAN stack. In 12 weeks, we went from knowing almost nothing about programming, to building an app with the MEAN stack. It required a fair amount of dedication. At times, it was hard to grasp exactly what the frameworks were doing behind the scenes, & every day we were encouraged to continue learning outside the classroom."
      +
      "SSF exposed me to one of the most important rules about working in the software industry. That lesson was to never stop learning. The software industry is one of the few industries where your effort outside of work, will directly affect your path in your career."
      +
      "At the moment, 3 years and a couple months after leaving SSF, I am now working as a Solutions Architect in Test for Northwestern Mutual, where I have the opportunity to work on architecture & design of frameworks and enterprise-level tools.",
  },
];


export default function Testimonials() {

  return (
    <Container
      id="testimonials"
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
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
        At Softstack Factory, we take immense pride in the success of our students. 
        This section is dedicated to showcasing the experiences and stories of those 
        who have walked through our doors, learned new skills, and transformed their 
        careers in the tech industry.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}