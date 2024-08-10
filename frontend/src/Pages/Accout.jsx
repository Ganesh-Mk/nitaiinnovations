import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserAccountComp from "../Components/UserAccountComp";
import BlogsComp from "../Components/BlogsComp";
import axios from "axios";

function Accout() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [allBogs, setallBogs] = useState([]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const userName = localStorage.getItem("username");
    const userEmail = localStorage.getItem("email");
    axios
      .get(`${BACKEND_URL}/getUserData`, {
        params: { userName, userEmail },
      })
      .then((res) => {
        const { allBlogPosts } = res.data;
        setallBogs(allBlogPosts);
        console.log("Successfully get data of user from backend");
      })
      .catch((err) => {
        console.log("Didn't get data of user from backend", err);
      });
  });
  console.log(allBogs);

  return (
    <Box>
      <div className="flex min-h-screen w-full">
        <UserAccountComp />
        <div className="max-w-full overflow-auto p-6">
          <div
            className="flex-col overflow-auto"
            style={{
              border: "1px solid grey",
              marginTop: "5rem",
              height: "100vh",
              borderRadius: "2rem",
            }}
          >
            {allBogs.map((blog, index) => (
              <BlogsComp
                key={index}
                username={blog.username}
                email={blog.email}
                title={blog.title}
                desc={blog.desc}
                imageUrl={blog.imageUrl}
                createdAt={formatDate(blog.createdAt)} // Formatting the date
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
``;
export default Accout;
