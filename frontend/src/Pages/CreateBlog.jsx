import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  TextareaAutosize,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  function createBlog(e) {
    e.preventDefault();

    if (title.trim() === "" || desc.trim() === "") {
      setSnackbarMessage("Please enter title and description");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
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
        setTitle("");
        setDesc("");
        setImage(null);
        setSnackbarMessage("Blog created successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTimeout(() => {
          navigate("/blogs");
        }, 1500);
      })
      .catch((err) => {
        if (err.response.data.message === "Blog title already exists for this user") {
          setSnackbarMessage("Blog title already exists");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
        console.log("Error during blog creation:", err);
      });
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ width: "100%", fontSize: "1.5rem" }}
      />
      <TextareaAutosize
        minRows={6}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter Blog Description"
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
        <AttachFileIcon />
        {image ? image.name : "Choose an image"}
        <Input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ display: "none" }}
        />
      </label>
      <Box sx={{ display: "flex", gap: "2rem", width: "100%" }}>
        <Button variant="contained" onClick={createBlog} sx={{ width: "100%" }}>
          Post
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%" }}
          onClick={() => {
            setTitle("");
            setDesc("");
            setImage(null);
          }}
        >
          Clear
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateBlog;
