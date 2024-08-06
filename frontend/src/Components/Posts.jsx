import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Posts() {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: "100%",
        height: "20rem",
        marginBottom: "1vw",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Title of the blog
        </Typography>
        <Typography variant="h5" component="div">
          <img src="images/nitaiLogo.png" alt="" />
        </Typography>
        <Typography variant="body2">Description</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
