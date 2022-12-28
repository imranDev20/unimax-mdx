import { Box, Container, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { theme } from "../global/layout";

const Process = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "web-process" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const image = data.file.childImageSharp.gatsbyImageData;
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Our Working Process
      </Typography>
      <Typography
        component="p"
        sx={{
          ...theme.typography.body2,
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          my: 3,
        }}
      >
        Find out how following a structured website design process can help you
        deliver more successful websites faster and more efficiently. Try Unimax
        Global today.
      </Typography>
      <GatsbyImage image={image} alt="Unimax Working Process" />
    </Container>
  );
};

export default Process;
