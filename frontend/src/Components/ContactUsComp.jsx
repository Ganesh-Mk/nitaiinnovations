import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { Element } from "react-scroll";

import "../Styles/contactUs.css";

function ContactUsComp() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Element name="contactUsSection">
      <div className="contactContainer">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginBottom: "2rem",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div className="mainConatiner">
            <div className="contactHead">
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  marginTop: "6.5rem",
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
                }}
              >
                KEEP IN TOUCH
              </Typography>
              <Typography
                variant="h1"
                sx={{ textAlign: "center", marginTop: "0rem" }}
              >
                Contact Us
              </Typography>
            </div>
          </div>
          <div className="textFeilds">
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="inpts block w-[25vw] h-[2.5vw] p-4 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="inpts block w-[25vw] h-[2.5vw] p-4  rounded-md border-2 bg-transparent border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="inpts3 block w-[51vw] h-[2.5vw] p-4  rounded-md bg-transparent border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Enter the subject"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="inpts4 block p-4 bg-transparent w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium bg-blue-500 text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </Stack>
      </div>
    </Element>
  );
}

export default ContactUsComp;
