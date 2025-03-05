import './App.css'

import React, {useLayoutEffect, useEffect,useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import Header from './Header'
import ReactVideoCards from './ReactVideoCards'
import Work from './Work'
const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

// PageTransition wrapper to animate a page on mount (when route changes)
function PageTransition({ children }) {
  const location = useLocation();
  // Keep track of the currently displayed route.
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  // Ref for the container that holds the page content.
  const containerRef = useRef(null);

  // When location changes, run the exit animation.
  useEffect(() => {
    if (location.pathname === currentRoute) return;
    const container = containerRef.current;
    // Animate exit: shrink and move to near the menu.
    gsap.to(container, {
      duration: 0.5,
      scale: 0.2,
      x: window.innerWidth - 150, // target x coordinate (adjust as needed)
      y: 20,                      // target y coordinate (adjust as needed)
      ease: "power2.in",
      onComplete: () => {
        // After the exit animation completes, update the current route.
        setCurrentRoute(location.pathname);
      },
    });
  }, [location]);

  // When currentRoute changes, animate the entry of the new page.
  useEffect(() => {
    const container = containerRef.current;
    // Animate from the small menu position to full screen.
    gsap.fromTo(
      container,
      {
        scale: 0.2,
        x: window.innerWidth - 150,
        y: 20,
      },
      {
        duration: 0.5,
        scale: 1,
        x: 0,
        y: 0,
        ease: "power2.out",
      }
    );
  }, [currentRoute]);
  return (
    <div className="animated-page" ref={containerRef}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Routes >
          <Route path="/" element={<PageTransition><ReactVideoCards title="ReactVideoCardssds" /></PageTransition>} />
          <Route path="/Work" element={<PageTransition><Work title="ReactVideoCards" /></PageTransition>} />
          <Route path="/g" element={<PageTransition><Work title="ReactVideoCards" /></PageTransition>} />
        </Routes>
      </Wrapper>
    </Router>
  )
}
