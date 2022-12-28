import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import JavaScriptIcon from "../../images/technologies/javascript.svg";
import WordPressIcon from "../../images/technologies/wordpress.svg";
import PHPIcon from "../../images/technologies/php.svg";
import ReactIcon from "../../images/technologies/react.svg";
import MongoIcon from "../../images/technologies/mongodb-icon.svg";
import NodeIcon from "../../images/technologies/nodejs.svg";
import PhotoshopIcon from "../../images/technologies/photoshop.svg";
import IllustratorIcon from "../../images/technologies/illustrator.svg";
import ReduxIcon from "../../images/technologies/redux.svg";
import GraphqlIcon from "../../images/technologies/graphql.svg";
import FirebaseIcon from "../../images/technologies/firebase.svg";

const Technologies = () => {
  const techs = [
    { id: 1, icon: JavaScriptIcon, title: "JavaScript" },
    { id: 2, icon: WordPressIcon, title: "WordPress" },
    { id: 3, icon: PHPIcon, title: "PHP" },
    { id: 4, icon: ReactIcon, title: "React" },
    { id: 5, icon: MongoIcon, title: "MongoDB" },
    { id: 6, icon: NodeIcon, title: "Node.js" },
    { id: 7, icon: PhotoshopIcon, title: "Photoshop" },
    { id: 8, icon: IllustratorIcon, title: "Illustrator" },
    { id: 9, icon: ReduxIcon, title: "Redux" },
    { id: 10, icon: GraphqlIcon, title: "GraphQL" },
    { id: 11, icon: FirebaseIcon, title: "Firebase" },
  ];
  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Technologies
      </Typography>
      <Typography
        component="p"
        sx={{
          ...theme.typography.body2,
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          my: 3,
        }}
      >
        We use the best industrial-level technologies for all our projects and
        management to ensure the best quality of our work. Our team constantly
        researches about new tools and incorporates the best ones in our line of
        work.
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={5} mt={0}>
        {techs.map((item) => (
          <Grid key={item.id} item md={2} mb={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: 70,
                alignItems: "center",
              }}
            >
              <img
                style={{ width: 100, height: "100%" }}
                src={item.icon}
                alt={item.title}
              />
            </Box>
            <Typography
              component="h3"
              sx={{ fontSize: 24, fontWeight: 600, textAlign: "center", mt: 3 }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Technologies;
