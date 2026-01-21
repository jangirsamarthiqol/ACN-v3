import React, { useState } from 'react';
import { Search, ChevronDown, SlidersHorizontal, MoreVertical, Ruler, Mail, UserSearch } from 'lucide-react';
import BusinessBottomNav from '../components/BusinessBottomNav';
import GlobalHeader from '../components/GlobalHeader';

const MyInventoriesList = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Resale');

  const inventories = [
    {
      id: 1,
      title: 'Lodha Bellissimo',
      type: '3 BHK Apartment',
      location: 'Lower Parel',
      price: '₹8.50 Cr',
      pricePerSqFt: '₹42,500/sq.ft',
      area: '2,200 sq.ft (SBUA)',
      status: 'Live',
      statusClass: 'bg-status-live text-status-live-text',
      enquiries: 12,
      matches: 18,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfkB547B4Yggv8gdc1LVoRNgLumYaqRLywPuhOnbxFXn6ljUwed5vRtxZf103_aBT8JxZGREoqyRya5HbWPJQh-hdBrrJ2KLERGnmZk9E6YpwraAogPaaqSbPea-sRagTwGsGXw-zKItuedafi92dwzpBmBluWrBZussCNlYYPl-dFF_Nb6mlO4iGU1J0K8MscAILyM5L0jbu6OHZm0-dmRb0cu6iXkCTNGbUMZ3Yfy6U2vTrN3L_VSmy1kg2jKhe8XFdY3250ip0'
    },
    {
      id: 2,
      title: 'Godrej Platinum',
      type: '2 BHK Apartment',
      location: 'Vikhroli',
      price: '₹3.20 Cr',
      pricePerSqFt: '₹28,000/sq.ft',
      area: '1,150 sq.ft (SBUA)',
      status: 'Under Review',
      statusClass: 'bg-status-review text-status-review-text',
      enquiries: 0,
      matches: 0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7sXs1v5-pyoGFFXM0PBt1ycu3AuV7PopLzI4Gf5iHxDEFr6rxp6chlM2zn1rktgMubkksposmAKAPJ22qxM1veQtU13vlR6ThY5VeNhcl-LtPkZunEzXjueRSf57Mhr8LIosa9trvGmQ1d5xgx7rd7sbHvOuI-7GbFaJy4TF9ByFtQ7oNlt6TSpKEugdSYR9jtqlETMwF2v2wjpEmr9NAGgRvw1IuGJTE7-Wmgj93yMg8Pk4Wz2Q1aTe_PioWZLm_Ol5bK24pue0'
    },
    {
      id: 3,
      title: 'Hiranandani Gardens',
      type: '4 BHK Villa',
      location: 'Powai',
      price: '₹12.75 Cr',
      pricePerSqFt: '₹36,400/sq.ft',
      area: '3,500 sq.ft (SBUA)',
      status: 'Delisted',
      statusClass: 'bg-status-delisted text-status-delisted-text',
      enquiries: 45,
      matches: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8AsegQHLw-KfQl1f-9ojJcXtTz25P35h2Az6J-mgL-Y2igksc3Qbbgq0MMMqy9V6IgOYxrNenLo7wGUhCGH_ofGL_2H3tkAMZc_6QQO5mZOwUGG3HRx30u_g4EeFhRAZSrtMnUG4rVQ8MlkzwjcM2RkRtkkUS-ieFy9PSs1eyWXzbSm6qEolxuYR2vGoxzqbdZDRm8A_Q0_HftMWPa8gkpfBW33nvS18yASon5fs9kUpXlLfwuKujqyJsabGRkcQpqUGzPrxvuW4'
    }
  ];

  return (
    <div className="bg-background-light text-text-primary flex justify-center min-h-screen font-display">
      <div className="w-full max-w-md min-h-screen pb-32 flex flex-col">
        {/* Status Bar is handled by MobileFrame */}
        <GlobalHeader activeTab="My Business" onNavigate={onNavigate} title="My Inventories" />
        
        {/* Search & Header Section */}
        <div className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm px-4 pt-2 pb-4 space-y-4 border-b border-border-light">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary" size={20} />
            <input 
              className="w-full bg-background-secondary border-none rounded-2xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-primary placeholder-text-tertiary" 
              placeholder="Search inventories, localities..." 
              type="text"
            />
          </div>
          
          <div className="flex p-1 bg-background-secondary rounded-2xl">
            {['Resale', 'Rental', 'Commercial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm transition-all rounded-[14px] ${
                  activeTab === tab 
                    ? 'font-bold bg-primary text-white shadow-sm' 
                    : 'font-medium text-text-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <input className="rounded border-border-dark text-primary focus:ring-primary h-5 w-5" type="checkbox"/>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-tight">Select Multiple</span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold shadow-sm text-text-secondary">
                 Status <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold shadow-sm text-text-secondary">
                 <SlidersHorizontal size={14} /> More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Inventory List */}
        <div className="px-4 space-y-4">
          {inventories.map((inventory) => (
            <div key={inventory.id} className={`bg-surface rounded-3xl shadow-sm border border-border overflow-hidden ${inventory.status === 'Under Review' ? 'opacity-90' : ''}`}>
              <div className="flex p-4 gap-4">
                <div className={`w-24 h-24 rounded-2xl bg-accent-mint-lighter flex-shrink-0 relative overflow-hidden ${inventory.status === 'Under Review' ? 'grayscale' : ''}`}>
                  <img alt="Inventory" className="w-full h-full object-cover" src={inventory.image} />
                  {inventory.status === 'Live' && (
                    <div className="absolute top-1 left-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-lg">
                      <span className="text-[8px] font-bold text-primary uppercase">New</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-text-primary truncate">{inventory.title}</h3>
                    <MoreVertical className="text-text-tertiary" size={20} />
                  </div>
                  <p className="text-xs font-semibold text-text-secondary mb-1">{inventory.type} • {inventory.location}</p>
                  
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-lg font-bold text-primary">{inventory.price}</span>
                    <span className="text-[10px] text-text-tertiary font-medium">{inventory.pricePerSqFt}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center gap-1">
                    <Ruler className="text-text-tertiary" size={14} />
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">{inventory.area}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-4 py-3 bg-background-secondary flex items-center justify-between border-y border-border-light">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wider ${inventory.statusClass}`}>
                    {inventory.status}
                  </span>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Mail size={16} />
                    <span className="text-[10px] font-bold">{inventory.enquiries} Enquiries</span>
                  </div>
                </div>
                
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${inventory.matches > 0 ? 'text-accent-blue bg-blue-50' : 'text-text-tertiary bg-background-tertiary'}`}>
                  <UserSearch size={16} className={inventory.matches > 0 ? 'text-accent-blue' : ''} />
                  <span className="text-[10px] font-bold">{inventory.matches} Matched Reqs</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BusinessBottomNav activeTab="inventories" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default MyInventoriesList;
