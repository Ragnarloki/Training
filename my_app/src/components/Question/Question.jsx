// src/App.js
import React from 'react';

function Question() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col md:flex-row font-times">
      {/* Left Section */}
      <div className="md:w-1/4 bg-gray-800 p-4">
        <h1 className="text-xl font-bold">Question</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Varius vel feugiat pharetra consequat sed.
          Malesuada venenatis fermentum facilisi pharetra lorem fermentum dignissim.
          Ut consectetur vitae laoreet consequat morbi. Ut a velit lacinia quisque commodo.
        </p>
        <div className="bg-black h-64 mt-4"></div>
      </div>

      {/* Right Section */}
      <div className="md:w-3/4 p-4 flex flex-col md:flex-row justify-between">
        {/* Code Editor */}
        <div className="bg-gray-800 p-4 flex flex-col w-full md:w-1/2 mr-0 md:mr-4">
          <select className="bg-gray-700 p-2 rounded mb-2 text-black">
            <option>Python</option>
            <option>JavaScript</option>
            <option>Java</option>
          </select>
          <textarea
            className="bg-gray-700 p-2 rounded h-48 text-black"
            placeholder="//Enter your code here"
          ></textarea>
          <div className="flex justify-between mt-2">
            <button className="bg-yellow-500 p-2 rounded">Run</button>
            <button className="bg-yellow-500 p-2 rounded">Submit</button>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white text-black p-4 flex-1 mt-4 md:mt-0">
          <div className="bg-green-500 text-white p-2 rounded">passed</div>
        </div>
      </div>
    </div>
  );
}

export default Question;
