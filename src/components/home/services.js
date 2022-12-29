import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import useServices from "../../hooks/useServices";
import { theme } from "../global/layout";
import ServiceCard from "./service-card";

const Services = ({ isPage }) => {
  const data = useServices();

  const services = data?.allFile?.nodes;

  console.log(isPage);

  return (
    <Container component="section" sx={{ my: 7 }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Our Specialization
      </Typography>
      <Typography
        component="p"
        sx={{
          ...theme.typography.body2,
          textAlign: "center",
          maxWidth: 800,
          mx: "auto",
          my: 3,
        }}
      >
        We specialize in terms of developing data-driven web applications that
        automate business processes, manage information, and help you create a
        notable online presence in a secure network.
      </Typography>

      <Grid container spacing={4} mt={3}>
        {services.map((service) => (
          <Grid
            key={service.childMdx.frontmatter.id}
            item
            md={6}
            lg={4}
            xs={12}
          >
            <ServiceCard service={service} isPage={isPage} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
