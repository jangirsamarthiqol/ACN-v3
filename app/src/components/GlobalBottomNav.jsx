import React from 'react';
import { Home, Building2, FileText, Heart, LayoutDashboard, Mail, Scale, Activity } from 'lucide-react';
import '../screens/screens.css';

function GlobalBottomNav({ onNavigate, activeTab = 'home', context = 'home' }) {
  
  const navItems = {
    home: [
      { id: 'home', icon: Home, label: 'Home' },
      { id: 'search', icon: Building2, label: 'Properties' },
      { id: 'requirements', icon: FileText, label: 'Requirements' },
      { id: 'shortlist', icon: Heart, label: 'Shortlist' }
    ],
    business: [
      { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { id: 'properties', icon: Building2, label: 'My Properties' },
      { id: 'requirements', icon: FileText, label: 'My Requirements' },
      { id: 'enquiries', icon: Mail, label: 'My Enquiries' }
    ],
    services: [
      { id: 'services', icon: LayoutDashboard, label: 'Service Hub' },
      { id: 'legal-services', icon: Scale, label: 'Legal Services' },
      { id: 'service-tracking', icon: Activity, label: 'Tracking' }
    ]
  };

  const currentItems = navItems[context] || navItems.home;

  return (
    <nav className="bottom-nav-floating">
      {currentItems.map(item => (
        <button 
          key={item.id}
          className={`nav-item-float ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <div className="icon-wrapper">
             <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 1.5} />
             {activeTab === item.id && <span className="active-dot"></span>}
          </div>
          <span className="label">{item.label}</span>
        </button>
      ))}

      <style>{`
        .bottom-nav-floating {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05);
          border-radius: 24px;
          padding: 8px 12px;
          display: flex;
          gap: 8px;
          z-index: 1000;
          max-width: 90%;
          width: auto;
        }

        .nav-item-float {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          min-width: 64px;
          border-radius: 16px;
          cursor: pointer;
          color: #94A3B8;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .nav-item-float:active {
          transform: scale(0.92);
        }

        .nav-item-float.active {
          color: #1b4d3e;
          background: rgba(27, 77, 62, 0.05);
        }

        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .nav-item-float.active .icon-wrapper {
          transform: translateY(-2px);
        }

        .active-dot {
          position: absolute;
          bottom: -8px;
          width: 4px; height: 4px;
          background: #1b4d3e;
          border-radius: 50%;
          opacity: 0;
          animation: fadeUp 0.3s forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(-2px); }
        }

        .label {
          font-size: 10px;
          font-weight: 500;
          opacity: 0.8;
          transition: all 0.2s;
        }

        .nav-item-float.active .label {
          font-weight: 700;
          color: #1b4d3e;
        }
      `}</style>
    </nav>
  );
}

export default GlobalBottomNav;
