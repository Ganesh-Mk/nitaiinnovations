import React, { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";


const BlogsComp = ({username, email, title, desc, imageUrl, createdAt}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBottom: "3rem",
        width: "72vw",
        ...blogCardStyle(theme),
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <Typography variant="h6">{username}</Typography>
            <Typography variant="body2">{email}</Typography>
          </Box>
        </Box>

        <Typography variant="body2">
          {createdAt}
        </Typography>
      </Box>
      <Divider />
        <img
          src="images/nitaiLogo.png"
          style={{
            maxHeight: "20rem",
            width: "20vw",
            borderRadius: "2rem",
            boxShadow: theme.shadows[1],
            // background: `url(${BACKEND_URL}/${blog.imageUrl}) center/cover no-repeat`,
          }}
          alt="Blog image"
        />
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxHeight: "7rem",
            overflowY: "scroll",
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
