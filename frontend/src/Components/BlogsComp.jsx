import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BlogsComp = ({ username, email, title, desc, imageUrl, createdAt }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const shouldTruncate = desc.length > 100; // Adjust the number as needed

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

        <Typography variant="body2">{createdAt}</Typography>
      </Box>
      <Divider />
      <img
        src="images/nitaiLogo.png"
        style={{
          maxHeight: "20rem",
          width: "20vw",
          borderRadius: "2rem",
          boxShadow: theme.shadows[1],
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
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: isExpanded ? "none" : 3, // Show 3 lines by default, expand on click
            wordWrap: "break-word",
            maxHeight: isExpanded ? "none" : "7rem",
          }}
        >
          {desc}
        </Typography>
        {shouldTruncate && (
          <Button
            onClick={handleDialogOpen}
            sx={{ textTransform: "none", mt: 1 }}
            variant="text"
          >
            Continue Reading
          </Button>
        )}
      </Box>

      {/* Dialog Component */}
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ wordWrap: "break-word" }} gutterBottom>{desc}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
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
