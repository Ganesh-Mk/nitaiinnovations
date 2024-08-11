import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import ProductsAndSolutions from "../Components/ProductsAndSolutions";
import AboutUsComp from "../Components/AboutUsComp";
import DividerLine from "../Components/DividerLine";
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
      <DividerLine />

      <AboutUsComp />
      <DividerLine />

      <ProductsAndSolutions />
      <DividerLine />

      <ContactUsComp />
    </>
  );
}
