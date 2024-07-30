



import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import "../Styles/footer.css";
import { Box, Container, Stack, Typography } from "@mui/material";

const logoStyle = {
  width: "70px",
  marginBottom: "1vw",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      Copyright © NITAI INNOVATIONS&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
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
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "40%" },
            mb: { xs: 4, sm: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: { xs: 0, sm: "-15px" } }}>
              <img
                src={
                  "public/images/nitaiLogo.png"
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              ABOUT NITAI INNOVATIONS
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              We are a passionate and dedicated team of professionals with a
              mission to make a difference in the world of Information
              Technology
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginRight: { xs: 0, sm: "5rem" },
            mb: { xs: 4, sm: 0 },
          }}
        >
          <Typography variant="h5" marginTop={7} color="#0959AA">
            COMPANY OFFICE
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1vw",
              alignItems: "center",
              mt: 2,
            }}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src="public/images/location.png"
              alt=""
            />
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              Ramnagar, 1st main, 7th cross,odugoudar building, Dharwad 580001
              KA, INDIA.
            </Typography>
            
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1vw",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src="public/images/gmail.png"
              alt=""
            />
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              <a href="mailto:hr@nitaiinnovations.com">
                <p style={{ textDecoration: "none", textTransform: "none" }}>
                  hr@nitaiinnovations.com
                </p>
              </a>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" marginTop={7} color="#0959AA" sx={{ textAlign: "center" }}>
            Business Hours
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            sx={{ textAlign: "center" }}
          >
            Our support available to help you 24 hours a day, seven days a week.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            sx={{ textAlign: "center", mt: 2 }}
          >
            <div className="divide">
              <p>Monday-Friday:</p>
              <p>9am to 5pm</p>
            </div>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            sx={{ textAlign: "center" }}
          >
            <div className="divide">
              <p>Saturday:</p>
              <p>10am to 2pm</p>
            </div>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            sx={{ textAlign: "center" }}
          >
            <div className="divide">
              <p>Sunday:</p>
              <p>Closed</p>
            </div>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
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
  );
}