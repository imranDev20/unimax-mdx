import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "./layout";

const PageHeader = ({ name, desc }) => {
  return (
    <Box sx={{ mt: 5, mb: 5, textAlign: "center" }}>
      <Typography sx={{ mb: 2 }} component="h1" variant="h3">
        {name}
      </Typography>
      <Typography sx={{ maxWidth: 800, mx: "auto", ...theme.typography.body2 }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default PageHeader;
