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
  const [visibleNewsItems, setVisibleNewsItems] = useState(3);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  // News items data
  const newsItems = [
    {
      id: 1,
      date: "Monday February 24th",
      title: "Hortus Launches Its Substack",
      excerpt: "We're excited to announce the launch of our official Substack publication, where we'll share in-depth insights, research findings, and thought leadership on AI ethics and public-powered artificial intelligence.",
      category: "Platform Launch",
      badge: "Latest",
      featured: true,
      link: "https://hortusai.substack.com/",
      linkText: "Read on Substack"
    },
    {
      id: 2,
      date: "Tuesday February 18th",
      title: "Hortus Joins New Responsible AI Partnership",
      excerpt: "We're proud to join a coalition of public-interest organizations advancing transparent evaluation for AI systems.",
      category: "Partnership",
      badge: null,
      featured: false,
      link: null,
      linkText: "Learn more"
    },
    {
      id: 3,
      date: "Friday May 15th",
      title: "Alpha Testing Program Launches",
      excerpt: "We've begun our closed alpha testing with select partners to refine our AI evaluation platform based on real-world feedback.",
      category: "Product Development",
      badge: null,
      featured: false,
      link: null,
      linkText: "Learn more"
    },
    {
      id: 4,
      date: "Wednesday June 12th",
      title: "Hortus Attends AI+ Expo in Washington, DC",
      excerpt: "Our team showcased Hortus Trellis at the AI+ Expo, connecting with government leaders and industry experts about responsible AI evaluation.",
      category: "Event",
      badge: null,
      featured: false,
      link: null,
      linkText: "Event recap"
    },
    {
      id: 5,
      date: "Monday June 24th",
      title: "State of GovTech Conference in Arlington, VA",
      excerpt: "Hortus presented our vision for public-interest AI evaluation at the State of GovTech conference, engaging with government technology leaders.",
      category: "Event",
      badge: null,
      featured: false,
      link: null,
      linkText: "Learn more"
    },
    {
      id: 6,
      date: "Tuesday July 8th",
      title: "Hortus Relocates to Bay Area, California",
      excerpt: "We've moved our headquarters to the San Francisco Bay Area to be closer to the heart of AI innovation and our growing network of partners.",
      category: "Company News",
      badge: null,
      featured: false,
      link: null,
      linkText: "Read more"
    },
    {
      id: 7,
      date: "Thursday August 22nd",
      title: "Closed Beta Testing Begins",
      excerpt: "Following successful alpha testing, we've launched our closed beta program with expanded access for organizations ready to evaluate AI tools.",
      category: "Product Development",
      badge: null,
      featured: false,
      link: null,
      linkText: "Join beta"
    },
    {
      id: 8,
      date: "Monday September 16th",
      title: "Open Beta Now Available",
      excerpt: "Hortus Trellis is now available in open beta! Organizations can access our AI evaluation platform and start making informed decisions about AI tools.",
      category: "Product Launch",
      badge: null,
      featured: false,
      link: "https://trellis.hortus.ai",
      linkText: "Try open beta"
    },
    {
      id: 9,
      date: "Friday October 11th",
      title: "Presentation at Rethink AI Summit",
      excerpt: "Join us at the Rethink AI Summit where we'll present our latest research on public-interest AI evaluation and the future of responsible AI adoption.",
      category: "Upcoming Event",
      badge: "Upcoming",
      featured: false,
      upcoming: true,
      link: null,
      linkText: "Event details"
    },
    {
      id: 10,
      date: "Tuesday November 5th",
      title: "GovAI Summit Presentation",
      excerpt: "We'll be presenting at the GovAI Summit, sharing insights on how government agencies can effectively evaluate and implement AI solutions.",
      category: "Upcoming Event",
      badge: "Upcoming",
      featured: false,
      upcoming: true,
      link: null,
      linkText: "Learn more"
    },
    {
      id: 11,
      date: "Friday November 22nd",
      title: "EAAMO 2025 Conference",
      excerpt: "Hortus will present at EAAMO 2025 (Equity and Access in Algorithms, Mechanisms, and Optimization), discussing algorithmic fairness in AI evaluation.",
      category: "Upcoming Event",
      badge: "Upcoming",
      featured: false,
      upcoming: true,
      link: null,
      linkText: "Conference info"
    }
  ];

  const loadMoreNews = () => {
    setVisibleNewsItems(prev => Math.min(prev + 3, newsItems.length));
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
              <strong>The Consumer Reports</strong> for <span className="hero-accent-text">AI Tools</span>
            </h1>
            <p className="hero-description">
              Find the right app for your needs: chatbots, agents, ML platforms, and everything in between.
            </p>
            </div>
            <div className="ultra-hero-buttons">
              <button onClick={() => handlePageChange('platform')} className="ultra-demo-btn">
                <span className="play-icon">▶</span>
                Learn More
              </button>
            </div>
          </div>
          <div className="ultra-hero-visual">
            <div className="ultra-hero-image">
              {theme === 'light' ? (
                <img 
                  src="/lightmode_logo_nobg.png" 
                  className="hero-logo-image" 
                  alt="Hortus Logo"
                />
              ) : (
                <video 
                  src="/Hortus_logo_dynamic.mp4" 
                  className="hero-logo-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="partners-container">
          <h2 className="partners-title">OUR COLLABORATORS AND PARTNERS</h2>
          <div className="partners-carousel">
            <div className="partners-track">
              <div className="partner-logo">
                <img src="/vendors/chai.png" alt="CHAI" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/cityofb.png" alt="City of Boston" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/govai.png" alt="GovAI" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/newamerica.png" alt="New America" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/nyas.png" alt="New York Academy of Sciences" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="partner-logo">
                <img src="/vendors/chai.png" alt="CHAI" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/cityofb.png" alt="City of Boston" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/govai.png" alt="GovAI" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/newamerica.png" alt="New America" />
              </div>
              <div className="partner-logo">
                <img src="/vendors/nyas.png" alt="New York Academy of Sciences" />
              </div>
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
                  <p className="feature-expanded">We evaluate AI systems for public benefit, not just corporate profits</p>
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
                  <p className="feature-expanded">Comprehensive evaluation of 500+ AI tools across 300+ real-world use cases</p>
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
                  <p className="feature-expanded">Transparent methodologies and clear documentation you can trust and verify</p>
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
              <video 
                src="/final_demo.mp4" 
                className="demo-video" 
                controls 
                preload="metadata"
                poster=""
                playsInline
                webkit-playsinline="true"
              >
                Your browser does not support the video tag.
              </video>
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
          
          {newsItems.slice(0, visibleNewsItems).map((item, index) => (
            <article key={item.id} className={`news-item ${item.featured ? 'featured' : ''}`}>
              <div className="news-date">
                <span className={`date-circle ${item.upcoming ? 'upcoming-circle' : ''}`}></span>
                <time>{item.date}</time>
              </div>
              <div className="news-card">
                {item.badge && (
                  <div className={`news-badge ${item.upcoming ? 'upcoming' : ''}`}>
                    {item.badge}
                  </div>
                )}
                <h2 className="news-title">{item.title}</h2>
                <p className="news-excerpt">{item.excerpt}</p>
                <div className="news-meta">
                  <span className="news-category">{item.category}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                      {item.linkText}
                      <span className="link-arrow">→</span>
                    </a>
                  ) : (
                    <button className="news-link" onClick={() => console.log(`${item.title} details`)}>
                      {item.linkText}
                      <span className="link-arrow">→</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Load More Link */}
          {visibleNewsItems < newsItems.length && (
            <div className="load-more-container">
              <span onClick={loadMoreNews} className="load-more-link">
                Load More News
              </span>
            </div>
          )}
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
              <a href="https://drive.google.com/file/d/1DpcyFf4nDg-z4JXgFcZjXT9-Ukfp7JZB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-button-main">
                <span className="download-icon">📄</span>
                Read Whitepaper
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
          <h1 className="platform-title">Hortus Trellis</h1>
          <p className="platform-subtitle">
            Our platform helps businesses, nonprofits, and government teams match AI tools to use cases that matter to their constituencies.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">HOW IT WORKS</h2>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="platform-demo">
        <div className="platform-demo-container">
          <div className="demo-placeholder">
            <video 
              src="/final_demo.mp4" 
              className="platform-demo-video" 
              controls 
              preload="metadata"
              poster=""
              playsInline
              webkit-playsinline="true"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="platform-details">
        <div className="platform-details-container">
          <div className="detail-section">
            <div className="detail-card">
              <h3>The Problem</h3>
              <p>The AI boom has flooded the market with tools—many with lofty promises, few that actually work. Businesses, schools, government teams, nonprofits, and everyday users lack a reliable source to cut through the hype and make informed choices.
              </p>
            </div>

            <div className="detail-card">
              <h3>Our Solution</h3>
              <p>
                Hortus Trellis is an independent, rigorous platform evaluating AI products for usability, safety, privacy, and performance. Think Consumer Reports, but for AI—built on ethical audits and real user feedback. Trellis includes:
              </p>
              <ul className="solution-features">
                <li>Robust information on 500+ AI tools</li>
                <li>300+ use cases</li>
                <li>Custom metrics for healthcare, education, transportation, and public safety</li>
              </ul>
            </div>

            <div className="detail-card">
              <h3>What's Unprecedented</h3>
              <p>
              Trellis is the first public interest assessment dashboard designed to cut through the jungle of AI platforms and providers. It has been built directly with Chief Data and Privacy Officers across the country who serve as advisors and testers.
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
          <div className="nav-logo" onClick={() => handlePageChange('home')}>
            <img src="/favicon.ico" alt="Hortus" className="company-logo" />
            <span className="logo-text">Hortus AI</span>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              <button onClick={() => handlePageChange('home')} className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
              <button onClick={() => handlePageChange('news')} className={`nav-button ${currentPage === 'news' ? 'active' : ''}`}>News</button>
              <button onClick={() => handlePageChange('whitepaper')} className={`nav-button ${currentPage === 'whitepaper' ? 'active' : ''}`}>Whitepaper</button>
              <button onClick={() => handlePageChange('platform')} className={`nav-button ${currentPage === 'platform' ? 'active' : ''}`}>Platform</button>
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
            <button className="footer-cta-button" onClick={() => handlePageChange('platform')}>
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
