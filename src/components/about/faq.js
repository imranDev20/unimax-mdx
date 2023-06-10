import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import FaqAccordion from "./accordion";

const Faq = () => {
  return (
    <Container sx={{ my: 20 }}>
      <Grid
        container
        spacing={6}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item md={6}>
          <FaqAccordion />
        </Grid>
        <Grid item md={6}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: "primary.main" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            component="p"
            sx={{
              ...theme.typography.body2,

              my: 3,
            }}
          >
            Find answers to common inquiries about Unimax Global and our IT
            services. Browse through these frequently asked questions to gain
            insights and clarity on our offerings, processes, and how we can
            help your business thrive in the digital realm.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
