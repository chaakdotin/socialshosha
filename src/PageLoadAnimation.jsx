import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './PageLoadAnimation.css';
const PageLoadAnimation = () => {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Trigger the overlay animation on location change
    setShowOverlay(true);
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // 2000ms equals 2 seconds
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div>
      {/* Render overlay only if showOverlay is true */}
      {showOverlay && (
        <div id="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {/* Main page content; opacity transitions to 1 after the overlay is removed */}
      <div
        id="content"
        style={{ opacity: showOverlay ? 0 : 1 }}
      > 
        <Outlet />
      </div>
    </div>
  );
};
export default PageLoadAnimation;