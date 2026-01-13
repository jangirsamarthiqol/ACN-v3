import { ArrowLeft, Filter, Phone, MessageCircle } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function MyEnquiries({ onNavigate }) {
  const enquiries = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 4.8,
      verified: true,
      time: '2 hours ago',
      type: 'Property Enquiry',
      property: {
        id: 'ACN12345',
        title: '3 BHK Apartment, Prestige Lakeside',
        price: '₹1.2 Cr',
        area: '1450 sq.ft'
      },
      message: "Hi, I'm interested in this property for my client. Can we schedule a visit this weekend?",
      status: 'new',
      unread: true
    },
    {
      id: 2,
      name: 'Anita Sharma',
      rating: 4.5,
      verified: true,
      time: '5 hours ago',
      type: 'Requirement Match',
      property: {
        id: 'REQ5678',
        title: '2 BHK in Koramangala',
        price: '₹50L - ₹80L',
        area: '1000-1200 sq.ft'
      },
      message: 'I have a client looking for exactly this type of property. Let me know if your listing is still available.',
      status: 'responded',
      unread: false
    },
    {
      id: 3,
      name: 'Prakash Mehta',
      rating: 4.2,
      verified: false,
      time: '1 day ago',
      type: 'Property Enquiry',
      property: {
        id: 'ACN12346',
        title: '2 BHK Villa, HSR Layout',
        price: '₹95 L',
        area: '1200 sq.ft'
      },
      message: 'Is this property negotiable? My client is very interested.',
      status: 'new',
      unread: true
    }
  ]

  return (
    <div className="screen">
      {/* Header */}
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="My Business" />

      {/* Stats Banner */}
      <div className="enquiry-stats-banner">
        <span>This Week: <strong>Received 12</strong> (↑3) | <strong>Sent 8</strong> | Response Rate <strong>75%</strong></span>
      </div>

      {/* Toggle Tabs */}
      <div className="toggle-tabs">
        <button className="toggle-tab active">Received (45)</button>
        <button className="toggle-tab">Sent (32)</button>
      </div>

      {/* Filter Chips */}
      <div className="filter-chips">
        <button className="filter-chip">Status ▾</button>
        <button className="filter-chip">Type ▾</button>
        <button className="filter-chip">Date ▾</button>
        <button className="filter-chip">Sort ▾</button>
      </div>

      {/* Enquiry Cards */}
      <div className="screen-content">
        {enquiries.map((enquiry) => (
          <div key={enquiry.id} className={`enquiry-card ${enquiry.unread ? 'unread' : ''}`}>
            <div className="enquiry-header">
              <div className="enquiry-avatar">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${enquiry.name}`} alt="" />
              </div>
              <div className="enquiry-info">
                <div className="enquiry-name">
                  {enquiry.name}
                  <span className="rating">⭐ {enquiry.rating}</span>
                  {enquiry.verified && <span className="verified-badge">✓ Verified</span>}
                </div>
                <div className="enquiry-meta">
                  <span className="enquiry-type">{enquiry.type}</span>
                  <span>•</span>
                  <span>{enquiry.time}</span>
                </div>
              </div>
              <span className={`status-badge ${enquiry.status}`}>
                {enquiry.status === 'new' ? 'New' : 'Responded'}
              </span>
            </div>

            <div className="enquiry-property">
              <div className="property-mini">
                <span className="property-id">{enquiry.property.id}</span>
                <p className="property-title">{enquiry.property.title}</p>
                <p className="property-details">{enquiry.property.price} | {enquiry.property.area}</p>
              </div>
            </div>

            <div className="enquiry-message">
              <p>{enquiry.message}</p>
            </div>

            <div className="enquiry-actions">
              <button className="btn btn-primary">Respond</button>
              <button className="btn btn-outline"><Phone size={16} /></button>
              <button className="btn btn-outline" style={{background: '#E8F5E9', borderColor: '#E8F5E9', color: '#2E7D32'}}>
                <MessageCircle size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <GlobalBottomNav onNavigate={onNavigate} activeTab="enquiries" context="business" />

      <style>{`
        .enquiry-stats-banner {
          background: #E3F2FD;
          padding: 10px 16px;
          font-size: 12px;
          color: #0066CC;
          text-align: center;
        }
        .enquiry-stats-banner strong {
          font-weight: 600;
        }
        .enquiry-property {
          margin-bottom: 12px;
        }
        .property-mini {
          background: #F5F7FA;
          padding: 10px 12px;
          border-radius: 8px;
        }
        .property-id {
          font-size: 10px;
          color: #888;
        }
        .property-title {
          font-size: 13px;
          font-weight: 500;
          color: #1A1A1A;
          margin: 2px 0;
        }
        .property-details {
          font-size: 12px;
          color: #666;
        }
        .verified-badge {
          font-size: 10px;
          background: #E8F5E9;
          color: #2E7D32;
          padding: 2px 6px;
          border-radius: 8px;
          margin-left: 4px;
        }
        .enquiry-type {
          color: #0066CC;
        }
      `}</style>
    </div>
  )
}

export default MyEnquiries
