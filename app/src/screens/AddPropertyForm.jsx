import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload, ChevronDown, Plus, X, MapPin, Building2, Home } from 'lucide-react';
import './screens.css';

function AddPropertyForm({ onNavigate }) {
  const [activeType, setActiveType] = useState('apartment');
  const [photos, setPhotos] = useState([]);

  return (
    <div className="bg-background-light min-h-screen pb-24 font-display text-text-primary">
      {/* Header - Focused View */}
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-border-light px-4 py-3 flex items-center justify-between">
        <button 
          className="w-10 h-10 -ml-2 flex items-center justify-center text-text-secondary rounded-full hover:bg-background-secondary transition-colors"
          onClick={() => onNavigate('properties')}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-text-primary">Add Property</h1>
        <button className="text-sm font-bold text-primary px-3 py-1.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
          Save Draft
        </button>
      </header>

      {/* Progress */}
      <div className="h-1 bg-border-light w-full">
        <div className="h-full bg-primary w-1/3 rounded-r-full"></div>
      </div>

      {/* Form Content */}
      <div className="p-4 space-y-6">
        {/* Photos */}
        <section>
          <div className="flex justify-between items-end mb-3">
             <h3 className="text-base font-bold text-text-primary">Photos & Videos</h3>
             <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">0 of 5 Added</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 h-40 border-2 border-dashed border-primary/30 bg-primary/5 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Camera size={24} />
              </div>
              <span className="text-sm font-bold text-primary">Add Cover Photo</span>
              <span className="text-[10px] text-text-tertiary">Tap to upload or take photo</span>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 border border-dashed border-border-dark bg-background-secondary rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors text-text-tertiary hover:text-text-secondary">
                <Plus size={24} />
              </div>
            ))}
          </div>
        </section>

        {/* Property Type */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Property Type</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'apartment', label: 'Apartment', icon: Building2 },
                { id: 'villa', label: 'Villa', icon: Home },
                { id: 'plot', label: 'Plot', icon: MapPin },
                { id: 'commercial', label: 'Commercial', icon: Building2 }
              ].map(type => (
                <button 
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                    activeType === type.id 
                    ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary ring-offset-0' 
                    : 'border-border bg-background-secondary/50 text-text-secondary'
                  }`}
                >
                  <type.icon size={20} />
                  <span className="text-sm font-bold">{type.label}</span>
                </button>
              ))}
            </div>
            
            <div className="pt-2">
              <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wide">Transaction Type</label>
              <div className="flex bg-background-secondary p-1 rounded-xl">
                {['Resale', 'Rental', 'Primary'].map((tab, i) => (
                  <button 
                    key={tab} 
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${i === 0 ? 'bg-white text-text-primary shadow-sm' : 'text-text-tertiary'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Location Details</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
            <div>
               <label className="text-xs font-bold text-text-secondary mb-1.5 block">Project / Society Name</label>
               <input type="text" className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-tertiary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="e.g. Prestige Lakeside Habitat" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">City</label>
                <div className="relative">
                   <select className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-bold text-text-primary appearance-none focus:ring-2 focus:ring-primary/20">
                     <option>Bangalore</option>
                     <option>Mumbai</option>
                   </select>
                   <ChevronDown size={16} className="absolute right-3 top-3.5 text-text-tertiary pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-text-secondary mb-1.5 block">Locality</label>
                <div className="relative">
                   <select className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary appearance-none focus:ring-2 focus:ring-primary/20">
                     <option>Select Locality</option>
                     <option>Whitefield</option>
                     <option>Indiranagar</option>
                   </select>
                   <ChevronDown size={16} className="absolute right-3 top-3.5 text-text-tertiary pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
               <label className="text-xs font-bold text-text-secondary mb-1.5 block">Complete Address</label>
               <textarea className="w-full bg-background-secondary border-none rounded-xl px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-tertiary focus:ring-2 focus:ring-primary/20 transition-all resize-none" rows={3} placeholder="Building name, street, landmarks..."></textarea>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Property Details</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
             <div className="grid grid-cols-2 gap-3">
               <div>
                  <label className="text-xs font-bold text-text-secondary mb-1.5 block">BHK</label>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {[1, 2, 3, 4].map(num => (
                      <button key={num} className={`w-10 h-10 rounded-lg flex-shrink-0 font-bold text-sm border flex items-center justify-center transition-colors ${num === 3 ? 'bg-primary text-white border-primary' : 'bg-white border-border text-text-secondary'}`}>
                        {num}
                      </button>
                    ))}
                  </div>
               </div>
               <div>
                  <label className="text-xs font-bold text-text-secondary mb-1.5 block">Bathrooms</label>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {[1, 2, 3].map(num => (
                      <button key={num} className={`w-10 h-10 rounded-lg flex-shrink-0 font-bold text-sm border flex items-center justify-center transition-colors ${num === 2 ? 'bg-primary text-white border-primary' : 'bg-white border-border text-text-secondary'}`}>
                        {num}
                      </button>
                    ))}
                  </div>
               </div>
             </div>
             
             <div className="grid grid-cols-2 gap-3">
               <div>
                 <label className="text-xs font-bold text-text-secondary mb-1.5 block">Carpet Area</label>
                 <div className="relative">
                   <input type="number" className="w-full bg-background-secondary border-none rounded-xl pl-3 pr-8 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-primary/20" placeholder="1200" />
                   <span className="absolute right-3 top-3.5 text-xs font-medium text-text-tertiary">sq.ft</span>
                 </div>
               </div>
               <div>
                 <label className="text-xs font-bold text-text-secondary mb-1.5 block">Built-up Area</label>
                 <div className="relative">
                   <input type="number" className="w-full bg-background-secondary border-none rounded-xl pl-3 pr-8 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-primary/20" placeholder="1450" />
                   <span className="absolute right-3 top-3.5 text-xs font-medium text-text-tertiary">sq.ft</span>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Pricing</h3>
          <div className="bg-white p-4 rounded-2xl border border-border shadow-sm space-y-4">
             <div>
               <label className="text-xs font-bold text-text-secondary mb-1.5 block">Expected Price</label>
               <div className="relative mb-2">
                 <span className="absolute left-4 top-3 text-lg font-bold text-text-secondary">₹</span>
                 <input type="text" className="w-full bg-background-secondary border-none rounded-xl pl-8 pr-4 py-3 text-lg font-bold text-text-primary focus:ring-2 focus:ring-primary/20" placeholder="1,20,00,000" />
               </div>
               <p className="text-xs font-semibold text-green-600 pl-1">₹8,275 per sq.ft</p>
             </div>

             <div className="flex items-center justify-between py-2 border-t border-border-light">
                <span className="text-sm font-medium text-text-primary">Price Negotiable</span>
                <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                </div>
             </div>
             
             <div>
               <label className="text-xs font-bold text-text-secondary mb-1.5 block">Maintenance (Monthly)</label>
               <div className="relative">
                 <span className="absolute left-4 top-3 text-sm font-bold text-text-secondary">₹</span>
                 <input type="text" className="w-full bg-background-secondary border-none rounded-xl pl-8 pr-4 py-3 text-sm font-bold text-text-primary focus:ring-2 focus:ring-primary/20" placeholder="3,500" />
               </div>
             </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3 z-50">
        <button className="flex-1 py-3.5 rounded-xl border border-border text-sm font-bold text-text-secondary bg-white hover:bg-gray-50 transition-colors">
          Previous
        </button>
        <button className="flex-[2] py-3.5 rounded-xl bg-primary text-sm font-bold text-white hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all" onClick={() => onNavigate('properties')}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default AddPropertyForm
