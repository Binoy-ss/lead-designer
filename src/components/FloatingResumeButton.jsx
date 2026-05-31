import React from 'react';
import './FloatingResumeButton.css';
import resumePdf from '../assets/Binoy_Lead_designer.pdf';

const FloatingResumeButton = () => {
  const handleDownload = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <button 
      className="floating-resume-btn" 
      onClick={handleDownload}
      aria-label="Download Resume"
    >
      <div className="btn-content">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="download-icon"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </div>
      <div className="rotating-text">
        <svg viewBox="0 0 100 100">
          <defs>
            <path 
              id="textCircle" 
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
            />
          </defs>
          <text>
            <textPath href="#textCircle" startOffset="0" textLength="219" lengthAdjust="spacing" className="text-path">
              DOWNLOAD RESUME • DOWNLOAD RESUME • 
            </textPath>
          </text>
        </svg>
      </div>
    </button>
  );
};

export default FloatingResumeButton;
