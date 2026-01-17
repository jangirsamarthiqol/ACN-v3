import React, { useState } from 'react';
import { Home, Building2, FileText, Heart, LayoutDashboard, Mail, Scale, Activity, Plus, X } from 'lucide-react';
import '../screens/screens.css';

function GlobalBottomNav({ onNavigate, activeTab = 'home', context = 'home' }) {
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Helper to close menu when creating navigation
  const handleAddAction = (action) => {
    setShowAddMenu(false);
    onNavigate(action);
  };
  
  const navItems = {
    home: [
      { id: 'home', icon: Home, label: 'Home' },
      { id: 'search', icon: Building2, label: 'Properties' },
      { id: 'add-action', icon: Plus, label: 'Add', isAction: true }, // Central Add Button
      { id: 'requirements-marketplace', icon: FileText, label: 'Requirements' },
      { id: 'shortlist', icon: Heart, label: 'Shortlist' }
    ],
    business: [
      { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { id: 'properties', icon: Building2, label: 'My Properties' },
      { id: 'my-requirements', icon: FileText, label: 'My Requirements' },
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
    <div className="sticky bottom-0 left-0 right-0 w-full z-50 pointer-events-none">
      {/* Add Menu Popup */}
      {showAddMenu && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 bg-surface rounded-2xl shadow-xl border border-border-light p-2 flex flex-col gap-2 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-200 pointer-events-auto">
          <button 
            onClick={() => handleAddAction('add-property')}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-secondary transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Building2 size={20} />
            </div>
            <div>
              <span className="block text-sm font-bold text-text-primary">Add Inventory</span>
              <span className="block text-[10px] text-text-tertiary">List a new property</span>
            </div>
          </button>
          <button 
            onClick={() => handleAddAction('add-requirement')}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-secondary transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange">
              <FileText size={20} />
            </div>
            <div>
              <span className="block text-sm font-bold text-text-primary">Add Requirement</span>
              <span className="block text-[10px] text-text-tertiary">Post a client need</span>
            </div>
          </button>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-r border-b border-border-light transform rotate-45"></div>
        </div>
      )}

      {/* Overlay to close menu */}
      {showAddMenu && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={() => setShowAddMenu(false)} />
      )}

      <nav className="bg-surface/95 backdrop-blur-md border-t border-border flex items-center justify-around px-2 py-2 pb-6 pointer-events-auto relative z-50">
        {currentItems.map(item => {
          if (item.isAction) {
            return (
              <button
                key={item.id}
                onClick={() => setShowAddMenu(!showAddMenu)}
                className={`flex flex-col items-center justify-center -mt-6 w-14 h-14 rounded-full shadow-lg transition-transform active:scale-95 ${showAddMenu ? 'bg-text-primary rotate-45' : 'bg-primary'}`}
              >
                <item.icon size={28} color="white" strokeWidth={2.5} />
              </button>
            );
          }

          return (
            <a
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === item.id ? 'text-primary font-bold' : 'text-text-tertiary hover:text-text-secondary transition-colors font-medium'}`}
            >
              <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span className="text-[9px] mt-1 leading-none text-center">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default GlobalBottomNav;
