import {
  Box,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function EditBlog() {
  const navigate = useNavigate();
  const theme = useTheme();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const blog = JSON.parse(localStorage.getItem("currentBlog") || "{}");
    setTitle(blog.title);
    setDesc(blog.desc);
    setImage(blog.image);
  }, []);

  function editBlog() {
    // Get username and this specific blog info to target in backend
    // update in backend
    // navigate to account page
  }

  function resetBlog() {
    const blog = JSON.parse(localStorage.getItem("currentBlog") || "{}");
    setTitle(blog.title);
    setDesc(blog.desc);
    setImage(blog.image);
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
        marginBottom: "5rem",
      }}
    >
      <Typography variant="h2" mt={"5rem"}>
        Edit Blog
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
        {image ? image.name : "Choose other image"}
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
        <Button variant="contained" sx={{ width: "100%" }} onClick={editBlog}>
          Submit
        </Button>
        <Button variant="outlined" sx={{ width: "100%" }} onClick={resetBlog}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default EditBlog;
