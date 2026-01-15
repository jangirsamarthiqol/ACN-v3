import React from 'react';
import { Bell } from 'lucide-react';
import '../screens/screens.css';

function GlobalHeader({ onNavigate, activeTab = 'ACN' }) {
  // Navigation mapping for top tabs
  const handleTabClick = (tabName) => {
    switch(tabName) {
      case 'ACN':
        onNavigate('home');
        break;
      case 'My Business':
        onNavigate('dashboard');
        break;
      case 'Services':
        onNavigate('services');
        break;
      case 'Edge':
        onNavigate('edge');
        break;
      default:
        onNavigate('home');
    }
  };

  return (
    <header className="premium-header-container">
      {/* Row 1: Identity & Actions */}
      <div className="header-top-row">
        <div className="identity-section" onClick={() => onNavigate('profile')}>
          <div className="avatar-ring-large">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
            <span className="online-dot-large"></span>
          </div>
          <div className="greeting-text">
            <span className="sub-greet">Good Morning,</span>
            <span className="main-name">Samarth</span>
          </div>
        </div>

        <button className="notification-btn-new" onClick={() => onNavigate('notifications')}>
          <Bell size={22} strokeWidth={2} />
          <span className="badge-pulse"></span>
        </button>
      </div>

      {/* Row 2: Context Navigation */}
      <div className="header-nav-row">
        <div className="segmented-control-scroll">
          {[
            { id: 'ACN', label: 'ACN' },
            { id: 'My Business', label: 'Business' },
            { id: 'Services', label: 'Services' },
            { id: 'Edge', label: 'Edge' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`segment-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .premium-header-container {
          background: rgba(252, 251, 247, 0.95);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        /* Top Row */
        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px 8px;
        }

        .identity-section {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .avatar-ring-large {
          width: 40px; height: 40px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #1b4d3e, #34d399); /* Premium Green Gradient */
          position: relative;
        }
        .avatar-ring-large img {
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 2px solid white;
          background: #f4f4f5;
        }
        .online-dot-large {
          position: absolute; bottom: 0; right: 0;
          width: 12px; height: 12px;
          background: #10B981;
          border: 2px solid white;
          border-radius: 50%;
        }

        .greeting-text {
          display: flex; flex-direction: column;
        }
        .sub-greet { font-size: 11px; color: #666; font-weight: 500; }
        .main-name { font-size: 16px; font-weight: 700; color: #1A1A1A; line-height: 1.1; }

        .notification-btn-new {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
          display: flex; align-items: center; justify-content: center;
          color: #1A1A1A;
          position: relative;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          transition: all 0.2s;
        }
        .notification-btn-new:active { transform: scale(0.95); }
        .badge-pulse {
          position: absolute; top: 10px; right: 10px;
          width: 8px; height: 8px;
          background: #EF4444; border: 1.5px solid white;
          border-radius: 50%;
        }

        /* Bottom Row - Nav */
        .header-nav-row {
          padding: 4px 16px 12px;
          border-top: 1px solid rgba(0,0,0,0.02);
        }

        .segmented-control-scroll {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          width: 100%;
        }

        .segment-btn {
          white-space: nowrap;
          padding: 8px 4px;
          border-radius: 100px;
          background: transparent;
          border: 1px solid transparent;
          font-size: 13px; font-weight: 600;
          color: #666;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .segment-btn:hover { background: rgba(0,0,0,0.03); }

        .segment-btn.active {
          background: #1b4d3e;
          color: white;
          box-shadow: 0 4px 12px rgba(27, 77, 62, 0.2);
        }
      `}</style>
    </header>
  );
}

export default GlobalHeader;
