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
import React, { useState, useEffect } from "react";

function CreateBlog() {
  const navigate = useNavigate();
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setimage] = useState(null);

  function createBlog(e) {
    e.preventDefault();

    if (title.trim() === "" || desc.trim() === "") {
      alert("Please enter title and description");
      return;
    }

    let formData = new FormData();

    formData.append("username", localStorage.getItem("username"));
    formData.append("email", localStorage.getItem("email"));
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);

    axios
      .post(`${BACKEND_URL}/createBlog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
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
      <Input type="file" onChange={(e) => setimage(e.target.files[0])} />
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
