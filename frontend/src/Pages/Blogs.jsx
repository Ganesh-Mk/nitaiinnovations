import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
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
import { Link } from "react-router-dom";
import BlogsComp from "../Components/BlogsComp";

function CreateBlog() {
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const applyFilters = (blogs) => {
    let filtered = blogs.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter === "newest") {
      filtered = filtered.slice().reverse();
    } else if (filter === "oldest") {
      filtered = filtered;
    }

    return filtered;
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allBlogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BACKEND_URL]);

  const filteredBlogs = applyFilters(blogs);

  return (
    <Box
      sx={{
        display: "grid",
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
        {filteredBlogs.length === 0 && (
          <Box
            sx={{
              width: "93vw",
              display: "grid",
              placeItems: "center",
              marginTop: "3rem",
            }}
          >
            <Typography
              variant="h3"
              color="#0959AA"
              sx={{ textAlign: "center" }}
            >
              No Blogs Found
            </Typography>
          </Box>
        )}
        {filteredBlogs.map((blog, i) => (
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

export default CreateBlog;
