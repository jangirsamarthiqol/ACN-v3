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
    <div className="sticky bottom-0 left-0 right-0 w-full z-50">
      <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 py-2 pb-6">
        {currentItems.map(item => (
          <a
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === item.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'}`}
          >
            <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === item.id ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default GlobalBottomNav;
