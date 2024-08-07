import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import "../Styles/navbar.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import DropDownButton from "./DropDownButton";
import {
  storeLoggedinRecord,
  storeEmail,
  storeusername,
} from "../Store/userSlice";

function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  // Access the storeRegisterRecord state
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    console.log("Reload");
    
  }, [storeLoggedinRecord]);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Link
                to="/"
                state={{ scrollTo: "homeSection" }}
                className="navItems"
                style={{ display: "grid", placeItems: "center" }}
              >
                <img
                  src={"/images/nitaiLogo.png"}
                  style={{
                    width: "3rem",
                    margin: "0 2rem 0 .3rem",
                    height: "auto",
                    cursor: "pointer",
                  }}
                  alt="logo of company"
                />
              </Link>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  placeItems: "center",
                }}
              >
                <Link
                  to="/"
                  state={{ scrollTo: "homeSection" }}
                  className="navItems"
                >
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  to="/"
                  state={{ scrollTo: "aboutUsSection" }}
                  className="navItems"
                >
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      About Us
                    </Typography>
                  </MenuItem>
                </Link>

                <Link
                  to="/"
                  state={{ scrollTo: "productsAndSolutionSection" }}
                  className="navItems"
                  sx={{
                    display: "flex",
                  }}
                >
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Products and Solutions
                    </Typography>
                  </MenuItem>
                </Link>
                <DropDownButton toggleDrawer={toggleDrawer} />
                <Link
                  to="/"
                  state={{ scrollTo: "contactUsSection" }}
                  className="navItems"
                >
                  <MenuItem sx={{ ml: 1, py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Contact Us
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/blogs" className="navItems">
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Blogs
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

              {/* Conditionally render the Register button */}
              {!(isLoggedin || isLogin === "true") && (
                <>
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/register"
                    onClick={() => toggleDrawer(false)}
                  >
                    Register
                  </Button>
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/login"
                    onClick={() => toggleDrawer(false)}
                  >
                    Login
                  </Button>
                </>
              )}
              {(isLoggedin || isLogin === "true") && (
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  component={Link}
                  to="/account"
                  onClick={() => toggleDrawer(false)}
                >
                  Account
                </Button>
              )}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <Link
                    to="/"
                    state={{ scrollTo: "homeSection" }}
                    className="navItems"
                    onClick={toggleDrawer(false)}
                  >
                    <MenuItem sx={{ py: "6px", px: "12px" }}>
                      <Typography variant="body2" color="text.primary">
                        Home
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    to="/"
                    state={{ scrollTo: "aboutUsSection" }}
                    className="navItems"
                    onClick={toggleDrawer(false)}
                  >
                    <MenuItem sx={{ py: "6px", px: "12px" }}>
                      <Typography variant="body2" color="text.primary">
                        About Us
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      to="/"
                      state={{ scrollTo: "productsAndSolutionSection" }}
                      className="navItems"
                      onClick={toggleDrawer(false)}
                    >
                      <MenuItem sx={{ py: "6px", px: "12px" }}>
                        <Typography variant="body2" color="text.primary">
                          Products and Solutions
                        </Typography>
                      </MenuItem>
                    </Link>
                    <DropDownButton toggleDrawer={toggleDrawer} />
                  </Box>

                  <Divider />
                  <br />
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 1 }}
                    component={Link}
                    to="/"
                    state={{ scrollTo: "contactUsSection" }}
                    onClick={toggleDrawer(false)}
                  >
                    Contact Us
                  </Button>
                  <br />
                  {!(isLoggedin || isLogin === "true") && (
                    <>
                      <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 1 }}
                        component={Link}
                        to="/register"
                        state={{ scrollTo: "contactUsSection" }}
                        onClick={toggleDrawer(false)}
                      >
                        Register
                      </Button>
                      <br />
                      <Button
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                        size="small"
                        component={Link}
                        to="/login"
                        state={{ scrollTo: "contactUsSection" }}
                        onClick={toggleDrawer(false)}
                      >
                        Login
                      </Button>
                    </>
                  )}
                  <br />
                  {(isLoggedin || isLogin === "true") && (
                    <Button
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 1 }}
                      component={Link}
                      to="/account"
                      onClick={() => toggleDrawer(false)}
                    >
                      Account
                    </Button>
                  )}
                  <div
                    style={{
                      height: "50%",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Link
                      to="/"
                      state={{ scrollTo: "homeSection" }}
                      className="navItems"
                      onClick={toggleDrawer(false)}
                    >
                      <img src="/images/nitaiLogo.png" alt="" />
                    </Link>
                  </div>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
