import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AWSFeatures() {
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
          textAlign: "center",
          flexDirection: { xs: "column", md: "row" },
          alignSelf: "center",
          marginTop: "8rem",
        }}
      >
        AWS - Cloud Services
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Our expert team of AWS developers will teach you :
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
                1. Customized AWS App Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our expert team of AWS developers and programmers specializes in
                building serverless applications using Amazon Web Services
                (AWS). By following an agile approach, we ensure that your
                applications are scalable, secure, and delivered on time. With
                hands-on experience in:
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
              </List>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                we can cater to a wide range of application requirements.
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
                2. Data Migration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Seamlessly migrate your data from on-premises servers or other
                cloud platforms to AWS with minimal downtime and data loss.
                Partnering with us for your AWS cloud migration journey means
                leveraging our expertise, experience, and commitment to
                delivering value. We are dedicated to helping you harness the
                full potential of the AWS cloud platform, driving innovation,
                growth, and success for your business.
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
                3. Cloud Infrastructure Setup and Management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                We assist in setting up and managing your cloud infrastructure
                on AWS, ensuring scalability, reliability, and
                cost-effectiveness. Our services include VPC setup, subnet
                configuration, security group management, and network
                architecture design. Cloud Infrastructure Setup and Management
                is essential for organizations looking to leverage the benefits
                of cloud computing, including scalability, flexibility, cost-
                effectiveness, and resilience. By partnering with experienced
                cloud providers and following best practices, businesses can
                build and maintain a robust cloud infrastructure that supports
                their digital transformation initiatives.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle2">
                4. AWS PaaS Services
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                We help you choose the right PaaS services for your applications
                and optimize their performance and cost-efficiency. AWS PaaS
                (Platform as a Service) services provide a platform for
                developers to build, deploy, and manage applications without the
                complexity of infrastructure management. AWS PaaS services
                enable developers to accelerate application development, improve
                productivity, and reduce operational overhead by abstracting
                away infrastructure management complexities. We provide
                scalable, reliable, and cost-effective platforms for building
                modern cloud-native applications and services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography component="h3" variant="subtitle2">
                5. Cloud Consulting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                gutterBottom
                color="text.secondary"
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our intelligently-designed consulting services are tailored to
                meet your specific business needs and challenges. We provide
                guidance on cost optimization, security best practices,
                performance tuning, and compliance with AWS services. At Nitai
                Innovations, we are committed to helping you leverage the full
                potential of cloud technology to drive business growth and
                innovation. Our consulting services empower you to navigate
                complex challenges, unlock new opportunities, and achieve your
                strategic objectives with confidence. Let us be your trusted
                partner on your cloud journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
}
