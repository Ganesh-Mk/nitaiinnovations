import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { storeusername, storeEmail } from "../Store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function EditProfile() {
  const username = localStorage.getItem("username");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [usersname, setusersname] = useState(localStorage.getItem("username"));
  const [usersemail, setusersemail] = useState(localStorage.getItem("email"));
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [originalData, setoriginalData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        setoriginalData(res.data);
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
        dispatch(storeusername(res.data.username));
        dispatch(storeEmail(res.data.email));
      });
  }, [storeusername]);

  const resetUsersData = () => {
    setfirstName(originalData.firstName);
    setlastName(originalData.lastName);
    setusersemail(originalData.email);
  };

  const submitChangedData = () => {
    if (firstName === "" || lastName === "" || usersemail === "") {
      alert("Please fill all the fields");
      return;
    }
    if (
      firstName !== originalData.firstName ||
      lastName !== originalData.lastName ||
      usersemail !== originalData.email
    ) {
      axios
        .patch(`${BACKEND_URL}/updateUser`, {
          userName: localStorage.getItem("username"),
          userEmail: localStorage.getItem("email"),
          firstName: firstName,
          lastName: lastName,
          email: usersemail,
        })
        .then((res) => {
          console.log("Successfully update user in backend: ", res.data);
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
      }}
    >
      <div
        style={{
          display: "grid",
          width: "20rem",
          placeItems: "center",
          gap: "2rem",
          border: "3px solid grey",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "#E0E5B6",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{ cursor: "pointer" }}
            badgeContent={
              <SmallAvatar>
                <EditRoundedIcon fontSize="small" />
              </SmallAvatar>
            }
          >
            <Avatar
              sx={{ width: 65, height: 65 }}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
          </Badge>
        </Stack>

        <TextField
          sx={{ width: "100%" }}
          disabled
          id="standard-disabled"
          label="Username"
          value={usersname} // Changed from defaultValue to value
          variant="standard"
        />
        <TextField
          sx={{ width: "100%" }}
          id="standard-required"
          label="First Name"
          value={firstName} // Changed from defaultValue to value
          onChange={(e) => setfirstName(e.target.value)} // Optional: to allow editing
          variant="standard"
        />
        <TextField
          sx={{ width: "100%" }}
          id="standard-required"
          label="Last Name"
          value={lastName} // Changed from defaultValue to value
          onChange={(e) => setlastName(e.target.value)} // Optional: to allow editing
          variant="standard"
        />
        <TextField
          sx={{ width: "100%" }}
          id="standard-required"
          label="Email"
          onChange={(e) => setusersemail(e.target.value)}
          value={usersemail} // Changed from defaultValue to value
          variant="standard"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <Button
            onClick={submitChangedData}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Submit
          </Button>
          <Button
            onClick={resetUsersData}
            variant="outlined"
            sx={{ width: "100%" }}
          >
            Reset
          </Button>
        </div>
      </div>
    </Box>
  );
}
