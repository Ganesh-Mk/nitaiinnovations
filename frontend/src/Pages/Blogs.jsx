import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { format } from "date-fns";
import FeatureMainSection from "../Components/FeatureMainSection";
import { Link } from "react-router-dom";

function CreateBlog() {
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allBlogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 10%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          display: "flex",
          fontSize: { xs: "2.5rem", md: "3rem" },
          flexDirection: { xs: "column", md: "row" },
          alignSelf: "center",
          marginTop: "7rem",
        }}
      >
        All Blogs
      </Typography>
      <Link to="/createBlog">
        <Button variant="outlined">Create your blog</Button>
      </Link>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: "1rem",
        }}
      >
        {blogs
          .slice()
          .reverse()
          .map((blog) => (
            <Box
              key={blog._id}
              sx={{
                ...blogCardStyle(theme),
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      height: "3rem",
                      width: "3rem",
                      borderRadius: "100rem",
                      border: "1px solid black",
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h6">{blog.username}</Typography>
                    <Typography variant="body2">{blog.email}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2">
                  {format(new Date(blog.createdAt), "d MMM yyyy")}
                </Typography>
              </Box>
              <Divider />
              <img
                src={`${BACKEND_URL}/${blog.imageUrl}`}
                style={{
                  height: "16rem",
                  width: "100%",
                  borderRadius: "2rem",
                  boxShadow: theme.shadows[1],
                  objectFit: "cover",
                  objectPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                alt=""
              />
              <Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {blog.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    maxHeight: "7rem",
                    overflowY: "scroll",
                  }}
                >
                  {blog.desc}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

const blogCardStyle = (theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: `1px solid ${theme.palette.divider}`,
  padding: "1rem",
  borderRadius: "1.5rem",
  boxShadow: theme.shadows[2],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
});

export default CreateBlog;
