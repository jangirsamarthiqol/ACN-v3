import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Heart, 
  MapPin, 
  ChevronDown, 
  Map, 
  BedDouble, 
  Square, 
  Share2, 
  Phone,
  MessageCircle,
  Star,
  Zap,
  Home,
  Compass,
  Clock
} from 'lucide-react';
import GlobalBottomNav from '../components/GlobalBottomNav';

const SearchResultsScreen = ({ onNavigate, params = {} }) => {
  const [viewMode, setViewMode] = useState('list'); // list or map

  const results = [
    {
      id: 1,
      title: 'Prestige Sunset Park',
      micromarket: 'Koramangala 4th Block',
      price: '₹85 Lakhs',
      config: '2 BHK',
      assetType: 'Apartment',
      area: '1200 sq.ft',
      facing: 'East Facing',
      lastChecked: '2 days ago',
      image: 'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      premium: true,
      tags: ['Verified', 'Ready to Move']
    },
    {
      id: 2,
      title: 'Brigade Orchards',
      micromarket: 'Whitefield',
      price: '₹1.2 Cr',
      config: '3 BHK',
      assetType: 'Villa',
      area: '2400 sq.ft',
      facing: 'North Facing',
      lastChecked: 'Today',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      premium: false,
      tags: ['New Launch']
    },
    {
      id: 3,
      title: 'Sobha Dream Gardens',
      micromarket: 'HSR Layout',
      price: '₹95 Lakhs',
      config: '2 BHK',
      assetType: 'Apartment',
      area: '1350 sq.ft',
      facing: 'West Facing',
      lastChecked: '5 days ago',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      premium: true,
      tags: ['Furnished']
    }
  ];

  return (
    <div className="bg-background-light h-full flex flex-col relative">
      
      {/* 1. Header Section */}
      <header className="bg-surface border-b border-border-light sticky top-0 z-30 transform translate-z-0">
         {/* Top Bar */}
         <div className="flex items-center gap-3 px-4 py-3">
             <button className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full active:bg-background-secondary text-text-primary transition-colors" onClick={() => onNavigate('search')}>
                <ArrowLeft size={22} />
             </button>
             
             {/* Search Field (Displays current query) */}
             <div className="flex-1 bg-background-secondary rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer border border-transparent active:border-primary/20 transition-all" onClick={() => onNavigate('global-search')}>
                 <Search size={16} className="text-text-tertiary" />
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-primary truncate">Koramangala, Bangalore</p>
                    <p className="text-[10px] text-text-secondary truncate">2 BHK • ₹50L - ₹1Cr</p>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                    <SlidersHorizontal size={12} />
                 </div>
             </div>
         </div>

         {/* Quick Filters / Sort Row */}
         <div className="px-4 pb-3 flex items-center justify-between">
             <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar mask-linear-right pr-4">
                 <button className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold border border-primary shadow-sm shadow-primary/20 whitespace-nowrap">
                    Sort: Relevance <ChevronDown size={12} />
                 </button>

             </div>
         </div>
      </header>

      {/* 2. Results Count Info */}
      <div className="px-5 py-3 flex justify-between items-center bg-background-light/50 backdrop-blur-sm sticky top-[105px] z-20">
         <span className="text-xs font-bold text-text-secondary uppercase tracking-wide">
             Showing {results.length} Properties
         </span>
         <div className="flex items-center gap-1 bg-white border border-border-light rounded-lg p-1">
             <button className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-text-tertiary'}`} onClick={() => setViewMode('list')}>
                <SlidersHorizontal size={14} className="rotate-90" />
             </button>
             <button className={`p-1.5 rounded-md transition-colors ${viewMode === 'map' ? 'bg-primary/10 text-primary' : 'text-text-tertiary'}`} onClick={() => setViewMode('map')}>
                <Map size={14} />
             </button>
         </div>
      </div>

      {/* 3. Results List */}
      <main className="flex-1 overflow-y-auto px-4 pb-32 space-y-4">
          {results.map((property, idx) => (
             <div key={property.id} className="bg-surface rounded-3xl border border-border-light overflow-hidden shadow-sm group active:scale-[0.99] transition-transform duration-200" onClick={() => onNavigate('property-detail')}>
                 
                 {/* Image Area */}
                 <div className="h-56 relative bg-gray-100">
                    <img src={property.image} className="w-full h-full object-cover" alt={property.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {property.premium && (
                            <span className="bg-background-light/90 backdrop-blur text-text-primary text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm border border-white/20">
                                Premium
                            </span>
                        )}
                         <span className="bg-black/40 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center gap-1">
                            <Clock size={10} /> Checked {property.lastChecked}
                        </span>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pt-10 text-white">
                        <h3 className="text-xl font-bold tracking-tight leading-tight mb-1">{property.price}</h3>
                        <p className="text-sm font-medium text-white/90 truncate">{property.title}</p>
                    </div>
                 </div>

                 {/* Content Area */}
                 <div className="p-4 pt-3">
                     {/* Location Header */}
                     <div className="flex justify-between items-start mb-3">
                         <div className="flex items-center gap-1.5 text-text-secondary">
                             <MapPin size={14} className="text-primary" />
                             <span className="text-xs font-bold">{property.micromarket}</span>
                         </div>
                     </div>

                     {/* Details Grid */}
                     <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-5 p-3 bg-background-light/50 rounded-xl border border-border-light/50">
                         {/* Config */}
                         <div>
                             <p className="text-[10px] text-text-tertiary uppercase font-bold mb-0.5">Config</p>
                             <div className="flex items-center gap-1.5">
                                 <BedDouble size={14} className="text-text-secondary" />
                                 <span className="text-xs font-bold text-text-primary">{property.config}</span>
                             </div>
                         </div>
                         {/* Area */}
                         <div>
                             <p className="text-[10px] text-text-tertiary uppercase font-bold mb-0.5">Area</p>
                             <div className="flex items-center gap-1.5">
                                 <Square size={14} className="text-text-secondary" />
                                 <span className="text-xs font-bold text-text-primary">{property.area}</span>
                             </div>
                         </div>
                         {/* Asset Type */}
                         <div>
                             <p className="text-[10px] text-text-tertiary uppercase font-bold mb-0.5">Type</p>
                             <div className="flex items-center gap-1.5">
                                 <Home size={14} className="text-text-secondary" />
                                 <span className="text-xs font-bold text-text-primary">{property.assetType}</span>
                             </div>
                         </div>
                         {/* Facing */}
                         <div>
                             <p className="text-[10px] text-text-tertiary uppercase font-bold mb-0.5">Facing</p>
                             <div className="flex items-center gap-1.5">
                                 <Compass size={14} className="text-text-secondary" />
                                 <span className="text-xs font-bold text-text-primary">{property.facing}</span>
                             </div>
                         </div>
                     </div>

                     {/* Actions */}
                     <div className="grid grid-cols-[1fr_auto_auto] gap-2">
                         <button className="bg-primary text-white py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                             Enquire Now
                         </button>
                         <button className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary transition-colors" title="Share">
                             <Share2 size={18} />
                         </button>
                         <button className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary transition-colors text-accent-red hover:bg-accent-red/5" title="Shortlist">
                             <Heart size={18} />
                         </button>
                     </div>
                 </div>

             </div>
          ))}
      </main>

      {/* Floating Map Button (Only show if list view) */}
      {viewMode === 'list' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
              <button 
                className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-sm font-bold hover:scale-105 transition-transform"
                onClick={() => setViewMode('map')}
              >
                  <Map size={16} /> Map View
              </button>
          </div>
      )}

      {/* Global Bottom Nav (Optional here, usually search results might not need bottom nav, but keeping context if needed or removing) 
          Decision: SearchResults often don't have bottom nav to maximize space, but if user wants to go back to home tabs...
          Actually, let's keep it clean without bottom nav, or just back.
          Wait, the user flow usually: Home -> Search -> Results -> Detail.
          Bottom Nav is usually on Home/Properties/Profile.
          I'll remove GlobalBottomNav here to focus on results, as per typical patterns.
      */}
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-linear-right { -webkit-mask-image: linear-gradient(to right, black 90%, transparent 100%); }
      `}</style>
    </div>
  );
};

export default SearchResultsScreen;
