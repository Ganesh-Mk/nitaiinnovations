import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { format } from "date-fns";
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
        console.log(res.data);
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
      }}
    >
      <Typography variant="h2" sx={{ marginTop: "7rem" }}>
        All Blogs
      </Typography>
      <Link to="/createBlog">
        <Button variant="outlined" sx={{ marginTop: "1rem" }}>
          Create your blog
        </Button>
      </Link>

      <Box
        sx={{
          display: "grid",
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
              <Typography variant="h6" gutterBottom>
                {blog.userName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {blog.email}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {format(new Date(blog.createdAt), "d MMM yyyy")}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h5" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body1">{blog.desc}</Typography>
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
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
});

export default CreateBlog;
