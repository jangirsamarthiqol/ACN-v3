import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import './DesktopLayout.css';
import { Bell, Search } from 'lucide-react';

import { Smartphone } from 'lucide-react'; // Added import

function DesktopLayout({ children, currentScreen, onNavigate, onSwitchToMobile }) {
  // Map screen IDs to Sidebar Tabs
  const getActiveTab = () => {
    if (['home', 'search', 'search-results', 'property-detail'].includes(currentScreen)) return 'home';
    if (['dashboard', 'properties', 'requirements', 'enquiries'].includes(currentScreen)) return 'dashboard';
    if (['edge'].includes(currentScreen)) return 'edge';
    if (['services', 'marketing', 'legal-services'].includes(currentScreen)) return 'services';
    return currentScreen;
  };

  return (
    <div className="desktop-layout">
      <DesktopSidebar activeTab={getActiveTab()} onNavigate={onNavigate} />
      
      <main className="desktop-main">
        {/* Desktop Header */}
        <header className="desktop-header">
          <div className="header-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search properties, projects, or agents..." />
          </div>
          
          <div className="header-actions">
            <button className="icon-btn-ghost">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <button className="icon-btn-ghost" onClick={onSwitchToMobile} title="Switch to Mobile View">
              <Smartphone size={20} />
            </button>
            <button className="primary-btn-sm" onClick={() => onNavigate('add-property')}>
              + Post Property
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="desktop-content-scroll">
          <div className="screen-wrapper-desktop">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DesktopLayout;
