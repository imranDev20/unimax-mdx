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
  const value = 3.5;

  return (
    <Container>
      <Typography
        component="h2"
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center", mb: 6 }}
      >
        Some of Our Testimonials
      </Typography>
      <CarouselProvider
        totalSlides={3}
        style={{
          position: "relative",
        }}
      >
        <Slider moveThreshold={0.3}>
          {["first", "second", "third"].map((item, index) => {
            return (
              <Slide
                index={0}
                style={{
                  minHeight: "300px",
                  px: 10,
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
                    backgroundColor: "white",
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
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
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
                    Richard Blake
                  </Typography>
                  <Typography
                    sx={{
                      ...theme.typography.body2,

                      textAlign: "center",

                      mx: "auto",
                    }}
                  >
                    Casula Mall, New South Wales
                  </Typography>
                </Card>
              </Slide>
            );
          })}
        </Slider>

        <Box
          sx={{
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
