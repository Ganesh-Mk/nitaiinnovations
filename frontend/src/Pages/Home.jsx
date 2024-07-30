import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Hero from "../Components/Hero";
import ProductsAndSolutions from "../Components/ProductsAndSolutions";
import Footer from "../Components/Footer";
import AboutUsComp from "../Components/AboutUsComp";
import ContactUsComp from "../Components/ContactUsComp";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Home() {
  const location = useLocation();

  // Scroll to particular section on navItem click
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.scrollTo) {
      const offset =
        location.state.scrollTo === "productsAndSolutionSection" ? 0 : -120;

      console.log(offset);

      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: offset,
      });
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Divider />

      <AboutUsComp />
      <Divider />

      <ProductsAndSolutions />
      <Divider />

      <ContactUsComp />
      <Divider />

      <Footer />
    </>
  );
}
