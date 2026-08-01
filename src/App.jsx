import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import BackgroundFX from "./components/BackgroundFX.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import { CursorContext } from "./hooks/useCursorVariant.js";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Services from "./pages/Services.jsx";
import Achievements from "./pages/Achievements.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [variant, setVariant] = useState("default");
  const location = useLocation();

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      <SmoothScroll />
      <ScrollToTop />
      <div className="grain" />
      <BackgroundFX />
      <Loader />
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </CursorContext.Provider>
  );
}
