import React from 'react';
import { Link } from 'react-router-dom';
// import coding_image from '../../assets/coding_image.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">ReactJS Challanges</h1>
      {/* <img src={coding_image} alt="React Logo" className="w-24 mb-6" /> */}
      <p className="text-lg mb-6">Choose an option below:</p>
      <ul className="space-y-4">
        <li>
          <Link to="/reverse-words" className="bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-indigo-500">
            Reverse Words
          </Link>
        </li>
        <li>
          <Link to="/sumpairs" className="bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-indigo-500">
          SumPairs
          </Link>
        </li>


      </ul>
    </div>
  );
};

export default Home;