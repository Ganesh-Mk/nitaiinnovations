import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CloudServiceFeatures() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography
        variant="h3"
        color="#0959AA"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Azure - Cloud Services
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Our expert team of Azure developers will teach you :
      </Typography>

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
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle2">
                1. Azure Cloud Consulting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                At Nitai Innovations, our Azure consultants follow an agile
                methodology to ensure that your applications are future-ready
                and your business can evolve and grow with changing market
                times. We help you migrate to the cloud efficiently and
                effectively, making it serverless, cost-effective, and easy to
                scale. We work closely with your team to understand your
                business objectives and develop customized cloud strategies that
                align with your goals. We offer providing expert guidance and
                strategic advice to help you make informed decisions about
                leveraging Azure cloud services
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle2">
                2. Azure Data Migration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                As a leading Microsoft Azure development company, we specialize
                in providing cloud migration services to help businesses
                seamlessly transition to the Azure cloud platform. We offer
                comprehensive data migration services to help you seamlessly
                move your data to the Microsoft Azure cloud platform. We provide
                post-migration support to address any issues or concerns that
                arise after the migration. We help you prepare your data for
                migration by cleaning, transforming, and validating it to ensure
                accuracy and integrity.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle2">
                3. Azure App Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our certified Microsoft Azure developers are ready to
                re-architect your legacy applications into fully-functional
                native cloud apps. We specialize in building serverless
                applications on Azure using services like Azure Functions, Logic
                Apps, and Azure App Service. Our Azure developers will redesign
                and re-implement your legacy applications using cloud-native
                architectures and best practices. Whether you need a
                customer-facing mobile app, an internal business application, or
                a complex web portal, our team has the expertise to deliver
                high-quality solutions that meet your requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
}
