import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import OurStory from "./pages/about/OurStory";
import MissionVision from './pages/about/MissionVision';
import ScrollToTop from './components/ScrollToTop';
import QualitySafety from './pages/about/QualitySafety';
import AwardsRecognitions from './pages/about/AwardsRecognitions';

const App = () => {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/our-story' element={<OurStory />} />
          <Route path='/about/mission-vision' element={<MissionVision />} />
          <Route path='/about/quality-safety' element={<QualitySafety />} />
          <Route path='/about/awards' element={<AwardsRecognitions />} />




        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
