import React from "react";
import Divider from "@mui/material/Divider";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import AboutUsComp from "../Components/AboutUsComp";
import ContactUsComp from "../Components/ContactUsComp";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Divider />

      <AboutUsComp />
      <Divider />

      <Features />
      <Divider />

      <ContactUsComp />
      <Divider />

      <Footer />
    </>
  );
}
