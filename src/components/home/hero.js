import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import HeroImg from "../../images/hero-bg.svg";
import { theme } from "../global/layout";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        marginTop: { xs: 8, md: 4, lg: 0 },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            sx={{
              display: { xs: "flex", lg: "block" },
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{
                color: "primary.main",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Empowering Your Digital Success
            </Typography>
            <Typography
              component="p"
              sx={{
                my: 2,
                ...theme.typography.body2,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Welcome to Unimax Global, your gateway to digital success. We are
              a leading IT solutions provider dedicated to transforming
              businesses through innovative technology solutions. With our
              expertise and commitment to excellence, we empower organizations
              to thrive in the ever-evolving digital landscape. From crafting
              captivating user experiences to driving impactful online
              strategies, we deliver results that propel your business forward.
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
          <Grid item lg={6} sx={{ mt: { xs: 5, lg: 0 } }}>
            <img style={{ width: "100%" }} src={HeroImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

// Unimax Global follows by its principle of building an all-in-one
//               IT solution place where no clients have to turn back! We have
//               everything you need to construct an eye-catching online platform
//               that follows the trend and falls fight into place.
