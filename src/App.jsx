import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/smokyWeb3/Home';
import CoachA from './components/smokyWeb3/CoachA';
import Header from './components/Header/Header';
import CoachC from './components/smokyWeb3/CoachC';
import All from './components/All';
import Review from './components/Review';
import { useEffect } from 'react';


function App() {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Animation happens only once
  });
  return (
    <Router> {/* Wrap everything inside Router */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoachA" element={<CoachA />} />
        <Route path="/CoachC" element={<CoachC />} />
        <Route path="/All" element={<All />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
