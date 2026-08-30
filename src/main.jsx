import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Privacy from "./pages/Privacy.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CookieConsent from "./components/CookieConsent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>
);
