import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "gatsby";
import { CgArrowLongRight } from "react-icons/cg";
import { theme } from "./layout";
// import CustomizedDialogs from "./dialog";
import Logo from "../../images/logo-unimax-hor.svg";
import useScrollListener from "../../hooks/useScrollListener";
import { useState } from "react";

const drawerWidth = 240;
export const navItems = ["Home", "About", "Services", "Contact", "Blog"];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const DrawerAppBar = (props) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navStyles, setNavStyles] = useState({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img src={Logo} style={{ width: "120px" }} alt="" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={item === "Home" ? "/" : item.toLowerCase()}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // hide header on scroll
  const scroll = useScrollListener();

  React.useEffect(() => {
    let classObj = {};

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      classObj = { transform: "translateY(-100%)" };
    }
    if (scroll.y > 100) {
      classObj = {
        backgroundColor: "white",
        boxShadow: "0px 10px 35px 0px rgba(115, 133, 155, 0.1)",
      };
    }

    setNavStyles(classObj);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          component="nav"
          sx={{
            clipPath: "inset(0 0 -25px 0)",
            backgroundColor: "transparent",
            transition: "0.3s all!important",
            ...navStyles,
          }}
          position="sticky"
        >
          <Container>
            <Toolbar
              disableGutters
              sx={{
                height: "70px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                <img src={Logo} style={{ width: "160px" }} alt="" />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    activeStyle={{ color: theme.palette.secondary.main }}
                    to={
                      item === "Home"
                        ? "/"
                        : "/" + item.toLowerCase().replaceAll(" ", "-")
                    }
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      mx: 1,
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Button
                variant="blue"
                color="primary"
                sx={{ ml: 2 }}
                // onClick={() => setDialogOpen(true)}
                endIcon={<CgArrowLongRight />}
              >
                Request Service
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: "100%" }}>
        {props.children}
      </Box>
    </>
  );
};

export default DrawerAppBar;
