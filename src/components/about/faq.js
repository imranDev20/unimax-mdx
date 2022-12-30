import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import FaqAccordion from "./accordion";

const Faq = () => {
  return (
    <Container>
      <Grid container spacing={0}>
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

              maxWidth: 450,

              my: 3,
            }}
          >
            Unimax Global takes into consideration every little detail to make
            sure the system runs smoothly and responsively.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <FaqAccordion />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
