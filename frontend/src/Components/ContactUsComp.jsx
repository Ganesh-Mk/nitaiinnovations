import { Button, Input, TextField } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import "../Styles/contactUsComp.css";

function ContactUsComp() {
  return (
    <Element name="contactUsSection">
      <div className="contactUs" id="contactUs">
        <div className="leftContactUs">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <div className="btnsContainer">
            <Button variant="contained">Submit</Button>
            <Button variant="outlined">Reset</Button>
          </div>
        </div>
        <div className="RightContactUs"></div>
      </div>
    </Element>
  );
}

export default ContactUsComp;
