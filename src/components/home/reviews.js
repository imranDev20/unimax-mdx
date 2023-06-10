import {
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Do,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { theme } from "../global/layout";
import { ArrowRightAlt, Star } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const Reviews = () => {
  const value = 4.5;

  const testimonials = [
    {
      id: 1,
      text: "Unimax Global has been instrumental in transforming our online presence. Their expertise in web development and digital marketing helped us achieve higher visibility and drive significant traffic to our website. Their professionalism, attention to detail, and timely delivery are commendable. We highly recommend their services.",
      name: "Farhad Kabir",
      address: "20-22 Wenlock Road, London, England, N1 7GU",
    },

    {
      id: 2,
      text: "Working with Unimax Global has been a game-changer for our business. Their team's exceptional skills in content writing and SEO strategies have helped us rank higher in search results, resulting in increased organic traffic and conversions. Their proactive approach and excellent communication make them a pleasure to work with.",
      name: "Parmindar Singh",
      address: "173 Camberwell Rd, London SE5 0HB, United Kingdom",
    },
    {
      id: 3,
      text: "Unimax Global exceeded our expectations with their top-notch Android app development services. The app they created for our business not only looks stunning but also functions seamlessly, providing an intuitive user experience. Their team's technical expertise, professionalism, and commitment to quality are unmatched.",
      name: "Kamal Ahmed",
      address:
        "Unit 46D, Micro Business Park, 46-50 Greatorex Street, London E1 5NP",
    },
  ];

  return (
    <Container>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center", mb: 6 }}
      >
        Some of Our Testimonials
      </Typography>

      <Typography
        component="p"
        sx={{
          ...theme.typography.body2,
          textAlign: "center",
          maxWidth: 950,
          mx: "auto",
          my: 3,
        }}
      >
        Real clients, real experiences. Read what our clients have to say about
        their journey with Unimax Global. From website development to digital
        marketing, our services have made a significant impact on their
        businesses. Discover how we've helped businesses like yours achieve
        digital success.
      </Typography>

      <CarouselProvider
        totalSlides={3}
        style={{
          position: "relative",
        }}
      >
        <Slider moveThreshold={0.3} style={{ paddingBottom: 30 }}>
          {testimonials.map((item, index) => {
            return (
              <Slide
                index={0}
                style={{
                  minHeight: "300px",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
                    backgroundColor: "background.main",
                    maxWidth: 650,
                    mx: "auto",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      ...theme.typography.body2,
                      mb: 3,
                      textAlign: "center",

                      mx: "auto",
                    }}
                  >
                    {item.text}
                  </Typography>

                  <Box
                    sx={{
                      width: 200,
                      mx: "auto",
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                      }
                    />
                    <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                  </Box>

                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      textAlign: "center",
                      mx: "auto",
                      fontSize: 20,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      ...theme.typography.body2,

                      textAlign: "center",

                      mx: "auto",
                    }}
                  >
                    {item.address}
                  </Typography>
                </Card>
              </Slide>
            );
          })}
        </Slider>

        <Box
          sx={{
            mt: 3,
            "& .carousel__dot": {
              backgroundColor: "transparent",
              border: "1px solid",
              borderColor: "secondary.main",
              width: 17,
              height: 17,
              mx: 0.5,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.1,
            },

            "& .carousel__dot--selected": {
              "& span": {
                display: "block",
                width: 9,
                height: 9,
                backgroundColor: "secondary.main",
                borderRadius: "50%",
              },
            },
          }}
        >
          <DotGroup
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 0,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ButtonBack
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "50%",
            }}
          >
            <IconButton
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
              }}
            >
              <ArrowRightAlt
                color="secondary"
                sx={{
                  transform: "rotate(-180deg)",
                }}
              />
            </IconButton>
          </ButtonBack>
          <ButtonNext
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "50%",
            }}
          >
            <IconButton
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
              }}
            >
              <ArrowRightAlt color="secondary" />
            </IconButton>
          </ButtonNext>
        </Box>
      </CarouselProvider>
    </Container>
  );
};

export default Reviews;
