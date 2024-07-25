import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";
import Features from "../Components/Features";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import AboutUsComp from "../Components/AboutUsComp";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Divider />

      <AboutUsComp />
      <Features />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </>
  );
}
