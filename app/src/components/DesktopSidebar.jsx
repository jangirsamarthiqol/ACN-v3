import React from 'react';
import { Home, LayoutDashboard, Building2, Zap, User, Settings, LogOut, Briefcase } from 'lucide-react';
import './DesktopLayout.css';

function DesktopSidebar({ activeTab, onNavigate }) {
  const menuItems = [
    { id: 'home', label: 'ACN Home', icon: Home },
    { id: 'dashboard', label: 'My Business', icon: LayoutDashboard },
    { id: 'edge', label: 'ACN Edge', icon: Zap },
    { id: 'services', label: 'Service Hub', icon: Briefcase },
  ];

  const bottomItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-header">
        <div className="logo-area">
          <span className="logo-icon">◆</span>
          <span className="logo-text">ACN v3</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <p className="nav-label">MENU</p>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${activeTab === item.id || (activeTab === 'search' && item.id === 'home') ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="nav-section mt-auto">
          <p className="nav-label">ACCOUNT</p>
          {bottomItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
          <button className="sidebar-link logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-mini-profile">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Samarth" alt="User" />
          <div className="user-info">
            <span className="name">Samarth Jangir</span>
            <span className="role">Premium Agent</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
