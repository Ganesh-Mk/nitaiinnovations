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
import { DialogsProvider } from "@toolpad/core/useDialogs";
import axios from "axios";
import { alpha } from "@mui/material/styles";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import BlogsComp from "../Components/BlogsComp";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function CreateBlog() {
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applyFilters = (blogs) => {
    let filtered = blogs.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter === "newest") {
      filtered = filtered.slice().reverse();
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
    console.log(`${BACKEND_URL}/allBlogs`);
    axios
      .get(`${BACKEND_URL}/allBlogs`)
      .then((res) => {
        setBlogs(res.data);
        console.log("allblogs: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BACKEND_URL]);

  // Handle pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = applyFilters(blogs).slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  const handleCreateBlogClick = () => {
    const isLoggedIn = localStorage.getItem("isLogin");

    if (isLoggedIn === "true") {
      navigate("/createBlog");
    } else {
      navigate("/register");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
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
        <Button
          onClick={handleCreateBlogClick}
          sx={{ width: "13rem", gridArea: "createBlog" }}
          variant="outlined"
        >
          Create your blog
        </Button>

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
        {currentBlogs.length === 0 && (
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
        <DialogsProvider>
          {currentBlogs.map((blog, i) => (
            <BlogsComp
              key={i}
              blogKey={i}
              username={blog.username}
              email={blog.email}
              title={blog.title}
              desc={blog.desc}
              imageUrl={blog.imageUrl}
              profileImageUrl={blog.profileImageUrl}
              createdAt={format(new Date(blog.createdAt), "d MMM yyyy")}
            />
          ))}
        </DialogsProvider>
      </Box>

      <Stack spacing={2} sx={{ marginTop: "2rem", alignItems: "center" }}>
        <Pagination
          count={Math.ceil(applyFilters(blogs).length / blogsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default CreateBlog;
