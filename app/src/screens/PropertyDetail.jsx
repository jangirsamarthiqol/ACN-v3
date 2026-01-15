import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Heart, Phone, MessageCircle, Mail, Calendar, 
  MapPin, Check, Home, Square, Bath, Car, ChevronRight, Star, Clock, 
  ShieldCheck, Info, FileText as FileTypePdf, Link as LinkIcon, MoreHorizontal
} from 'lucide-react';
import './screens.css';

function PropertyDetail({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [includeBranding, setIncludeBranding] = useState(true);

  const features = [
    { icon: Home, label: '3 BHK', value: 'Apartment' },
    { icon: Square, label: '1,450', value: 'Sq. Ft.' },
    { icon: Bath, label: '2', value: 'Bathrooms' },
    { icon: Share2, label: '2', value: 'Balconies' }, // Using Share2 as placeholder for Balcony if needed or switch icon
    { icon: Car, label: 'Covered', value: 'Parking' },
    { icon: Calendar, label: 'Ready', value: 'Possession' }
  ];

  const amenities = [
    'Club House', 'Swimming Pool', 'Gymnasium', 'Power Backup', 
    '24x7 Security', 'Children\'s Play Area', 'Landscaped Gardens', 'Jogging Track'
  ];

  return (
    <div className="screen property-detail-new">
      {/* Immersive Image Gallery */}
      <div className="hero-gallery">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-e36cb06c37f6?auto=format&fit=crop&q=80&w=600&h=400" 
          alt="Property Hero" 
          className="hero-image"
        />
        <div className="hero-overlay-top">
          <button className="icon-btn-glass" onClick={() => onNavigate('home')}>
            <ArrowLeft size={20} color="white" />
          </button>
          <div className="hero-actions">
            <button className="icon-btn-glass" onClick={() => setShowShareModal(true)}>
              <Share2 size={20} color="white" />
            </button>
            <button 
              className={`icon-btn-glass ${isLiked ? 'active' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart size={20} color={isLiked ? '#ef4444' : 'white'} fill={isLiked ? '#ef4444' : 'none'} />
            </button>
          </div>
        </div>
        
        <div className="hero-overlay-bottom">
          <div className="photo-count-badge">
            <span className="dot"></span> 1 of 12 Photos
          </div>
        </div>
      </div>

      <div className="screen-content no-scrollbar content-overlap">
        {/* Main Info Card */}
        <div className="property-main-card">
          <div className="property-badges">
            <span className="badge-verified"><ShieldCheck size={12} /> Verified</span>
            <span className="badge-status">Ready to Move</span>
          </div>
          
          <h1 className="property-title-large">3 BHK Premium Apartment</h1>
          <p className="project-subtitle">Prestige Lakeside Habitat</p>
          
          <div className="location-row">
            <MapPin size={16} className="text-secondary" />
            <span>Varthur, Bangalore</span>
            <span className="dot-divider">•</span>
            <span>2.5 km from Whitefield</span>
          </div>

          <div className="divider-soft"></div>

          <div className="price-section">
            <div className="price-block">
              <span className="price-value">₹1.25 Cr</span>
              <span className="price-rate">₹8,620 / sq.ft</span>
            </div>
            <button className="action-pill outline" onClick={() => setShowShareModal(true)}>
            <Share2 size={16} /> Share
          </button>
          </div>
        </div>

        

        {/* Key Features */}
        <section className="detail-section">
          <h3>Key Features</h3>
          <div className="features-grid-new">
            {features.map((item, i) => (
              <div key={i} className="feature-item-new">
                <div className="feature-icon-wrapper">
                  <item.icon size={20} />
                </div>
                <span className="feature-val">{item.label}</span>
                <span className="feature-lbl">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky-tabs-wrapper">
          <div className="detail-tabs-new">
            {['overview', 'amenities', 'location', 'similar'].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <div className="tab-content-area">
          {activeTab === 'overview' && (
            <>
              <div className="info-block">
                <h4>Description</h4>
                <p className="desc-text">
                  A meticulously designed 3 BHK apartment offering a blend of luxury and comfort. 
                  Featuring spacious interiors, modern fittings, and excellent natural light. 
                  The property is located in a prime area with easy access to IT parks and international schools.
                  <span className="read-more-link"> Read More</span>
                </p>
              </div>

              <div className="info-block">
                <h4>Property Details</h4>
                <div className="specs-grid">
                  <div className="spec-row">
                    <span className="label">Configuration</span>
                    <span className="value">3 Bedrooms, 3 Bathrooms, 2 Balconies</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Furnishing Status</span>
                    <span className="value">Semi-Furnished</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Floor Number</span>
                    <span className="value">12th of 24 Floors</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Water Supply</span>
                    <span className="value">24 Hours Available</span>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'amenities' && (
            <div className="amenities-list-new">
              {amenities.map(amenity => (
                <div key={amenity} className="amenity-tag">
                  <Check size={14} /> {amenity}
                </div>
              ))}
              <div className="amenity-tag more">+ 12 More</div>
            </div>
          )}
        </div>

        {/* Agent Card */}
        <section className="agent-card-new">
          <div className="agent-header">
            <div className="agent-img">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Agent" />
              <div className="verified-badge-icon"><ShieldCheck size={10} /></div>
            </div>
            <div className="agent-details">
              <h4>Sarah Williams</h4>
              <p>Premium Partner • 4.9 <Star size={10} fill="#fbbf24" stroke="none" /></p>
            </div>
            <button className="view-profile-btn">View</button>
          </div>
          <div className="agent-stats">
            <div className="stat">
              <span className="val">12</span>
              <span className="lbl">Listings</span>
            </div>
            <div className="stat">
              <span className="val">54</span>
              <span className="lbl">Deals</span>
            </div>
            <div className="stat">
              <span className="val">98%</span>
              <span className="lbl">Response</span>
            </div>
          </div>
        </section>
              {/* Sticky Action Footer */}
      <div className="sticky-footer-new">
        <div className="footer-price">
          <span className="label">Total Price</span>
          <span className="value">₹1.25 Cr</span>
        </div>
        <div className="footer-actions">
          <button className="btn-secondary">Schedule Visit</button>
          <button className="btn-primary">Contact Now</button>
        </div>
      </div>
      </div>


      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-overlay" style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'end', justifyContent: 'center'
        }} onClick={() => setShowShareModal(false)}>
          <div className="share-sheet" style={{
            background: 'white', width: '100%', maxWidth: 420, borderRadius: '24px 24px 0 0', padding: 24,
            animation: 'slideUp 0.3s ease-out'
          }} onClick={e => e.stopPropagation()}>
             <div style={{width: 40, height: 4, background: '#E0E0E0', borderRadius: 2, margin: '0 auto 20px'}}></div>
             <h3 style={{fontSize: 18, marginBottom: 20}}>Share Property</h3>
             
             {/* Branding Toggle */}
             <div style={{background: '#F9FAFB', padding: 16, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
                <div>
                  <h4 style={{fontSize: 14, fontWeight: 600, marginBottom: 2}}>Include My Branding</h4>
                  <p style={{fontSize: 12, color: '#666'}}>Add your name & logo to PDF/Images</p>
                </div>
                <div 
                  onClick={() => setIncludeBranding(!includeBranding)}
                  style={{
                    width: 44, height: 24, background: includeBranding ? '#1A1A1A' : '#E0E0E0', borderRadius: 12,
                    position: 'relative', cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    width: 20, height: 20, background: 'white', borderRadius: '50%',
                    position: 'absolute', top: 2, left: includeBranding ? 22 : 2, transition: 'all 0.2s'
                  }}></div>
                </div>
             </div>

             <div className="share-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
                <div className="share-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                   <div style={{width: 56, height: 56, borderRadius: 16, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     <MessageCircle size={28} color="white" />
                   </div>
                   <span style={{fontSize: 12, color: '#444'}}>WhatsApp</span>
                </div>
                <div className="share-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                   <div style={{width: 56, height: 56, borderRadius: 16, background: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     <FileTypePdf size={28} color="white" />
                   </div>
                   <span style={{fontSize: 12, color: '#444'}}>PDF</span>
                </div>
                <div className="share-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                   <div style={{width: 56, height: 56, borderRadius: 16, background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     <LinkIcon size={28} color="white" />
                   </div>
                   <span style={{fontSize: 12, color: '#444'}}>Copy Link</span>
                </div>
                <div className="share-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                   <div style={{width: 56, height: 56, borderRadius: 16, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     <MoreHorizontal size={28} color="#666" />
                   </div>
                   <span style={{fontSize: 12, color: '#444'}}>More</span>
                </div>
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>

      <style>{`
        .property-detail-new {
          background: var(--bg-color);
          position: relative;
        }
        
        .hero-gallery {
          height: 320px;
          position: relative;
          background: #000;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        .hero-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
        }
        .hero-overlay-bottom {
          position: absolute;
          bottom: 32px; /* overlap compensation */
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 24px;
        }
        .icon-btn-glass {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .icon-btn-glass.active { background: rgba(255,255,255,0.9); }
        .hero-actions { display: flex; gap: 8px; }
        
        .photo-count-badge {
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(4px);
        }
        .photo-count-badge .dot {
          width: 6px;
          height: 6px;
          background: var(--success-color);
          border-radius: 50%;
        }
        .view-gallery-btn {
          background: white;
          color: var(--text-main);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .content-overlap {
          margin-top: -32px;
          position: relative;
          z-index: 10;
          border-radius: 32px 32px 0 0;
          background: var(--bg-color);
          padding-top: 12px;
        }

        .property-main-card {
          padding: 20px 16px;
        }
        
        .property-badges {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        .badge-verified {
          background: #dcfce7;
          color: var(--success-color);
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .badge-status {
          background: var(--bg-secondary);
          color: var(--text-body);
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 500;
        }
        
        .property-title-large {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .project-subtitle {
          font-size: 14px;
          color: var(--primary-color);
          font-weight: 500;
          margin-bottom: 12px;
        }
        
        .location-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-body);
          margin-bottom: 16px;
        }
        .text-secondary { color: #9ca3af; }
        .dot-divider { color: #d1d5db; }
        
        .divider-soft {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 16px;
          opacity: 0.6;
        }

        .price-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .price-block {
          display: flex;
          flex-direction: column;
        }
        .price-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-main);
        }
        .price-rate {
          font-size: 12px;
          color: var(--text-body);
        }
        .emi-calculator {
          font-size: 12px;
          color: var(--primary-color);
          background: var(--primary-light);
          padding: 6px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }

        .quick-action-bar-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 0 16px 16px;
        }
        .quick-action-bar-scroll::-webkit-scrollbar { display: none; }
        
        .action-pill {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 20px;
          height: 44px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .action-pill.primary {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(27,77,62,0.2);
        }
        .action-pill.whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 4px 12px rgba(37,211,102,0.2);
        }
        .action-pill.outline {
          background: white;
          border: 1px solid var(--border-color);
          color: var(--text-body);
        }

        .features-grid-new {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }
        .feature-item-new {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
        }
        .feature-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          margin-bottom: 4px;
        }
        .feature-val {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
        }
        .feature-lbl {
          font-size: 11px;
          color: var(--text-body);
        }

        .sticky-tabs-wrapper {
          position: sticky;
          top: 70px; /* app bar offset slightly */
          z-index: 50;
          background: var(--bg-color);
          padding: 12px 0 0;
          margin-top: 8px;
        }
        .detail-tabs-new {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          padding: 0 16px;
          gap: 24px;
        }
        .tab-btn {
          background: none;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          color: var(--text-body);
          font-weight: 500;
          cursor: pointer;
          position: relative;
        }
        .tab-btn.active {
          color: var(--primary-color);
          font-weight: 700;
        }
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-color);
        }

        .tab-content-area {
          padding: 20px 16px;
          min-height: 200px;
        }
        .info-block {
          margin-bottom: 24px;
        }
        .info-block h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }
        .desc-text {
          font-size: 14px;
          color: var(--text-body);
          line-height: 1.6;
        }
        .read-more-link {
          color: var(--primary-color);
          font-weight: 600;
          cursor: pointer;
        }
        
        .specs-grid {
          display: grid;
          gap: 12px;
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }
        .spec-row .label { font-size: 13px; color: var(--text-body); }
        .spec-row .value { font-size: 13px; font-weight: 600; color: var(--text-main); }
        
        .amenities-list-new {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .amenity-tag {
          padding: 8px 14px;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 13px;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .amenity-tag.more {
          background: var(--bg-secondary);
          border-color: transparent;
          color: var(--primary-color);
          font-weight: 600;
        }

        .agent-card-new {
          margin: 0 16px 24px;
          background: white;
          border-radius: 16px;
          padding: 16px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }
        .agent-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .agent-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          position: relative;
        }
        .agent-img img { width: 100%; height: 100%; border-radius: 50%; }
        .verified-badge-icon {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 16px;
          height: 16px;
          background: var(--success-color);
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .agent-details { flex: 1; }
        .agent-details h4 { font-size: 15px; font-weight: 700; color: var(--text-main); }
        .agent-details p { font-size: 12px; color: var(--text-body); display: flex; align-items: center; gap: 4px; }
        .view-profile-btn {
          background: var(--bg-secondary);
          color: var(--primary-color);
          border: none;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }
        .agent-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }
        .agent-stats .stat { text-align: center; }
        .agent-stats .val { display: block; font-size: 14px; font-weight: 700; color: var(--text-main); }
        .agent-stats .lbl { font-size: 11px; color: var(--text-body); }

        .disclaimer-box {
          margin: 0 16px 24px;
          padding: 12px;
          background: var(--bg-secondary);
          border-radius: 8px;
          display: flex;
          gap: 8px;
          color: var(--text-body);
          font-size: 11px;
          line-height: 1.4;
        }
        
        .spacer-bottom { height: 80px; }

        .sticky-footer-new {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          padding: 12px 16px 24px; /* extra bottom padding for mobile home bar */
          box-shadow: 0 -4px 20px rgba(0,0,0,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }
        .footer-price { display: flex; flex-direction: column; }
        .footer-price .label { font-size: 11px; color: var(--text-body); }
        .footer-price .value { font-size: 20px; font-weight: 700; color: var(--text-main); }
        
        .footer-actions { display: flex; gap: 12px; }
        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--primary-color);
          border: none;
          padding: 0 16px;
          height: 44px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        .btn-primary {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 0 24px;
          height: 44px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(27,77,62,0.3);
        }
      `}</style>
    </div>
  )
}

export default PropertyDetail
