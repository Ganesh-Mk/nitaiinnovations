import "../Styles/index.css";
import { useEffect } from "react";
import {
  alpha,
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DividerLine from "../Components/DividerLine";
import FeatureMainSection from "../Components/FeatureMainSection";
import Features from "../Components/Features";
import { CSFeaturesCategories } from "../Data/CSFeaturesCategoriesData";
import { CSFeaturesBenefits } from "../Data/CSFeaturesBenefits";

function CyberSecurity() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FeatureMainSection
        title="Cyber Security"
        subTitle="Cyber Security - Penetration Testing"
        description=" Cybersecurity penetration testing, also known as ethical hacking,
              is a process used to identify and fix security vulnerabilities in
              a system. By simulating cyberattacks, penetration testers uncover
              weaknesses that could be exploited by malicious hackers. This
              proactive approach helps organizations protect their networks,
              applications, and data, ensuring they remain secure against
              potential threats. Regular penetration testing is essential for
              maintaining a strong cybersecurity posture in an increasingly
              digital world."
        imageURL="/images/cs1.png"
      />
      <div style={{ display: "grid", placeItems: "center" }}>
        <DividerLine />

        <Typography variant="h4" color="#0959AA">
          Penetration Testing Services
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", width: { xs: "90%", sm: "70%" } }}
          color="text.secondary"
        >
          At NITAI INNOVATIONS, we understand the critical importance of
          safeguarding your business against cyber threats. Our comprehensive
          penetration testing services are designed to identify and mitigate
          security vulnerabilities, providing you with the peace of mind you
          need to focus on what matters most—your business.
        </Typography>
        <DividerLine />
        <Typography variant="h4" color="#0959AA">
          What is Penetration Testing?
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", width: { xs: "90%", sm: "70%" } }}
          color="text.secondary"
        >
          Penetration testing, often referred to as pen testing, is a proactive
          security assessment that simulates real-world cyberattacks to identify
          weaknesses in your systems, applications, and networks. By uncovering
          potential vulnerabilities before malicious actors do, penetration
          testing helps you strengthen your defenses and protect your sensitive
          data.
        </Typography>
        <DividerLine />
        <Box
          sx={{
            margin: "1rem !important",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            component="img"
            src={"/images/cs2.png"}
            alt=""
            sx={{
              width: {
                xs: "70%",
                md: "40%",
              },
            }}
          />
        </Box>
      </div>

      <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
        <Typography variant="h4" color="#0959AA">
          Benefits of Penetration Testing
        </Typography>
        <ul>
          <li>
            <Typography variant="h6" color="text.secondary">
              Identify and remediate security vulnerabilities before they are
              exploited by cybercriminals.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Protect sensitive data and maintain the trust of your customers
              and stakeholders.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Gain valuable insights into your security posture and prioritize
              investments in cybersecurity measures.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Identify and remediate security vulnerabilities before they are
              exploited by cybercriminals.
            </Typography>
          </li>
        </ul>
      </Box>

      <DividerLine />

      <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
        <Typography variant="h4" color="#0959AA">
          Our Approach
        </Typography>
        <Typography variant="h6" color="text.secondary">
          At NITAI INNOVATIONS, we take a comprehensive and tailored approach to
          penetration testing. Our team of experienced cybersecurity
          professionals utilizes industry-leading methodologies, tools, and
          techniques to assess the security of your systems and networks. From
          network penetration testing to web application testing and social
          engineering assessments, we leave no stone unturned in our pursuit of
          identifying and mitigating security risks.
        </Typography>
      </Box>

      <DividerLine />

      <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
        <Typography variant="h4" color="#0959AA">
          Expertise and Experience
        </Typography>
        <Typography variant="h6" color="text.secondary">
          With five plus years of experience in the cybersecurity industry, our
          team brings a wealth of knowledge and expertise to every engagement.
          Our certified professionals hold industry-recognized certifications
          and have successfully conducted penetration testing for clients across
          various sectors.
        </Typography>
      </Box>

      <DividerLine />

      <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
        <Typography variant="h4" color="#0959AA">
          Types of Penetration Testing Services Offered
        </Typography>
        <ul>
          <li>
            <Typography variant="h6" color="text.secondary">
              Network Penetration Testing
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Web Application Testing
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Wireless Network Testing
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              Social Engineering Assessments
            </Typography>
          </li>
          <li>
            <Typography variant="h6" color="text.secondary">
              And more tailored services to meet your specific needs.
            </Typography>
          </li>
        </ul>
      </Box>

      <DividerLine />
      <Features data={CSFeaturesBenefits} number={true} />
      <DividerLine />
      <Features data={CSFeaturesCategories} number={true} />
    </>
  );
}

export default CyberSecurity;
