import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed via `npm install axios`

function AskMentor() {
  // State to manage input values and errors
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [emailError, setEmailError] = useState('');
  const [queryError, setQueryError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setQueryError('');

    // Validate inputs
    let valid = true;
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      valid = false;
    }
    if (!query) {
      setQueryError('Query cannot be empty');
      valid = false;
    }

    if (!valid) return; // Stop form submission if there are validation errors

    // Prepare JSON data
    const requestData = {
      email,
      query,
    };

    // Log JSON data to console
    console.log('Submitting JSON data:', JSON.stringify(requestData, null, 2));

  //   try {
  //     // Replace with your backend URL
  //     await axios.post(
  //       'https://your-backend-url.com/api/submit',
  //       JSON.stringify(requestData),
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     setFormSubmitted(true);
  //     // Clear fields after successful submission
  //     setEmail('');
  //     setQuery('');
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  };

  return (
    <div className='flex justify-center h-full md:h-[540px] font-times'>
      <div className="bg-white p-6 rounded-lg shadow-md w-[96%] md:w-[95%]">
        <h1 className='text-3xl font-semibold font-times flex justify-center'>Ask Your Doubt</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-5'>
            <h1 className='text-2xl'>Email</h1>
            <input
              type="text"
              placeholder='Enter your email id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-[#F1F1F1] p-2 w-[98%] h-12 rounded-lg ${emailError ? 'border-2 border-red-500' : ''}`}
            />
            {emailError && <p className='text-red-500'>{emailError}</p>}
          </div>

          <div className='my-5'>
            <h1 className='text-2xl font-times'>Your Query</h1>
            <textarea
              placeholder='Your Query'
              rows={7}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`bg-[#F1F1F1] p-2 w-[98%] rounded-lg ${queryError ? 'border-2 border-red-500' : ''}`}
            />
            {queryError && <p className='text-red-500'>{queryError}</p>}
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className="px-4 py-2 mt-2 bg-[#17212E] text-white rounded-md mb-4"
            >
              Submit
            </button>
          </div>
        </form>

        {formSubmitted && <p className='text-green-500 text-center'>Your query has been submitted successfully!</p>}
      </div>
    </div>
  );
}

export default AskMentor;
