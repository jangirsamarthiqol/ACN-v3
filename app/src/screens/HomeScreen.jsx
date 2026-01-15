import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, Bell, Heart, ChevronRight, Home, Building2, 
  FileText, Sparkles, MapPin, Tag, Key, Briefcase, Users, ChevronDown,
  AlertCircle, MessageCircle, Zap, TrendingUp
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
          
          <div className="modern-search-input-box" onClick={() => onNavigate('search', { context: activeTab })}>
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

        {/* Business Snapshot */}
        <section className="section">
          <div className="section-header">
            <h2>Business Snapshot</h2>
          </div>
          
          <div className="snapshot-container">
            {/* Critical Alert: Delist */}
            <div className="alert-card-modern" onClick={() => onNavigate('properties')}>
              <div className="alert-icon-area">
                <AlertCircle size={22} color="#DC2626" />
                <span className="pulse-ring"></span>
              </div>
              <div className="alert-content">
                <h4>Action Required</h4>
                <p><strong>12 properties</strong> are expiring this week. Renew now to maintain visibility.</p>
              </div>
              <ChevronRight size={18} color="#9CA3AF" />
            </div>

            {/* Growth Metrics Row */}
            <div className="growth-grid">
              
              {/* Enquiries - The Layout for Leads */}
              <div className="growth-card blue-theme" onClick={() => onNavigate('enquiries')}>
                <div className="growth-header">
                  <span className="growth-title">New Enquiries</span>
                  <div className="growth-icon"><MessageCircle size={18} /></div>
                </div>
                <div className="growth-main">
                  <span className="growth-value">8</span>
                  <span className="growth-delta">
                    <TrendingUp size={12} /> +2 today
                  </span>
                </div>
                <div className="growth-footer">
                  <div className="avatars-stack">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="" />
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="" />
                    <span className="more-count">+6</span>
                  </div>
                </div>
              </div>

              {/* Matches - The Layout for Opportunities */}
              <div className="growth-card green-theme" onClick={() => onNavigate('search-results')}>
                 <div className="growth-header">
                  <span className="growth-title">New Matches</span>
                  <div className="growth-icon"><Zap size={18} /></div>
                </div>
                <div className="growth-main">
                  <span className="growth-value">15</span>
                  <span className="growth-sub">Properties fit your requirements</span>
                </div>
                 <div className="growth-footer">
                   <span className="action-link">View Results</span>
                 </div>
              </div>

            </div>
          </div>
        </section>

        <style>{`
          .snapshot-container {
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          /* Alert Card */
          .alert-card-modern {
            background: #FEF2F2;
            border: 1px solid #FECACA;
            border-radius: 16px;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .alert-card-modern:active { transform: scale(0.98); }
          
          .alert-icon-area {
            position: relative;
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(220, 38, 38, 0.1);
          }
          .pulse-ring {
            position: absolute; inset: -4px;
            border: 2px solid #FCA5A5;
            border-radius: 50%;
            opacity: 0.5;
            animation: pulse-red 2s infinite;
          }
          @keyframes pulse-red { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.4); opacity: 0; } }
          
          .alert-content { flex: 1; }
          .alert-content h4 { font-size: 14px; font-weight: 700; color: #991B1B; margin-bottom: 2px; }
          .alert-content p { font-size: 12px; color: #7F1D1D; line-height: 1.4; }

          /* Growth Grid */
          .growth-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .growth-card {
            background: white;
            border-radius: 16px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 140px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            border: 1px solid rgba(0,0,0,0.04);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.2s;
          }
          .growth-card:active { transform: scale(0.98); }

          /* Blue Theme (Enquiries) */
          .growth-card.blue-theme { background: linear-gradient(145deg, #ffffff, #F0F9FF); border-bottom: 3px solid #0EA5E9; }
          .growth-card.blue-theme .growth-icon { background: #E0F2FE; color: #0284C7; }
          .growth-card.blue-theme .growth-value { color: #0C4A6E; }

          /* Green Theme (Matches) */
          .growth-card.green-theme { background: linear-gradient(145deg, #ffffff, #F0FDF4); border-bottom: 3px solid #22C55E; }
          .growth-card.green-theme .growth-icon { background: #DCFCE7; color: #16A34A; }
          .growth-card.green-theme .growth-value { color: #14532D; }

          .growth-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
          .growth-title { font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; }
          .growth-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }

          .growth-main { flex: 1; display: flex; flex-direction: column; justify-content: center; }
          .growth-value { font-size: 32px; font-weight: 800; line-height: 1; letter-spacing: -1px; }
          .growth-delta { font-size: 11px; color: #16A34A; display: flex; align-items: center; gap: 2px; font-weight: 600; margin-top: 4px; }
          .growth-sub { font-size: 11px; color: #64748B; margin-top: 4px; line-height: 1.3; }

          .growth-footer { margin-top: auto; }
          .avatars-stack { display: flex; align-items: center; }
          .avatars-stack img { width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; margin-right: -8px; }
          .avatars-stack .more-count { width: 24px; height: 24px; border-radius: 50%; background: #F1F5F9; border: 2px solid white; font-size: 9px; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #64748B; z-index: 2; margin-left: 8px; }

          .action-link { font-size: 11px; font-weight: 700; color: #16A34A; text-decoration: underline; }
        `}</style>

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
