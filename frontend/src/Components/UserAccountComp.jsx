import { Typography, Box, Button, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  storeLoggedinRecord,
  storeName,
  storeEmail,
  storeusername,
} from "../Store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserAccountComp = () => {
  const [firstName, setfirstName] = useState("")
  const [lastname, setlastname] = useState("")
  const [totalPosts, setTotalPosts] = useState("0");
  const [userEmail, setUserEmail] = useState("");
  const [nameOfUser, setNameOfUser] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(""); // New state for profile image
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("username");
    const userEmail = localStorage.getItem("email");
    axios
      .get(`${BACKEND_URL}/getUserData`, {
        params: { userName, userEmail },
      })
      .then((res) => {
        const { username, email, totalPostsLength, image, firstName, lastName } = res.data;
        setNameOfUser(username);
        setUserEmail(email);
        setfirstName(firstName)
        setlastname(lastName)
        setTotalPosts(totalPostsLength);
        setProfileImageUrl(image); // Set the profile image URL
      })
      .catch((err) => {
        console.log("Didn't get data of user from backend", err);
      });
  }, [BACKEND_URL]);

  const logoutUser = () => {
    dispatch(storeLoggedinRecord(false));
    dispatch(storeName(""));
    dispatch(storeEmail(""));
    dispatch(storeusername(""));
    localStorage.setItem("isLogin", false);
    localStorage.setItem("username", "");
    localStorage.setItem("email", "");

    navigate("/");
  };

  const fullname = firstName + " " + lastname

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
          src={profileImageUrl ? `${BACKEND_URL}/${profileImageUrl}` : "images/nitaiLogo.png"} // Use profile image if available
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {nameOfUser}
          </Typography>
          <Typography variant="h6">{fullname}</Typography>
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
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
          >
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
    </Box>
  );
};

export default UserAccountComp;
