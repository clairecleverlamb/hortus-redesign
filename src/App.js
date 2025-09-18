import './App.css';
import { useState, useEffect } from 'react';
import womanGardenerImg from './woman-gardener.png';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then default to 'dark'
    const savedTheme = localStorage.getItem('hortus-theme');
    return savedTheme || 'dark';
  });
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Apply theme to document
  useEffect(() => {
    const applyTheme = (currentTheme) => {
      if (currentTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
      } else {
        document.documentElement.setAttribute('data-theme', currentTheme);
      }
    };

    applyTheme(theme);
    localStorage.setItem('hortus-theme', theme);

    // Listen for system theme changes when in system mode
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'news':
        return <NewsPage />;
      case 'whitepaper':
        return <WhitepaperPage />;
      case 'platform':
        return <PlatformPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <>
      {/* Ultra Clean Hero Section */}
      <section className="ultra-hero">
        <div className="ultra-hero-container">
          <div className="ultra-hero-content">
            <div className="hero-text-container">
            <h1 className="hero-main-title">
              <strong>Consumer Reports</strong> for <span className="hero-accent-text">AI Tools</span>
            </h1>
            <p className="hero-description">
              We find the right app for your needs: chatbots, agents, ML platforms, and everything in between.
            </p>
            </div>
            <div className="ultra-hero-buttons">
              <button onClick={() => setCurrentPage('platform')} className="ultra-demo-btn">
                <span className="play-icon">▶</span>
                Learn More
              </button>
            </div>
          </div>
          <div className="ultra-hero-visual">
            <div className="ultra-hero-image">
              <video 
                src="/Hortus_logo_dynamic.mp4" 
                className="hero-logo-video" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Why choose Hortus?</h2>
          </div>
          <div className="features-grid">
            <div 
              className={`feature-card ${hoveredFeature === 'public' ? 'expanded' : ''}`}
              onClick={() => setHoveredFeature(hoveredFeature === 'public' ? null : 'public')}
            >
              <div className="feature-header">
                <h3>Public Interest First</h3>
                <span className="expand-icon">{hoveredFeature === 'public' ? '−' : '+'}</span>
              </div>
              {hoveredFeature === 'public' && (
                <div className="feature-details">
                  <p className="feature-expanded">→We rate AI systems for public benefit, not just corporate profits</p>
                </div>
              )}
            </div>
            <div 
              className={`feature-card ${hoveredFeature === 'testing' ? 'expanded' : ''}`}
              onClick={() => setHoveredFeature(hoveredFeature === 'testing' ? null : 'testing')}
            >
              <div className="feature-header">
                <h3>Best In Class Testing</h3>
                <span className="expand-icon">{hoveredFeature === 'testing' ? '−' : '+'}</span>
              </div>
              {hoveredFeature === 'testing' && (
                <div className="feature-details">
                  <p className="feature-expanded">→500+ AI tools evaluated on 300+ use cases with comprehensive metrics</p>
                </div>
              )}
            </div>
            <div 
              className={`feature-card ${hoveredFeature === 'impartial' ? 'expanded' : ''}`}
              onClick={() => setHoveredFeature(hoveredFeature === 'impartial' ? null : 'impartial')}
            >
              <div className="feature-header">
                <h3>Impartial Process</h3>
                <span className="expand-icon">{hoveredFeature === 'impartial' ? '−' : '+'}</span>
              </div>
              {hoveredFeature === 'impartial' && (
                <div className="feature-details">
                  <p className="feature-expanded">→Open methodologies and clear documentation you can trust and verify</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider between Features and Demo */}
      <div className="section-divider" aria-hidden="true">
        <span className="divider-line" />
        <span className="divider-dot" />
        <span className="divider-line" />
      </div>

      {/* Demo Video Section */}
      <section className="demo-video-section">
        <div className="demo-container">
          <div className="demo-content">
            <h2>See Hortus in Action</h2>
          </div>
          <div className="video-placeholder">
            <div className="video-frame">
              <div className="play-button">
                <span className="play-icon">▶</span>
              </div>
              <p className="video-note">Demo video will be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const NewsPage = () => (
    <>
      {/* News Hero Section */}
      <section className="news-hero">
        <div className="news-hero-container">
          <div className="news-hero-content">
            <h1 className="news-hero-title">News & Updates</h1>
            <p className="news-hero-subtitle">Stay informed about developments, partnerships, and industry insights</p>
          </div>
          {/* decorative background now handled via CSS pseudo-element; no emoji elements */}
        </div>
      </section>

      {/* News Timeline */}
      <section className="news-timeline">
        <div className="news-container">
          <div className="timeline-line"></div>
          
          <article className="news-item featured">
            <div className="news-date">
              <span className="date-circle"></span>
              <time>Monday February 24th</time>
            </div>
            <div className="news-card">
              <div className="news-badge">Latest</div>
              <h2 className="news-title">Hortus Launches Its Substack</h2>
              <p className="news-excerpt">
                We're excited to announce the launch of our official Substack publication, where we'll share in-depth insights, research findings, and thought leadership on AI ethics and public-powered artificial intelligence.
              </p>
              <div className="news-meta">
                <span className="news-category">Platform Launch</span>
                <a href="https://hortusai.substack.com/" target="_blank" rel="noopener noreferrer" className="news-link">
                  Read on Substack
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          </article>

          <article className="news-item">
            <div className="news-date">
              <span className="date-circle"></span>
              <time>Tuesday February 18th</time>
            </div>
            <div className="news-card">
              <h2 className="news-title">Hortus Joins New Responsible AI Partnership</h2>
              <p className="news-excerpt">
                We’re proud to join a coalition of public-interest organizations advancing transparent evaluation for AI systems.
              </p>
              <div className="news-meta">
                <span className="news-category">Partnership</span>
                <a href="#" className="news-link">
                  Learn more
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* Removed the 'Upcoming Research Publication' item as requested */}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">Get the latest Hortus AI news and insights delivered to you</p>
            <form className="newsletter-form">
              <div className="newsletter-input-group">
                <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );

  const WhitepaperPage = () => (
    <>
      {/* Whitepaper Hero Section */}
      <section className="whitepaper-hero" style={{
        background: theme === 'light' ? `
          radial-gradient(circle at 30% 20%, rgba(5, 150, 105, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)
        ` : `
          radial-gradient(circle at 20% 30%, rgba(125, 211, 160, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 70% 80%, rgba(45, 90, 61, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0f1419 0%, #1a3d2e 50%, #0f1419 100%)
        `
      }}>
        {/* Woman gardener background image */}
        <div style={{ 
          display: 'flex', 
          height: '100%', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Left half - Text content */}
          <div className="whitepaper-hero-container" style={{ 
            flex: '1', 
            textAlign: 'center', 
            paddingRight: '2rem',
            zIndex: 2 
          }}>
          <div className="whitepaper-content-centered">
            <div className="whitepaper-header">
              <h1 className="whitepaper-title">AI Of, By, and For The People</h1>
            </div>
            
            <div className="whitepaper-download-section">
              <a href="https://hortus.ai/wp-content/uploads/2025/02/HORTUS-WHITEPAPER.pdf" target="_blank" rel="noopener noreferrer" className="download-button-main">
                <span className="download-icon">📄</span>
                Download here
              </a>
            </div>
          </div>
          </div>
          
          {/* Right half - Image */}
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            paddingLeft: '2rem'
          }}>
            <img 
              src={womanGardenerImg} 
              alt="" 
              style={{
                width: '90%',
                maxWidth: '600px',
                height: 'auto',
                opacity: '0.7',
                pointerEvents: 'none',
                filter: 'brightness(1.05) contrast(1.05)'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );



  const PlatformPage = () => (
    <>
      {/* Platform Hero */}
      <section className="platform-hero">
        <div className="platform-hero-container">
          <h1 className="platform-title">Our Platform - Trellis</h1>
          <p className="platform-subtitle">
            Hortus is building the Consumer Reports for agentic AI, helping public-facing organizations compare, observe, and assess AI tools on use cases that matter to them.
          </p>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="platform-demo">
        <div className="platform-demo-container">
          <div className="demo-placeholder">
            <div className="demo-placeholder-content">
              <div className="demo-placeholder-icon">🎥</div>
              <h3>Platform Demo</h3>
              <p>Your screenshot/video will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="platform-details">
        <div className="platform-details-container">
          <div className="detail-section">
            <div className="detail-card">
              <h3>The Problem</h3>
              <p>
                The AI boom has flooded the market with tools—many with lofty promises, few that actually work. Businesses, schools, government teams, nonprofits, and everyday users lack a reliable source to cut through the hype and make informed choices.
              </p>
            </div>

            <div className="detail-card">
              <h3>Our Solution</h3>
              <p>
                Hortus Trellis is an independent, rigorous platform evaluating AI products for usability, safety, privacy, and performance. Think Consumer Reports, but for AI—built on ethical audits and real user feedback. Trellis includes:
              </p>
              <ul className="solution-features">
                <li>500+ AI tools</li>
                <li>300+ use cases</li>
                <li>Custom metrics for healthcare, education, transportation, and public safety</li>
              </ul>
            </div>

            <div className="detail-card">
              <h3>What's Unprecedented</h3>
              <p>
                Trellis is the first public interest assessment dashboard designed to cut through the jungle of AI platforms and providers. It has been built directly with Chief Data and Privacy Officers across the country who serve as advisors and beta testers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => setCurrentPage('home')}>
            <img src="/favicon.ico" alt="Hortus" className="company-logo" />
            <span className="logo-text">Hortus AI</span>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              <button onClick={() => setCurrentPage('home')} className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
              <button onClick={() => setCurrentPage('news')} className={`nav-button ${currentPage === 'news' ? 'active' : ''}`}>News</button>
              <button onClick={() => setCurrentPage('whitepaper')} className={`nav-button ${currentPage === 'whitepaper' ? 'active' : ''}`}>Whitepaper</button>
              <button onClick={() => setCurrentPage('platform')} className={`nav-button ${currentPage === 'platform' ? 'active' : ''}`}>Platform</button>
            </div>
            
            {/* Theme Switcher */}
            <div className="theme-switcher">
              <div className="theme-dropdown">
                <button className="theme-toggle">
                  <span className="theme-icon">
                    {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '⚙️'}
                  </span>
                  <span className="theme-arrow">▼</span>
                </button>
                <div className="theme-options">
                  <button 
                    onClick={() => handleThemeChange('light')} 
                    className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                  >
                    <span className="option-icon">☀️</span>
                    Light
                  </button>
                  <button 
                    onClick={() => handleThemeChange('dark')} 
                    className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                  >
                    <span className="option-icon">🌙</span>
                    Dark
                  </button>
                  <button 
                    onClick={() => handleThemeChange('system')} 
                    className={`theme-option ${theme === 'system' ? 'active' : ''}`}
                  >
                    <span className="option-icon">⚙️</span>
                    System
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {renderPage()}

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <img src="/favicon.ico" alt="Hortus" className="footer-logo-icon" />
              <span className="footer-brand-text">Hortus AI, Inc.</span>
            </div>
          </div>
          <div className="footer-cta">
            <button onClick={() => setCurrentPage('platform')} className="footer-cta-button">
              <span className="cta-text">Explore Our Platform</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
