import React, { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import BusinessBottomNav from '../components/BusinessBottomNav';
import GlobalHeader from '../components/GlobalHeader';

const MyRequirementsList = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Buy');

  const requirements = [
    {
      id: 1,
      name: 'Rahul Sharma',
      type: '3 BHK Apartment',
      budget: '₹2.5 Cr - 3.2 Cr',
      matches: 14,
      localities: ['Bandra West', 'Khar', '+2 more'],
      status: 'Open',
      statusColor: 'bg-requirement-open text-requirement-open-text',
      matchColor: 'text-text-purple',
      opacity: 'opacity-100'
    },
    {
      id: 2,
      name: 'Anjali Mehta',
      type: 'Independent Villa',
      budget: '₹5.0 Cr - 7.5 Cr',
      matches: 5,
      localities: ['Worli', 'Lower Parel'],
      status: 'Pending',
      statusColor: 'bg-requirement-pending text-requirement-pending-text',
      matchColor: 'text-text-purple',
      opacity: 'opacity-100'
    },
    {
      id: 3,
      name: 'Vikram Singhania',
      type: 'Commercial Showroom',
      budget: '₹10 Cr - 12 Cr',
      matches: 0,
      localities: ['Andheri East'],
      status: 'Closed',
      statusColor: 'bg-requirement-closed text-requirement-closed-text',
      matchColor: 'text-text-purple',
      opacity: 'opacity-60'
    },
    {
      id: 4,
      name: 'Priya Kapoor',
      type: '2 BHK Flat',
      budget: '₹1.2 Cr - 1.5 Cr',
      matches: 28,
      localities: ['Powai', 'Chandivali'],
      status: 'Open',
      statusColor: 'bg-requirement-open text-requirement-open-text',
      matchColor: 'text-text-purple',
      opacity: 'opacity-100'
    }
  ];

  return (
    <div className="bg-background-light text-text-primary flex justify-center min-h-screen font-display">
      <div className="w-full max-w-md min-h-screen relative flex flex-col pb-32">
        {/* Status Bar is handled by MobileFrame */}
        <GlobalHeader activeTab="My Business" onNavigate={onNavigate} title="My Requirements" />
        
        {/* Sticky Header Section */}
        <div className="px-4 pt-2 pb-4 space-y-4 sticky top-0 bg-background-light/95 backdrop-blur-md z-50 border-b border-border-light">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} />
            <input 
              className="w-full pl-10 pr-4 py-3 bg-background-secondary border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none text-text-primary placeholder-text-tertiary" 
              placeholder="Search requirements..." 
              type="text"
            />
          </div>
          
          <div className="bg-background-secondary p-1 rounded-2xl flex">
            <button 
              onClick={() => setActiveTab('Buy')}
              className={`flex-1 py-2 text-sm transition-all ${activeTab === 'Buy' ? 'bg-primary-black text-white font-bold rounded-xl shadow-sm' : 'bg-transparent text-text-secondary font-medium'}`}
            >
              Buy
            </button>
            <button 
              onClick={() => setActiveTab('Rent')}
              className={`flex-1 py-2 text-sm transition-all ${activeTab === 'Rent' ? 'bg-primary-black text-white rounded-xl shadow-sm font-bold' : 'text-text-secondary font-medium'}`}
            >
              Rent
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 border-2 border-border-dark rounded-md flex items-center justify-center group-active:scale-95 transition-transform">
                <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0"></div>
              </div>
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Select Multiple</span>
            </label>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-surface border border-border rounded-full shadow-sm text-xs font-semibold text-text-secondary">
                Status <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-surface border border-border rounded-full shadow-sm text-xs font-semibold text-text-secondary">
                <Filter size={16} /> Filters
              </button>
            </div>
          </div>
        </div>

        {/* Requirements List */}
        <div className="flex-1 px-4 py-4 space-y-4">
          {requirements.map((req) => (
            <div key={req.id} className={`bg-surface p-4 rounded-3xl shadow-sm border border-border space-y-3 ${req.opacity}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-text-primary leading-tight">{req.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase mt-0.5">{req.type}</p>
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${req.statusColor}`}>
                  {req.status}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-y-2">
                <div className="w-1/2">
                  <p className="text-[10px] text-text-tertiary uppercase font-bold tracking-tight">Budget Range</p>
                  <p className="text-sm font-bold text-text-secondary">{req.budget}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-[10px] text-text-tertiary uppercase font-bold tracking-tight">Matched Properties</p>
                  <p className={`text-sm font-bold ${req.matchColor}`}>{req.matches} Matches</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-border-light">
                <p className="text-[10px] text-text-tertiary uppercase font-bold tracking-tight mb-1">Preferred Localities</p>
                <div className="flex flex-wrap gap-1.5">
                  {req.localities.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-background-tertiary rounded-md text-[10px] font-medium text-text-secondary">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        <BusinessBottomNav activeTab="requirements" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default MyRequirementsList;
