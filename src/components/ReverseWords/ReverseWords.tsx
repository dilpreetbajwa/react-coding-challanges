import React, { useState } from 'react';

const ReverseWords: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const reverseWords = (str: string): string => {
    return str
      .split(/(\s+)/) // Split by whitespace and keep it
      .map((word) => word.split('').reverse().join('')) // Reverse each word
      .join(''); // Join them back together
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleReverseClick = () => {
    setOutput(reverseWords(input));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Reverse Each Word</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type here..."
        className="w-full h-24 border border-gray-300 rounded-lg p-2 mb-4 focus:border-indigo-600 focus:outline-none"
      />
      <button
        onClick={handleReverseClick}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg transition duration-300 hover:bg-indigo-500"
      >
        Reverse Words
      </button>
      <h2 className="text-lg font-semibold mt-4">Output:</h2>
      <div className="border border-gray-300 rounded-lg p-2 mt-2 bg-gray-100 min-h-10">
        {output}
      </div>
    </div>
  );
};

export default ReverseWords;