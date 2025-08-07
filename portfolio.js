const Portfolio = () => {
  const [expandedCard, setExpandedCard] = React.useState(null);

  const handleCardClick = (cardIndex, link) => {
    // If it's the first card (index 0), just return (no functionality needed)
    if (cardIndex === 0) {
      return;
    }

    // For mobile: implement two-tap system
    if (window.innerWidth <= 768) {
      if (expandedCard === cardIndex) {
        // Second tap - go to link
        window.open(link, '_blank', 'noopener noreferrer');
        setExpandedCard(null);
      } else {
        // First tap - expand card
        setExpandedCard(cardIndex);
      }
    } else {
      // Desktop - go directly to link
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  // Close expanded card when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.info-card')) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="portfolio-container">
      <div className="contact-info">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=seanfromchicago@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" alt="Email" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/sean-healy-019699222/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/5seansean" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
      
      <div className="header">
        <img src="./assets/halfshot.png" alt="Background" className="header-bg" />
        <img src="./assets/foreground.png" alt="Foreground" className="foreground-person" />
        <div className="header-overlay"></div>
        
        <div className="fixed-name-container animate__animated animate__bounce">
          <h1>Sean Healy</h1>
        </div>
        
        <div className="info-panel">
          <div className="info-card">
            <p>Student at Marquette University Majoring in Computer Science / Minoring in Marketing expecting to graduate in 2027</p>
          </div>
          
          <div 
            className={`info-card ${expandedCard === 1 ? 'expanded' : ''}`}
            onClick={() => handleCardClick(1, 'https://coursera.org/share/54db8a982d378cdeb253fec8df076ddd')}
          >
            <div className="info-card-button-container">
              <div 
                className="info-card-image-btn" 
                style={{ backgroundImage: "url('assets/googlelogo.png')" }}
              ></div>
            </div>
            <p className="info-card-main-text">Aspiring software engineer and cybersecurity professional</p>
            <p className="info-card-alt-text">My Google / Coursera Cybersecurity Certificate</p>
          </div>

          <div 
            className={`info-card ${expandedCard === 2 ? 'expanded' : ''}`}
            onClick={() => handleCardClick(2, 'https://drive.google.com/drive/folders/1Gbjx4ZPOtYPgTNbAqOgvyilLNbcfseRf?usp=drive_link')}
          >
            <div className="info-card-button-container">
              <div 
                className="info-card-image-btn" 
                style={{ backgroundImage: "url('assets/drivelogo.png')" }}
              ></div>
            </div>
            <p className="info-card-main-text">Graphic Design Intern for the Marquette Athletics Department</p>
            <p className="info-card-alt-text">My Graphic Design Portfolio</p>
          </div>
        </div>
      </div>
      
      <div className="project-section">
        <a 
          href="https://5seansean.github.io/PacketBracket/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="image-half" 
          style={{ backgroundImage: "url('./assets/project1.png')" }}
        ></a>
        <div className="content-half">
          <h2 className="project-title">Packet Sniffer Visualizer</h2>
          <p className="project-description">
            Serves the function of aggregating and visualizing network traffic data.
            Utilizes Node.js, AMCHARTS, and two third-party APIs to provide real-time data visualization
            with sleek, interactive elements. Just upload a PCAP file, and the app will process the file, filter all the packets with 
            public IP addresses, make API calls to get GeoLocation data on those IPs, and then display the data on either a 3D or 2D map.
          </p>
          <a 
            href="https://github.com/5SeanSean/PacketBracket" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="content-btn"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      
      <div className="project-section">
        <a 
          href="https://5seansean.github.io/Lava-Game/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="image-half" 
          style={{ backgroundImage: "url('./assets/project2.png')" }}
        ></a>
        <div className="content-half">
          <h2 className="project-title">Volcano Game</h2>
          <p className="project-description">
            A fun personal project to help build my experience with game and web development.
            Definitely still in progress, but the game is playable and has a lot of potential.
            This project definitely solidified my JavaScript and Object-Based design skills. Please give it a try!
          </p>
          <a 
            href="https://github.com/5SeanSean/Lava-Game" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="content-btn"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);