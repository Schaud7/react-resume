

import React from 'react';

const Skills = ({ skillsData }) => {
  console.log(skillsData); // Check if the data is being passed correctly
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.skillname}>
            {skill.skillname} - {skill.yearsOfExperience} years
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills; // Ensure you're using default export
