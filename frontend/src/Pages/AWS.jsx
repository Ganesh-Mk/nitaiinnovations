import "../Styles/index.css";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloudServiceFeatures from "../Components/CloudServiceFeatures";
import AzureFeatures from "../Components/AzureFeatures";

function AWS() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              gap: 1,
            }}
          >
            AWS
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Amazon Web Services - Cloud Services
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", marginTop: "2rem", fontSize: "1.2rem" }}
          >
            Our AWS experts make businesses go places with custom-built,
            scalable, and innovative digital solutions - strategized and
            developed, considering your specific business requirements and
            objectives. Our AWS, Azure, GCP, accessibility, and connectivity.
            Cloud integration delivers agility, enhances visibility, and
            automates business processes. empower it with next-gen cloud
            solutions that drive scalability, efficiency, and sales. Stay ahead
            of the market curve by transitioning to the cloud. At Nitai
            Innovations, we follow a sophisticated agile approach that
            guarantees swift delivery and precise development.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            marginTop: "5rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "center", marginTop: "5rem !important" }}
          >
            Comprehensive range of AWS development services:
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "3rem !important",
            }}
          >
            Revolutionize your operational approach, streamline enterprise
            workflows, and embrace mobility, all while minimizing expenses.
            Transitioning your business to the cloud not only alleviates the
            burden of on-premise systems but also offers unparalleled security
            and dependability.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "5rem !important",
            }}
          >
            <span>As a distinguished AWS development partner</span> , we handle
            all aspects of your cloud infrastructure requirements. From seamless
            data migration to leveraging AWS PaaS (Platform as a Service)
            offerings, crafting bespoke AWS applications, and providing
            comprehensive cloud consulting services, we ensure a smooth
            transition. Our expertise spans risk assessment and mitigation,
            alongside the provision of AWS cloud infrastructure services,
            monitoring, and upkeep. With a seasoned team of AWS professionals
            and consultants, we collaborate with you to devise strategic
            blueprints, furnish insightful advisories, and engineer serverless
            applications from the ground up. Let us propel your business into
            the future of cloud computing with confidence and innovation.
          </Typography>
        </Stack>

        <CloudServiceFeatures />
        <AzureFeatures />
      </Container>
    </Box>
  );
}

export default AWS;
