import { ArrowLeft, Plus, Search, MapPin, Link, Mail } from 'lucide-react'
import './screens.css'

function MyRequirementsList({ onNavigate }) {
  const requirements = [
    {
      id: 'REQ5678',
      title: 'Looking for 2 BHK in Koramangala',
      budget: '₹50L - ₹80L',
      location: 'Koramangala',
      bhk: '2, 3 BHK',
      area: '1000 - 1500 sq.ft',
      type: 'Buy',
      propertyType: 'Apartment',
      client: 'Priya Desai',
      status: 'active',
      matches: 23,
      enquiries: 5
    },
    {
      id: 'REQ5679',
      title: 'Villa in HSR for family',
      budget: '₹1.5Cr - ₹2Cr',
      location: 'HSR Layout',
      bhk: '4 BHK',
      area: '2000 - 3000 sq.ft',
      type: 'Buy',
      propertyType: 'Villa',
      client: 'Rajesh Kumar',
      status: 'matched',
      matches: 8,
      enquiries: 3
    },
    {
      id: 'REQ5680',
      title: 'Commercial space for cafe',
      budget: '₹80K - ₹1.2L /mo',
      location: 'Indiranagar',
      bhk: 'N/A',
      area: '500 - 1000 sq.ft',
      type: 'Rent',
      propertyType: 'Commercial',
      client: 'Amit Shah',
      status: 'active',
      matches: 12,
      enquiries: 2
    }
  ]

  return (
    <div className="screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('dashboard')}>
          <ArrowLeft size={24} />
        </button>
        <h1>My Requirements</h1>
        <button className="header-action" style={{color: '#8B5CF6'}}>
          <Plus size={20} /> Add
        </button>
      </header>

      {/* Toggle Tabs */}
      <div className="toggle-tabs">
        <button className="toggle-tab active purple">Buy (18)</button>
        <button className="toggle-tab">Rent (12)</button>
        <button className="toggle-tab">Commercial (3)</button>
      </div>

      {/* Search */}
      <div className="section" style={{paddingTop: 0, paddingBottom: 12}}>
        <div className="search-bar" style={{marginBottom: 12}}>
          <Search size={18} className="search-icon" />
          <span className="search-placeholder">Search requirements...</span>
        </div>
        <div className="filter-chips">
          <button className="filter-chip">Status ▾</button>
          <button className="filter-chip">Budget ▾</button>
          <button className="filter-chip">Location ▾</button>
          <button className="filter-chip">BHK ▾</button>
        </div>
      </div>

      {/* Requirement Cards */}
      <div className="screen-content">
        {requirements.map((req, i) => (
          <div key={i} className="requirement-card">
            <div className="req-header">
              <div className="req-header-left">
                <span className="req-id">#{req.id}</span>
                <span className={`status-badge ${req.status}`}>
                  {req.status === 'active' ? 'Active' : 'Matched'}
                </span>
              </div>
              <div className="req-type-badge">{req.type}</div>
            </div>
            
            <h4 className="req-title">{req.title}</h4>
            
            <div className="req-details">
              <div className="req-detail">
                <span className="detail-icon">₹</span>
                <span>{req.budget}</span>
              </div>
              <div className="req-detail">
                <MapPin size={12} />
                <span>{req.location}</span>
              </div>
              <div className="req-detail">
                <span className="detail-icon">🏠</span>
                <span>{req.bhk}</span>
              </div>
              <div className="req-detail">
                <span className="detail-icon">📐</span>
                <span>{req.area}</span>
              </div>
            </div>

            <div className="req-tags">
              <span className="tag">{req.propertyType}</span>
            </div>

            <div className="req-client">
              <div className="client-avatar">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${req.client}`} alt="" />
              </div>
              <span>{req.client}</span>
            </div>

            <div className="match-bar-container">
              <div className="match-bar-bg">
                <div className="match-bar-fill" style={{width: `${Math.min(req.matches * 4, 100)}%`}}></div>
              </div>
              <span className="match-count">{req.matches} Properties Match</span>
            </div>

            <div className="req-stats">
              <span><Link size={12} /> {req.matches} Matches</span>
              <span><Mail size={12} /> {req.enquiries} Enquiries</span>
            </div>

            <div className="card-actions">
              <button className="btn btn-outline">View Matches</button>
              <button className="btn btn-purple">Enquire</button>
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      <button className="fab purple">
        <Plus size={24} />
      </button>

      <style>{`
        .requirement-card {
          background: white;
          margin: 0 16px 16px;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border-left: 4px solid #8B5CF6;
        }
        .req-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .req-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .req-id {
          font-size: 11px;
          color: #888;
        }
        .req-type-badge {
          background: #8B5CF6;
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
        }
        .req-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #1A1A1A;
        }
        .req-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }
        .req-detail {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #666;
        }
        .detail-icon {
          font-size: 12px;
        }
        .req-tags {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .req-client {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 13px;
          color: #666;
        }
        .client-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #E0E0E0;
          overflow: hidden;
        }
        .client-avatar img {
          width: 100%;
          height: 100%;
        }
        .match-bar-container {
          margin-bottom: 12px;
        }
        .match-bar-bg {
          height: 6px;
          background: #E8F5E9;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        .match-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00C853, #69F0AE);
          border-radius: 3px;
        }
        .match-count {
          font-size: 12px;
          color: #00C853;
          font-weight: 500;
        }
        .req-stats {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: #888;
          margin-bottom: 12px;
        }
        .req-stats span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </div>
  )
}

export default MyRequirementsList
