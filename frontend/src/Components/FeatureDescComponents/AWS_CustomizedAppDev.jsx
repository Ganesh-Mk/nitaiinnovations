import React from "react";
import { Typography, List, ListItem } from "@mui/material";

function AWS_CustomizedAppDev() {
  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        color="text.secondary"
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        Our expert team of AWS developers and programmers specializes in
        building serverless applications using Amazon Web Services (AWS). By
        following an agile approach, we ensure that your applications are
        scalable, secure, and delivered on time. With hands-on experience in:
      </Typography>
      <List>
        <ListItem>
          <Typography color="text.secondary">
            - Infrastructure as a Service (IaaS)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography color="text.secondary">
            - Software as a Service (SaaS)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography color="text.secondary">
            - AWS Platform as a Service (PaaS)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography color="text.secondary">
            - We can cater to a wide range of application requirements.
          </Typography>
        </ListItem>
      </List>
    </>
  );
}

export default AWS_CustomizedAppDev;
