import React from "react";
import Card from "../components/Card";
import { resumeData } from "../data/resumeData"; // Import the resume data

const Employment = () => {
  const workData = resumeData.work; // Extract work data from resumeData.js

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-8">Employment</h1>

      {/* Map through workData and create a Card for each job */}
      {workData.map((job, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-3xl font-bold mb-6">{job.companyName}</h1>
          <Card title={`${job.role} (${job.monthOfStarting} ${job.yearOfStarting} - ${job.presentEmployer ? "Present" : `${job.monthOfLeaving} ${job.yearOfLeaving}`})`}>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Summary</h3>
                <p className="text-gray-600">{job.summary}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>{job.achievements}</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Employment;
