import { ArrowLeft, Plus, Search, MapPin, Eye, Mail, Link, MoreVertical, SlidersHorizontal } from 'lucide-react'
import './screens.css'

function MyPropertiesList({ onNavigate }) {
  const properties = [
    {
      id: 'ACN12345',
      title: '3 BHK Apartment',
      project: 'Prestige Lakeside',
      location: 'Varthur, Bangalore',
      price: '₹1.2 Cr',
      area: '1450 sq.ft',
      status: 'active',
      views: 234,
      enquiries: 12,
      matches: 8,
      shortlists: 15
    },
    {
      id: 'ACN12346',
      title: '2 BHK Villa',
      project: 'Sobha Forest View',
      location: 'HSR Layout, Bangalore',
      price: '₹95 L',
      area: '1200 sq.ft',
      status: 'inactive',
      views: 156,
      enquiries: 8,
      matches: 5,
      shortlists: 10
    },
    {
      id: 'ACN12347',
      title: '4 BHK Penthouse',
      project: 'Brigade Gateway',
      location: 'Rajajinagar, Bangalore',
      price: '₹2.8 Cr',
      area: '2200 sq.ft',
      status: 'active',
      views: 89,
      enquiries: 4,
      matches: 3,
      shortlists: 6
    }
  ]

  return (
    <div className="screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('dashboard')}>
          <ArrowLeft size={24} />
        </button>
        <h1>My Properties</h1>
        <button className="header-action" onClick={() => onNavigate('add-property')}>
          <Plus size={20} /> Add
        </button>
      </header>

      {/* Toggle Tabs */}
      <div className="toggle-tabs">
        <button className="toggle-tab active">Resale (34)</button>
        <button className="toggle-tab">Rental (18)</button>
        <button className="toggle-tab">Commercial (5)</button>
      </div>

      {/* Search */}
      <div className="section" style={{paddingTop: 0, paddingBottom: 12}}>
        <div className="search-bar" style={{marginBottom: 12}}>
          <Search size={18} className="search-icon" />
          <span className="search-placeholder">Search your properties...</span>
          <button className="filter-side-btn">
            <SlidersHorizontal size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mini-stats">
        <span>Showing 34 of 48 properties</span>
        <button className="sort-link">Sort: Newest ▾</button>
      </div>

      {/* Property Cards */}
      <div className="screen-content">
        {properties.map((property, i) => (
          <div key={i} className="property-list-card" onClick={() => onNavigate('property-detail')}>
            <div className="card-content">
              <div className="card-image">
                <img src={`https://images.unsplash.com/photo-156892436${i}138-f88be8ce9331?w=200&h=160&fit=crop`} alt="" />
                <span className={`status-badge-small ${property.status}`}>
                  {property.status === 'active' ? '● Active' : '○ Inactive'}
                </span>
              </div>
              <div className="card-info">
                <div className="card-header-row">
                  <span className="card-id">#{property.id}</span>
                  <button className="more-btn"><MoreVertical size={16} /></button>
                </div>
                <h4 className="card-title">{property.title}</h4>
                <p className="card-subtitle">{property.project}</p>
                <p className="card-location"><MapPin size={11} /> {property.location}</p>
                <p className="card-meta">{property.area} | {property.title.split(' ')[0]} BHK</p>
                <p className="card-price">{property.price}</p>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-outline">View Matches</button>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      <button className="fab" onClick={() => onNavigate('add-property')}>
        <Plus size={24} />
      </button>

      <style>{`
        .mini-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px 12px;
          font-size: 12px;
          color: #888;
        }
        .sort-link {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 12px;
          cursor: pointer;
        }
        .status-badge-small {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }
        .status-badge-small.active {
          background: #E8F5E9;
          color: #2E7D32;
        }
        .status-badge-small.inactive {
          background: #F5F5F5;
          color: #757575;
        }
        .more-btn {
          background: none;
          border: none;
          color: #888;
          padding: 4px;
          cursor: pointer;
        }
        .card-meta {
          font-size: 11px;
          color: #888;
        }
        .filter-side-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          border-left: 1px solid #E0E0E0;
          padding-left: 12px;
          margin-left: auto;
          color: var(--primary-color);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default MyPropertiesList
