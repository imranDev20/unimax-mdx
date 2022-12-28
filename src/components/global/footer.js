import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../images/logo-unimax-hor.svg";
import { theme } from "./layout";

const Footer = () => {
  return (
    <Box component="footer" sx={{ pt: 14, pb: 7 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Box>
              <img
                style={{ maxWidth: 170, marginBottom: 20 }}
                src={Logo}
                alt="Unimax Global Logo"
              />
            </Box>
            <Typography component="p" sx={{ ...theme.typography.body2 }}>
              Provide a full range of IT Services and Solutions to businesses
              and industry leaders, both large and small.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography component="h3" variant="h5">
              IT Services
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
