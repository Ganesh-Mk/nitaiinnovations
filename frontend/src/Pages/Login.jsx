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

export default function Login() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const userStore = useSelector((state) => state.user);

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Login button clicked");

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
          dispatch(storeName(res.data.name));
          dispatch(storeEmail(res.data.email));
          dispatch(storeusername(res.data.username));
          dispatch(storeLoggedinRecord(true));
          localStorage.setItem("isLogin", true);

          navigate("/");
        } else {
          alert("Login failed: " + res.data.error);
        }
      })
      .catch((err) => {
        console.error("Error during login request:", err);
      });
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
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="m@example.com"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    </div>
  );
}
