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
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;