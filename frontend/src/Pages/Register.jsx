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

export default function Register() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [username, setusername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (/.+@.+\..+/.test(email) === false) {
      alert("Invalid Email");
      return;
    }

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
        dispatch(storeEmail(email)); // Set isRegistered to true
        dispatch(storeLoggedinRecord(true));
        navigate("/");
      })
      .catch((err) => {
        console.log(
          "Error during registration:",
          err.response ? err.response.data : err.message
        );
      });
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <input
                id="first-name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                type="text"
                autoComplete="given-name"
                className="inpts block w-[15vw] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                autoComplete="family-name"
                className="inpts block w-[15vw] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              username
            </label>
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              className="inpts block w-[100%] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
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
    </div>
  );
}
