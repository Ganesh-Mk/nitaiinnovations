import "../Styles/index.css";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
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
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <DividerLine />

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Penetration Testing Services
        </Typography>
        <Typography
          variant="h2"
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
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          What is Penetration Testing?
        </Typography>
        <Typography
          variant="h2"
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
      </Box>
      <br />
      <br />
      <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Benefits of Penetration Testing
        </Typography>
        <ul>
          <li>
            <Typography variant="h2" color="text.secondary">
              Identify and remediate security vulnerabilities before they are
              exploited by cybercriminals.
            </Typography>
          </li>
          <li>
            <Typography variant="h2" color="text.secondary">
              Protect sensitive data and maintain the trust of your customers
              and stakeholders.
            </Typography>
          </li>
          <li>
            <Typography variant="h2" color="text.secondary">
              Gain valuable insights into your security posture and prioritize
              investments in cybersecurity measures.
            </Typography>
          </li>
          <li>
            <Typography variant="h2" color="text.secondary">
              Identify and remediate security vulnerabilities before they are
              exploited by cybercriminals.
            </Typography>
          </li>
        </ul>
      </Box>

      <DividerLine />

      <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Our Approach
        </Typography>
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{
            textIndent: { xs: "0rem", sm: "4rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
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

      <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Expertise and Experience
        </Typography>
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{
            textIndent: { xs: "0rem", sm: "4rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          With five plus years of experience in the cybersecurity industry, our
          team brings a wealth of knowledge and expertise to every engagement.
          Our certified professionals hold industry-recognized certifications
          and have successfully conducted penetration testing for clients across
          various sectors.
        </Typography>
      </Box>

      <DividerLine />

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gridTemplateAreas: {
            xs: `
              "image"
              "content"
            `,
            sm: `
              "content image"
            `,
          },
        }}
      >
        <Box>
          <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                color: (theme) =>
                  theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
              }}
            >
              Types of Penetration Testing Services Offered
            </Typography>
            <ul>
              <li>
                <Typography variant="h2" color="text.secondary">
                  Network Penetration Testing
                </Typography>
              </li>
              <li>
                <Typography variant="h2" color="text.secondary">
                  Web Application Testing
                </Typography>
              </li>
              <li>
                <Typography variant="h2" color="text.secondary">
                  Wireless Network Testing
                </Typography>
              </li>
              <li>
                <Typography variant="h2" color="text.secondary">
                  Social Engineering Assessments
                </Typography>
              </li>
              <li>
                <Typography variant="h2" color="text.secondary">
                  And more tailored services to meet your specific needs.
                </Typography>
              </li>
            </ul>
          </Box>
          <br />
          <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" }, gridArea: "content" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                color: (theme) =>
                  theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
              }}
            >
              Reporting and Deliverables
            </Typography>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                textIndent: { xs: "0rem", sm: "4rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Our penetration testing reports provide clear and actionable
              insights into identified vulnerabilities, along with prioritized
              recommendations for remediation. We believe in transparency and
              clarity, ensuring you have the information you need to strengthen
              your security posture effectively.
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={"/images/cs3.png"}
          alt=""
          sx={{
            gridArea: "image",
            width: {
              xs: "70%",
              md: "80%",
            },
          }}
        />
      </Box>

      <DividerLine />

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gridTemplateAreas: {
            xs: `
              "image"
              "content"
            `,
            sm: `
              "image content "
            `,
          },
        }}
      >
        <Box>
          <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}>
            ,
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                color: (theme) =>
                  theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
              }}
            >
              Customization and Collaboration
            </Typography>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                textIndent: { xs: "0rem", sm: "4rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              We understand that every business is unique, which is why we offer
              customizable penetration testing engagements tailored to your
              specific requirements and objectives. Our collaborative approach
              ensures that the testing aligns with your business goals and
              delivers maximum value.
            </Typography>
          </Box>
          <br />
          <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" }, gridArea: "content" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                color: (theme) =>
                  theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
              }}
            >
              Continuous Support and Monitoring
            </Typography>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                textIndent: { xs: "0rem", sm: "4rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Our commitment to your security doesn't end with the completion of
              the penetration testing engagement. We offer post-testing support
              and monitoring services to help you address identified
              vulnerabilities and maintain a robust security posture over time.
            </Typography>
          </Box>
          <Box sx={{ p: { xs: "0 2rem", sm: "0 4rem" } }}></Box>
        </Box>
        <Box
          component="img"
          src={"/images/cs4.png"}
          alt=""
          sx={{
            gridArea: "image",
            width: {
              xs: "70%",
              md: "80%",
            },
          }}
        />
      </Box>
      <DividerLine />

      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Typography
          variant="h4"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Get Started Today
        </Typography>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", width: { xs: "90%", sm: "60%" } }}
          color="text.secondary"
        >
          Ready to take the next step in securing your business? Contact us
          today to learn more about our penetration testing services and how we
          can help protect your most valuable assets from cyber threats.
        </Typography>
        <br />
        <br />
        <Typography
          variant="h2"
          sx={{ textAlign: "center", width: { xs: "90%", sm: "80%" } }}
          color="text.secondary"
        >
          In our experience, successful penetration tests rely heavily on manual
          testing. The skills and abilities brought to the table by an
          experienced penetration test team emulate those of the threat. While
          Automated Vulnerability Scanners and Exploitation Frameworks do have a
          place, they are severely limited by the signatures or modules
          contained in the tools.
        </Typography>
      </Box>

      <DividerLine />

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
          }}
        >
          Pen Test as a service[Compliance along with risk reduction]
        </Typography>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              Our SaaS platforms rich Pen Test Dashboard is under development
              and be made available soon in order to give access to our
              Penetration testing as a Service to the timelines, analytics,
              prioritised findings, and test progress for 24/7.
            </Typography>
          </Box>
          <Box sx={{ p: { xs: "2rem", sm: "4rem" } }}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              We make human-driven penetration tests easy to launch, run, and
              scale per your precise assets and requirements, delivering
              compliance assurance along with better results for risk.
            </Typography>
          </Box>
        </Box>
      </Box>

      <DividerLine />
      <Features data={CSFeaturesBenefits} number={true} />
      <DividerLine />
      <Features data={CSFeaturesCategories} number={true} />
    </>
  );
}

export default CyberSecurity;
