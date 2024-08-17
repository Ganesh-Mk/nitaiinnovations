import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserAccountComp from "../Components/UserAccountComp";
import BlogsComp from "../Components/BlogsComp";
import axios from "axios";
import { format } from "date-fns";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Account() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 20;

  useEffect(() => {
    const userName = localStorage.getItem("username");
    const userEmail = localStorage.getItem("email");
    axios
      .get(`${BACKEND_URL}/getUserData`, {
        params: { userName, userEmail },
      })
      .then((res) => {
        const { allBlogPosts } = res.data;
        setAllBlogs(allBlogPosts);
      })
      .catch((err) => {
        console.log("Didn't get data of user from backend", err);
      });
  }, []);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Calculate the blogs to display based on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice().reverse().slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
          {currentBlogs.map((blog, index) => (
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
        <Stack spacing={2} sx={{ marginTop: "1rem", alignItems: "center" }}>
          <Pagination
            count={Math.ceil(allBlogs.length / blogsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Account;
