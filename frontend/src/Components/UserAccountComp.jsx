import React, { useEffect, useState } from "react";
import { Typography, Box, Button, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  storeLoggedinRecord,
  storeName,
  storeEmail,
  storeusername,
} from "../Store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDialogs } from "@toolpad/core/useDialogs";

const UserAccountComp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [totalPosts, setTotalPosts] = useState("0");
  const [userEmail, setUserEmail] = useState("");
  const [nameOfUser, setNameOfUser] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dialogs = useDialogs();

  useEffect(() => {
    const userName = localStorage.getItem("username");
    const userEmail = localStorage.getItem("email");
    axios
      .get(`${BACKEND_URL}/getUserData`, {
        params: { userName, userEmail },
      })
      .then((res) => {
        const {
          username,
          email,
          totalPostsLength,
          image,
          firstName,
          lastName,
        } = res.data;
        setNameOfUser(username);
        setUserEmail(email);
        setfirstName(firstName);
        setlastname(lastName);
        setTotalPosts(totalPostsLength);
        setProfileImageUrl(image);
      })
      .catch((err) => {
        console.log("Didn't get data of user from backend", err);
      });
  }, [BACKEND_URL]);

  const logoutUser = async () => {
    const confirmLogout = await dialogs.confirm(
      "Are you sure you want to logout?",
      {
        okText: "Yes",
        cancelText: "No",
      }
    );

    if (!confirmLogout) {
      return;
    }

    dispatch(storeLoggedinRecord(false));
    dispatch(storeName(""));
    dispatch(storeEmail(""));
    dispatch(storeusername(""));
    localStorage.setItem("isLogin", false);
    localStorage.setItem("username", "");
    localStorage.setItem("email", "");

    setSnackbarOpen(true); // Open Snackbar after successful logout

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const fullname = firstName + " " + lastname;

  return (
    <Box
      sx={{
        maxWidth: 300,
        height: "80vh",
        borderRight: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingTop: "6rem",
        "@media (max-width: 600px)": {
          maxWidth: "100%",
          position: "relative",
          borderRight: "none",
          borderBottom: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          src={
            profileImageUrl
              ? `${BACKEND_URL}/${profileImageUrl}`
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {nameOfUser}
          </Typography>
          <Typography variant="h2">{fullname}</Typography>
          <Typography variant="body2" color="text.secondary">
            {userEmail}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>{totalPosts}</strong> Posts
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Link to="/createBlog" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ width: { xs: "20rem", sm: "13rem" } }}
              color="primary"
              fullWidth
            >
              Create Blog
            </Button>
          </Link>
          <Link to="/editProfile" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary" fullWidth>
              Edit Profile
            </Button>
          </Link>
          <Button
            onClick={logoutUser}
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right'}}

      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          You have successfully logged out!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserAccountComp;
