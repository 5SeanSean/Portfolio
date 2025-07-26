import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <Header />
      <ProjectSection
        image="Screenshot 2025-07-19 021822.png"
        imageBtnText="View Project"
        title="Cybersecurity Dashboard"
        description="A comprehensive security monitoring tool that aggregates threat intelligence from multiple sources. Built with React and Node.js, featuring real-time alerting and visualization of network anomalies."
        contentBtnText="View Source Code"
      />
      <ProjectSection
        image="Screenshot 2025-07-19 031918.png"
        imageBtnText="Live Demo"
        title="Secure Auth System"
        description="A multi-factor authentication framework with biometric support. Implemented using Python and Flask, with JWT token handling and rate-limiting to prevent brute force attacks."
        contentBtnText="Technical Documentation"
        reverse
      />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <img src="halfshot.png" alt="Background" className="header-bg" />
      <img src="IMG_0125 (1).png" alt="Foreground" className="foreground-person" />
      <div className="header-overlay"></div>
      <div className="name-container">
        <h1>Sean Healy</h1>
      </div>
      <Subtitle />
    </div>
  );
};

const Subtitle = () => {
  const subtitleItems = [
    "Aspiring software engineer and cybersecurity professional",
    "Student at Marquette University Majoring in Computer Science/Minoring in Marketing expecting to graduate in 2027",
    "Graphic Design Intern for the Marquette Athletics Department"
  ];

  return (
    <div className="subtitle">
      {subtitleItems.map((item, index) => (
        <React.Fragment key={index}>
          <hr />
          <p>{item}</p>
        </React.Fragment>
      ))}
      <hr />
    </div>
  );
};

const ProjectSection = ({ image, imageBtnText, title, description, contentBtnText, reverse = false }) => {
  return (
    <div className={`project-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-half" style={{ backgroundImage: `url(${image})` }}>
        <a href="#" className="image-btn">{imageBtnText}</a>
      </div>
      <div className="content-half">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a href="#" className="content-btn">{contentBtnText}</a>
      </div>
    </div>
  );
};

export default App;