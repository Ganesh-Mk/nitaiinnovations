import { Typography, Box } from "@mui/material";
import React from "react";
import UserAccountComp from "../Components/UserAccountComp";
import BlogsComp from "../Components/BlogsComp";

function Accout() {
  return (
    <Box
    >
      <div className="flex min-h-screen w-full mt-[6rem]">
        <UserAccountComp/>
        <div className="max-w-full overflow-auto p-6 md:ml-[22vw]">
          <div className="flex-col">
            <BlogsComp/>
            <BlogsComp/>
            <BlogsComp/>
            <BlogsComp/>
            <BlogsComp/>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Accout;
