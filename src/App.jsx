// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSheetContent from "./hooks/useSheetContent";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Work from "./pages/Work";
import Now from "./pages/Now";
import NotFound from "./pages/404"; // the type-only page we wrote

export default function App() {
  const content = useSheetContent();

  return (
    <Router>
      <Layout content={content}>
        <Routes>
          <Route path="/" element={<About />} />
  <Route path="/work" element={<Work />} />
  <Route path="/now" element={<Now />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/404" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
