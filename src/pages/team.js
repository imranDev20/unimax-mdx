import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout, { theme } from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import PageHeader from "../components/global/page-header";

const Team = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "team" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            slug
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(
                    height: 400
                    aspectRatio: 0.8
                    placeholder: BLURRED
                  )
                  id
                }
              }
              title
              position
              designation
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
        <MuiBreadCrumbs name="Team" />
        <PageHeader
          name="Team"
          desc="We specialize in terms of developing data-driven web applications that
          automate business processes, manage information, and help you create a
          notable online presence in a secure network."
        />

        <Grid container spacing={3}>
          {team.map((member) => {
            const { title, image, position, designation } =
              member.childMdx.frontmatter;
            return (
              <Grid item md={3}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
                    borderRadius: 3,
                  }}
                >
                  <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
                  <Box sx={{ py: 2, textAlign: "center" }}>
                    <Typography component="h3" variant="h5" mb={1}>
                      {title}
                    </Typography>
                    {position ? (
                      <Typography
                        component="p"
                        sx={{ fontSize: 16, color: "secondary.main" }}
                      >
                        {position}
                      </Typography>
                    ) : null}

                    <Typography
                      component="p"
                      sx={{ fontSize: 16, color: "secondary.main" }}
                    >
                      {designation}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Team;
