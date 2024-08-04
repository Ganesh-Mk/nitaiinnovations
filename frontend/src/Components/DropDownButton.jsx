import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function DropDownButton({ toggleDrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (path) => {
    return () => {
      toggleDrawer(false)();
      handleClose();
    };
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleClick}
        sx={{ p: "0 !important" }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to="/cyberSecurity" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleItemClick("/cyberSecurity")}>
            Cyber Security
          </MenuItem>
        </Link>

        <Link to="/cloudService" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleItemClick("/cloudService")}>
            Cloud Services
          </MenuItem>
        </Link>

        <Link to="/AIML" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleItemClick("/AIML")}>AI & ML</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
