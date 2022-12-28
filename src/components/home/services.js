import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { theme } from "../global/layout";

const Services = () => {
  const data = useStaticQuery(graphql`
    query HomeServicesQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              id
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const services = data?.allFile?.nodes;

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
            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
                borderRadius: 3,
                p: 5,
              }}
            >
              <Box
                sx={{
                  height: "11rem",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={service.childMdx.frontmatter.image.publicURL}
                  alt={service.childMdx.frontmatter.title}
                />
              </Box>

              <Typography
                component="h3"
                variant="h4"
                sx={{ mt: 4, textAlign: "center" }}
              >
                {service.childMdx.frontmatter.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
