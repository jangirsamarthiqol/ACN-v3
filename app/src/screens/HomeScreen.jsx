import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, Bell, Heart, ChevronRight, Home, Building2, 
  FileText, Sparkles, MapPin, Tag, Key, Briefcase, Users, ChevronDown,
  AlertCircle, MessageCircle, Zap, TrendingUp, Crown, Video, Calendar, Star, PlusCircle
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
          
          <div className="modern-search-input-box" onClick={() => onNavigate('global-search', { context: activeTab })}>
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
            
            {/* 1. Add Inventory */}
            <div 
              className="banner-card" 
              style={{minWidth: '100%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', scrollSnapAlign: 'center'}}
              onClick={() => onNavigate('add-property')}
            >
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Grow Business</span>
                <h3 style={{color: 'white'}}>List New Inventory</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Reach 10k+ verified buyers instantly</p>
                <button className="banner-btn" style={{background: 'white', color:'#6366f1'}}>List Property <PlusCircle size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Building2 size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 2. Add Requirement */}
            <div 
              className="banner-card" 
              style={{minWidth: '100%', background: 'linear-gradient(135deg, #ec4899, #d946ef)', scrollSnapAlign: 'center'}}
              onClick={() => onNavigate('add-requirement')}
            >
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Client Needs</span>
                <h3 style={{color: 'white'}}>Post Requirement</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Get matched with top properties</p>
                <button className="banner-btn" style={{background: 'white', color:'#ec4899'}}>Add Request <FileText size={14} /></button>
              </div>
              <div className="banner-illustration">
                <FileText size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 3. Agent Spotlight */}
            <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Agent Spotlight</span>
                <h3 style={{color: 'white'}}>Star Performer</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Detailed insights from top agents</p>
                <button className="banner-btn" style={{background: 'white', color:'#d97706'}}>Read Story <Star size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Star size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 4. Special Inventory Announcement */}
            <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #10b981, #059669)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Just Launched</span>
                <h3 style={{color: 'white'}}>Prestige City Phase 2</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Exclusive pre-launch allocation</p>
                <button className="banner-btn" style={{background: 'white', color:'#059669'}}>View Details <Sparkles size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Sparkles size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 5. Upgrade to Premium */}
            <div 
              className="banner-card" 
              style={{minWidth: '100%', background: 'linear-gradient(135deg, #1e293b, #0f172a)', scrollSnapAlign: 'center'}}
              onClick={() => onNavigate('subscription')}
            >
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', color: 'black', fontWeight: 'bold'}}>ACN Gold</span>
                <h3 style={{color: '#fcd34d'}}>Go Premium</h3>
                <p style={{color: 'rgba(255,255,255,0.8)'}}>Get unlimited leads & priority support</p>
                <button className="banner-btn" style={{background: '#fcd34d', color:'black'}}>Upgrade Now <Crown size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Crown size={64} strokeWidth={1} color="#fcd34d" />
              </div>
            </div>

            {/* 6. Upgrade to Trial (Micro-market) */}
            <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Limited Time</span>
                <h3 style={{color: 'white'}}>Free 7-Day Trial</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Experience Micro-Market Intelligence</p>
                <button className="banner-btn" style={{background: 'white', color:'#2563eb'}}>Start Trial <Zap size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Zap size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 7. Weekly Webinar */}
            <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Live Event</span>
                <h3 style={{color: 'white'}}>Weekly Masterclass</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Market Trends 2026 with Experts</p>
                <button className="banner-btn" style={{background: 'white', color:'#7c3aed'}}>Register Free <Video size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Video size={64} strokeWidth={1} color="white" />
              </div>
            </div>

            {/* 8. Agent Meetup */}
            <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #f97316, #ea580c)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Community</span>
                <h3 style={{color: 'white'}}>Bangalore Agents Meetup</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Network with top 100 realtors</p>
                <button className="banner-btn" style={{background: 'white', color:'#ea580c'}}>RSVP Now <Users size={14} /></button>
              </div>
              <div className="banner-illustration">
                <Users size={64} strokeWidth={1} color="white" />
              </div>
            </div>

             {/* 9. Referral Banner */}
             <div className="banner-card" style={{minWidth: '100%', background: 'linear-gradient(135deg, #be185d, #9d174d)', scrollSnapAlign: 'center'}}>
              <div className="banner-content">
                <span className="banner-badge" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Rewards</span>
                <h3 style={{color: 'white'}}>Refer & Earn</h3>
                <p style={{color: 'rgba(255,255,255,0.9)'}}>Get ₹5000 for every successful referral</p>
                <button className="banner-btn" style={{background: 'white', color:'#be185d'}}>Invite Friends <Users size={14} /></button>
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
                <p><strong>12 properties</strong> are expiring this week. Renew now.</p>
              </div>
              <ChevronRight size={18} color="#9CA3AF" />
            </div>

            {/* Growth Metrics Grid */}
            <div className="simple-stats-grid">
              
              {/* 1. Live Inventory */}
              <div className="simple-stat-card" onClick={() => onNavigate('dashboard')}>
                <div className="stat-icon-box bg-purple-50 text-purple-600">
                  <Building2 size={20} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Live Inventory</span>
                  <div className="stat-main">
                    <span className="stat-value">48</span>
                    <span className="stat-delta positive">↑ 2</span>
                  </div>
                </div>
              </div>

              {/* 2. Active Requirements */}
              <div className="simple-stat-card" onClick={() => onNavigate('my-requirements')}>
                <div className="stat-icon-box bg-pink-50 text-pink-600">
                  <FileText size={20} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Active Reqs</span>
                  <div className="stat-main">
                    <span className="stat-value">12</span>
                    <span className="stat-delta positive">↑ 3</span>
                  </div>
                </div>
              </div>

              {/* 3. New Enquiries */}
              <div className="simple-stat-card" onClick={() => onNavigate('enquiries')}>
                <div className="stat-icon-box bg-blue-50 text-blue-600">
                  <MessageCircle size={20} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">New Enquiries</span>
                  <div className="stat-main">
                    <span className="stat-value">8</span>
                    <span className="stat-delta positive">↑ 5</span>
                  </div>
                </div>
              </div>

              {/* 4. New Matches */}
              <div className="simple-stat-card" onClick={() => onNavigate('requirements-marketplace')}>
                <div className="stat-icon-box bg-green-50 text-green-600">
                  <Zap size={20} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">New Matches</span>
                  <div className="stat-main">
                    <span className="stat-value">15</span>
                    <span className="stat-delta text-text-tertiary text-[10px] font-normal">--</span>
                  </div>
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
            background: white;
            border: 1px solid #FFE4E6;
            border-radius: 12px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            box-shadow: 0 1px 2px rgba(0,0,0,0.02);
            transition: all 0.2s;
          }
          .alert-card-modern:active { transform: scale(0.99); background: #FFF1F2; }
          
          .alert-icon-area {
            position: relative;
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            background: #FEF2F2;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .pulse-ring {
            position: absolute; inset: -2px;
            border: 1.5px solid #FECACA;
            border-radius: 10px;
            opacity: 0.5;
            animation: pulse-red 2s infinite;
          }
          @keyframes pulse-red { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.3); opacity: 0; } }
          
          .alert-content { flex: 1; }
          .alert-content h4 { font-size: 13px; font-weight: 700; color: #991B1B; margin-bottom: 2px; }
          .alert-content p { font-size: 11px; color: #7F1D1D; line-height: 1.4; }

          /* Simple 2x2 Grid */
          .simple-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          
          .simple-stat-card {
            background: white;
            border: 1px solid #F1F5F9;
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
            cursor: pointer;
            transition: all 0.2s;
          }
          .simple-stat-card:active { transform: scale(0.98); background: #F8FAFC; }

          .stat-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .stat-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          
          .stat-label {
            font-size: 11px;
            font-weight: 600;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .stat-main {
            display: flex;
            align-items: baseline;
            gap: 6px;
          }
          
          .stat-value {
            font-size: 24px;
            font-weight: 800;
            color: #1E293B;
            line-height: 1;
          }
          
          .stat-delta {
            font-size: 11px;
            font-weight: 700;
          }
          .stat-delta.positive { color: #16A34A; }
          .stat-delta.negative { color: #DC2626; }
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
              <div key={i} className="requirement-card" onClick={() => onNavigate('requirements-marketplace')}>
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
