import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout, { theme } from "../components/global/layout";

const Team = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: { sourceInstanceName: { eq: "team" } }) {
        nodes {
          childMdx {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData
                  id
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  const team = data.allFile.nodes;
  return (
    <Layout>
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: "primary.main", textAlign: "center" }}
        >
          Our Team
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
        <Grid container spacing={3}>
          {team.map((member) => {
            const { title, image } = member.childMdx.frontmatter;
            return (
              <Grid item md={3}>
                <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Team;
