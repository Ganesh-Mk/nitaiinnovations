import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserAccountComp from "../Components/UserAccountComp";
import BlogsComp from "../Components/BlogsComp";
import axios from "axios";
import { format } from "date-fns";

function Accout() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [allBogs, setallBogs] = useState([]);

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
  }, []);
  console.log(allBogs);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 3fr" },
        gap: "1rem",
        paddingTop: "6rem",
        height: {
          xs: "auto",
          sm: "100vh",
        },
      }}
    >
      <UserAccountComp />
      <Box>
        <Typography variant="h2" color="#0959AA" sx={{ textAlign: "center" }}>
          My Blogs
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "1rem",
            height: {
              xs: "auto",
              sm: "75vh",
            },
            padding: "2rem",
            overflowY: { xs: "auto", sm: "scroll" },
            overflowX: "hidden",
          }}
        >
          {allBogs
            .slice()
            .reverse()
            .map((blog, index) => (
              <BlogsComp
                key={index}
                isAccountBlog={true}
                blogKey={index}
                username={blog.username}
                email={blog.email}
                title={blog.title}
                desc={blog.desc}
                imageUrl={blog.imageUrl}
                createdAt={format(new Date(blog.createdAt), "d MMM yyyy")}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
``;
export default Accout;
