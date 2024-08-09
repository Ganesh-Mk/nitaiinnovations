import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  storeLoggedinRecord,
  storeName,
  storeEmail,
  storeusername,
} from "../Store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import axios from "axios";
const UserAccountComp = () => {
  const [totalPosts, settotalPosts] = useState("0");
  const [userEmail, setuserEmail] = useState(""); //email
  const [nameOfUser, setnameOfUser] = useState(""); //name
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("Backend URL:", BACKEND_URL);
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
        const { name, email, totalPostsLength } = res.data;
        setnameOfUser(name);
        setuserEmail(email);
        settotalPosts(totalPostsLength);
        console.log("Successfully get data of user from backend");
      })
      .catch((err) => {
        console.log("Didn't get data of user from backend", err);
      });
  });

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
  return (
    <Box>
      <div className="fixed left-0 top-0 h-full w-full max-w-[300px] border-r bg-background p-6 md:w-[26vw] mt-[6rem]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <img
              src="images/nitaiLogo.png"
              alt="@shadcn"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-1 text-center">
            <div className="text-lg font-semibold">{nameOfUser}</div>
            <div className="text-sm text-muted-foreground">{userEmail}</div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{totalPosts}</span> Posts
            </div>
          </div>
          <div className="mt-auto flex w-full flex-col gap-2">
            <Link to="/createBlog">
            <button className="inline-flex w-[100%] bg-slate-400 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              Create Blog
            </button>
            </Link>
            
            <button
              onClick={logoutUser}
              className="inline-flex bg-slate-600 items-center justify-center rounded-md border border-muted px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default UserAccountComp;
