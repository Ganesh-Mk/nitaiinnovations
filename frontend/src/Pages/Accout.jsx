import { Typography, Box } from "@mui/material";
import React from "react";
import UserAccount from "../Components/UserAccount";
import SearchBar from "../Components/SearchBar";
import Posts from "../Components/Posts";
import "../Styles/account.css";

function Accout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="accountMain">
        <div className="accountLeft">
          <UserAccount/>
        </div>
        <div className="accountRight">
          <div className="accountRightTop">
            <SearchBar/>
          </div>
          <div className="accountRightBottom">
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Accout;
