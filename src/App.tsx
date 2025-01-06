import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ReverseWords from './components/ReverseWords/ReverseWords';
import SumPairs from './components/Sumpairs/SumPairs';
import './index.css'; // Ensure you import your CSS file
import reactLogo from '../src/assets/logo192.png';
import Counter from './components/Counter/Counter';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
      <img src={reactLogo} alt="React Logo" className="w-24 mb-6" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reverse-words" element={<ReverseWords />} />
          <Route path="/sumpairs" element={<SumPairs />} />
          <Route path="/counter" element={<Counter />} />
       
        </Routes>
      </div>
    </Router>
  );
};

export default App;