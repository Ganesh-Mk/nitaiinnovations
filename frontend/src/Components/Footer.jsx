import * as React from "react";
import Link from "@mui/material/Link";
import "../Styles/footer.css";
import { Box, Container, Typography } from "@mui/material";
import DividerLine from "./DividerLine";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      mt={1}
      textAlign="center"
    >
      Copyright © NITAI INNOVATIONS&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <DividerLine />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 2 },
          py: { xs: 8, sm: 4 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <img src="/images/nitaiLogo.png" alt="logo" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            className="sectionDivider"
            sx={{
              display: " grid",
              gap: "1rem",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            }}
          >
            <Box
              sx={{
                display: "grid",
                flexDirection: "column",
                gap: 1,
                marginRight: { xs: 0, sm: "2rem" },
                mb: { xs: 4, sm: 0 },
              }}
            >
              <Typography variant="h5" marginTop={7} color="#0959AA">
                ABOUT NITAI INNOVATIONS
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "1vw",
                  mt: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                >
                  We are a passionate and dedicated team of professionals with a
                  mission to make a difference in the world of Information
                  Technology
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginRight: { xs: 0, sm: "2rem" },
                mb: { xs: 4, sm: 0 },
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center" }}
                marginTop={7}
                color="#0959AA"
              >
                COMPANY OFFICE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "1vw",
                  mt: 2,
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/images/location.png"
                  alt=""
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                >
                  Ramnagar, 1st main, 7th cross,odugoudar building, Dharwad
                  580001 KA, INDIA.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "1vw",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginRight: { xs: "2rem", sm: "0" } }}>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/images/gmail.png"
                    alt=""
                  />
                </Box>

                <a
                  href="mailto:hr@nitaiinnovations.com"
                  style={{ textDecoration: "none", textTransform: "none" }}
                >
                  hr@nitaiinnovations.com
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="h5"
                marginTop={7}
                color="#0959AA"
                sx={{ textAlign: "center" }}
              >
                BUSINESS HOURS
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ textAlign: "center" }}
              >
                Our support available to help you 24 hours a day, seven days a
                week.
              </Typography>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Monday-Friday:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  9am to 5pm
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Monday-Friday:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  9am to 5pm
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Monday-Friday:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  9am to 5pm
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            pt: { xs: 4, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Copyright />
          </div>
        </Box>
      </Container>
    </>
  );
}
