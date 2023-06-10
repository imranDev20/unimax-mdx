import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PageHeader from "../components/global/page-header";
import Layout, { theme } from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import { Box, Container, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

export default function ServiceDetails({ data, children }) {
  const { title, stepSection, upperSection, image, detailedSections } =
    data?.mdx?.frontmatter;

  return (
    <Layout>
      <Container>
        <MuiBreadCrumbs name={title} parent="Services" />
        <PageHeader name={title} />
        <Sections
          img={image.publicURL}
          title={upperSection.title}
          body={upperSection.body}
          points={upperSection.points}
        />
        <Steps
          title={stepSection.title}
          desc={stepSection.desc}
          steps={stepSection.steps}
        />
        {detailedSections.map((section, index) => (
          <Sections
            key={index}
            title={section.title}
            body={section.body}
            img={section.image.publicURL}
            index={index}
            sx={{ my: 7 }}
          />
        ))}
      </Container>
      {/* <MDXProvider components={shortcodes}>{children}</MDXProvider> */}
    </Layout>
  );
}

export const Head = ({ data }) => {
  const { title, description } = data.mdx.frontmatter.metaContent;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        image {
          publicURL
        }
        metaContent {
          description
          title
        }
        stepSection {
          desc
          title
          steps {
            desc
            image {
              publicURL
            }
            title
          }
        }
        detailedSections {
          body
          title
          image {
            publicURL
          }
        }
        upperSection {
          body
          title

          points {
            name
            desc
          }
        }
      }
    }
  }
`;

function Sections({ title, body, img, points, index, sx, ...props }) {
  return (
    <Grid
      container
      spacing={6}
      sx={{ ...sx }}
      direction={index % 2 === 0 ? "row-reverse" : "row"}
    >
      <Grid item md={6}>
        <img style={{ width: "100%" }} src={img} alt={title} />
      </Grid>
      <Grid item md={6}>
        <Typography component="h3" variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>

        <Typography sx={{ ...theme.typography.body2, textAlign: "justify" }}>
          <ReactMarkdown
            components={{
              p: React.Fragment,
            }}
            children={body}
          />
        </Typography>

        {points?.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {points.map((item, index) => (
              <Grid item sm={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: "secondary.main",
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    color: "white",
                    borderRadius: 1,
                    mb: 1.5,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography component="h4" variant="h6" sx={{ mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography
                  sx={{ ...theme.typography.body2, textAlign: "justify" }}
                >
                  {item.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}

function Steps({ title, desc, steps }) {
  return (
    <>
      <Grid container mt={10}>
        <Grid item md={6}>
          <Typography component="h3" variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="p" sx={{ ...theme.typography.body2 }}>
            {desc}
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={3} spacing={5}>
        {steps?.length > 0
          ? steps?.map((step, index) => (
              <Grid item md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 18,
                      backgroundColor: "rgba(71, 135, 250, 0.3)",
                      px: 1.5,
                      py: 0.5,
                      mb: 5,
                      borderRadius: 10,
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <img
                    style={{ width: 125, marginBottom: 25, height: 100 }}
                    src={step?.image?.publicURL}
                    alt=""
                  />
                  <Typography component="h3" variant="h6" mb={2}>
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{ ...theme.typography.body2, textAlign: "center" }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
}
