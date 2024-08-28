import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  storeEmail,
  storeName,
  storeusername,
  storeLoggedinRecord,
} from "../Store/userSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box, Typography } from "@mui/material";

export default function Register() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [username, setusername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (/.+@.+\..+/.test(email) === false) {
      setSnackbarMessage("Invalid Email");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    console.log("sending request to backend: ", {
      username: username.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
    });

    axios
      .post(
        `${BACKEND_URL}/registerUser`,
        {
          username: username.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("isLogin", true);

        dispatch(storeusername(username));
        dispatch(storeName(`${firstName} ${lastName}`));
        dispatch(storeEmail(email));
        dispatch(storeLoggedinRecord(true));

        setSnackbarMessage("Registration successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log("Error during registration:", err);
        console.log("Error during registration:", err.response);

        if (
          err.response.data.error ===
          "Users validation failed: lastName: Path `lastName` is required."
        ) {
          setSnackbarMessage("Last name is required");
        } else if (
          err.response.data.error ===
          "Users validation failed: firstName: Path `firstName` is required."
        ) {
          setSnackbarMessage("First name is required");
        } else if (
          err.response.data.error ===
          "Users validation failed: username: Path `username` is required."
        ) {
          setSnackbarMessage("Username is required");
        } else if (
          err.response.data.error ===
          "Users validation failed: email: Path `email` is required."
        ) {
          setSnackbarMessage("Email is required");
        } else if (
          err.response.data.error ===
          "Users validation failed: password: Path `password` is required."
        ) {
          setSnackbarMessage("Password is required");
        } else {
          setSnackbarMessage("An error occurred during registration");
        }

        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="flex pt-[8rem] min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Create a new account to get started.
          </p>
        </div>
        <form className="grid gap-4">
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <div className="space-y-2">
              <Typography
                variant="p"
                color="text.secondary"
                sx={{ fontWeight: "500" }}
              >
                First Name
              </Typography>
              <input
                id="first-name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                type="text"
                autoComplete="given-name"
                className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Typography
                variant="p"
                color="text.secondary"
                sx={{ fontWeight: "500" }}
              >
                Last Name
              </Typography>
              <input
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                autoComplete="family-name"
                className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
                placeholder="Doe"
                required
              />
            </div>
          </Box>
          <div className="space-y-2">
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ fontWeight: "500" }}
            >
              Username
            </Typography>
            <input
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              autoComplete="username"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              placeholder="johndoe"
              required
            />
          </div>
          <div className="space-y-2">
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ fontWeight: "500" }}
            >
              Email
            </Typography>
            <input
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              autoComplete="email"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              placeholder="johnDoe@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ fontWeight: "500" }}
            >
              Password
            </Typography>
            <input
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              required
            />
          </div>
          <div className="space-y-2">
            <Typography
              variant="p"
              color="text.secondary"
              sx={{ fontWeight: "500" }}
            >
              Confirm Password
            </Typography>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              autoComplete="new-password"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              required
            />
          </div>
        </form>
        <div className="flex flex-col gap-2">
          <button
            onClick={registerUser}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <Link to="/login">Login</Link>
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
}
