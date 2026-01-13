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
    <nav className="bottom-nav">
      {currentItems.map(item => (
        <button 
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <item.icon size={22} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default GlobalBottomNav;
