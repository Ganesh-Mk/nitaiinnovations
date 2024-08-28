import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  IconButton,
  Button,
  Skeleton,
  Snackbar,
  Alert,
} from "@mui/material";
import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { DialogsProvider, useDialogs } from "@toolpad/core/useDialogs";

const BlogsComp = ({
  blogKey,
  username,
  email,
  title,
  desc,
  imageUrl,
  createdAt,
  profileImageUrl,
  isAccountBlog = false,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const dialogs = useDialogs();

  const [showFullText, setShowFullText] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleReadMore = () => {
    setShowFullText((prev) => !prev);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const truncatedText =
    desc?.length > 200 && !showFullText ? `${desc.slice(0, 200)}...` : desc;

  function editBlog() {
    let blogInfo = {
      title: title,
      desc: desc,
      imageUrl: imageUrl,
    };
    localStorage.setItem("currentBlog", JSON.stringify(blogInfo));
    navigate("/editBlog");
  }

  const deleteBlog = async () => {
    const userEmail = localStorage.getItem("email");

    const confirmDeletion = await dialogs.confirm(
      `Are you sure you want to delete the blog titled "${title}"? This action cannot be undone.`,
      {
        okText: "Yes",
        cancelText: "No",
      }
    );

    if (!confirmDeletion) {
      return;
    }

    axios
      .delete(`${BACKEND_URL}/deleteBlog`, {
        data: {
          email: userEmail,
          title: title,
        },
      })
      .then((res) => {
        console.log("Successfully deleted blog in backend: ", res.data);
        setSnackbarMessage("Blog deleted successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTimeout(() => {
          setReloadPage(true);
        }, 1500);
      })
      .catch((err) => {
        console.log("Failed to delete blog in backend: ", err);
        setSnackbarMessage("Failed to delete blog");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  useEffect(() => {
    if (reloadPage) {
      window.location.reload();
    }
  }, [reloadPage]);

  const defaultProfileImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <DialogsProvider>
      <Box
        key={blogKey}
        sx={{
          ...blogCardStyle(theme),
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {!isAccountBlog && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Box sx={{ display: "grid", placeItems: "center" }}>
                  <img
                    src={
                      profileImageUrl
                        ? `${BACKEND_URL}/${profileImageUrl}`
                        : defaultProfileImage
                    }
                    style={{
                      height: "4rem",
                      width: "4rem",
                      objectFit: "contain",
                      borderRadius: "100rem",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    alt="Profile image"
                    onError={(e) => {
                      e.target.onerror = null; // prevents looping
                      e.target.src = defaultProfileImage;
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="p">
                    {username || <Skeleton width={120} />}
                  </Typography>
                  <br />
                  <Typography variant="p" color="text.secondary">
                    {email || <Skeleton width={160} />}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6">
                {format(new Date(createdAt), "d MMM yyyy")}
              </Typography>
            </>
          )}

          {isAccountBlog && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h6">
                Date: {format(new Date(createdAt), "d MMM yyyy")}
              </Typography>
              <Box>
                <IconButton aria-label="edit" onClick={editBlog}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={deleteBlog}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>

        <Divider />
        {imageUrl ? (
          <>
            <Skeleton
              variant="rectangular"
              width="80%"
              height="18rem"
              sx={{
                borderRadius: ".5rem",
                mx: "auto",
                display: imageLoaded ? "none" : "block",
              }}
            />
            <Box
              sx={{
                display: imageLoaded ? "grid" : "none",
                placeItems: "center",
              }}
            >
              <img
                src={`${BACKEND_URL}/${imageUrl}`}
                style={{
                  height: "100%",
                  maxHeight: "18rem",
                  width: "80%",
                  objectFit: "contain",
                  borderRadius: ".5rem",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
                alt="Blog image"
                onLoad={handleImageLoad}
              />
            </Box>
          </>
        ) : (
          <></>
        )}
        <Box>
          <Typography
            variant="h2"
            sx={{ mb: 2, fontSize: "1.8rem !important" }}
          >
            {title || <Skeleton width="80%" />}
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: showFullText ? "none" : 4,
              overflow: "hidden",
              wordWrap: "break-word",
              maxHeight: showFullText ? "8rem" : "auto",
              overflowY: showFullText ? "auto" : "hidden",
            }}
          >
            {truncatedText || <Skeleton width="100%" height={80} />}
          </Typography>
          {desc?.length > 200 && (
            <Button onClick={handleReadMore} sx={{ mt: 1 }}>
              {showFullText ? "Read Less" : "Read More"}
            </Button>
          )}
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
    </DialogsProvider>
  );
};

const blogCardStyle = (theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: `1px solid ${theme.palette.divider}`,
  padding: "1rem",
  borderRadius: "1.5rem",
  boxShadow: theme.shadows[2],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: "auto",
});

export default BlogsComp;
