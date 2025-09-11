import './App.css';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'news':
        return <NewsPage />;
      case 'whitepaper':
        return <WhitepaperPage />;
      case 'blog':
        return <BlogPage />;
      case 'open-roles':
        return <OpenRolesPage />;
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
            <h1 className="ultra-hero-title">
              Evaluate AI tools,<br />
              <span className="ultra-highlight">increase understanding.</span>
            </h1>
            <p className="ultra-hero-subtitle">
              The Consumer Reports for AI. We help organizations make informed decisions about AI tools.
            </p>
            <div className="ultra-hero-buttons">
              <button onClick={() => setCurrentPage('platform')} className="ultra-demo-btn">
                <span className="play-icon">▶</span>
                Live Demo
              </button>
            </div>
          </div>
          <div className="ultra-hero-visual">
            <div className="ultra-hero-image">
              <div className="hero-figure">
                <div className="figure-silhouette">
                  <div className="silhouette-head"></div>
                  <div className="silhouette-body"></div>
                </div>
                <div className="figure-device">
                  <div className="device-frame">
                    <div className="device-screen">
                      <div className="screen-line"></div>
                      <div className="screen-line short"></div>
                      <div className="screen-line medium"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="image-note">Image will replace this illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Why choose Hortus?</h2>
            <p>We make AI evaluation transparent, rigorous, and focused on public benefit</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Public Interest First</h3>
              <p>AI systems designed with public input and oversight, not just corporate profits</p>
            </div>
            <div className="feature-card">
              <h3>Rigorous Testing</h3>
              <p>500+ AI tools evaluated across 300+ use cases with comprehensive metrics</p>
            </div>
            <div className="feature-card">
              <h3>Transparent Process</h3>
              <p>Open methodologies and clear documentation you can trust and verify</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="marketplace">
        <div className="marketplace-container">
          <div className="marketplace-left">
            <div className="marketplace-illustration">
              <div className="illustration-card">
                <div className="card-icons">
                  <span className="shield-icon">🛡️</span>
                  <span className="brain-icon">🧠</span>
                  <span className="building-icon">🏛️</span>
                </div>
                <div className="card-content">
                  <div className="content-lines"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="marketplace-right">
            <h2 className="marketplace-title">
              The marketplace for<br/>
              <strong>safe and ethical AI</strong><br/>
              adoption
            </h2>
            <button className="get-started-btn">Get Started →</button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services">
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">📋</div>
            <h3>AI Registry</h3>
            <p>Confidently select trustworthy AI solutions using our curated directory of AI tools and models designed to provide users with transparent and reliable information.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📄</div>
            <h3>Standard FactSheets</h3>
            <p>Browse living documents that provide detailed information about AI tools, including their capabilities, limitations, and ethical considerations.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🔍</div>
            <h3>Quality Control</h3>
            <p>Access detailed performance benchmarks to make informed decisions about AI partnerships and implementations.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Want to see if Hortus can help you?</h2>
          <p className="contact-subtitle">Fill out the form below and we'll get in touch.</p>
          
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="First" required />
              </div>
              <div className="form-group">
                <label style={{opacity: 0, pointerEvents: 'none'}}>Last *</label>
                <input type="text" placeholder="Last" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required />
            </div>
            
            <div className="form-group">
              <label>Company/Organization Affiliation</label>
              <input type="text" />
            </div>
            
            <div className="form-group">
              <label>How did you hear about Hortus? *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Additional comments or message:</label>
              <textarea rows="4"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
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
          <div className="whitepaper-content-area">
            <div className="whitepaper-header">
              <h1 className="whitepaper-title">Our Driving Thesis</h1>
              <p className="whitepaper-tagline">AI of, by, and for the People</p>
            </div>
            
            <div className="whitepaper-main-content">
              <div className="content-section">
                <h2>What are we working towards?</h2>
                <p>
                  Hortus AI held a workshop on Reinforcement Learning from Human Feedback (RLHF) 
                  with the New York Academy of Sciences in Spring 2024. Afterwards, we co-authored 
                  a paper on our findings and the driving ideology behind Public and Responsible AI 
                  through Societal Empowerment (PRAISE).
                </p>
                <p>
                  There's no better way to get to know us than through our foundational research and methodology.
                </p>
              </div>
            </div>
          </div>
          
          <div className="whitepaper-sidebar">
            <div className="download-section">
              <h3>Download to learn more</h3>
              <p>Access our complete research paper and methodology documentation.</p>
              <a href="https://hortus.ai/wp-content/uploads/2025/02/HORTUS-WHITEPAPER.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
                <span className="download-icon">📄</span>
                Download Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const BlogPage = () => (
    <>
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-container">
          <div className="blog-hero-content">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-description">
              Insights on AI governance, public empowerment, and building technology that serves society
            </p>
          </div>
        </div>
      </section>

      {/* Blog Main Content */}
      <section className="blog-main">
        <div className="blog-main-container">
          <div className="blog-featured-card">
            <div className="featured-icon">📖</div>
            <h2>Read Our Latest Insights</h2>
            <p>
              We publish in-depth articles about AI alignment, public policy, and our PRAISE framework 
              for responsible AI development. Join our community of researchers, policymakers, and advocates.
            </p>
            <a href="https://hortusai.substack.com/" target="_blank" rel="noopener noreferrer" className="featured-button">
              <span className="button-icon">✉️</span>
              Visit Our Substack
            </a>
          </div>
          
          <div className="blog-info-grid">
            <div className="info-card">
              <h3>Research</h3>
              <p>Deep dives into AI alignment and public empowerment</p>
            </div>
            <div className="info-card">
              <h3>Policy</h3>
              <p>Analysis of AI governance and regulatory frameworks</p>
            </div>
            <div className="info-card">
              <h3>Community</h3>
              <p>Building bridges between AI and society</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const OpenRolesPage = () => (
    <>
      {/* Open Roles Hero */}
      <section className="simple-hero">
        <div className="simple-hero-container">
          <h1 className="simple-hero-title">Open roles</h1>
          <p className="simple-hero-subtitle">
            Join our mission to build AI tools that empower ordinary people
          </p>
        </div>
      </section>

      {/* Roles Content */}
      <section className="roles-content">
        <div className="roles-container">
          <div className="role-card">
            <div className="role-header">
              <h2>Software Engineer</h2>
              <p className="role-type">Fall 2025 Internship</p>
            </div>
            <div className="role-description">
              <p>Support backend development of our AI marketplace as we prepare for public launch. Work on data infrastructure and application hosting.</p>
              <div className="role-details">
                <span className="detail-item">Oakland, CA</span>
                <span className="detail-item">Up to 30 hrs/week</span>
                <span className="detail-item">Python, Django, PostgreSQL</span>
              </div>
            </div>
            <a href="https://hortus.ai/wp-content/uploads/2025/07/Fall-2025-internship_SE.pdf" target="_blank" rel="noopener noreferrer" className="role-button">
              View Details & Apply
            </a>
          </div>

          <div className="role-card">
            <div className="role-header">
              <h2>UI / UX Developer</h2>
              <p className="role-type">Fall 2025 Internship</p>
            </div>
            <div className="role-description">
              <p>Support frontend development of our marketplace. Construct user journeys and design iterations following our closed beta.</p>
              <div className="role-details">
                <span className="detail-item">Oakland, CA</span>
                <span className="detail-item">Up to 30 hrs/week</span>
                <span className="detail-item">React, Frontend</span>
              </div>
            </div>
            <a href="https://hortus.ai/wp-content/uploads/2025/07/Fall-2025-internship_UI_UX.pdf" target="_blank" rel="noopener noreferrer" className="role-button">
              View Details & Apply
            </a>
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
          <h1 className="platform-title">Our Platform</h1>
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
                Hortus Trails is an independent, rigorous platform evaluating AI products for usability, safety, privacy, and performance. Think Consumer Reports, but for AI—built on ethical audits and real user feedback. Trails includes:
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
                Trails is the first public interest assessment dashboard designed to cut through the jungle of AI platforms and providers. It has been built directly with Chief Data and Privacy Officers across the country who serve as advisors and beta testers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform CTA */}
      <section className="platform-cta">
        <div className="platform-cta-container">
          <h2>Want to know more?</h2>
          <p>Learn more about our background and mission</p>
          <button onClick={() => setCurrentPage('whitepaper')} className="cta-link-button">
            Read Our Whitepaper
          </button>
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
            <span className="logo-icon">🌿</span>
            <span className="logo-text">Hortus</span>
          </div>
          <div className="nav-links">
            <button onClick={() => setCurrentPage('home')} className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('news')} className={`nav-button ${currentPage === 'news' ? 'active' : ''}`}>News</button>
            <button onClick={() => setCurrentPage('whitepaper')} className={`nav-button ${currentPage === 'whitepaper' ? 'active' : ''}`}>Whitepaper</button>
            <button onClick={() => setCurrentPage('blog')} className={`nav-button ${currentPage === 'blog' ? 'active' : ''}`}>Blog</button>
            <button onClick={() => setCurrentPage('open-roles')} className={`nav-button ${currentPage === 'open-roles' ? 'active' : ''}`}>Open roles</button>
            <button onClick={() => setCurrentPage('platform')} className={`nav-button ${currentPage === 'platform' ? 'active' : ''}`}>Our Platform</button>
          </div>
        </div>
      </nav>

      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-icon">🌿</span>
            <span className="footer-title">Hortus AI</span>
          </div>
          <p className="footer-tagline">Integrating AI, by and for the people.</p>
          <a href="#projects" className="footer-link">Our Projects</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
