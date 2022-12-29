import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";

const ServiceCard = ({ service, isPage }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
        borderRadius: 3,
        p: 5,
      }}
    >
      <Box
        sx={{
          height: "11rem",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          src={service.childMdx.frontmatter.image.publicURL}
          alt={service.childMdx.frontmatter.title}
        />
      </Box>

      <Typography
        component="h3"
        variant="h4"
        sx={{ mt: 4, textAlign: "center" }}
      >
        {service.childMdx.frontmatter.title}
      </Typography>
      {isPage ? (
        <Typography
          component="p"
          sx={{ textAlign: "center", mt: 2, ...theme.typography.body2 }}
        >
          {service.childMdx.frontmatter.description}
        </Typography>
      ) : null}
    </Box>
  );
};

export default ServiceCard;
