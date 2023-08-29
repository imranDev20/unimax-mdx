import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../images/logo-unimax-hor.svg";
import { theme } from "./layout";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Link as GatsbyLink } from "gatsby";
import useServices from "../../hooks/useServices";

const Footer = () => {
  const data = useServices();

  const services = data?.allFile?.nodes;

  const quickLinks = [
    { id: 1, title: "Services" },
    { id: 2, title: "Team" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" },
    { id: 5, title: "Privacy Policy" },
  ];

  return (
    <Box component="footer" sx={{ pt: 14, pb: 7 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Box>
              <img
                style={{ maxWidth: 170, marginBottom: 20 }}
                src={Logo}
                alt="Unimax Global Logo"
              />
            </Box>
            <Typography component="p" sx={{ ...theme.typography.body2 }}>
              Provide a full range of IT Services and Solutions to businesses
              and industry leaders, both large and small.
            </Typography>
            <Stack sx={{ mt: 2 }} spacing={2} direction="row">
              <Link
                component="a"
                sx={{
                  border: "1px solid",
                  borderColor: "border.main",
                  fontSize: 20,
                  px: 1,
                  py: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  transition: "0.3s all",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
                href="https://web.facebook.com/unimaxglobal.bd"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                component="a"
                sx={{
                  border: "1px solid",
                  borderColor: "border.main",
                  fontSize: 20,
                  px: 1,
                  py: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  transition: "0.3s all",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
                href="https://web.facebook.com/unimaxglobal.bd"
                target="_blank"
              >
                <FaTwitter />
              </Link>
              <Link
                component="a"
                sx={{
                  border: "1px solid",
                  borderColor: "border.main",
                  fontSize: 20,
                  px: 1,
                  py: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  transition: "0.2s all",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
                href="https://web.facebook.com/unimaxglobal.bd"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography component="h3" variant="h5" mb={3}>
              IT Services
            </Typography>
            <Box>
              {services.map((item) => (
                <Link
                  to={
                    "/services/" +
                    item.childMdx.frontmatter.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")
                  }
                  key={item.childMdx.frontmatter.id}
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                  component={GatsbyLink}
                >
                  {item.childMdx.frontmatter.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item md={3}>
            <Typography component="h3" variant="h5" mb={3}>
              Quick Link
            </Typography>
            <Box>
              {quickLinks.map((item) => (
                <Link
                  key={item.id}
                  component={GatsbyLink}
                  to={
                    "/" +
                    item.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")
                  }
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item md={3}>
            <Typography component="h3" variant="h5" mb={3}>
              Get In Touch
            </Typography>
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box
                  sx={{
                    display: "block",
                    mr: 1,
                    mt: 1,
                    fontSize: 20,
                    width: 71,
                    color: "secondary.main",
                  }}
                >
                  <FaMapMarkerAlt />
                </Box>
                <Typography component="p" sx={{ ...theme.typography.body2 }}>
                  Al Hajj Khadem Complex, BM. College Road, Barishal 8200
                  Bangladesh
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 0.2 }}>
                <Box
                  sx={{
                    display: "block",
                    width: 30,
                    mr: 1,
                    mt: 1,
                    fontSize: 20,
                    color: "secondary.main",
                  }}
                >
                  <FaPhoneAlt />
                </Box>
                <Link
                  component="a"
                  href="tel:+8801797902116"
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  +880 1797 902 116
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 0.2 }}>
                <Box
                  sx={{
                    display: "block",
                    width: 30,
                    mr: 1,
                    mt: 1,
                    fontSize: 20,
                    color: "secondary.main",
                  }}
                >
                  <FaPhoneAlt />
                </Box>
                <Link
                  component="a"
                  href="tel:+966561025377"
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  <Box>
                    <Box>+966 56 102 5377 </Box>
                    <Box>(Riyadh Representative)</Box>
                  </Box>
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 0.2 }}>
                <Box
                  sx={{
                    display: "block",
                    width: 30,
                    mr: 1,
                    mt: 1,
                    fontSize: 23,
                    color: "secondary.main",
                  }}
                >
                  <RiWhatsappFill />
                </Box>
                <Link
                  component="a"
                  href="https://wa.me/8801797902116"
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  +880 1797 902 116
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 0.2 }}>
                <Box
                  sx={{
                    display: "block",
                    width: 30,
                    mr: 1,
                    mt: 1,
                    fontSize: 20,
                    color: "secondary.main",
                  }}
                >
                  <FaEnvelope />
                </Box>
                <Link
                  component="a"
                  href="mailto:contact@unimaxglobal.net"
                  sx={{
                    display: "block",
                    my: 1,
                    textDecoration: "none",
                    transition: "0.2s color ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  contact@unimaxglobal.net
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />
        <Typography component="p" sx={{ textAlign: "center" }}>
          © {new Date().getFullYear()}{" "}
          <Link
            component={GatsbyLink}
            to="/"
            sx={{
              textDecoration: "none",
              transition: "0.2s color ease",
              color: "secondary.main",
            }}
          >
            Unimax Global
          </Link>
          . All Rights Reserved
        </Typography>
        <Typography sx={{ fontSize: 12, textAlign: "center", mt: 2 }}>
          Designed & Developed by the{" "}
          <Link
            component={GatsbyLink}
            to="/team"
            sx={{
              textDecoration: "none",
              transition: "0.2s color ease",
              color: "secondary.main",
            }}
          >
            Unimax Team
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
