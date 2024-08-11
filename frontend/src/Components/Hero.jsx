import * as React from "react";
import { Element } from "react-scroll";
import "../Styles/index.css";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Element name="homeSection">
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              Nitai Innovations
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Welcome to Our Organization! We are passionate about protecting
              your digital life from threats and ensuring your online safety.
              Our mission is to empower individuals and organizations with the
              knowledge and tools to navigate the ever-evolving cybersecurity
              landscape.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {localStorage.getItem("isLogin") == "true" ? (
                <Link to="/createBlog">
                  <Button
                    sx={{ width: { xs: "15rem", md: "auto" } }}
                    variant="contained"
                    color="primary"
                  >
                    Create Blog
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button
                    sx={{ width: { xs: "15rem", md: "auto" } }}
                    variant="contained"
                    color="primary"
                  >
                    Register Now
                  </Button>
                </Link>
              )}
              <Link to="/" state={{ scrollTo: "contactUsSection" }}>
                <Button
                  sx={{ width: { xs: "15rem", md: "auto" } }}
                  variant="outlined"
                  color="primary"
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Element>
  );
}
