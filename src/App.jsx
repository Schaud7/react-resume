// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Employment from "./pages/Employment";
import Education from "./pages/Education";
import Skills from "./pages/Skills"; // Make sure this is the correct import
import References from "./pages/References"; // Same for references
import resumeData from "./data/resumeData";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Contact data={resumeData} />} />
          <Route path="/employment" element={<Employment />} />
          <Route
            path="/education"
            element={<Education educationData={resumeData.education} />}
          />
          <Route
            path="/skills"
            element={<Skills skillsData={resumeData.skills} />}
          />
          <Route
            path="/references"
            element={<References referencesData={resumeData.references} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
