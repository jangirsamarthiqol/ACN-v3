import React, { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import BusinessBottomNav from '../components/BusinessBottomNav';
import TopHeader from '../components/TopHeader';

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
      statusColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
      matchColor: 'text-indigo-600 dark:text-indigo-400',
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
      statusColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
      matchColor: 'text-indigo-600 dark:text-indigo-400',
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
      statusColor: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400',
      matchColor: 'text-indigo-600 dark:text-indigo-400',
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
      statusColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
      matchColor: 'text-indigo-600 dark:text-indigo-400',
      opacity: 'opacity-100'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex justify-center min-h-screen font-display">
      <div className="w-full max-w-md min-h-screen relative flex flex-col pb-32">
        {/* Status Bar is handled by MobileFrame */}
        <TopHeader activeSection="Business" onNavigate={onNavigate} />
        
        {/* Sticky Header Section */}
        <div className="px-4 pt-2 pb-4 space-y-4 sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
              placeholder="Search requirements..." 
              type="text"
            />
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl flex">
            <button 
              onClick={() => setActiveTab('Buy')}
              className={`flex-1 py-2 text-sm font-bold rounded-xl shadow-sm transition-all ${activeTab === 'Buy' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white' : 'bg-transparent text-slate-500 dark:text-slate-400 shadow-none'}`}
            >
              Buy
            </button>
            <button 
              onClick={() => setActiveTab('Rent')}
              className={`flex-1 py-2 text-sm font-medium transition-all ${activeTab === 'Rent' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl shadow-sm font-bold' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Rent
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-700 rounded-md flex items-center justify-center group-active:scale-95 transition-transform">
                <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0"></div>
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Select Multiple</span>
            </label>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-xs font-semibold">
                Status <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-xs font-semibold">
                <Filter size={16} /> Filters
              </button>
            </div>
          </div>
        </div>

        {/* Requirements List */}
        <div className="flex-1 px-4 py-4 space-y-4">
          {requirements.map((req) => (
            <div key={req.id} className={`bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-3 ${req.opacity}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{req.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase mt-0.5">{req.type}</p>
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${req.statusColor}`}>
                  {req.status}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-y-2">
                <div className="w-1/2">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Budget Range</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{req.budget}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Matched Properties</p>
                  <p className={`text-sm font-bold ${req.matchColor}`}>{req.matches} Matches</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-slate-50 dark:border-slate-800/50">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight mb-1">Preferred Localities</p>
                <div className="flex flex-wrap gap-1.5">
                  {req.localities.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-medium text-slate-700 dark:text-slate-300">
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
