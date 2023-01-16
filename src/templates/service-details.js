import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import PageHeader from "../components/global/page-header";
import Layout from "../components/global/layout";
import MuiBreadCrumbs from "../components/global/mui-breadcrumb";
import { Box, Container, Grid, Typography } from "@mui/material";

const shortcodes = { Link, Grid }; // Provide common components here

export default function ServiceDetails({ data, children }) {
  console.log(data.mdx.frontmatter);
  return (
    <Layout>
      <MuiBreadCrumbs name={data.mdx.frontmatter.title} parent="Services" />
      <PageHeader name={data.mdx.frontmatter.title} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`;

// export function UpperSection() {
//   return (
//     <Container>
//       <Grid container spacing={0}>
//         <Grid item></Grid>
//       </Grid>
//     </Container>
//   );
// }
