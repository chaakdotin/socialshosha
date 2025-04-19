import './App.css'

import React, {lazy} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {gsap,ScrollTrigger} from "gsap/all";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import 'swiper/css';
import Header from './Header'
const Home = lazy(() => import('./ReactVideoCards'));
const Work = lazy(() => import('./Work'));
const Contact = lazy(() => import('./Contact'));
const Services = lazy(() => import('./Services'));
const NewPage = lazy(() => import('./newPage'));
const NewPage1 = lazy(() => import('./newPage1'));
const NewPage2 = lazy(() => import('./newPage2'));
const NewPage3 = lazy(() => import('./newPage3'));
const NewPage4 = lazy(() => import('./newPage4'));
const NewPage5 = lazy(() => import('./newPage5'));
import PageLoadAnimation from './PageLoadAnimation'

const App = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.3,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false
  });

  // Sync Lenis with GSAP's ticker for better performance
  lenis.on('scroll', () => ScrollTrigger.update());

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  gsap.registerPlugin(ScrollTrigger);
  // Initialize a new Lenis instance for smooth scrollin
    
  return (
    <Router>
      <Routes >
        <Route element={<PageLoadAnimation />}>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/work1" element={<Work />} />
            <Route path="/contact1" element={<Contact />} />
            <Route path="/services1" element={<Services />} />
            <Route path="/newPage" element={<NewPage />} />
            <Route path="/newPage1" element={<NewPage1 />} />
            <Route path="/newPage2" element={<NewPage2 />} />
            <Route path="/newPage3" element={<NewPage3 />} />
            <Route path="/newPage4" element={<NewPage4 />} />
            <Route path="/newPage5" element={<NewPage5 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;