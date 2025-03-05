import './App.css'

import React, {useLayoutEffect, useEffect,useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import Header from './Header'
import ReactVideoCards from './ReactVideoCards'
import Work from './Work'

const pageVariants = {
  initial: { opacity: 0, y: 51 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};
// PageTransition wrapper to animate a page on mount (when route changes)


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><ReactVideoCards /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
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
  >
    {children}
  </motion.div>
);


const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
