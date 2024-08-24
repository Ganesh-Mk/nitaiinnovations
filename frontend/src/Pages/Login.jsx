import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  storeEmail,
  storeName,
  storeusername,
  storeLoggedinRecord,
} from "../Store/userSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Login() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("Backend URL:", BACKEND_URL);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const userStore = useSelector((state) => state.user);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    if(email === "" && password === "") {
      setSnackbarMessage("Please enter email and password");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if(email === "" || password === "") {
      setSnackbarMessage("Please enter all fields");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    axios
      .post(
        `${BACKEND_URL}/loginUser`,
        {
          email,
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
        console.log("Response received from backend:", res);
        if (res.data.status === "ok") {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("username", res.data.name);
          localStorage.setItem("email", res.data.email);
          dispatch(storeName(res.data.name));
          dispatch(storeEmail(res.data.email));
          dispatch(storeusername(res.data.username));
          dispatch(storeLoggedinRecord(true));

          setSnackbarMessage("You have successfully logged in!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);

          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          alert("Login failed: " + res.data.error);
        }
      })
      .catch((err) => {
        console.error("Error during login request:", err);
        if (err.response && err.response.data.error === "Invalid email or password") {
          setSnackbarMessage("Invalid username or password");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
        else {
          // setSnackbarMessage("User not found");
          // setSnackbarSeverity("error");
          // setSnackbarOpen(true);
          console.log(err);
          
        }
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email and password to sign in.
          </p>
        </div>
        <form className="grid gap-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="current-password"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              required
            />
          </div>
        </form>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            onClick={loginUser}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
          <div className="text-center text-sm text-muted-foreground">
            You don't have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <Link to="/register">Register</Link>
            </a>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
