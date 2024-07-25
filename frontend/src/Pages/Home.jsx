import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";
import Features from "../Components/Features";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Divider />
        <Divider />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
