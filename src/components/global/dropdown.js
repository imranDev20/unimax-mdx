import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useServices from "../../hooks/useServices";
import { Link as GatsbyLink } from "gatsby";

export default function Dropdown({ anchorEl, setAnchorEl }) {
  const open = Boolean(anchorEl);
  const data = useServices();

  const services = data?.allFile?.nodes;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        sx: {
          boxShadow: "0px 5px 5px 3px rgba(115, 133, 155, 0.07)",
          minWidth: 200,
          top: "70px!important",
        },
      }}
    >
      <MenuItem
        disableRipple
        sx={{
          fontWeight: 600,
          color: "primary.main",
          transition: "0.3s all",
          "&:hover": {
            color: "secondary.main",
          },
        }}
        component={GatsbyLink}
        to="/services/"
      >
        All Services
      </MenuItem>
      <Divider />
      {services.map((service) => {
        const { id, title } = service.childMdx.frontmatter;
        return (
          <MenuItem
            disableRipple
            sx={{
              fontWeight: 600,
              color: "primary.main",
              transition: "0.3s all",
              "&:hover": {
                color: "secondary.main",
              },
            }}
            component={GatsbyLink}
            to={"/services/" + service.childMdx.slug}
            key={id}
          >
            {title}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
