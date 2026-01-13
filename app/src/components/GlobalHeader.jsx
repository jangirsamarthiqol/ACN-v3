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
        // Placeholder or navigate to edge screen if exists
        break;
      default:
        onNavigate('home');
    }
  };

  return (
    <header className="app-bar">
      <div className="avatar" onClick={() => onNavigate('profile')} style={{cursor: 'pointer'}}>
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=agent" alt="Profile" />
        <span className="online-dot"></span>
      </div>
      <div className="header-tabs">
        <button 
          className={`tab ${activeTab === 'ACN' ? 'active' : ''}`}
          onClick={() => handleTabClick('ACN')}
        >
          ACN
        </button>
        <button 
          className={`tab ${activeTab === 'My Business' ? 'active' : ''}`}
          onClick={() => handleTabClick('My Business')}
        >
          My Business
        </button>
        <button 
          className={`tab ${activeTab === 'Services' ? 'active' : ''}`}
          onClick={() => handleTabClick('Services')}
        >
          Services
        </button>
        <button 
          className={`tab ${activeTab === 'Edge' ? 'active' : ''}`}
          onClick={() => handleTabClick('Edge')}
        >
          Edge
        </button>
      </div>
      <button className="icon-btn notification" onClick={() => onNavigate('notifications')}>
        <Bell size={22} />
        <span className="badge">3</span>
      </button>
    </header>
  );
}

export default GlobalHeader;
