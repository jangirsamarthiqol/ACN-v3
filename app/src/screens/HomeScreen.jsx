import { Search, SlidersHorizontal, Bell, Heart, ChevronRight, Home, Building2, FileText, Sparkles } from 'lucide-react'
import './screens.css'

function HomeScreen({ onNavigate }) {
  return (
    <div className="screen home-screen">
      {/* Header */}
      <header className="app-bar">
        <div className="avatar" onClick={() => onNavigate('profile')} style={{cursor: 'pointer'}}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=agent" alt="Profile" />
          <span className="online-dot"></span>
        </div>
        <div className="header-tabs">
          <button className="tab active">ACN</button>
          <button className="tab" onClick={() => onNavigate('dashboard')}>My Business</button>
          <button className="tab" onClick={() => onNavigate('services')}>Services</button>
          <button className="tab">Edge</button>
        </div>
        <button className="icon-btn notification">
          <Bell size={22} />
          <span className="badge">3</span>
        </button>
      </header>

      {/* Search Section */}
      <section className="section search-section" onClick={() => onNavigate('search')}>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <span className="search-placeholder">Search properties or requirements...</span>
          <button className="filter-btn">
            <SlidersHorizontal size={18} />
          </button>
        </div>
        <div className="property-pills">
          <button className="pill active">Buy</button>
          <button className="pill">Rent</button>
          <button className="pill">Commercial</button>
          <button className="pill">Primary</button>
          <button className="pill">Land</button>
        </div>
      </section>

      {/* Banner Carousel */}
      <section className="section banner-section">
        <div className="banner-card gradient-blue-purple">
          <div className="banner-content">
            <span className="banner-badge">Featured</span>
            <h3>Premium Properties</h3>
            <p>Exclusive deals this week</p>
            <button className="banner-btn">Explore Now →</button>
          </div>
          <div className="banner-illustration">
            <Building2 size={64} strokeWidth={1} />
          </div>
        </div>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section">
        <div className="section-header">
          <h2>Quick Actions</h2>
          <button className="link-btn">View All</button>
        </div>
        <div className="quick-actions-grid">
          <div className="action-card red-accent" onClick={() => onNavigate('properties')}>
            <span className="action-icon">🗑️</span>
            <span className="action-count">12</span>
            <span className="action-label">To Delist</span>
          </div>
          <div className="action-card blue-accent" onClick={() => onNavigate('enquiries')}>
            <span className="action-icon">📧</span>
            <span className="action-count">8<span className="notif-dot"></span></span>
            <span className="action-label">New Enquiries</span>
          </div>
          <div className="action-card green-accent" onClick={() => onNavigate('search-results')}>
            <span className="action-icon">🔗</span>
            <span className="action-count">15</span>
            <span className="action-label">New Matches</span>
          </div>
          <div className="action-card orange-accent" onClick={() => onNavigate('dashboard')}>
            <span className="action-icon">📊</span>
            <span className="action-count">5</span>
            <span className="action-label">Active Deals</span>
          </div>
        </div>
      </section>

      {/* Recently Viewed Projects */}
      <section className="section">
        <div className="section-header">
          <h2>Recently Viewed Projects</h2>
          <button className="link-btn">View All <ChevronRight size={16} /></button>
        </div>
        <div className="horizontal-scroll">
          {[1, 2, 3].map(i => (
            <div key={i} className="project-card" onClick={() => onNavigate('property-detail')}>
              <div className="project-image">
                <img src={`https://images.unsplash.com/photo-156892436${i}138-f88be8ce9331?w=400&h=300&fit=crop`} alt="Property" />
                <span className="premium-badge">Premium</span>
                <button className="heart-btn"><Heart size={18} /></button>
              </div>
              <div className="project-info">
                <h4>Prestige Lakeside</h4>
                <p className="location">📍 Varthur, Bangalore</p>
                <p className="price">₹85L - ₹1.5Cr</p>
                <div className="project-tags">
                  <span className="tag">Resale</span>
                  <span className="tag">2,3 BHK</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Insights */}
      <section className="section">
        <div className="section-header">
          <h2>Market Insights</h2>
          <span className="powered-by"><Sparkles size={12} /> ACN Edge</span>
        </div>
        <div className="insight-card featured gradient-blue-purple">
          <span className="insight-badge">Featured</span>
          <h3>2026 Real Estate Market Outlook</h3>
          <p>Comprehensive analysis of trends and predictions</p>
        </div>
        <div className="insight-card">
          <div className="insight-image">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=150&fit=crop" alt="" />
            <span className="insight-tag trend">Trend</span>
          </div>
          <div className="insight-content">
            <h4>Bangalore Property Prices Rise 12%</h4>
            <p>Latest market data shows significant growth...</p>
            <span className="insight-meta">Jan 3, 2026 · 3 min read</span>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active">
          <Home size={22} />
          <span>Home</span>
        </button>
        <button className="nav-item" onClick={() => onNavigate('properties')}>
          <Building2 size={22} />
          <span>Properties</span>
        </button>
        <button className="nav-item" onClick={() => onNavigate('requirements')}>
          <FileText size={22} />
          <span>Requirements</span>
        </button>
        <button className="nav-item">
          <Heart size={22} />
          <span>Shortlist</span>
        </button>
      </nav>
    </div>
  )
}

export default HomeScreen
