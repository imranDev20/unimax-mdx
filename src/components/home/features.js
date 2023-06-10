import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExperienceIcon from "../../images/experience/experience.svg";
import TeamIcon from "../../images/experience/team.svg";
import SolutionIcon from "../../images/experience/solution.svg";
import RevisionIcon from "../../images/experience/revision.svg";
import SecureIcon from "../../images/experience/secure-payment.svg";
import TwentySevenFourIcon from "../../images/experience/twenty-four-by-seven.svg";
import { theme } from "../global/layout";

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Extensive Industry Experience",
      details:
        "With years of experience in the IT industry, we bring a wealth of knowledge and expertise to every project, ensuring top-notch solutions for our clients.",
      icon: ExperienceIcon,
    },
    {
      id: 2,
      name: "Skilled Team of Professionals",
      details:
        "Our team comprises highly skilled and dedicated professionals who excel in their respective fields, delivering exceptional results and surpassing client expectations.",
      icon: TeamIcon,
    },
    {
      id: 3,
      name: "Proven Track Record",
      details:
        "We have a strong track record of successfully completing numerous projects across various industries, earning the trust and satisfaction of our clients.",
      icon: SolutionIcon,
    },
    {
      id: 4,
      name: "Client-Centric Approach",
      details:
        "We prioritize understanding our clients' unique requirements and business goals, tailoring our solutions to meet their specific needs and delivering personalized experiences.",
      icon: RevisionIcon,
    },
    {
      id: 5,
      name: "Cutting-edge Technology Stack",
      details:
        "We leverage the latest tools, technologies, and frameworks in our development processes, ensuring that our clients benefit from the most innovative and efficient solutions.",
      icon: SecureIcon,
    },
    {
      id: 6,
      name: "Commitment to Quality",
      details:
        "We maintain stringent quality standards throughout our processes, conducting rigorous testing and quality assurance to deliver reliable, high-performance solutions.",
      icon: TwentySevenFourIcon,
    },
  ];
  return (
    <Container sx={{ my: 15 }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Exciting Features of Unimax
      </Typography>
      <Grid container spacing={5} mt={5}>
        {features.map((feature) => (
          <Grid key={feature.id} item md={6} sx={{ display: "flex" }}>
            <Box sx={{ mr: 4 }}>
              <img
                style={{ width: "80px" }}
                src={feature.icon}
                alt={feature.name}
              />
            </Box>
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ color: "primary.main", fontSize: 30, mb: 1 }}
              >
                {feature.name}
              </Typography>
              <Typography
                component="p"
                sx={{ color: "primary.main", ...theme.typography.body2 }}
              >
                {feature.details}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
