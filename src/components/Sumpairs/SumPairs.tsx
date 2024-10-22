import React, { useState } from 'react';

const SumPairs: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [results, setResults] = useState<[number, number][]>([]);

  const findPairs = () => {
    const numArray = numbers.split(',').map(num => parseInt(num.trim(), 10));
    const targetValue = parseInt(target, 10);
    const pairs: [number, number][] = [];

    const numIndices: { [key: number]: number } = {};

    numArray.forEach((num, index) => {
      const complement = targetValue - num;
      if (numIndices[complement] !== undefined) {
        pairs.push([numIndices[complement], index]);
      }
      numIndices[num] = index;
    });

    setResults(pairs);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Find Pairs that Sum to a Target Value</h2>
      <div className="mb-4">
        <label className="block mb-2">Enter numbers (comma-separated):</label>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Enter target sum:</label>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={findPairs}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Find Pairs
      </button>

      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Matching Pairs (Indices):</h3>
          <ul>
            {results.map((pair, index) => (
              <li key={index} className="text-lg">
                Indices: {pair[0]} and {pair[1]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SumPairs;