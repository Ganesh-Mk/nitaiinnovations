import React, { useEffect } from "react";
import { Box, Divider, Typography, useTheme, IconButton } from "@mui/material";
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
  isAccountBlog = false,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  function editBlog() {
    console.log("from account page: ", title, desc, imageUrl);
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
              <Box
                sx={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "100rem",
                  border: "1px solid black",
                }}
              ></Box>

              <Box>
                <Typography variant="h6">
                  {username}
                  {console.log("username: ", username)}
                </Typography>
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
              width: "80%",
              borderRadius: ".5rem",
              background: `url(${BACKEND_URL}/${imageUrl}) center/cover no-repeat`,
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
            maxHeight: "7rem",
            overflowY: "scroll",
            wordWrap: "break-word",
          }}
        >
          {desc}
        </Typography>
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
});

export default BlogsComp;
