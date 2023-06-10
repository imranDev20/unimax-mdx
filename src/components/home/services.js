import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import useServices from "../../hooks/useServices";
import { theme } from "../global/layout";
import ServiceCard from "./service-card";

const Services = ({ isPage }) => {
  const data = useServices();

  const services = data?.allFile?.nodes;

  return (
    <Container component="section" sx={{ my: 7, mt: { xs: 20, lg: 7 } }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        {isPage ? "Our Services" : "Our Specialization"}
      </Typography>
      <Typography
        component="p"
        sx={{
          ...theme.typography.body2,
          textAlign: "center",
          maxWidth: 950,
          mx: "auto",
          my: 3,
        }}
      >
        Discover the comprehensive range of IT services offered by Unimax
        Global. Our dedicated teams of experts specialize in various domains,
        bringing a wealth of knowledge and experience to each service we
        provide. From dynamic web development to captivating content writing,
        strategic SEO solutions to impactful digital marketing campaigns, and
        innovative Android app development to tailored WordPress websites, our
        services are tailored to meet your unique business needs. Explore our
        service offerings and unlock the full potential of your digital presence
        with Unimax Global.
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
