import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Features({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant="h3" color="#0959AA" sx={{ textAlign: "center" }}>
        {data.title}
      </Typography>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", width: { xs: "90%", sm: "70%" } }}
        >
          {data.description}
        </Typography>
      </div>

      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box sx={{ width: "100%" }}>
          {data.items.map((item, index) => (
            <Accordion
              key={item.title}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <Typography component="h3" variant="subtitle2">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  gutterBottom
                  color="text.secondary"
                  sx={{
                    maxWidth: { sm: "100%", md: "70%" },
                    textIndent: "3rem",
                  }}
                >
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
}
