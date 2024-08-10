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
import { alpha } from "@mui/material/styles";
import { format } from "date-fns";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import BlogsComp from "../Components/BlogsComp";

function CreateBlog() {
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = React.useState([]);
  const [filter, setFilter] = React.useState("newest");
  const [filteredBlogs, setFilteredBlogs] = React.useState([]);

  const changeFilter = (e) => {
    setFilter(e.target.value);

    if (e.target.value === "newest") {
      setFilteredBlogs([...filteredBlogs].reverse());
    } else if (e.target.value === "oldest") {
      setFilteredBlogs([...filteredBlogs].reverse());
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredBlogs(
      [...filteredBlogs].filter((b) =>
        b.title.toLowerCase().includes(searchTerm)
      )
    );
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
          placeholder="Search Blogs by Title"
          onChange={handleSearch}
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
          .map((blog, i) => (
            <BlogsComp
              key={i}
              blogKey={i}
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
