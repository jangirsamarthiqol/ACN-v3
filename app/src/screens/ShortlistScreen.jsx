import { ArrowLeft, Heart, MapPin, Building2, Trash2 } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function ShortlistScreen({ onNavigate }) {
  const shortlists = [
    {
      id: 'ACN12347',
      title: '4 BHK Penthouse',
      project: 'Brigade Gateway',
      location: 'Rajajinagar, Bangalore',
      price: '₹2.8 Cr',
      area: '2200 sq.ft',
      image: 'https://images.unsplash.com/photo-1600596542815-e36cb06c37f6?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 'ACN12345',
      title: '3 BHK Apartment',
      project: 'Prestige Lakeside',
      location: 'Varthur, Bangalore',
      price: '₹1.2 Cr',
      area: '1450 sq.ft',
      image: 'https://images.unsplash.com/photo-156892436138-f88be8ce9331?w=200&h=160&fit=crop'
    }
  ]

  return (
    <div className="screen">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="ACN" />

      <div className="section-header" style={{padding: '16px 16px 0'}}>
        <h1>My Shortlist ({shortlists.length})</h1>
      </div>

      <div className="screen-content" style={{paddingBottom: 80}}>
        {shortlists.length > 0 ? (
          <div className="shortlist-grid" style={{display: 'grid', gap: '16px', padding: '16px'}}>
            {shortlists.map((item, i) => (
              <div key={i} className="list-card" style={{margin: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                <div style={{height: 140, position: 'relative'}}>
                  <img src={item.image} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <button className="icon-btn-glass" style={{position: 'absolute', top: 8, right: 8, background: 'white', color: '#ef4444'}}>
                    <Heart size={18} fill="#ef4444" />
                  </button>
                </div>
                <div style={{padding: 12}}>
                  <h4 style={{fontSize: 15, fontWeight: 600, marginBottom: 4}}>{item.title}</h4>
                  <p style={{fontSize: 12, color: '#666', marginBottom: 4}}>{item.project}</p>
                  <p style={{fontSize: 12, color: '#888', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8}}>
                    <MapPin size={12} /> {item.location}
                  </p>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: 'var(--primary-color)'}}>{item.price}</span>
                    <button className="btn btn-outline" style={{padding: '6px 12px', fontSize: 12}} onClick={() => onNavigate('property-detail')}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state" style={{textAlign: 'center', padding: '40px 20px', color: '#888'}}>
            <Heart size={48} style={{opacity: 0.2, marginBottom: 16}} />
            <h3>No Shortlisted Properties</h3>
            <p>Properties you like will appear here.</p>
            <button className="btn btn-primary" style={{marginTop: 16}} onClick={() => onNavigate('search')}>
              Browse Properties
            </button>
          </div>
        )}
      </div>

      <GlobalBottomNav onNavigate={onNavigate} activeTab="shortlist" context="home" />
    </div>
  )
}

export default ShortlistScreen
