import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import ReasonsCounter from "./reasons-counter";

const reasons = [
  { id: 1, text: "Skilled Team Members", number: 15, symbol: "+" },
  { id: 2, text: "Satisfied Customers", number: 115, symbol: "+" },
  { id: 3, text: "Successfull Projects", number: 65, symbol: "+" },
  { id: 4, text: "Years of Experience", number: 5, symbol: "+" },
];

const Reasons = () => {
  return (
    <Container sx={{ my: 20 }}>
      <Grid container spacing={6}>
        <Grid item sm={6}>
          <Typography component="h2" variant="h3" sx={{ mb: 3 }}>
            Why Choose Us
          </Typography>
          <Typography
            sx={{
              ...theme.typography.body2,
              lineHeight: 1.3,
              fontSize: 36,
              display: "inline-block",
              mb: 3,
              fontFamily: "cursive",
              fontWeight: 600,
            }}
          >
            Reach out to the world’s most reliable IT services.
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            The IT services that Unimax Global are running can be segmented by
            the type of skills employed to deliver the service (design, build,
            run).
          </Typography>
          <Typography sx={{ ...theme.typography.body2, mb: 3 }}>
            Technically, these fall into three main categories: business process
            services, application services, and infrastructure services.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Grid
            container
            sx={{
              backgroundColor: "white",
              maxWidth: 500,
              borderRadius: 2,
              boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
              overflow: "hidden",
            }}
          >
            {reasons.map((item, index) => (
              <Grid item xs={6}>
                <ReasonsCounter
                  key={item?.id}
                  index={index}
                  target={item?.number}
                  title={item?.text}
                  duration={2}
                  symbol="+"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reasons;
