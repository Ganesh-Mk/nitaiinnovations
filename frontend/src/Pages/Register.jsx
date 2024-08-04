import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setusername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    console.log(
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:3000/registerUser", {
        username,
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log("Hello" + err);
        localStorage.setItem("isRegister", "false");
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
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              autoComplete="username"
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
