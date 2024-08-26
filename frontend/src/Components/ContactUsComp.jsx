import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { Element } from "react-scroll";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function SetView({ coords }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 15); // Adjust zoom level here
  }, [coords, map]);
  return null;
}

function ContactUsComp() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const coords = [15.452990963271466, 75.01120148913052];

  // Define state variables for the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackMessage, setsnackMessage] = useState("");
  const [snackseverity, setsnackseverity] = useState("");

  const inputStyles = {
    sx: { padding: "0.5rem 0" },
    InputProps: {
      sx: { fontSize: "1.2rem" }, // Adjust the font size of the value
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      setsnackMessage("All feilds are required");
      setsnackseverity("error");
      setSnackbarOpen(true);
      return;
    }
    // Log the input values
    axios
      .post(`${BACKEND_URL}/userMessages`, {
        name,
        email,
        subject,
        message,
      })
      .then((res) => {
        setsnackMessage("You message has been sent!");
        setsnackseverity("success");

        console.log("Sucessfully stroed user feedback");
        setSnackbarOpen(true);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2200);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        setsnackMessage("Failed");
        setsnackseverity("error");

        setSnackbarOpen(true);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2200);
        console.log("Error, storing user feedback : ", err);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Element name="contactUsSection">
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: "1rem",
          color: (theme) =>
            theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
        }}
      >
        KEEP IN TOUCH
      </Typography>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Contact Us
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1.3fr 1fr" },
          gap: "3rem",
          padding: "3rem",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side: Form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "1fr",
                mb: "1rem",
              }}
            >
              <TextField
                sx={{ width: "100%" }}
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
                {...inputStyles}
              />
              <TextField
                sx={{ width: "100%" }}
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                type="email"
                {...inputStyles}
              />
              <TextField
                sx={{ width: "100%" }}
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                variant="standard"
                {...inputStyles}
              />
              <TextField
                sx={{ width: "100%" }}
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="standard"
                multiline
                rows={5}
                {...inputStyles}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%", mb: "1rem" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="outlined"
                sx={{ width: "100%" }}
                onClick={() => {
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>

        {/* Right Side: Map */}
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "22rem" }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "1rem",
                boxSizing: "border-box",
                background: "transparent",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.584867647099!2d75.0086892741532!3d15.452941285140712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd600b1102cf%3A0x6fde00d66af72d03!2sNITAI%20INNOVATIONS!5e0!3m2!1sen!2sin!4v1724674983702!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h2">Address:</Typography>
            <Typography variant="p">
              Ramnagar, 1st main, 7th cross,odugoudar building, Dharwad 580001
              KA, INDIA.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackseverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </Element>
  );
}

export default ContactUsComp;
