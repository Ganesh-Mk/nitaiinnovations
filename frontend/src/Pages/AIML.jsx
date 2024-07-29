import "../Styles/index.css";
import { Divider, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AWSFeatures from "../Components/AWSFeatures";
import AzureFeatures from "../Components/AzureFeatures";
import Features from "../Components/Features";
import { AIFeatures } from "../Data/AIFeaturesData";
import { MLFeatures } from "../Data/MLFeaturesData";

function AIML() {
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
              textAlign: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              gap: 1,
            }}
          >
            AI Development Services
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            AI & ML
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", marginTop: "2rem", fontSize: "1.2rem" }}
          >
            Empower your AI journey with our comprehensive suite of end-to-end
            AI development services, meticulously crafted to align with your
            distinct project requirements. From crafting bespoke AI strategies
            to fuel business growth and leveraging advanced analytics to harness
            the power of data, to deploying cutting- edge Natural Language
            Processing (NLP) solutions for seamless communication, we serve as
            your dedicated AI talent powerhouse.
          </Typography>
        </Stack>

        <Box
          sx={{
            marginTop: "5rem",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            component="img"
            src="/images/ai1.png"
            alt=""
            sx={{
              width: {
                xs: "90%",
                md: "40%",
              },
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            marginTop: "5rem",
            display: "grid",
            placeItems: "center",
          }}
        ></Stack>
      </Container>

      <Features data={AIFeatures} />
      <Features data={MLFeatures} />
    </Box>
  );
}

export default AIML;
