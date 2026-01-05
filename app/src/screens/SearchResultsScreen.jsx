import { ArrowLeft, SlidersHorizontal, Heart, MapPin, ChevronDown, List, LayoutGrid, Map } from 'lucide-react'
import './screens.css'

function SearchResultsScreen({ onNavigate }) {
  const properties = [
    {
      id: 'ACN12345',
      name: 'Prestige Sunset Park',
      location: 'Koramangala, Bangalore',
      price: '₹85 Lakhs',
      config: '2 BHK | 1200 sq.ft',
      type: 'Resale',
      match: 92,
      days: 2,
      premium: true,
      verified: true
    },
    {
      id: 'ACN12346',
      name: 'Brigade Orchards',
      location: 'Whitefield, Bangalore',
      price: '₹1.2 Crore',
      config: '3 BHK | 1650 sq.ft',
      type: 'New',
      match: 88,
      days: 1,
      premium: false,
      verified: true
    },
    {
      id: 'ACN12347',
      name: 'Sobha Dream Gardens',
      location: 'HSR Layout, Bangalore',
      price: '₹95 Lakhs',
      config: '2 BHK | 1350 sq.ft',
      type: 'Resale',
      match: 85,
      days: 4,
      premium: true,
      verified: false
    }
  ]

  return (
    <div className="screen results-screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('search')}>
          <ArrowLeft size={24} />
        </button>
        <div className="search-query" onClick={() => onNavigate('search')}>
          Koramangala
          <span className="edit-icon">✏️</span>
        </div>
        <button className="filter-badge-btn" onClick={() => onNavigate('filter')}>
          <SlidersHorizontal size={20} />
          <span className="filter-count">3</span>
        </button>
      </header>

      {/* Results Info */}
      <div className="results-info">
        <span className="results-count">245 Properties found</span>
        <button className="sort-btn">
          Sort: Relevance <ChevronDown size={14} />
        </button>
      </div>

      {/* Active Filters */}
      <div className="filter-chips">
        <button className="filter-chip active">₹50L - 1Cr ×</button>
        <button className="filter-chip active">2,3 BHK ×</button>
        <button className="filter-chip">Property Type ▾</button>
        <button className="filter-chip">Possession ▾</button>
      </div>

      {/* View Toggle */}
      <div className="view-toggle">
        <button className="view-btn active"><List size={18} /></button>
        <button className="view-btn"><LayoutGrid size={18} /></button>
      </div>

      {/* Property Cards */}
      <div className="results-list">
        {properties.map((property, i) => (
          <div key={i} className="property-list-card" onClick={() => onNavigate('property-detail')}>
            <div className="card-content">
              <div className="card-image">
                <img src={`https://images.unsplash.com/photo-156892436${i}138-f88be8ce9331?w=200&h=160&fit=crop`} alt="" />
                {property.premium && <span className="premium-badge">Premium</span>}
                {property.type === 'New' && <span className="new-badge">New</span>}
                <span className="image-count">1/8</span>
              </div>
              <div className="card-info">
                <div className="card-header-row">
                  <span className="card-price">{property.price}</span>
                  <button className="heart-btn"><Heart size={18} /></button>
                </div>
                <h4 className="card-title">{property.name}</h4>
                <p className="card-location"><MapPin size={12} /> {property.location}</p>
                <p className="card-config">{property.config}</p>
                <div className="card-tags">
                  <span className="tag">{property.type}</span>
                  {property.verified && <span className="tag verified">✓ Verified</span>}
                </div>
                <div className="match-indicator">
                  <div className="match-bar" style={{width: `${property.match}%`}}></div>
                  <span className="match-text">{property.match}% Match</span>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-outline">View Details</button>
              <button className="btn btn-primary">Enquire Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Map FAB */}
      <button className="map-fab">
        <Map size={22} />
        <span>Map</span>
      </button>

      <style>{`
        .results-screen {
          padding-bottom: 80px;
        }
        .search-query {
          flex: 1;
          background: #E3F2FD;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 14px;
          color: #0066CC;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .edit-icon { font-size: 12px; }
        .filter-badge-btn {
          background: none;
          border: none;
          position: relative;
          padding: 8px;
          cursor: pointer;
        }
        .filter-count {
          position: absolute;
          top: 2px;
          right: 2px;
          background: #FF5252;
          color: white;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .results-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px 8px;
        }
        .results-count {
          font-size: 13px;
          color: #666;
        }
        .sort-btn {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .view-toggle {
          display: flex;
          justify-content: flex-end;
          gap: 4px;
          padding: 0 16px 12px;
        }
        .view-btn {
          background: white;
          border: 1px solid #E0E0E0;
          padding: 8px;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
        }
        .view-btn.active {
          background: #0066CC;
          border-color: #0066CC;
          color: white;
        }
        .results-list {
          padding-bottom: 20px;
        }
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-config {
          font-size: 12px;
          color: #666;
          margin-top: 2px;
        }
        .card-tags {
          display: flex;
          gap: 6px;
          margin-top: 6px;
        }
        .card-tags .tag {
          font-size: 10px;
          padding: 3px 8px;
          background: #F0F0F0;
          border-radius: 4px;
          color: #666;
        }
        .card-tags .tag.verified {
          background: #E8F5E9;
          color: #2E7D32;
        }
        .match-indicator {
          position: relative;
          margin-top: 8px;
        }
        .match-bar {
          height: 4px;
          background: linear-gradient(90deg, #00C853, #69F0AE);
          border-radius: 2px;
        }
        .match-text {
          font-size: 11px;
          color: #00C853;
          font-weight: 500;
        }
        .new-badge {
          position: absolute;
          top: 28px;
          left: 8px;
          background: #0066CC;
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .image-count {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0,0,0,0.6);
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .map-fab {
          position: fixed;
          bottom: 90px;
          right: 20px;
          background: #0066CC;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0,102,204,0.4);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default SearchResultsScreen
