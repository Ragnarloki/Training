// src/components/Notes.jsx
import React from 'react';

const Notes = () => {
  const notes = [
    { id: 1, label: 'PDF' },
    { id: 2, label: 'PDF' },
    { id: 3, label: 'PDF' },
    { id: 4, label: 'PDF' },
  ];

  return (
    <div className='flex justify-center h-full md:h-[540px]'>
    <div className="bg-white p-6  rounded-lg shadow-md w-[96%] md:w-[95%] ">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>
      <div className="space-y-4 md:space-y-20">
        {notes.map(note => (
          <div key={note.id} className="flex items-center  space-x-2">
            <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
              <span>{note.label}</span>
            </div>
            <p>{note.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Notes;
