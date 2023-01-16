import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import { Link as GatsbyLink } from "gatsby";

const ServiceCard = ({ service, isPage }) => {
  const { slug } = service?.childMdx;
  const { title, image } = service?.childMdx?.frontmatter;

  console.log(slug);

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
          src={image.publicURL}
          alt={title}
        />
      </Box>

      <Link
        to={`/services/${slug}`}
        component={GatsbyLink}
        sx={{
          textDecoration: "none",
        }}
      >
        <Typography
          component="h3"
          variant="h4"
          sx={{
            mt: 4,
            textAlign: "center",
            transition: "0.3s color ease",
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {title}
        </Typography>
      </Link>

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
