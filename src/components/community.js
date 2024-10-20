
import React from "react";
import "./community.css";
import Typography from '@mui/material/Typography';



const organizations = [
    {
      id: 1,
      name: "Sisters League",
      description: "SoftStack Factory supported Sisters League by providing essential funding to upgrade the internet infrastructure in their shelter homes. Additionally, SoftStack assisted in the acquisition of laptops for all residents, enhancing their access to vital resources.",
      logo: "./images/sisterleague-logo.jpeg",
      website: "https://sisterleaguesd.org/"
    },
    {
      id: 2,
      name: "Reality Changers",
      description: "SoftStack Factory proudly sponsored an event for Reality Changers, where we committed to funding their drone coding classes, introducing children to programming through hands-on experience with flying drones. Following the program, the majority of participants expressed a growing interest in technology, and each child was given the opportunity to keep their drone, further encouraging their learning and engagement.",
      logo: "./images/reality-changers-logo.svg",
      website: "https://realitychangers.org/"
    },
    // Add more organizations as needed
  ];


  function Community() {
    return (
        <div className="community" id="community">
          <Typography variant="h4" gutterBottom>
            Community Outreach
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          At SoftStack Factory, we are proud to support and collaborate with a wide range of organizations dedicated to 
          making a difference in our communities. From providing technological resources to offering financial assistance, 
          we strive to empower these organizations to further their missions. Below, you’ll find a list of organizations 
          we've had the privilege to assist, each playing a vital role in creating positive change.
          </Typography>
          <div className="organization-list">
            {organizations.map((member, index) => (
              <div key={index} className="organization-card">
                <a href={member.website} target="_blank" rel="noopener noreferrer">
                    <img src={member.logo} alt={`${member.name} logo`} className="organization-logo" />
                </a>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body1" className="white-text">{member.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Community;
