import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, Bell, Heart, ChevronRight, Home, Building2, 
  FileText, Sparkles, MapPin, Tag, Key, Briefcase, Users, ChevronDown 
} from 'lucide-react'
import './screens.css'

function HomeScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Buy');

  const searchTabs = [
    { id: 'Buy', icon: Tag, label: 'Buy' },
    { id: 'Rent', icon: Key, label: 'Rent' },
    { id: 'Commercial', icon: Briefcase, label: 'Commercial' },
    { id: 'Project', icon: Building2, label: 'Project', badge: 'NEW' },
  ];

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

      {/* Modern Search Section */}
      <div className="search-container-modern">
        <div className="search-tabs-scroll">
          {searchTabs.map(tab => (
            <div 
              key={tab.id}
              className={`search-tab-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.badge && <span className="new-badge">{tab.badge}</span>}
              <tab.icon size={24} className="search-tab-icon" strokeWidth={1.5} />
              <span className="search-tab-label">{tab.label}</span>
            </div>
          ))}
        </div>
        
        <div className="search-panel-modern" style={{
          borderTopLeftRadius: activeTab === 'Buy' ? '0' : '24px' // Dynamic corner adjustment
        }}>
          
          <div className="modern-search-input-box" onClick={() => onNavigate('search')}>
            <input 
              type="text" 
              className="modern-input" 
              placeholder="Search city, locality, landmark..." 
              readOnly 
            />
            <button className="search-btn-large">
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>

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

      {/* Overview (Renamed from Quick Actions) */}
      <section className="section">
        <div className="section-header">
          <h2>Overview</h2>
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

      {/* New Launch Projects */}
      <section className="section">
        <div className="section-header">
          <h2>New Launch Projects</h2>
          <button className="link-btn">View All <ChevronRight size={16} /></button>
        </div>
        <div className="horizontal-scroll">
          {[1, 2, 3].map(i => (
            <div key={i} className="project-card" onClick={() => onNavigate('property-detail')}>
              <div className="project-image">
                <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop`} alt="New Launch" />
                <span className="premium-badge" style={{background: 'linear-gradient(135deg, #1b4d3e, #064e3b)', color: 'white'}}>New Launch</span>
                <button className="heart-btn"><Heart size={18} /></button>
              </div>
              <div className="project-info">
                <h4>Sobha Royal Crest</h4>
                <p className="location">📍 Banashankari, Bangalore</p>
                <p className="price">₹1.8 Cr - ₹2.5 Cr</p>
                <div className="project-tags">
                  <span className="tag">Luxury</span>
                  <span className="tag">3,4 BHK</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Viewed Properties */}
      <section className="section">
        <div className="section-header">
          <h2>Recently Viewed Properties</h2>
          <button className="link-btn">View All <ChevronRight size={16} /></button>
        </div>
        <div className="horizontal-scroll">
          {[1, 2, 3].map(i => (
            <div key={i} className="project-card" onClick={() => onNavigate('property-detail')}>
              <div className="project-image">
                <img src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop`} alt="Property" />
                <button className="heart-btn"><Heart size={18} /></button>
              </div>
              <div className="project-info">
                <h4>3 BHK Apartment</h4>
                <p className="location">📍 Whitefield, Bangalore</p>
                <p className="price">₹1.25 Cr</p>
                <div className="project-tags">
                  <span className="tag">Resale</span>
                  <span className="tag">Furnished</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Viewed Requirements */}
      <section className="section">
        <div className="section-header">
          <h2>Recently Viewed Requirements</h2>
          <button className="link-btn">View All <ChevronRight size={16} /></button>
        </div>
        <div className="horizontal-scroll">
          {[1, 2, 3].map(i => (
            <div key={i} className="requirement-card" onClick={() => onNavigate('requirements')}>
              <span className="req-tag">Buy</span>
              <h4>3 BHK in Indiranagar</h4>
              <p><MapPin size={12} style={{display: 'inline', marginRight: 4}} /> Indiranagar, Bangalore</p>
              <p style={{fontWeight: 600, color: 'var(--primary-color)'}}>Budget: ₹2.5 Cr</p>
              <p style={{fontSize: 11, color: '#999'}}>Viewed 2 hours ago</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Viewed Projects (Original) */}
      <section className="section">
        <div className="section-header">
          <h2>Previously Viewed Projects</h2>
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
