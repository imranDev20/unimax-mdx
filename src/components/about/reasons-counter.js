import { Box, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { theme } from "../global/layout";

const ReasonsCounter = ({ index, target, title, duration, symbol }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        p: 5,
        borderBottom: `${
          index === 0 || index === 1
            ? `2px solid ${theme.palette.background.main}`
            : "none"
        }`,
        borderRight: `${
          index === 0 || index === 2
            ? `2px solid  ${theme.palette.background.main}`
            : "none"
        }`,
      }}
      ref={ref}
    >
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        // separator="."
        useEasing={true}
      >
        {({ countUpRef }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="span"
              sx={{
                fontSize: "3.75rem",
                fontWeight: 700,
                color: "primary.main",
              }}
              className="text-5xl lg:text-6xl font-bold text-primary"
              ref={countUpRef}
            />
            <Box
              sx={{
                fontSize: "3.75rem",
                fontWeight: 700,
                color: "primary.main",
                marginLeft: 1,
              }}
              component="span"
            >
              {symbol}
            </Box>
          </Box>
        )}
      </CountUp>
      <Typography sx={{ fontSize: 20, color: "primary.main", mt: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default ReasonsCounter;
