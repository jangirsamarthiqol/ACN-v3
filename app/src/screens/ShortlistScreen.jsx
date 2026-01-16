import { useState } from 'react'
import { ArrowLeft, Heart, MapPin, Building2, Trash2, Folder, Plus, ChevronRight, MoreVertical } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function ShortlistScreen({ onNavigate }) {
  const [viewMode, setViewMode] = useState('list') // 'list' | 'collections'
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')

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

  const collections = [
    { id: 1, name: 'For Client Raj', count: 2, image: shortlists[0].image },
    { id: 2, name: 'Investment Options', count: 5, image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&fit=crop' }
  ]

  return (
    <div className="screen">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="ACN" title="My Shortlist" />

      {/* Header title moved to GlobalHeader */}

      {/* Toggles */}
      <div className="toggle-tabs" style={{margin: '16px 16px 8px'}}>
        <button 
          className={`toggle-tab ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          All Items ({shortlists.length})
        </button>
        <button 
          className={`toggle-tab ${viewMode === 'collections' ? 'active' : ''}`}
          onClick={() => setViewMode('collections')}
        >
          Collections ({collections.length})
        </button>
      </div>

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>
        
        {viewMode === 'list' ? (
           shortlists.length > 0 ? (
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
          )
        ) : (
          <div className="collections-view" style={{padding: 16}}>
             <div 
               className="create-collection-btn" 
               onClick={() => setShowCreateModal(true)}
               style={{
                 border: '2px dashed #E0E0E0', borderRadius: 12, padding: 16, 
                 display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                 color: 'var(--primary-color)', fontWeight: 600, cursor: 'pointer', marginBottom: 16
               }}
             >
               <Plus size={20} /> Create New Collection
             </div>

             <div className="collections-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
               {collections.map(col => (
                 <div key={col.id} className="collection-folder" style={{background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
                    <div style={{height: 100, position: 'relative'}}>
                       <img src={col.image} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8}} />
                       <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'}}></div>
                       <Folder size={24} color="white" style={{position: 'absolute', bottom: 8, left: 8}} />
                    </div>
                    <div style={{padding: 12}}>
                       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                         <h4 style={{fontSize: 14, fontWeight: 600, marginBottom: 4}}>{col.name}</h4>
                         <MoreVertical size={14} color="#888" />
                       </div>
                       <span style={{fontSize: 12, color: '#666'}}>{col.count} Properties</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>

      {showCreateModal && (
        <div className="modal-overlay" style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="modal-card" style={{
            background: 'white', width: '90%', maxWidth: 320, borderRadius: 16, padding: 24,
            animation: 'scaleIn 0.2s ease-out'
          }}>
             <h3 style={{fontSize: 18, marginBottom: 16}}>New Collection</h3>
             <input 
               autoFocus
               type="text" 
               placeholder="Collection Name (e.g. 3BHK Options)"
               value={newCollectionName}
               onChange={(e) => setNewCollectionName(e.target.value)}
               style={{
                 width: '100%', padding: '12px', borderRadius: 8, border: '1px solid #E0E0E0', 
                 fontSize: 14, marginBottom: 20, outline: 'none'
               }}
             />
             <div style={{display: 'flex', gap: 12}}>
               <button 
                 onClick={() => setShowCreateModal(false)}
                 style={{flex: 1, padding: 10, background: '#F0F0F0', border: 'none', borderRadius: 8, fontWeight: 600, color: '#444'}}
               >
                 Cancel
               </button>
               <button 
                 onClick={() => setShowCreateModal(false)}
                 style={{flex: 1, padding: 10, background: 'var(--primary-color)', border: 'none', borderRadius: 8, fontWeight: 600, color: 'white'}}
               >
                 Create
               </button>
             </div>
          </div>
        </div>
      )}

      <GlobalBottomNav onNavigate={onNavigate} activeTab="shortlist" context="home" />

      <style>{`
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  )
}

export default ShortlistScreen
