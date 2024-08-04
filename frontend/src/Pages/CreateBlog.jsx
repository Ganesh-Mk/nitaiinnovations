import {
  Box,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function CreateBlog() {
  const navigate = useNavigate();
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  function createBlog(e) {
    e.preventDefault();

    axios
      .post(`${BACKEND_URL}/createBlog`, {
        userName: localStorage.getItem("userName"),
        email: localStorage.getItem("email"),
        title,
        desc,
      })
      .then((res) => {
        setTitle("");
        setDesc("");
        navigate("/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const inputStyles = {
    width: "50%",
    fontSize: "1.5rem",
  };

  const textAreaStyles = {
    width: "50%",
    backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    fontSize: "1rem",
    fontWeight: "400",
    padding: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

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
      }}
    >
      <br />
      <Typography variant="h2">Create Blog</Typography>
      <br />
      <Input
        placeholder="Enter Blog Title"
        sx={inputStyles}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaAutosize
        minRows={6}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter Blog Description"
        style={textAreaStyles}
      />
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Button variant="contained" onClick={createBlog}>
          Create
        </Button>
        <Button variant="outlined">Clear</Button>
      </Box>
    </Box>
  );
}

export default CreateBlog;
