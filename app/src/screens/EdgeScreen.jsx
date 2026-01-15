import { useState } from 'react'
import { ArrowLeft, BookOpen, Building2, Share2, ExternalLink, FileText, ChevronRight, Clock, MapPin } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function EdgeScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('news') // 'news' | 'projects'
  const [showReportModal, setShowReportModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const newsItems = [
    {
      id: 1,
      title: 'Bangalore Metro Expansion: Phase 3 Approved',
      source: 'Economic Times',
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1570125909232-eb2be3b11374?w=400&h=200&fit=crop',
      summary: 'The central government has approved the much-awaited Phase 3 of Namma Metro, connecting key IT corridors. This is expected to boost property prices in...'
    },
    {
      id: 2,
      title: 'Luxury Housing Demand up by 25% in Q4',
      source: 'MoneyControl',
      time: '5 hours ago',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=200&fit=crop',
      summary: 'High-net-worth individuals are driving a surge in luxury real estate transactions across major Indian metros, with Bangalore leading the charge.'
    }
  ]

  const projects = [
    {
      id: 1,
      name: 'Prestige Tech Forest',
      builder: 'Prestige Group',
      location: 'Whitefield',
      status: 'Pre-Launch',
      price: '₹1.5 Cr Onwards',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Sobha Neopolis',
      builder: 'Sobha Ltd',
      location: 'Panathur',
      status: 'New Launch',
      price: '₹2.1 Cr Onwards',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=200&fit=crop'
    }
  ]

  const handleRequestReport = (project) => {
    setSelectedProject(project)
    setShowReportModal(true)
  }

  return (
    <div className="screen edge-screen">
      <GlobalHeader onNavigate={onNavigate} activeTab="Edge" />
      
      <div className="section-header" style={{padding: '16px 16px 0'}}>
        <h1>ACN Edge</h1>
      </div>

       {/* Tabs */}
       <div className="toggle-tabs" style={{margin: '16px 16px 16px'}}>
        <button 
          className={`toggle-tab ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          <BookOpen size={16} style={{marginRight: 6}} /> Market News
        </button>
        <button 
          className={`toggle-tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <Building2 size={16} style={{marginRight: 6}} /> New Projects
        </button>
      </div>

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>
        
        {activeTab === 'news' ? (
          <div className="news-feed" style={{padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16}}>
            {newsItems.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-img">
                  <img src={item.image} alt="" />
                  <span className="source-badge">{item.source}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta"><Clock size={12} /> {item.time}</div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="news-actions">
                    <button className="text-btn">Read Full Article <ChevronRight size={14} /></button>
                    <button className="icon-action-btn"><Share2 size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-feed" style={{padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16}}>
             <div className="info-banner" style={{background: '#F0FDFA', padding: 12, borderRadius: 12, border: '1px solid #CCFBF1', fontSize: 13, color: '#0F766E', display: 'flex', gap: 8}}>
               <FileText size={18} />
               <p>Get exclusive detailed reports for any primary project to share with your clients.</p>
             </div>

             {projects.map(proj => (
               <div key={proj.id} className="project-edge-card">
                 <div className="proj-img">
                   <img src={proj.image} alt="" />
                   <span className="status-tag">{proj.status}</span>
                 </div>
                 <div className="proj-details">
                   <div style={{flex: 1}}>
                      <h4>{proj.name}</h4>
                      <p className="builder">{proj.builder}</p>
                      <div className="loc-row"><MapPin size={12} /> {proj.location}</div>
                      <div className="price-row">{proj.price}</div>
                   </div>
                   <button className="request-btn" onClick={() => handleRequestReport(proj)}>
                     Get Report
                   </button>
                 </div>
               </div>
             ))}
          </div>
        )}

      </div>

      {/* Request Report Modal */}
      {showReportModal && (
        <div className="modal-overlay" style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} onClick={() => setShowReportModal(false)}>
          <div className="modal-card" style={{
            background: 'white', width: '90%', maxWidth: 320, borderRadius: 16, padding: 24,
            animation: 'scaleIn 0.2s ease-out', textAlign: 'center'
          }} onClick={e => e.stopPropagation()}>
             <FileText size={48} color="#1b4d3e" style={{marginBottom: 16, background: '#F0FDF4', padding: 10, borderRadius: '50%'}} />
             <h3 style={{fontSize: 18, marginBottom: 8}}>Request Report</h3>
             <p style={{fontSize: 14, color: '#666', marginBottom: 20}}>
               We will send the detailed project report for <strong>{selectedProject?.name}</strong> to your email shortly.
             </p>
             <button 
               onClick={() => setShowReportModal(false)}
               style={{width: '100%', padding: 12, background: 'var(--primary-color)', border: 'none', borderRadius: 8, fontWeight: 600, color: 'white'}}
             >
               Confirm Request
             </button>
          </div>
        </div>
      )}
      


      <style>{`
        .news-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);
        }
        .news-img { height: 160px; position: relative; }
        .news-img img { width: 100%; height: 100%; object-fit: cover; }
        .source-badge {
          position: absolute; top: 12px; left: 12px;
          background: rgba(0,0,0,0.7); color: white;
          padding: 4px 8px; border-radius: 6px;
          font-size: 11px; font-weight: 600; backdrop-filter: blur(4px);
        }
        .news-content { padding: 16px; }
        .news-meta { font-size: 11px; color: #888; display: flex; alignItems: center; gap: 4; margin-bottom: 8px; }
        .news-content h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; line-height: 1.4; }
        .news-content p { font-size: 13px; color: #666; line-height: 1.5; margin-bottom: 16px; }
        .news-actions { 
          display: flex; justify-content: space-between; alignItems: center; 
          border-top: 1px solid #f0f0f0; padding-top: 12px; 
        }
        .text-btn { 
          background: none; border: none; color: var(--primary-color); 
          font-weight: 600; font-size: 13px; display: flex; alignItems: center; gap: 4; cursor: pointer;
        }
        .icon-action-btn {
          background: #f9fafb; border: none; padding: 8px; border-radius: 50%; color: #666; cursor: pointer;
        }

        .project-edge-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);
        }
        .proj-img { height: 140px; position: relative; }
        .proj-img img { width: 100%; height: 100%; object-fit: cover; }
        .status-tag {
          position: absolute; top: 12px; right: 12px;
          background: var(--primary-color); color: white;
          padding: 4px 10px; border-radius: 20px;
          font-size: 11px; font-weight: 600;
        }
        .proj-details { padding: 16px; display: flex; align-items: flex-end; gap: 12px; }
        .proj-details h4 { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
        .proj-details .builder { font-size: 12px; color: #666; margin-bottom: 8px; }
        .loc-row { font-size: 12px; color: #666; display: flex; alignItems: center; gap: 4; margin-bottom: 4px; }
        .price-row { font-size: 14px; font-weight: 700; color: #1A1A1A; }
        .request-btn {
          padding: 8px 16px; background: white; border: 1px solid var(--primary-color);
          color: var(--primary-color); border-radius: 8px; font-size: 12px; font-weight: 600; white-space: nowrap;
        }
        .request-btn:active { background: var(--primary-color); color: white; }

        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  )
}

export default EdgeScreen
