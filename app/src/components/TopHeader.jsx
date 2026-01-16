import React from 'react';
import { Bell } from 'lucide-react';

const TopHeader = ({ activeSection = 'Business', onNavigate }) => {
  const tabs = ['ACN', 'Business', 'Services', 'Edge'];

  return (
    <div className="bg-background-light dark:bg-background-dark pt-2 pb-4 px-4 space-y-4">
      {/* Profile Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Samarth" 
                alt="Profile" 
                className="w-full h-full rounded-full bg-slate-100"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Good Morning,</p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-none">Samarth</h2>
          </div>
        </div>
        
        <button className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center shadow-sm relative">
          <Bell size={20} className="text-slate-700 dark:text-slate-300" />
          <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></div>
        </button>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeSection === tab
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
