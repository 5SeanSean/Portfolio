import React from 'react';
import './App.css';
import halfshot from './assets/halfshot.png';
import foreground from './assets/foreground.png';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';

function App() {
  return (
    <div className="portfolio">
      <Header />
      <ProjectSection
        image={project1}
        imageAlt="Cybersecurity Dashboard screenshot"
        imageBtnText="View Project"
        title="Cybersecurity Dashboard"
        description="A comprehensive security monitoring tool that aggregates threat intelligence from multiple sources. Built with React and Node.js, featuring real-time alerting and visualization of network anomalies."
        contentBtnText="View Source Code"
      />
      <ProjectSection
        image={project2}
        imageAlt="Secure Auth System screenshot"
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
    <header className="header" role="banner">
      <img src={halfshot} alt="Background" className="header-bg" />
      <img src={foreground} alt="Foreground" className="foreground-person" />
      <div className="header-overlay"></div>
      <div className="name-container">
        <h1>Sean Healy</h1>
      </div>
      <Subtitle />
    </header>
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
        <React.Fragment key={`subtitle-${index}`}>
          <hr />
          <p>{item}</p>
        </React.Fragment>
      ))}
      <hr />
    </div>
  );
};

const ProjectSection = ({ 
  image, 
  imageAlt = "",
  imageBtnText, 
  title, 
  description, 
  contentBtnText, 
  reverse = false 
}) => {
  return (
    <section className={`project-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-half">
        <img src={image} alt={imageAlt} className="project-image" />
        <a href="#project-details" className="image-btn" aria-label={`View ${title} project`}>
          {imageBtnText}
        </a>
      </div>
      <div className="content-half">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a href="#project-details" className="content-btn" aria-label={`View ${contentBtnText} for ${title}`}>
          {contentBtnText}
        </a>
      </div>
    </section>
  );
};

export default App;