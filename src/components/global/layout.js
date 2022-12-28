import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
// import Footer from "./footer";
import DrawerAppBar from "./drawer";
import Footer from "./footer";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Hanken Grotesk",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h2: {
      fontFamily: "DM Serif Display",
      fontWeight: 600,
      color: "#002159",
    },
    h3: {
      fontFamily: "DM Serif Display",
      fontWeight: 600,
      color: "#002159",
    },
    h4: {
      fontFamily: "DM Serif Display",
      fontWeight: 600,
      color: "#002159",
    },
    h5: {
      fontFamily: "DM Serif Display",
      fontWeight: 600,
      color: "#002159",
    },
    h6: {
      fontFamily: "DM Serif Display",
      fontWeight: 600,
      color: "#002159",
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.8,
      letterSpacing: ".3px",
      color: "#002159",
    },
  },
  palette: {
    primary: {
      light: "#ffa726",
      main: "#002159",
      dark: "#ef6c00",
      contrastText: "rgba(255,255,255, 1)",
    },
    secondary: {
      light: "#ffa726",
      main: "#4787FA",
      dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(255,255,255, 1)",
    },
    black: {
      light: "#ffa726",
      main: "#222222",
      dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(255,255,255, 1)",
    },

    border: {
      main: "#F1F1F1",
    },
    text: {
      main: "#515E81",
    },
    background: {
      main: "#EEF4FB",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // ...darkScrollbar(),
          // color: "darkred",
          backgroundImage: "linear-gradient(to bottom, #EEF4FB, #ffffff)",
          minHeight: "100vh",
          // "& h1": {
          //   color: "black",
          // },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
      variants: [
        {
          props: { variant: "white" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 0,
              bgcolor: "white",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
              px: 3,
              py: 1,
            }),
        },
        {
          props: { variant: "blue" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1,
              px: 3,
              fontSize: 13,
              bgcolor: "primary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }),
        },
        {
          props: { variant: "sky" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1,
              px: 3,
              fontSize: 13,
              bgcolor: "secondary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "primary.main",
              },
            }),
        },
        {
          props: { variant: "blue-outlined" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "white",
              fontWeight: 600,
              color: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              "&:hover": {
                color: "white",
                bgcolor: "primary.main",
              },
            }),
        },
        {
          props: { variant: "orange-outlined" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 0,
              bgcolor: "white",
              border: "1px solid",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
              px: 3,
              py: 1,
            }),
        },
        {
          props: { variant: "black-text" },
          style: ({ theme }) =>
            theme.unstable_sx({
              p: 0,
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }),
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: "0!important",
            "&:hover": {
              borderColor: "primary.main",
            },
          }),
        input: ({ theme }) =>
          theme.unstable_sx({
            padding: "9.8px 14px!important",

            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerAppBar>{children}</DrawerAppBar>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
