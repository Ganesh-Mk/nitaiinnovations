import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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

  const submitChangedData = () => {
    if (firstName === "" || lastName === "" || usersemail === "") {
      alert("Please fill all the fields");
      return;
    }
    if (
      firstName !== originalData.firstName ||
      lastName !== originalData.lastName ||
      usersemail !== originalData.email ||
      image !== originalData.profileImageUrl
    ) {
      console.log("Updating frontend");
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

      axios
        .patch(`${BACKEND_URL}/updateUser`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Successfully updated user in backend: ", res.data);
          setfirstName(res.data.firstName);
          setlastName(res.data.lastName);
          setusersemail(res.data.email);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("email", res.data.email);
          dispatch(storeusername(res.data.username));
          dispatch(storeEmail(res.data.email));
          navigate("/account");
        })
        .catch((err) => {
          console.log("Error in updating user in backend: ", err);
        });
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
        console.log("Recieved data from backend: ", res.data);
        setImage(res.data.profileImageUrl);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        setoriginalData(res.data);
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
        dispatch(storeusername(res.data.username));
        dispatch(storeEmail(res.data.email));
      });
  }, [storeusername]);

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
        marginBottom: "5rem",
      }}
    >
      <Typography variant="h2" mt={"6rem"}>
        Edit Profile
      </Typography>
      <label htmlFor="file-upload" style={fileInputLabelStyles}>
        {image ? image.name : "Select profile image"}
        <Input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
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
          width: { xs: "100%", sm: "100%" },
          gap: "2rem",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={submitChangedData}
        >
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
    </Box>
  );
}

export default EditProfile;
