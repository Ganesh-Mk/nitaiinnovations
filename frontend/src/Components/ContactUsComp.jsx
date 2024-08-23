import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Element } from "react-scroll";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

  const inputStyles = {
    InputLabelProps: {
      sx: { fontSize: "1.2rem" }, // Adjust the font size of the label
    },
    InputProps: {
      sx: { fontSize: "1.4rem" }, // Adjust the font size of the value
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Log the input values
    console.log({
      name,
      email,
      subject,
      message,
    });
  };

  return (
    <Element name="contactUsSection">
      <Typography variant="h2" sx={{ textAlign: "center", mb: "1rem" }}>
        KEEP IN TOUCH
      </Typography>
      <Typography variant="h1" sx={{ textAlign: "center", mb: "2rem" }}>
        Contact Us
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1.3fr 1fr" },
          gap: "2rem",
          padding: "2rem",
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
              <MapContainer style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution='&copy; <a href="https://www.esri.com">Esri</a> contributors'
                />
                <SetView coords={coords} />
                <Marker
                  position={coords}
                  icon={L.icon({
                    iconUrl: "../../public/images/mapPointer.png", // Google Maps location icon URL
                    iconSize: [50, 50], // Size of the icon
                    iconAnchor: [10, 32], // Anchor point of the icon
                    popupAnchor: [1, -34], // Popup anchor relative to the icon anchor
                  })}
                >
                  <Popup>Location</Popup>
                </Marker>
              </MapContainer>
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
    </Element>
  );
}

export default ContactUsComp;
