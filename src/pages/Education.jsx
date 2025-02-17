import React from "react";
import Card from "../components/Card";
import { resumeData } from "../data/resumeData"; // Import the resume data

const Education = () => {
  const educationData = resumeData.education; // Get the education data from resumeData.js

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-8">Education</h1>

      {/* Map through educationData and create a Card for each entry */}
      {educationData.map((edu, index) => (
        <Card key={index} header={edu.institution} title={edu.degree} subtitle={`${edu.major} • ${edu.year}`}>
          <div className="space-y-4">
            <p className="text-gray-600">{edu.description}</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>GPA: {edu.gpa}</li>
              <li>Major: {edu.major}</li>
              {edu.minor && <li>Minor: {edu.minor}</li>} {/* Conditionally render minor */}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Education;
