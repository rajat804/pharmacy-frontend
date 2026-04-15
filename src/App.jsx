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
import PHBM70Product from './pages/products/PHBM70Product';
import NeolactN70 from './pages/products/NeolactN70';
import NeolactN70Prime from './pages/products/NeolactN70Prime';
import NeolactMMF from './pages/products/NeolactMMF';
import NeolactMMFPLUS from './pages/products/NeolactMMFPLUS';
import NeolactSOS from './pages/products/NeolactSOS';
import WhyDonate from './pages/donor/WhyDonate';
import BecomeDonor from './pages/donor/BecomeDonor';
import DonorGuidelines from './pages/donor/DonorGuidelines';
import DonorTestimonials from './pages/donor/DonorTestimonials';
import BenefitsHumanMilk from './pages/parents/BenefitsHumanMilk';
import MakeRightChoice from './pages/parents/MakeRightChoice';
import LactationSupport from './pages/parents/LactationSupport';
import SuccessStories from './pages/parents/SuccessStories';
import ParentTestimonials from './pages/parents/ParentTestimonials';
import FAQParents from './pages/parents/FAQParents';
import Publications from './pages/hcps/Publications';
import CaseStudies from './pages/hcps/CaseStudies';
import Conferences from './pages/hcps/Conferences';
import HCPTestimonials from './pages/hcps/HCPTestimonials';

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
          <Route path='/products/phbm70' element={<PHBM70Product />} />
          <Route path='/products/n70' element={<NeolactN70 />} />
          <Route path='/products/n70-prime' element={<NeolactN70Prime />} />
          <Route path='/products/mmf' element={<NeolactMMF />} />
          <Route path='/products/mmf-plus' element={<NeolactMMFPLUS />} />
          <Route path='/products/sos' element={<NeolactSOS />} />
          <Route path='/donor/why-donate' element={<WhyDonate />} />
          <Route path='/donor/become-donor' element={<BecomeDonor />} />
          <Route path='/donor/guidelines' element={<DonorGuidelines />} />
          <Route path='/donor/testimonials' element={<DonorTestimonials />} />
          <Route path='/donor/faq' element={<DonorTestimonials />} />
          <Route path='/parents/benefits' element={<BenefitsHumanMilk />} />
          <Route path='/parents/right-choice' element={<MakeRightChoice />} />
          <Route path='/parents/lactation-support' element={<LactationSupport />} />
          <Route path='/parents/success-stories' element={<SuccessStories />} />
          <Route path='/parents/testimonials' element={<ParentTestimonials />} />
          <Route path='/parents/faq' element={<FAQParents />} />
          <Route path='/hcps/publications' element={<Publications />} />
          <Route path='/hcps/case-studies' element={<CaseStudies />} />
          <Route path='/hcps/conferences' element={<Conferences />} />
          <Route path='/hcps/testimonials' element={<HCPTestimonials />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
