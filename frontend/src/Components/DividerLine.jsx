import { Box, Divider } from "@mui/material";
import React from "react";

export default function DividerLine() {
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Divider sx={{ width: "90%" }} />
      <Divider sx={{ width: "90%" }} />
      <Divider sx={{ width: "90%" }} />
    </Box>
  );
}
