import "../Styles/index.css";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function CyberSecurity() {
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
              textAlign: "center",
              alignSelf: "center",
              gap: 1,
            }}
          >
            CYBER SECURITY
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", fontSize: "1.5rem" }}
          >
            Cyber Security - Penetration Testing
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", marginTop: "5rem", fontSize: "1.4rem" }}
          >
            Cybersecurity penetration testing, also known as ethical hacking, is
            a process used to identify and fix security vulnerabilities in a
            system. By simulating cyberattacks, penetration testers uncover
            weaknesses that could be exploited by malicious hackers. This
            proactive approach helps organizations protect their networks,
            applications, and data, ensuring they remain secure against
            potential threats. Regular penetration testing is essential for
            maintaining a strong cybersecurity posture in an increasingly
            digital world.
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            marginTop: "10rem",
          }}
        >
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Penetration Testing Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            Revolutionize your operational approach, streamline enterprise
            workflows, and embrace mobility, all while minimizing expenses.
            Transitioning your business to the cloud not only alleviates the
            burden of on-premise systems but also offers unparalleled security
            and dependability.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            What is Penetration Testing?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            Penetration testing, often referred to as pen testing, is a
            proactive security assessment that simulates real-world cyberattacks
            to identify weaknesses in your systems, applications, and networks.
            By uncovering potential vulnerabilities before malicious actors do,
            penetration testing helps you strengthen your defenses and protect
            your sensitive data.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Benefits of Penetration Testing
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                marginTop: "0rem",
              }}
            >
              <ListItem>
                Identify and remediate security vulnerabilities before they are
                exploited by cybercriminals.
              </ListItem>
              <ListItem>
                Protect sensitive data and maintain the trust of your customers
                and stakeholders.
              </ListItem>
              <ListItem>
                Achieve compliance with industry regulations and standards, such
                as GDPR, HIPAA, PCI DSS, and more.
              </ListItem>
              <ListItem>
                Gain valuable insights into your security posture and prioritize
                investments in cybersecurity measures.
              </ListItem>
            </List>
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Our Approach
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            At NITAI INNOVATIONS, we take a comprehensive and tailored approach
            to penetration testing. Our team of experienced cybersecurity
            professionals utilizes industry-leading methodologies, tools, and
            techniques to assess the security of your systems and networks. From
            network penetration testing to web application testing and social
            engineering assessments, we leave no stone unturned in our pursuit
            of identifying and mitigating security risks.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Expertise and Experience
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            With five plus years of experience in the cybersecurity industry,
            our team brings a wealth of knowledge and expertise to every
            engagement. Our certified professionals hold industry-recognized
            certifications and have successfully conducted penetration testing
            for clients across various sectors.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Types of Penetration Testing Services Offered
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                marginTop: "0rem",
              }}
            >
              <ListItem>Network Penetration Testing</ListItem>
              <ListItem>Web Application Testing</ListItem>
              <ListItem>Wireless Network Testing</ListItem>
              <ListItem>Social Engineering Assessments</ListItem>
              <ListItem>
                And more tailored services to meet your specific needs.
              </ListItem>
            </List>
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Reporting and Deliverables
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            Our penetration testing reports provide clear and actionable
            insights into identified vulnerabilities, along with prioritized
            recommendations for remediation. We believe in transparency and
            clarity, ensuring you have the information you need to strengthen
            your security posture effectively.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Customization and Collaboration
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            We understand that every business is unique, which is why we offer
            customizable penetration testing engagements tailored to your
            specific requirements and objectives. Our collaborative approach
            ensures that the testing aligns with your business goals and
            delivers maximum value.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Continuous Support and Monitoring
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            Our commitment to your security doesn’t end with the completion of
            the penetration testing engagement. We offer post-testing support
            and monitoring services to help you address identified
            vulnerabilities and maintain a robust security posture over time.We
            understand that every business is unique, which is why we offer
            customizable penetration testing engagements tailored to your
            specific requirements and objectives. Our collaborative approach
            ensures that the testing aligns with your business goals and
            delivers maximum value.
          </Typography>
          <Typography
            variant="h4"
            color="#0959AA"
            sx={{ textAlign: "left", marginTop: "5rem !important" }}
          >
            Get Started Today
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "left",
              fontSize: "1.2rem",
              marginTop: "0rem !important",
            }}
          >
            Ready to take the next step in securing your business? Contact us
            today to learn more about our penetration testing services and how
            we can help protect your most valuable assets from cyber threats.
          </Typography>
          <div className="cyberimg">
            <img src="public/images/penetrationTesting2.webp" alt="" />
          </div>
          <div className="container">
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "left",
                fontSize: "1.2rem",
                marginTop: "0rem !important",
              }}
            >
              In our experience, successful penetration tests rely heavily on
              manual testing. The skills and abilities brought to the table by
              an experienced penetration test team emulate those of the threat.
              While Automated Vulnerability Scanners and Exploitation Frameworks
              do have a place, they are severely limited by the signatures or
              modules contained in the tools.
            </Typography>
            <Typography
              variant="h4"
              color="#0959AA"
              sx={{ textAlign: "left", marginTop: "5rem !important" }}
            >
              Pen Test as a service[Compliance along with risk reduction]
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "left",
                fontSize: "1.2rem",
                marginTop: "0rem !important",
              }}
            >
              We make human-driven penetration tests easy to launch, run, and
              scale per your precise assets and requirements, delivering
              compliance assurance along with better results for risk. <br />{" "}
              <br />
              Our SaaS platform’s rich Pen Test Dashboard is under development
              and be made available soon in order to give access to our
              Penetration testing as a Service to the timelines, analytics,
              prioritised findings, and test progress for 24/7.
            </Typography>
            <Typography
              variant="h4"
              color="#0959AA"
              sx={{ textAlign: "left", marginTop: "5rem !important" }}
            >
              Key benefits of pentest as a service
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "left",
                fontSize: "1.2rem",
                marginTop: "0rem !important",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  bgcolor: "background.paper",
                  marginTop: "0rem",
                }}
              >
                <ListItem>
                  Versatility: <br /> Run pen tests for every need and asset
                  type at the testing intensity you desire.
                </ListItem>
                <ListItem>
                  IMPACT: <br />
                  Count on pentester talent with the skills and experience
                  needed for best results.
                </ListItem>
                <ListItem>
                  SPEED: <br />
                  Buy and set up our Standard pen tests online and launch within
                  days.
                </ListItem>
                <ListItem>
                  TRANSPARENCY: <br /> View findings and tester progress through
                  the methodology checklist in real time.
                </ListItem>
                <ListItem>
                  INTEGRATION: <br />
                  Flow findings directly into your SDLC process for fast & early
                  remediation.
                </ListItem>
              </List>
            </Typography>
            <Typography
              variant="h4"
              color="#0959AA"
              sx={{ textAlign: "left", marginTop: "5rem !important" }}
            >
              Categories of pentest as a service
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "left",
                fontSize: "1.2rem",
                marginTop: "0rem !important",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  bgcolor: "background.paper",
                  marginTop: "0rem",
                }}
              >
                <ListItem>
                  Web Application Pen Test: <br />(Buy & Set Up Online!)Test web
                  applications, whether cloud-based or on-premises, of any
                  complexity.
                </ListItem>
                <ListItem>
                  Network Pen Test: <br />(Buy & Set Up Online!) Rely on expert
                  network pen testers to find hidden flaws that other approaches
                  can.
                </ListItem>
                <ListItem>
                  Mobile Application Pen Test: <br /> Count on excellent results from a
                  curated team of mobile app security experts.
                </ListItem>
                <ListItem>
                  Cloud Pen Test: <br />Identify vulnerabilities unique to cloud
                  environments, while respecting shared responsibility.
                </ListItem>
                <ListItem>
                  API Pen Test: <br />Test the security of your APIs, with results
                  fully integrated with your SDLC, before they ship.
                </ListItem>
                <ListItem>
                  IoT Device Pen Test: <br />Find cyber-physical vulnerabilities
                  unique to connected devices, from pacemakers to planes.
                </ListItem>
                <ListItem>
                  Social Engineering Pen Test: <br />Run a specialised test to assess
                  how your organisation responds to common social engineering
                  threats.
                </ListItem>
              </List>
            </Typography>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}

export default CyberSecurity;
