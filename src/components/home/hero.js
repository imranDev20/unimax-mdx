import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import HeroImg from "../../images/hero-bg.svg";
import { theme } from "../global/layout";

const Hero = () => {
  return (
    <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography
              component="h1"
              variant="h2"
              sx={{ color: "primary.main" }}
            >
              Looking for IT Solutions for Your Business?
            </Typography>
            <Typography component="p" sx={{ my: 2, ...theme.typography.body2 }}>
              Unimax Global follows by its principle of building an all-in-one
              IT solution place where no clients have to turn back! We have
              everything you need to construct an eye-catching online platform
              that follows the trend and falls fight into place.
            </Typography>
            <Button
              LinkComponent={Link}
              to="/contact"
              endIcon={<CgArrowLongRight />}
              sx={{ mt: 1 }}
              variant="sky"
            >
              Contact
            </Button>
          </Grid>
          <Grid item md={6}>
            <img style={{ width: "100%" }} src={HeroImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
