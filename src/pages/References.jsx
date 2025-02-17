import React from 'react';
import { resumeData } from '../data/resumeData';

const References = () => {
  const references = resumeData.references;

  return (
    <div>
      <h2>References</h2>
      <ul>
        {references.map((reference, index) => (
          <li key={index}>
            <p>Name: {reference.name}</p>
            <p>Relationship: {reference.relationship}</p>
            <p>Contact Info: {reference.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
