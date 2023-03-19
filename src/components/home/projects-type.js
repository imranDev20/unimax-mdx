import { Box } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProjectCard from "./project-card";

const ProjectsType = ({ filter }) => {
  const data = useStaticQuery(graphql`
    query ProjectsHomeQuery {
      allFile(
        filter: {
          extension: { eq: "mdx" }
          sourceInstanceName: { eq: "projects" }
        }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              id
              category
              description
              url
              tech
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const allProjects = data.allFile.nodes;

  let filteredProjects;
  if (!filter) {
    return <div>Please provide a filter</div>;
  }
  if (filter === "all") {
    filteredProjects = allProjects;
  } else {
    filteredProjects = allProjects
      .filter((item) => item.childMdx.frontmatter.category === filter)
      .map((item) => item);
  }
  return (
    <>
      {filteredProjects?.length > 0 ? (
        filteredProjects.map((project, index) => {
          return <ProjectCard index={index} project={project} />;
        })
      ) : (
        <Box sx={{ textAlign: "center" }}>No projects of this category</Box>
      )}
    </>
  );
};

export default ProjectsType;
