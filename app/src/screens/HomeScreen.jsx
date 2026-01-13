import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, Bell, Heart, ChevronRight, Home, Building2, 
  FileText, Sparkles, MapPin, Tag, Key, Briefcase, Users, ChevronDown 
} from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
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
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="ACN" />

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

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>
        {/* Banner Carousel */}
        <section className="section banner-section">
          <div className="banner-carousel-container" style={{overflowX: 'auto', display: 'flex', scrollSnapType: 'x mandatory', gap: 16, paddingBottom: 16}}>
            {/* Banner 1 */}
            <div className="banner-card gradient-blue-purple" style={{minWidth: '100%', scrollSnapAlign: 'center'}}>
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
            
            {/* Banner 2 */}
            <div className="banner-card gradient-green-teal" style={{minWidth: '100%', background: 'linear-gradient(135deg, #11998e, #38ef7d)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>New Year Offer</span>
                <h3 style={{color: 'white'}}>Zero Brokerage</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>On select new launch projects</p>
                <button className="banner-btn" style={{background: 'white', color:'#11998e'}}>View Projects →</button>
              </div>
              <div className="banner-illustration">
                <Sparkles size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* Banner 3 */}
            <div className="banner-card gradient-orange-red" style={{minWidth: '100%', background: 'linear-gradient(135deg, #FF512F, #DD2476)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>ACN Edge</span>
                <h3 style={{color: 'white'}}>Get Verified Leads</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Boost your business 2x faster</p>
                <button className="banner-btn" style={{background: 'white', color:'#DD2476'}}>Try Free →</button>
              </div>
              <div className="banner-illustration">
                <Users size={64} strokeWidth={1} color="white" />
              </div>
            </div>
          </div>
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        {/* Overview */}
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
      </div>

      {/* Global Footer */}
      <GlobalBottomNav onNavigate={onNavigate} activeTab="home" context="home" />
    </div>
  )
}

export default HomeScreen
