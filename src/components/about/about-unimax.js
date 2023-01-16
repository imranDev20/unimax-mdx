import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { theme } from "../global/layout";

const AboutUnimax = () => {
  const image = useStaticQuery(graphql`
    query AboutUnimaxQuery {
      file(name: { eq: "about-image" }) {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 500
            height: 650
          )
        }
      }
    }
  `);

  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <GatsbyImage
            style={{ borderRadius: 5 }}
            objectFit="contain"
            image={image?.file?.childImageSharp?.gatsbyImageData}
          />
        </Grid>
        <Grid item md={6}>
          <Typography component="h2" variant="h3" sx={{ mb: 3 }}>
            About Unimax Global
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            Our web design company specializes in the professional creation of
            unique sites.
          </Typography>

          <Typography
            component="blockquote"
            sx={{
              ...theme.typography.body2,
              lineHeight: 1.3,
              fontSize: 36,
              display: "inline-block",
              mb: 3,
              fontFamily: "cursive",
              fontWeight: 600,
            }}
          >
            “Alone we can do so little, together we can do so much”{" "}
            <Box
              component="span"
              sx={{
                fontSize: "1rem",
                color: "secondary.main",
                fontFamily: "Hanken Grotesk, sans-serif",
              }}
            >
              – Hellen Keller
            </Box>
          </Typography>

          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            Unimax Global was established five years prior with the principal
            objective of making a working environment giving all-in-one
            solutions for IT-related issues and spreading our administrations
            from one side of the planet to the other.
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            Our team constantly monitors the emergence of new technologies that
            we are not afraid to implement in web projects. We create only
            selling websites – this is an achievement by drawing the design and
            working out usability. The approach to each new project is
            individual, we treat every customer equally, regardless of the size
            of the company and its budget.
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            We pride ourselves, on the quality of our work, our dedication to
            truly understanding our client's goals, and our execution helping
            them realize them.
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            Schedule a meeting at the link below to get a quote and timeline on
            your project today.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUnimax;
