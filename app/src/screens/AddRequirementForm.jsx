import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Plus, X, MapPin, Search } from 'lucide-react';
import './screens.css';

function AddRequirementForm({ onNavigate }) {
  const [reqType, setReqType] = useState('buy');
  
  return (
    <div className="bg-background-light min-h-screen pb-24 font-display text-text-primary">
      {/* Header - Focused View */}
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-border-light px-4 py-3 flex items-center justify-between">
        <button 
          className="w-10 h-10 -ml-2 flex items-center justify-center text-text-secondary rounded-full hover:bg-background-secondary transition-colors"
          onClick={() => onNavigate('my-requirements')}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-text-primary">Add Requirement</h1>
        <button className="text-sm font-bold text-accent-purple px-3 py-1.5 bg-accent-purple/10 rounded-full hover:bg-accent-purple/20 transition-colors">
          Save
        </button>
      </header>

      {/* Form Content */}
      <div className="p-4 space-y-6">
        {/* Requirement Type */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Requirement Type</h3>
          <div className="bg-white p-2 rounded-2xl border border-border shadow-sm">
            <div className="flex bg-background-secondary p-1 rounded-xl">
               {[
                 { id: 'buy', label: '🛒 Buy' },
                 { id: 'rent', label: '🏠 Rent' },
                 { id: 'commercial', label: '🏢 Commercial' }
               ].map(type => (
                 <button 
                   key={type.id}
                   onClick={() => setReqType(type.id)}
                   className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                     reqType === type.id 
                     ? 'bg-white text-accent-purple shadow-sm ring-1 ring-black/5' 
                     : 'text-text-tertiary hover:text-text-secondary'
                   }`}
                 >
                   {type.label}
                 </button>
               ))}
            </div>
          </div>
        </section>

        {/* Property Type */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Property Type</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              {['Apartment', 'Villa', 'Plot', 'Independent House'].map((type, i) => (
                <label key={type} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${i === 0 ? 'bg-accent-purple/5 border-accent-purple' : 'bg-background-secondary border-transparent'}`}>
                  <input type="checkbox" defaultChecked={i===0} className="w-4 h-4 rounded text-accent-purple focus:ring-accent-purple" />
                  <span className={`text-xs font-bold ${i === 0 ? 'text-accent-purple' : 'text-text-secondary'}`}>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Budget */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Budget Range</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">Minimum</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-sm font-bold text-text-tertiary">₹</span>
                  <input type="text" className="w-full bg-background-secondary border-none rounded-xl pl-6 pr-3 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="50 Lakhs" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">Maximum</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-sm font-bold text-text-tertiary">₹</span>
                  <input type="text" className="w-full bg-background-secondary border-none rounded-xl pl-6 pr-3 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="1 Crore" />
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-xs font-medium text-text-tertiary mb-2 block">Quick Select:</span>
              <div className="flex flex-wrap gap-2">
                {['< 50L', '50L-1Cr', '1-2Cr', '> 2Cr'].map((opt, i) => (
                  <button key={opt} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${i === 1 ? 'bg-accent-purple text-white border-accent-purple' : 'bg-white border-border text-text-secondary'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BHK & Area */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">BHK & Area</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div>
              <label className="text-xs font-bold text-text-secondary mb-2 block">BHK Preference</label>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'].map((opt, i) => (
                  <button key={opt} className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${[1, 2].includes(i) ? 'bg-accent-purple text-white border-accent-purple' : 'bg-white border-border text-text-secondary'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">Min Area (sq.ft)</label>
                <input type="number" className="w-full bg-background-secondary border-none rounded-xl px-3 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="1000" />
              </div>
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">Max Area (sq.ft)</label>
                <input type="number" className="w-full bg-background-secondary border-none rounded-xl px-3 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="1500" />
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Preferred Locations</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3.5 text-text-tertiary" />
              <input type="text" className="w-full bg-background-secondary border-none rounded-xl pl-9 pr-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-tertiary focus:ring-2 focus:ring-accent-purple/20" placeholder="Search and add locations..." />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['Koramangala', 'HSR Layout', 'Whitefield'].map(loc => (
                <div key={loc} className="pl-3 pr-2 py-1.5 bg-accent-purple/10 text-accent-purple rounded-full text-xs font-bold flex items-center gap-1">
                  {loc} <X size={12} className="cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Preferences */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Additional Preferences</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div>
              <label className="text-xs font-bold text-text-secondary mb-2 block">Possession</label>
              <div className="flex flex-wrap gap-2">
                {['Ready to Move', 'Under Construction', 'Any'].map((opt, i) => (
                  <button key={opt} className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${i === 0 ? 'bg-accent-purple/5 border-accent-purple text-accent-purple' : 'bg-white border-border text-text-secondary'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-text-secondary mb-2 block">Furnishing</label>
              <div className="flex flex-wrap gap-2">
                {['Fully Furnished', 'Semi-Furnished', 'Unfurnished', 'Any'].map((opt, i) => (
                  <button key={opt} className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${i === 1 ? 'bg-accent-purple/5 border-accent-purple text-accent-purple' : 'bg-white border-border text-text-secondary'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Details */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Client Details (Optional)</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div>
              <label className="text-xs font-bold text-text-secondary mb-1.5 block">Client Name</label>
              <input type="text" className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="Enter client name" />
            </div>
            <div>
              <label className="text-xs font-bold text-text-secondary mb-1.5 block">Client Phone</label>
              <input type="tel" className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary focus:ring-2 focus:ring-accent-purple/20" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="text-xs font-bold text-text-secondary mb-1.5 block">Notes</label>
              <textarea className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary focus:ring-2 focus:ring-accent-purple/20 resize-none" rows={3} placeholder="Any specific requirements..."></textarea>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3 z-50">
        <button className="flex-1 py-3.5 rounded-xl border border-border text-sm font-bold text-text-secondary bg-white hover:bg-gray-50 transition-colors" onClick={() => onNavigate('my-requirements')}>
           Cancel
        </button>
        <button className="flex-[2] py-3.5 rounded-xl bg-accent-purple text-sm font-bold text-white hover:bg-accent-purple-dark shadow-lg shadow-accent-purple/20 transition-all" onClick={() => onNavigate('my-requirements')}>
           Save Requirement
        </button>
      </div>
    </div>
  )
}

export default AddRequirementForm
