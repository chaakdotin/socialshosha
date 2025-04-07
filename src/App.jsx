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
import { AnimatePresence, motion } from "framer-motion";
import Header from './Header'
import Home from './ReactVideoCards'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};
// PageTransition wrapper to animate a page on mount (when route changes)


const AnimatedRoutes = () => {
  const location = useLocation();
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })
  return (
    
    <AnimatePresence mode="wait" >
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
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
  gsap.registerPlugin(ScrollTrigger)
 useEffect(() => {
  const update = (time, deltaTime, frame) => {
    lenis.raf(time * 1000)
  }
  
  const resize = (e) => {
    ScrollTrigger.refresh()
  }
  
  const lenis = new Lenis({
    duration: .7,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    infinite: false,
  })
  
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    // console.log({ scroll, limit, velocity, direction, progress })
    ScrollTrigger.update()
  })
  
  gsap.ticker.add(update)
  
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scroll = value
      }
      return lenis.scroll
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
  })
  
  ScrollTrigger.defaults({ scroller: document.body })
  
  window.addEventListener('resize', resize)
 })
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
