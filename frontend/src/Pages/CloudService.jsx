import { useEffect } from "react";
import "../Styles/index.css";

import { Box, Stack, Typography } from "@mui/material";
import Features from "../Components/Features";
import FeatureMainSection from "../Components/FeatureMainSection";
import { AWSFeatures } from "../Data/AWSFeaturesData";
import { AzureFeatures } from "../Data/AzureFeaturesData";

function CloudService() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FeatureMainSection
        title="Cloud Services"
        subTitle="AWS & Azure"
        description="Our AWS experts make businesses go places with custom-built,
            scalable, and innovative digital solutions - strategized and
            developed, considering your specific business requirements and
            objectives. Our AWS, Azure, GCP, accessibility, and connectivity.
            Cloud integration delivers agility, enhances visibility, and
            automates business processes. empower it with next-gen cloud
            solutions that drive scalability, efficiency, and sales. Stay ahead
            of the market curve by transitioning to the cloud. At Nitai
            Innovations, we follow a sophisticated agile approach that
            guarantees swift delivery and precise development."
        imageURL="/images/aws1.png"
      />

      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
          <Typography variant="h4" color="#0959AA" sx={{ textAlign: "center" }}>
            Comprehensive range of AWS development services:
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              width: {
                xs: "100%",
                md: "80%",
              },
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
        </div>
        <Box
          sx={{
            marginTop: "5rem !important",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            component="img"
            src="/images/aws2.png"
            alt=""
            sx={{
              width: {
                xs: "70%",
                md: "20%",
              },
            }}
          />
        </Box>
        <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              width: {
                xs: "100%",
                md: "80%",
              },
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "5rem !important",
              marginBottom: "10rem !important",
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
        </div>
      </Stack>

      <Features data={AWSFeatures} />
      <Features data={AzureFeatures} />
    </>
  );
}

export default CloudService;
