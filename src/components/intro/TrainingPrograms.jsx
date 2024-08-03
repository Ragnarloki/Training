import React from 'react';

const programs = [
  { name: 'Full Stack', duration: '3/6/12 Months' },
  { name: 'Front End', duration: '3/6/12 Months' },
  { name: 'Back End', duration: '3/6/12 Months' },
  // Add more programs as needed
];

const TrainingPrograms = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-8">Training Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="bg-white p-4 shadow-lg">
            <img src="path/to/image.png" alt={program.name} className="mb-4" />
            <h3 className="text-xl font-semibold">{program.name}</h3>
            <p>{program.duration}</p>
            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;
