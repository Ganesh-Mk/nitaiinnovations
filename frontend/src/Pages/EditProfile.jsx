import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress, // Import CircularProgress
} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeusername, storeEmail } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [username, setusername] = useState(localStorage.getItem("username"));
  const [usersemail, setusersemail] = useState(localStorage.getItem("email"));
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [originalData, setoriginalData] = useState({});
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Loader state
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const submitChangedData = () => {
    if (firstName === "" || lastName === "" || usersemail === "") {
      setSnackbarMessage("Please fill all the fields");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (
      firstName !== originalData.firstName ||
      lastName !== originalData.lastName ||
      usersemail !== originalData.email ||
      image !== originalData.profileImageUrl
    ) {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("originalEmail", originalData.email);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", usersemail);
      if (image) {
        formData.append("image", image); // Append the image file
      } else {
        formData.append("profileImageUrl", originalData.profileImageUrl); // If no new image, keep the old URL
      }

      setLoading(true); // Show the spinner

      axios
        .patch(`${BACKEND_URL}/updateUser`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setSnackbarMessage("Profile updated successfully!");
          setSnackbarSeverity("success");
          console.log("Response: ", res);

          setSnackbarOpen(true);
          setfirstName(res.data.firstName);
          setlastName(res.data.lastName);
          setusersemail(res.data.email);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("email", res.data.email);
          dispatch(storeusername(res.data.username));
          dispatch(storeEmail(res.data.email));
          setTimeout(() => {
            setLoading(false); // Hide the spinner
            navigate("/account");
          }, 1300);
        })
        .catch((err) => {
          setSnackbarMessage("Failed to update profile. Please try again.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          setLoading(false); // Hide the spinner in case of error
        });
    } else {
      setSnackbarMessage("Nothing changed in profile.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const resetUsersData = () => {
    setfirstName(originalData.firstName);
    setlastName(originalData.lastName);
    setusersemail(originalData.email);
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/getUserData`, {
        params: {
          userName: localStorage.getItem("username"),
          userEmail: localStorage.getItem("email"),
        },
      })
      .then((res) => {
        console.log("Response data:", res.data);
        setImage(res.data.image || ""); // Set image to empty string if not available
        setImagePreview(
          res.data.image ==
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            : `${BACKEND_URL}/${res.data.image}`
        );
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        setoriginalData(res.data);
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
        dispatch(storeusername(res.data.username));
        dispatch(storeEmail(res.data.email));
      });
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const inputStyles = {
    InputLabelProps: {
      sx: { fontSize: "1.2rem" }, // Adjust the font size of the label
    },
    InputProps: {
      sx: { fontSize: "1.4rem" }, // Adjust the font size of the value
    },
  };

  const fileInputStyles = {
    display: "none",
  };

  const fileInputLabelStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f5f5f5",
    border: "1px solid #ccc",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "400",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    height: "10rem",
    width: "10rem",
    borderRadius: "100rem",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: { xs: "0 2rem", sm: "0 20rem" },
        gap: "2rem",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
        }}
      >
        Edit Profile
      </Typography>
      <label htmlFor="file-upload" style={fileInputLabelStyles}>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile Preview"
            style={{
              width: "150%",
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50%",
            }}
          />
        ) : (
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280" />
        )}
        <Input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={fileInputStyles}
        />
      </label>

      <TextField
        sx={{ width: "100%" }}
        disabled
        id="standard-disabled"
        label="Username"
        value={username} // Changed from defaultValue to value
        variant="standard"
        {...inputStyles}
      />

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          id="standard-required"
          label="First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          variant="standard"
          {...inputStyles}
        />
        <TextField
          sx={{ width: "100%" }}
          id="standard-required"
          label="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          variant="standard"
          {...inputStyles}
        />
      </Box>

      <TextField
        sx={{ width: "100%" }}
        id="standard-required"
        label="Email"
        fontSize="5rem"
        onChange={(e) => setusersemail(e.target.value)}
        value={usersemail}
        variant="standard"
        type="email"
        {...inputStyles}
      />

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          marginTop: "1rem",
          width: { xs: "100%", sm: "100%" },
          gap: "1rem",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%", position: "relative" }} // Add position relative
          onClick={submitChangedData}
          disabled={loading} // Disable button when loading
        >
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                color: "#00bcd4",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
          Submit
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%" }}
          onClick={resetUsersData}
        >
          Reset
        </Button>
      </Box>

      {/* Snackbar for success and error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EditProfile;
