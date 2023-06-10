import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout, { theme } from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import PageHeader from "../components/global/page-header";

const TeamPage = () => {
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
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    aspectRatio: 0.9
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
          desc="Meet the talented minds behind Unimax Global's success. Our diverse and highly skilled teams are the driving force behind our exceptional IT services. With expertise ranging from web development to content creation, SEO to digital marketing, and app development to project management, our teams collaborate seamlessly to deliver outstanding results. Get to know the individuals who make up our dynamic teams and discover the passion and dedication that fuels our work."
        />

        <Grid container spacing={3}>
          {team.map((member) => {
            const { title, image, position, designation } =
              member.childMdx.frontmatter;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
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

export default TeamPage;

export const Head = () => (
  <>
    <title>
      Meet Our Exceptional Team | The Driving Force Behind Our Success
    </title>
  </>
);
