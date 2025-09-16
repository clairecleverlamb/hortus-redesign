import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then default to 'dark'
    const savedTheme = localStorage.getItem('hortus-theme');
    return savedTheme || 'dark';
  });

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
                The Consumer Reports<br />
                <span className="hero-accent-text">for AI.</span>
              </h1>
              <p className="hero-description">
                We help organizations make informed decisions about chatbots, agents, ML tools, and everything in between.
              </p>
            </div>
            <div className="ultra-hero-buttons">
              <button onClick={() => setCurrentPage('platform')} className="ultra-demo-btn">
                <span className="play-icon">▶</span>
                Live Demo
              </button>
            </div>
          </div>
          <div className="ultra-hero-visual">
            <div className="ultra-hero-image">
              <video 
                src="/H.mp4" 
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
            <p>Our evaluations are based on transparency, rigor, and public benefit.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Public Interest First</h3>
              <p>AI systems designed with public input and oversight, not just corporate profits</p>
            </div>
            <div className="feature-card">
              <h3>Best In Class Testing</h3>
              <p>500+ AI tools evaluated across 300+ use cases with comprehensive metrics</p>
            </div>
            <div className="feature-card">
              <h3>Impartial Process</h3>
              <p>Open methodologies and clear documentation you can trust and verify</p>
            </div>
          </div>
        </div>
      </section>


      {/* Demo Video Section */}
      <section className="demo-video-section">
        <div className="demo-container">
          <div className="demo-content">
            <h2>See Hortus in Action</h2>
            <p>Watch how we're making AI evaluation transparent and accessible for everyone.</p>
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
            <h1 className="news-hero-title">Latest News & Updates</h1>
            <p className="news-hero-subtitle">Stay informed about Hortus AI developments, partnerships, and industry insights</p>
          </div>
          <div className="news-hero-decoration">
            <div className="news-floating-element">📰</div>
            <div className="news-floating-element">🚀</div>
            <div className="news-floating-element">💡</div>
          </div>
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
              <h2 className="news-title">Mission Statement & Partnership Announcement</h2>
              <p className="news-excerpt">
                Hortus publishes a comprehensive press release announcing its mission, public partnerships, and whitepaper detailing our approach to democratizing AI development and ensuring ethical implementation across industries.
              </p>
              <div className="news-meta">
                <span className="news-category">Press Release</span>
                <button className="news-link" onClick={() => alert('Press release coming soon!')}>
                  Read Full Release
                  <span className="link-arrow">→</span>
                </button>
              </div>
            </div>
          </article>

          <article className="news-item">
            <div className="news-date">
              <span className="date-circle"></span>
              <time>Monday January 27th</time>
            </div>
            <div className="news-card">
              <h2 className="news-title">Featured on GovAI's Substack</h2>
              <p className="news-excerpt">
                Hortus was prominently featured in GovAI's latest Substack publication, highlighting our innovative approach to AI governance and our contributions to the public discourse on responsible AI development.
              </p>
              <div className="news-meta">
                <span className="news-category">Media Coverage</span>
                <button className="news-link" onClick={() => alert('GovAI article link coming soon!')}>
                  View Article
                  <span className="link-arrow">→</span>
                </button>
              </div>
            </div>
          </article>

          <article className="news-item upcoming">
            <div className="news-date">
              <span className="date-circle upcoming-circle"></span>
              <time>Coming Soon</time>
            </div>
            <div className="news-card upcoming-card">
              <h2 className="news-title">Upcoming Research Publication</h2>
              <p className="news-excerpt">
                We're preparing to release groundbreaking research on AI transparency frameworks and their implementation in real-world scenarios. Stay tuned for detailed findings and practical applications.
              </p>
              <div className="news-meta">
                <span className="news-category">Research</span>
                <span className="news-status">In Progress</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">Get the latest Hortus AI news and insights delivered to your inbox</p>
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
      <section className="whitepaper-hero">
        <div className="whitepaper-hero-container">
          <div className="whitepaper-content-centered">
            <div className="whitepaper-header">
              <h1 className="whitepaper-title">Our Driving Thesis</h1>
              <p className="whitepaper-tagline">AI of, by, and for the People</p>
            </div>
            
            <div className="whitepaper-download-section">
              <a href="https://hortus.ai/wp-content/uploads/2025/02/HORTUS-WHITEPAPER.pdf" target="_blank" rel="noopener noreferrer" className="download-button-main">
                <span className="download-icon">📄</span>
                Download here
              </a>
            </div>
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
              <span className="footer-brand-text">Hortus AI</span>
            </div>
            <p className="footer-description">Integrating AI, by and for the people.</p>
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
