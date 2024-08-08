import {
  Box,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  useTheme,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function CreateBlog() {
  const navigate = useNavigate();
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

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
    width: { xs: "100%", sm: "100%" },
    fontSize: "1.5rem",
  };

  const textAreaStyles = {
    width: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    fontSize: "1rem",
    fontWeight: "400",
    padding: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const fileInputStyles = {
    display: "none",
  };

  const fileInputLabelStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f5f5f5",
    borderRadius: "4px",
    border: "1px solid #ccc",
    padding: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "400",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    gap: "0.5rem",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? "#555" : "#e0e0e0",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: { xs: "0 2rem", sm: "0 20rem" },
        gap: "2rem",
      }}
    >
      <Typography variant="h2" mt={"5rem"}>
        Create Blog
      </Typography>
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
      <label htmlFor="file-upload" style={fileInputLabelStyles}>
        <AttachFileIcon />
        {image ? image.name : "Choose an image"}
        <Input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={fileInputStyles}
        />
      </label>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: { xs: "100%", sm: "100%" },
          gap: "2rem",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <Button variant="contained" sx={{ width: "100%" }} onClick={createBlog}>
          Post
        </Button>
        <Button variant="outlined" sx={{ width: "100%" }}>
          Clear
        </Button>
      </Box>
    </Box>
  );
}

export default CreateBlog;
