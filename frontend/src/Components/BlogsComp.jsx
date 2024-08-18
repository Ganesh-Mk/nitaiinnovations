import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  IconButton,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText((prev) => !prev);
  };

  const truncatedText =
    desc.length > 200 && !showFullText ? `${desc.slice(0, 200)}...` : desc;

  function editBlog() {
    let blogInfo = {
      title: title,
      desc: desc,
      imageUrl: imageUrl,
    };
    localStorage.setItem("currentBlog", JSON.stringify(blogInfo));
    navigate("/editBlog");
  }

  return (
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
                  src={`${BACKEND_URL}/${profileImageUrl}`}
                  style={{
                    height: "4rem",
                    width: "4rem",
                    objectFit: "contain",
                    borderRadius: "100rem",
                    background: `url(${BACKEND_URL}\\${profileImageUrl}) center/cover no-repeat`,
                  }}
                  alt="Profile image"
                />
              </Box>

              <Box>
                <Typography variant="h6">{username}</Typography>
                <Typography variant="body2">{email}</Typography>
              </Box>
            </Box>

            <Typography variant="body2">
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
            <Typography variant="body2">
              Date: {format(new Date(createdAt), "d MMM yyyy")}
            </Typography>
            <IconButton aria-label="edit" onClick={editBlog}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      <Divider />
      {imageUrl && (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <img
            src={`${BACKEND_URL}/${imageUrl}`}
            style={{
              height: "100%",
              maxHeight: "18rem",
              width: "80%",
              objectFit: "contain",
              borderRadius: ".5rem",
              background: `url(${BACKEND_URL}\\${imageUrl}) center/cover no-repeat`,
            }}
            alt="Blog image"
          />
        </Box>
      )}
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: showFullText ? "none" : 4,
            overflow: "hidden",
            wordWrap: "break-word",
            maxHeight: showFullText ? "8rem" : "auto", // Set max height when expanded
            overflowY: showFullText ? "auto" : "hidden", // Enable vertical scrollbar when expanded
          }}
        >
          {truncatedText}
        </Typography>
        {desc.length > 200 && (
          <Button onClick={handleReadMore} sx={{ mt: 1 }}>
            {showFullText ? "Read Less" : "Read More"}
          </Button>
        )}
      </Box>
    </Box>
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
