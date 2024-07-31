import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box, Stack, Typography } from "@mui/material";
// import "../Styles/contactUsComp.css";
import "../Styles/contactUs.css"
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Button as BaseButton, buttonClasses } from "@mui/base/Button";

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `
);

function ContactUsComp() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <div className="contactContainer">
      <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="mainConatiner">
        <div className="contactHead">
          <Typography
            variant="h6"
            color="#0959AA"
            sx={{ textAlign: "center", marginTop: "6.5rem" }}
          >
            KEEP IN TOUCH
          </Typography>
          <Typography
            variant="h2"
            color="#0959AA"
            sx={{ textAlign: "center", marginTop: "0rem" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            color="#0959AA"
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            Fill out the form below and you will hear from us shortly.
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
                className="inpts block w-[25vw] h-[2.5vw] p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary bg-transparent focus:ring-primary sm:text-sm "
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
                className="inpts block w-[25vw] h-[2.5vw] p-2  rounded-md border-2 bg-transparent border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
              className="inpts3 block w-[51vw] h-[2.5vw] p-2  rounded-md bg-transparent border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
              className="inpts4 block p-2 bg-transparent w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
    
  );
}

export default ContactUsComp;