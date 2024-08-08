import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

function CreateBlog() {
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [filteredBlogs, setFilteredBlogs] = React.useState([]);

  const changeFilter = (e) => {
    setFilter(e.target.value);

    if (e.target.value === "newest") {
      setFilteredBlogs([...blogs]);
    } else if (e.target.value === "oldest") {
      setFilteredBlogs([...blogs].reverse());
    }
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allBlogs`)
      .then((res) => {
        setBlogs(res.data);
        setFilteredBlogs(res.data);
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
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gridTemplateAreas: {
            xs: `
        "title"
        "createBlog"
        "search"
        "filter"
      `,
            md: `
        "createBlog title search filter"
      `,
          },
          gridTemplateColumns: {
            xs: "1fr",
            md: "auto 1fr auto auto",
          },
          gridTemplateRows: {
            xs: "auto auto auto auto",
            md: "auto",
          },
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          marginTop: "7rem",
          marginBottom: "2rem",
        }}
      >
        <Link to="/createBlog" style={{ gridArea: "createBlog" }}>
          <Button sx={{ width: "13rem" }} variant="outlined">
            Create your blog
          </Button>
        </Link>

        <Typography
          variant="h1"
          sx={{
            gridArea: "title",
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          All Blogs
        </Typography>

        <Input
          type="search"
          sx={{
            gridArea: "search",
            width: { xs: "90%", md: 300 },
            marginTop: { xs: 3, md: 0 },
          }}
          placeholder="Search Blogs"
        />

        <FormControl
          sx={{
            gridArea: "filter",
            marginTop: { xs: 2, md: 0 },
            width: { xs: "90%", md: 150 },
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">Filter</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={filter}
            label="Filter"
            onChange={changeFilter}
          >
            <MenuItem value={"newest"}>Newest</MenuItem>
            <MenuItem value={"oldest"}>Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: "1rem",
        }}
      >
        {filteredBlogs
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
              {blog.imageUrl && (
                <img
                  src={`${BACKEND_URL}/${blog.imageUrl}`}
                  style={{
                    maxHeight: "20rem",
                    width: "100%",
                    borderRadius: "2rem",
                    boxShadow: theme.shadows[1],
                    background: `url(${BACKEND_URL}/${blog.imageUrl}) center/cover no-repeat`,
                  }}
                  alt="Blog image"
                />
              )}
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
