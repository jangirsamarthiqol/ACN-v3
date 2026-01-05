import { ArrowLeft, Share2, Heart, Phone, MessageCircle, Mail, Calendar, MapPin, Check, Home, Square, Bath, Car, ChevronRight } from 'lucide-react'
import './screens.css'

function PropertyDetail({ onNavigate }) {
  const features = [
    { icon: Home, label: '3 BHK', value: '' },
    { icon: Square, label: '1,450', value: 'sq.ft' },
    { icon: Bath, label: '2', value: 'Baths' },
    { icon: Home, label: '2', value: 'Balcony' },
    { icon: Home, label: '5th', value: 'Floor' },
    { icon: Car, label: '2', value: 'Parking' }
  ]

  const amenities = ['Gym', 'Pool', 'Club House', 'Power Backup', 'Lift', 'Security', 'Garden', 'Play Area']

  return (
    <div className="screen property-detail-screen">
      {/* Image Gallery */}
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop" alt="Property" />
        <div className="gallery-overlay">
          <button className="gallery-btn back" onClick={() => onNavigate('home')}>
            <ArrowLeft size={20} />
          </button>
          <div className="gallery-actions">
            <button className="gallery-btn"><Share2 size={18} /></button>
            <button className="gallery-btn heart"><Heart size={18} /></button>
          </div>
        </div>
        <span className="image-counter">3 / 12</span>
        <button className="view-all-photos">View All Photos</button>
        <span className="verified-property-badge"><Check size={12} /> Verified Property</span>
      </div>

      {/* Quick Actions */}
      <div className="quick-contact-bar">
        <button className="contact-chip primary"><Phone size={16} /> Call</button>
        <button className="contact-chip whatsapp"><MessageCircle size={16} /> WhatsApp</button>
        <button className="contact-chip"><Mail size={16} /> Email</button>
        <button className="contact-chip"><Calendar size={16} /> Visit</button>
      </div>

      {/* Price & Title */}
      <div className="property-header-section">
        <div className="price-row">
          <span className="price">₹1.2 Crore</span>
          <span className="price-per-sqft">₹8,275 per sq.ft</span>
          <span className="negotiable-badge">Negotiable</span>
        </div>
        <h1 className="property-title">Spacious 3 BHK Apartment</h1>
        <p className="property-id">#ACN12345 <span className="copy-icon">📋</span></p>
        <p className="project-name">Prestige Lakeside Habitat</p>
        <p className="location"><MapPin size={14} /> Varthur, Bangalore • 5.2 km away</p>
        <button className="directions-link">Get Directions →</button>
      </div>

      {/* Agent Info */}
      <div className="agent-row">
        <div className="agent-avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=rahul" alt="" />
        </div>
        <div className="agent-info">
          <span className="agent-name">Rahul Sharma • Verified Agent</span>
          <span className="agent-rating">⭐ 4.8</span>
        </div>
        <span className="posted-date">5 days ago • 234 views</span>
      </div>

      {/* Key Features */}
      <div className="features-grid">
        {features.map((feature, i) => (
          <div key={i} className="feature-card">
            <feature.icon size={20} className="feature-icon" />
            <span className="feature-value">{feature.label}</span>
            <span className="feature-label">{feature.value}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="detail-tabs">
        <button className="detail-tab active">Overview</button>
        <button className="detail-tab">Amenities</button>
        <button className="detail-tab">Location</button>
        <button className="detail-tab">Similar</button>
      </div>

      {/* Overview Content */}
      <div className="detail-section">
        <h3>Property Details</h3>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Transaction</span>
            <span className="detail-value">Resale</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Furnishing</span>
            <span className="detail-value">Semi-Furnished</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Facing</span>
            <span className="detail-value">North-East</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Property Age</span>
            <span className="detail-value">3 years</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Possession</span>
            <span className="detail-value">Ready to Move</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Maintenance</span>
            <span className="detail-value">₹3,500/month</span>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="detail-section">
        <h3>Amenities</h3>
        <div className="amenities-grid">
          {amenities.map((amenity, i) => (
            <div key={i} className="amenity-item">
              <Check size={14} className="amenity-check" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="detail-section">
        <h3>About This Property</h3>
        <p className="description">
          Beautifully designed 3 BHK apartment in a premium gated community. Features modern interiors, 
          spacious rooms, and excellent ventilation. Located close to IT hubs, schools, and shopping centers.
          <button className="read-more">Read More</button>
        </p>
      </div>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <button className="btn btn-outline"><Calendar size={18} /> Schedule Visit</button>
        <button className="btn btn-primary"><MessageCircle size={18} /> Enquire Now</button>
      </div>

      <style>{`
        .property-detail-screen {
          padding-bottom: 80px;
        }
        .gallery {
          position: relative;
          height: 280px;
          background: #333;
        }
        .gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
        }
        .gallery-btn {
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .gallery-btn.heart {
          color: #FF5252;
        }
        .gallery-actions {
          display: flex;
          gap: 8px;
        }
        .image-counter {
          position: absolute;
          top: 16px;
          right: 68px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
        }
        .view-all-photos {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.7);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
        }
        .verified-property-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: #00C853;
          color: white;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .quick-contact-bar {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          background: white;
          overflow-x: auto;
          border-bottom: 1px solid #F0F0F0;
        }
        .contact-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 13px;
          color: #666;
          white-space: nowrap;
          cursor: pointer;
        }
        .contact-chip.primary {
          background: #0066CC;
          border-color: #0066CC;
          color: white;
        }
        .contact-chip.whatsapp {
          background: #25D366;
          border-color: #25D366;
          color: white;
        }
        .property-header-section {
          padding: 16px;
          background: white;
        }
        .price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .price {
          font-size: 26px;
          font-weight: 700;
          color: #0066CC;
        }
        .price-per-sqft {
          font-size: 13px;
          color: #888;
        }
        .negotiable-badge {
          background: #E8F5E9;
          color: #2E7D32;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 12px;
        }
        .property-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .property-id {
          font-size: 12px;
          color: #888;
          margin-bottom: 4px;
        }
        .copy-icon { cursor: pointer; }
        .project-name {
          font-size: 14px;
          color: #0066CC;
          margin-bottom: 4px;
        }
        .location {
          font-size: 14px;
          color: #666;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .directions-link {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 13px;
          padding: 0;
          margin-top: 4px;
          cursor: pointer;
        }
        .agent-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #F8F9FA;
          border-bottom: 1px solid #F0F0F0;
        }
        .agent-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          background: #E0E0E0;
        }
        .agent-avatar img {
          width: 100%;
          height: 100%;
        }
        .agent-info {
          flex: 1;
        }
        .agent-name {
          font-size: 13px;
          font-weight: 500;
        }
        .agent-rating {
          font-size: 12px;
          color: #FFB300;
          margin-left: 8px;
        }
        .posted-date {
          font-size: 11px;
          color: #888;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding: 16px;
          background: white;
        }
        .feature-card {
          background: #F5F7FA;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
        }
        .feature-icon {
          color: #0066CC;
          margin-bottom: 4px;
        }
        .feature-value {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: #1A1A1A;
        }
        .feature-label {
          font-size: 11px;
          color: #888;
        }
        .detail-tabs {
          display: flex;
          background: white;
          border-bottom: 1px solid #F0F0F0;
          padding: 0 16px;
        }
        .detail-tab {
          background: none;
          border: none;
          padding: 14px 16px;
          font-size: 14px;
          color: #666;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        .detail-tab.active {
          color: #0066CC;
          font-weight: 600;
          border-bottom-color: #0066CC;
        }
        .detail-section {
          padding: 16px;
          background: white;
          margin-top: 8px;
        }
        .detail-section h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        .detail-label {
          font-size: 12px;
          color: #888;
        }
        .detail-value {
          font-size: 14px;
          color: #1A1A1A;
          font-weight: 500;
        }
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .amenity-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #1A1A1A;
        }
        .amenity-check {
          color: #00C853;
        }
        .description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
        .read-more {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 14px;
          cursor: pointer;
          margin-left: 4px;
        }
        .sticky-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  )
}

export default PropertyDetail
