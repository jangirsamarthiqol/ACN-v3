import React from 'react';
import { LayoutDashboard, Building, FileText, Mail, Heart } from 'lucide-react';

const BusinessBottomNav = ({ activeTab, onNavigate }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 w-full z-50">
      <nav className="bg-surface/95 backdrop-blur-md border-t border-border flex items-center justify-around px-2 py-2 pb-6"> {/* pb-6 for home indicator safety */}
        <a 
          onClick={() => onNavigate('dashboard')} 
          className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === 'dashboard' ? 'text-primary' : 'text-text-tertiary hover:text-text-secondary transition-colors'}`}
        >
          <LayoutDashboard size={20} strokeWidth={activeTab === 'dashboard' ? 2.5 : 2} />
          <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === 'dashboard' ? 'font-bold' : 'font-medium'}`}>Dashboard</span>
        </a>
        <a 
          onClick={() => onNavigate('properties')} 
          className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === 'properties' ? 'text-primary' : 'text-text-tertiary hover:text-text-secondary transition-colors'}`}
        >
          <Building size={20} strokeWidth={activeTab === 'properties' ? 2.5 : 2} />
          <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === 'properties' ? 'font-bold' : 'font-medium'}`}>My<br/>Properties</span>
        </a>
        <a 
          onClick={() => onNavigate('my-requirements')} 
          className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === 'my-requirements' ? 'text-primary' : 'text-text-tertiary hover:text-text-secondary transition-colors'}`}
        >
          <FileText size={20} strokeWidth={activeTab === 'my-requirements' ? 2.5 : 2} />
          <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === 'my-requirements' ? 'font-bold' : 'font-medium'}`}>My<br/>Reqs</span>
        </a>
        <a 
          onClick={() => onNavigate('enquiries')} 
          className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === 'enquiries' ? 'text-primary' : 'text-text-tertiary hover:text-text-secondary transition-colors'}`}
        >
          <Mail size={20} strokeWidth={activeTab === 'enquiries' ? 2.5 : 2} />
          <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === 'enquiries' ? 'font-bold' : 'font-medium'}`}>My<br/>Enquiries</span>
        </a>
        <a 
          onClick={() => onNavigate('wishlist')} 
          className={`flex flex-col items-center py-1 px-1 cursor-pointer flex-1 ${activeTab === 'wishlist' ? 'text-primary' : 'text-text-tertiary hover:text-text-secondary transition-colors'}`}
        >
          <Heart size={20} strokeWidth={activeTab === 'wishlist' ? 2.5 : 2} />
          <span className={`text-[9px] mt-1 leading-none text-center ${activeTab === 'wishlist' ? 'font-bold' : 'font-medium'}`}>Wishlist</span>
        </a>
      </nav>
    </div>
  );
};

export default BusinessBottomNav;
