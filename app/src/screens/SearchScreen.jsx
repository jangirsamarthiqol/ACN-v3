import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  Filter, 
  ChevronDown, 
  Clock, 
  ChevronUp,
  Check
} from 'lucide-react';
import './screens.css';

const SearchScreen = ({ onNavigate, params = {} }) => {
  const isCommercial = params.context === 'Commercial';
  const [searchText, setSearchText] = useState('');
  const [inventoryType, setInventoryType] = useState(isCommercial ? 'Resale' : (params.context || 'Buy'));
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Filter States
  const [selectedBHK, setSelectedBHK] = useState([]);
  const [budgetRange, setBudgetRange] = useState({ min: '', max: '' });
  const [selectedStatus, setSelectedStatus] = useState([]);

  const toggleBHK = (bhk) => {
    if (selectedBHK.includes(bhk)) {
      setSelectedBHK(selectedBHK.filter(b => b !== bhk));
    } else {
      setSelectedBHK([...selectedBHK, bhk]);
    }
  };

  const recentSearches = [
    { text: 'Whitefield, 3BHK, > ₹1Cr', type: 'Residential' },
    { text: 'Indiranagar, Rent, 2BHK', type: 'Rent' },
    { text: 'Project ID: ACN-8821', type: 'Project' },
  ];

  return (
    <div className="screen bg-background-light h-full flex flex-col relative">
      {/* Top Search Header */}
      <header className="bg-surface px-4 py-3 border-b border-border-light flex items-center gap-3 shrink-0">
        <button className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full active:bg-background-secondary text-text-primary transition-colors" onClick={() => onNavigate('home')}>
          <ArrowLeft size={22} />
        </button>
        
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
          <input 
            type="text" 
            className="w-full bg-background-secondary border border-transparent focus:border-primary/30 focus:bg-surface focus:ring-4 focus:ring-primary/10 rounded-xl py-2.5 pl-10 pr-10 text-sm font-medium text-text-primary outline-none transition-all placeholder:text-text-tertiary" 
            placeholder="Search by project, location or ID" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
          {searchText && (
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary" onClick={() => setSearchText('')}>
              <X size={16} />
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Context Tabs */}
        <div className="bg-surface px-4 py-3 border-b border-border-light">
           <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {(isCommercial ? ['Resale', 'Rental'] : ['Buy', 'Rent', 'Commercial', 'New Projects']).map(type => (
                <button 
                  key={type}
                  onClick={() => setInventoryType(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
                    inventoryType === type 
                      ? 'bg-primary text-white border-primary shadow-sm' 
                      : 'bg-surface border-border-light text-text-secondary hover:border-primary/30'
                  }`}
                >
                  {type}
                </button>
              ))}
           </div>
        </div>

        {/* Inline Filters Section */}
        <div className="bg-surface mt-2 border-y border-border-light p-5 space-y-5">
           
           {/* Row 1: Budget & Config */}
           <div className="flex flex-col gap-5">
              
              {/* Asset Type / Category */}
              <div>
                <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Inventory Category</label>
                <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-5 px-5">
                   {['Apartment', 'Villa', 'Indep. House', 'Plot', 'Studio', 'Penthouse'].map(type => (
                     <button key={type} className="px-4 py-2 rounded-xl text-sm font-semibold border border-border-light bg-background-light text-text-secondary whitespace-nowrap hover:bg-background-secondary hover:border-border hover:text-text-primary transition-colors flex-shrink-0">
                       {type}
                     </button>
                   ))}
                </div>
              </div>

              {/* Configuration */}
              <div>
                <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Configuration</label>
                <div className="flex flex-wrap gap-2">
                   {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'].map(bhk => {
                     const isSelected = selectedBHK.includes(bhk);
                     return (
                       <button 
                        key={bhk}
                        onClick={() => toggleBHK(bhk)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all flex items-center gap-1.5 flex-1 justify-center ${
                          isSelected 
                            ? 'bg-primary/5 border-primary text-primary' 
                            : 'bg-background-light border-transparent text-text-secondary hover:bg-background-secondary'
                        }`}
                       >
                         {isSelected && <Check size={14} />}
                         {bhk}
                       </button>
                     )
                   })}
                </div>
              </div>

              {/* Budget Inputs */}
              <div>
                <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Budget Range</label>
                <div className="flex items-center gap-3">
                   <div className="relative flex-1">
                      <select 
                        className="w-full appearance-none bg-background-light border border-transparent rounded-xl px-4 py-2.5 text-sm font-medium text-text-primary focus:border-primary/50 focus:bg-surface outline-none"
                        value={budgetRange.min}
                        onChange={(e) => setBudgetRange({...budgetRange, min: e.target.value})}
                      >
                         <option value="">Min Price</option>
                         <option value="20L">₹20 Lakhs</option>
                         <option value="50L">₹50 Lakhs</option>
                         <option value="1Cr">₹1 Cr</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                   </div>
                   <span className="text-text-tertiary font-medium">-</span>
                   <div className="relative flex-1">
                      <select 
                        className="w-full appearance-none bg-background-light border border-transparent rounded-xl px-4 py-2.5 text-sm font-medium text-text-primary focus:border-primary/50 focus:bg-surface outline-none"
                        value={budgetRange.max}
                        onChange={(e) => setBudgetRange({...budgetRange, max: e.target.value})}
                      >
                         <option value="">Max Price</option>
                         <option value="50L">₹50 Lakhs</option>
                         <option value="1Cr">₹1 Cr</option>
                         <option value="5Cr">₹5 Cr</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                   </div>
                </div>
              </div>

           </div>
           
           {/* Expandable Advanced Filters */}
           <div>
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between text-sm font-bold text-primary w-full py-2 px-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
              >
                  <span>{showAdvanced ? 'Hide Advanced Filters' : 'Show Advanced Filters'}</span>
                  {showAdvanced ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {showAdvanced && (
                <div className="pt-6 space-y-6 animate-in slide-in-from-top-2 fade-in duration-200">
                    
                    {/* Status & Possession */}
                    <div>
                      <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Possession Status</label>
                      <div className="flex flex-wrap gap-2">
                        {['Ready to Move', 'In 1 Year', 'In 2 Years', 'New Launch'].map(status => (
                          <button key={status} className="px-3 py-2 rounded-lg border border-border-light bg-surface text-xs font-semibold text-text-secondary hover:border-primary hover:text-primary transition-colors flex-1 text-center whitespace-nowrap">
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Furnished & Bathrooms */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Furnishing</label>
                          <div className="flex flex-col gap-2">
                            {['Fully Furnished', 'Semi Furnished', 'Unfurnished'].map(item => (
                              <button key={item} className="px-3 py-2 rounded-lg border border-border-light bg-surface text-xs font-semibold text-text-secondary text-left hover:border-primary hover:text-primary transition-colors">
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                           <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Bathrooms</label>
                           <div className="grid grid-cols-2 gap-2">
                             {['1', '2', '3', '4+'].map(num => (
                               <button key={num} className="px-3 py-2 rounded-lg border border-border-light bg-surface text-xs font-semibold text-text-secondary hover:border-primary hover:text-primary transition-colors text-center">
                                 {num}
                               </button>
                             ))}
                           </div>
                        </div>
                    </div>

                    {/* Tenant Preference (Only for Rent) */}
                    {inventoryType === 'Rent' && (
                        <div>
                          <label className="text-xs font-bold text-text-secondary mb-2 block uppercase tracking-wide">Tenant Preference</label>
                          <div className="flex gap-2">
                            {['Family', 'Bachelor', 'Company'].map(pref => (
                              <button key={pref} className="px-4 py-2 rounded-lg border border-border-light bg-surface text-xs font-semibold text-text-secondary hover:border-primary hover:text-primary transition-colors flex-1">
                                {pref}
                              </button>
                            ))}
                          </div>
                        </div>
                    )}

                    {/* Amenities */}
                    <div>
                       <label className="text-xs font-bold text-text-secondary mb-3 block uppercase tracking-wide">Amenities</label>
                       <div className="grid grid-cols-3 gap-2">
                          {['Parking', 'Lift', 'Power Backup', 'Gym', 'Club House', 'Swimming Pool', 'Security', 'Park', 'Gas Pipeline'].map(amenity => (
                             <button key={amenity} className="px-2 py-2 rounded-lg border border-border-light bg-surface text-[11px] font-medium text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors text-center truncate">
                                {amenity}
                             </button>
                          ))}
                       </div>
                    </div>

                </div>
              )}
           </div>

        </div>

        {/* Divider */}
        <div className="h-2 bg-background-tertiary/50"></div>

        {/* Recent Searches */}
        <div className="p-5">
           <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-text-primary">Recent Searches</h3>
              <button className="text-xs font-bold text-text-tertiary hover:text-primary transition-colors">Clear</button>
           </div>
           
           <div className="space-y-4">
              {recentSearches.map((search, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer" onClick={() => onNavigate('search-results')}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-tertiary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                         <Clock size={18} />
                      </div>
                      <div>
                         <p className="text-sm font-medium text-text-primary">{search.text}</p>
                         <p className="text-[10px] uppercase font-bold text-text-tertiary tracking-wide">{search.type}</p>
                      </div>
                   </div>
                   <button className="text-text-muted hover:text-accent-red transition-colors p-2">
                      <X size={16} />
                   </button>
                </div>
              ))}
           </div>
        </div>

      </main>

      {/* Floating Action CTA */}
      <div className="absolute bottom-6 left-5 right-5 z-50">
        <button 
           className="w-full bg-primary text-white h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
           onClick={() => onNavigate('search-results')}
        >
           <Search size={20} strokeWidth={2.5} />
           View {selectedBHK.length > 0 ? '14' : '420+'} Inventories
        </button>
      </div>

      <style>{`
         .hide-scrollbar::-webkit-scrollbar {
             display: none;
         }
         .hide-scrollbar {
             -ms-overflow-style: none;
             scrollbar-width: none;
         }
      `}</style>
    </div>
  );
};

export default SearchScreen;
