import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Box } from "@mui/material";
import { Link as GatsbyLink } from "gatsby";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MuiBreadCrumbs({ name, parent }) {
  return (
    <Box
      role="presentation"
      onClick={handleClick}
      sx={{ display: "flex", justifyContent: "center", mt: 7 }}
    >
      <Breadcrumbs>
        <Link
          component={GatsbyLink}
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          to="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {parent ? (
          <Link
            component={GatsbyLink}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            to="/services"
          >
            <SettingsSuggestIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {parent}
          </Link>
        ) : null}

        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {/* <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          {name}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
