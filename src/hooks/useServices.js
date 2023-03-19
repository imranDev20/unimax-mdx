import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const useServices = () => {
  const data = useStaticQuery(graphql`
    query HomeServicesQuery {
      allFile(
        filter: {
          extension: { eq: "mdx" }
          sourceInstanceName: { eq: "services" }
        }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            slug
            frontmatter {
              title
              id
              description
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

export default useServices;
