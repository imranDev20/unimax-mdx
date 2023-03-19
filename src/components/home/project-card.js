import { alpha, Box, Typography, useTheme } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ProjectCard = ({ project, index }) => {
  const { id, title, image, description, url } = project.childMdx.frontmatter;
  const theme = useTheme();

  const isEven = (index + 1) % 2 === 0;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isEven ? "row-reverse" : "row",
        position: "relative",
        mb: 5,
      }}
    >
      <Box
        component="a"
        href={url}
        target="_blank"
        sx={{
          width: "65%",
          position: "relative",
          "&::before": {
            content: "''",
            borderRadius: "8px",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: alpha(theme.palette.primary.main, 0.5),
            zIndex: 1,
            transition: "0.3s all ease",
          },
          "&:hover": {
            "&::before": {
              backgroundColor: "unset",
            },
          },
        }}
      >
        <GatsbyImage
          style={{
            borderRadius: "8px",
          }}
          imgStyle={{
            borderRadius: "8px",
          }}
          image={image.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </Box>

      <Box
        sx={{
          width: "60%",
          height: "75%",
          backgroundColor: "white",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: isEven ? "unset" : "7%",
          left: isEven ? "7%" : "unset",
          boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
          borderRadius: 2,
          py: 3,
          px: 4,
          zIndex: 2,
        }}
      >
        <Typography
          fontSize={18}
          fontWeight={600}
          sx={{ color: "secondary.main" }}
        >
          {id.toString().length >= 2 ? id : `0${id}`}.
        </Typography>

        <Typography
          fontSize={24}
          fontWeight={600}
          sx={{ color: "primary.main", mb: 2 }}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          fontSize={16}
          sx={{ color: "primary.main", textAlign: "justify" }}
        >
          {description.length > 300
            ? description.substring(0, 300) + "..."
            : description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
