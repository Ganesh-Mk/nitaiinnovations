import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function DropDownButton({ toggleDrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const closeTimeout = React.useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleClose();
    toggleDrawer(false)(); // Close the navbar
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      handleClose();
    }, 500);
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
  };

  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleClick}
        onMouseLeave={handleMouseLeave} // Close if mouse leaves the icon
        sx={{ p: "0 !important" }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          onMouseLeave: handleMouseLeave, // Close if mouse leaves the dropdown
          onMouseEnter: handleMouseEnter, // Prevent closing if mouse enters the dropdown
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link to="/cyberSecurity" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleMenuItemClick}>
            <Typography variant="p" color="text.primary">
              Cyber Security
            </Typography>
          </MenuItem>
        </Link>

        <Link to="/cloudService" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleMenuItemClick}>
            <Typography variant="p" color="text.primary">
              Cloud Services
            </Typography>
          </MenuItem>
        </Link>

        <Link to="/AIML" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleMenuItemClick}>
            <Typography variant="p" color="text.primary">
              AI & ML
            </Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}
