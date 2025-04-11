import './App.css'

import React, {useLayoutEffect, useEffect,useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {gsap,ScrollTrigger} from "gsap/all";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Header from './Header'
import Home from './ReactVideoCards'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
import PageLoadAnimation from './PageLoadAnimation'

// const pageVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
// };
// PageTransition wrapper to animate a page on mount (when route changes)


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      
    </>
  );
};

const PageWrapper = ({ children }) => (
  
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="smooth-scroll"
    
  >
    {children}
  </motion.div>
);


const App = () => {
  const lenis = new Lenis({
    // lerp: 0.1, // Add slight smoothing for better ScrollTrigger compatibility
    // duration: 1, // Adjust duration for minimal smoothing
    smooth: true, // Enable smooth scrolling
    wheelMultiplier: 0.2,
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
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;