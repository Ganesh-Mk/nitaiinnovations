import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/index.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "./Components/getLPTheme";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CloudService from "./Pages/CloudService";
import CyberSecurity from "./Pages/CyberSecurity";
import AIML from "./Pages/AIML";
import Footer from "./Components/Footer";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Router>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/cloudService" element={<CloudService />} />
          <Route path="/AIML" element={<AIML />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}
