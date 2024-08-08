import React from "react";
import { Element } from "react-scroll";
import { Typography } from "@mui/material";

import "../Styles/aboutUsComp.css"; 

function AboutUsComp() {
  return (
    <Element name="aboutUsSection">
      <div className="aboutUsComp">
        <div className="leftAboutUs">
          <h1>About Us</h1>
          <Typography
            textAlign="center"
            sx={{ alignSelf: "center", color: "#68737F !important" }}
          >
            We're excited to share our story with you. At NITAI INNOVATIONS, we
            are a passionate and dedicated team of professionals with a mission
            to make a difference in the world of Information Technology. Our
            journey began by a shared vision to be successful in handling the
            cyber security threats in the IT Industry.
          </Typography>
        </div>
        <div className="rightAboutUs">
          <img className="aboutUsImage" src="/images/aboutUs.png" alt="" />
        </div>
      </div>
    </Element>
  );
}

export default AboutUsComp;
