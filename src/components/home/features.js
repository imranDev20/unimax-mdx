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
      name: "Big Experience",
      details:
        "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
      icon: ExperienceIcon,
    },
    {
      id: 2,
      name: "Strong Team",
      details:
        "An excellent team of professionals will help you to bring all your ideas to life in the best possible way and with flexible functionality.",
      icon: TeamIcon,
    },
    {
      id: 3,
      name: "Personal Solutions",
      details:
        "Individual approach to your project. flexible solutions for your tasks to achieve your goals on the path to success.",
      icon: SolutionIcon,
    },
    {
      id: 4,
      name: "Unlimited Revision",
      details:
        "Unlike other WordPress agencies, from start to finish we never limit your revisions for your website design project. We believe our clients need to fully visualize their digital experiences as many times as they need.",
      icon: RevisionIcon,
    },
    {
      id: 5,
      name: "Secure Payment",
      details:
        "Back up your database secure your payment, store in a safe and secure place while still maintaining its accessibility.",
      icon: SecureIcon,
    },
    {
      id: 6,
      name: "24x7 Service",
      details:
        "We have given services twenty-four hours a day feasible and practical plans for successfully transform businesses based on their needs.",
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
