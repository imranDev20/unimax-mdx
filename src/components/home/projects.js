import React from "react";
import { useRef } from "react";

import ProjectsType from "./projects-type";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Container, Grow, Slide, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const containerRef = useRef();

  return (
    <div
      ref={containerRef}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grow
          direction="up"
          in={value === index}
          container={containerRef.current}
        >
          <Box sx={{ p: 3 }}>{children}</Box>
        </Grow>
      )}
    </div>
  );
}

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center", mb: 6 }}
      >
        Projects We have Undertaken
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: 5, width: "100%" }}>
          <Tabs
            variant="scrollable"
            sx={{
              "& .MuiTabs-indicator": {
                height: "100%",
                borderRadius: 2,
                zIndex: -10,
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "unset", md: "center" },
              },

              "& .MuiButtonBase-root": {
                transition: "0.3s ease",
              },

              "& .MuiButtonBase-root.Mui-selected": {
                color: "white",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab disableRipple label="All Projects" />
            <Tab disableRipple label="Web Application" />
            <Tab disableRipple label="WordPress" />
            <Tab disableRipple label="Logo" />
            <Tab disableRipple label="UI/UX" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ProjectsType filter="all" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProjectsType filter="application" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectsType filter="wordpress" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Coming Soon...
        </TabPanel>
        <TabPanel value={value} index={4}>
          Coming Soon...
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Projects;
