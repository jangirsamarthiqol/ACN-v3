import React from 'react';
import { Search, MapPin, BedDouble, Bath, Square, Heart, ArrowRight, Eye, ChevronRight, Phone, MessageCircle, Share2 } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalBottomNav from '../components/GlobalBottomNav';

// Reusable Section Header
const SectionHeader = ({ title, onSeeAll }) => (
  <div className="flex justify-between items-center px-5 mb-4 mt-2">
    <h2 className="text-[17px] font-bold text-text-primary tracking-tight">{title}</h2>
    {onSeeAll && (
      <button className="text-xs font-bold text-primary flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg hover:bg-primary/10 transition-colors">
        View All <ChevronRight size={14} />
      </button>
    )}
  </div>
);

// Horizontal Scroll Container
const HorizontalScroll = ({ children }) => (
  <div className="flex overflow-x-auto gap-4 px-5 pb-6 -mx-0 snap-x hide-scrollbar scroll-pl-5">
    {children}
  </div>
);

// Inventory Card Component
const InventoryCard = ({ inventory, showTags = false, onNavigate }) => (
  <div className="bg-surface rounded-[24px] shadow-sm border border-border-light overflow-hidden flex flex-col h-full min-w-[280px] w-[280px] snap-start mb-2 group cursor-pointer hover:shadow-md transition-shadow active:scale-[0.99] duration-200">
    
    {/* Image Section */}
    <div className="h-44 bg-background-secondary relative" onClick={() => onNavigate('inventory-detail')}>
      <img src={inventory.image} alt={inventory.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

      {/* Price Tag */}
      <div className="absolute bottom-3 left-3">
         <span className="text-white text-xl font-bold tracking-tight drop-shadow-md">{inventory.price}</span>
      </div>

      {/* Tags */}
      {showTags && inventory.tags && (
        <div className="absolute top-3 left-3 flex gap-1">
          {inventory.tags.map(tag => (
            <span key={tag} className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm border border-primary-light/20">{tag}</span>
          ))}
        </div>
      )}
    </div>

    {/* Content Section */}
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-1">
           <h3 className="text-[15px] font-bold text-text-primary leading-tight line-clamp-1">{inventory.title}</h3>
        </div>
        <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-3">
          <MapPin size={14} className="text-text-tertiary" />
          <span className="truncate font-medium">{inventory.location}</span>
        </div>
        
        {/* Specs */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 bg-background-secondary px-2 py-1.5 rounded-lg border border-border-light">
            <BedDouble size={14} className="text-text-tertiary" />
            <span className="text-xs font-bold text-text-secondary">{inventory.type}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-background-secondary px-2 py-1.5 rounded-lg border border-border-light">
            <Square size={14} className="text-text-tertiary" />
            <span className="text-xs font-bold text-text-secondary">{inventory.size}</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-2 mt-1">
          <button 
              className="py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              onClick={(e) => {
                  e.stopPropagation();
                  // Handle Enquiry
              }}
          >
              Enquire
          </button>
          <button 
              className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary hover:text-primary transition-colors"
               onClick={(e) => {
                  e.stopPropagation();
                  // Handle Share
              }}
          >
              <Share2 size={18} />
          </button>
          <button 
              className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary hover:text-accent-red transition-colors"
               onClick={(e) => {
                  e.stopPropagation();
                  // Handle Shortlist
              }}
          >
              <Heart size={18} />
          </button>
      </div>
    </div>
  </div>
);

const InventoriesMarketplace = ({ onNavigate }) => {
  
  // Dummy Data
  const matchingInventories = [
    { id: 1, title: 'Luxury 3BHK Apartment', location: 'Whitefield, Bangalore', price: '₹1.2 Cr', type: '3 BHK', size: '1800 sq.ft', image: 'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Modern Villa', location: 'Sarjapur Road', price: '₹2.5 Cr', type: '4 BHK', size: '3200 sq.ft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Cozy Studio', location: 'Indiranagar', price: '₹85 L', type: '1 BHK', size: '600 sq.ft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Penthouse Suite', location: 'Koramangala', price: '₹3.0 Cr', type: '4 BHK', size: '2800 sq.ft', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Garden Apartment', location: 'Hebbal', price: '₹1.5 Cr', type: '3 BHK', size: '2000 sq.ft', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const suggestedInventories = [
    { id: 6, title: 'Urban Loft', location: 'MG Road', price: '₹1.8 Cr', type: '2 BHK', size: '1400 sq.ft', tags: ['Trending'], image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'Suburban Home', location: 'Yelahanka', price: '₹95 L', type: '3 BHK', size: '1600 sq.ft', tags: ['Best Value'], image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const newResale = [
    { id: 8, title: 'Classic Home', location: 'Jayanagar', price: '₹2.1 Cr', type: '3 BHK', size: '1900 sq.ft', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const newRental = [
    { id: 9, title: 'Office Space', location: 'HSR Layout', price: '₹45k/mo', type: 'Commercial', size: '1200 sq.ft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const wishlisted = [
    { id: 10, title: 'Dream Villa', location: 'Nandi Hills', price: '₹4.5 Cr', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];
  
  const recentlyViewed = [
    { id: 11, title: 'Lakeview Flat', location: 'Bellandur', price: '₹1.3 Cr', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-background-light min-h-screen text-text-primary font-sans pb-32">
       <GlobalHeader title="Inventories" onNavigate={onNavigate} activeTab="ACN" />

       {/* Sticky Search Bar */}
       <div className="sticky top-0 z-40 bg-background-light/95 backdrop-blur-xl px-5 pt-2 pb-2 border-b border-border-light">
          <div className="relative group mb-3" onClick={() => onNavigate('global-search')}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search inventories, projects..." 
              className="w-full bg-surface border border-border-light rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-text-primary placeholder:text-text-tertiary transition-all shadow-sm font-medium"
              readOnly
            />
          </div>
          
          {/* Quick Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mask-linear">
             {['Buy', 'Rent', 'Plots', 'Commercial', 'New Projects', 'Trending'].map((filter, idx) => (
                 <button key={filter} className={`px-4 py-2 rounded-full border text-xs font-bold transition-all whitespace-nowrap shadow-sm ${idx === 0 ? 'bg-primary text-white border-primary shadow-primary/20' : 'bg-surface border-border-light text-text-secondary hover:border-primary/50'}`}>
                     {filter}
                 </button>
             ))}
          </div>
       </div>

       <div className="space-y-6 pt-4">
          
          {/* Matching Inventories */}
          <section>
              <SectionHeader title="Matching Inventories" onSeeAll={() => {}} />
              <HorizontalScroll>
                  {matchingInventories.map(p => (
                      <InventoryCard key={p.id} inventory={p} showTags onNavigate={onNavigate} />
                  ))}
              </HorizontalScroll>
          </section>

          {/* Suggested Inventories */}
          <section>
              <div className="bg-gradient-to-r from-primary/5 to-transparent py-4 my-2">
                  <SectionHeader title="Suggested For You" onSeeAll={() => {}} />
                  <HorizontalScroll>
                      {suggestedInventories.map(p => (
                          <InventoryCard key={p.id} inventory={p} showTags onNavigate={onNavigate} />
                      ))}
                  </HorizontalScroll>
              </div>
          </section>

          {/* New Resale */}
          <section>
              <SectionHeader title="New Resale Inventory" onSeeAll={() => {}} />
               <HorizontalScroll>
                  {newResale.map(p => (
                      <InventoryCard key={p.id} inventory={p} onNavigate={onNavigate} />
                  ))}
              </HorizontalScroll>
          </section>
          
           {/* New Rental */}
           <section>
              <SectionHeader title="New Rental Inventory" onSeeAll={() => {}} />
               <HorizontalScroll>
                  {newRental.map(p => (
                      <InventoryCard key={p.id} inventory={p} onNavigate={onNavigate} />
                  ))}
              </HorizontalScroll>
          </section>

           {/* Wishlisted */}
           <section>
              <SectionHeader title="Your Wishlist" onSeeAll={() => {}} />
               <HorizontalScroll>
                  {wishlisted.map(p => (
                      <InventoryCard key={p.id} inventory={p} onNavigate={onNavigate} />
                  ))}
              </HorizontalScroll>
          </section>

             {/* Recently Viewed */}
           <section>
              <div className="flex justify-between items-center px-5 mb-3">
                 <h2 className="text-[17px] font-bold text-text-primary">Recently Viewed</h2>
                 <button className="text-xs font-bold text-text-tertiary hover:text-text-primary">Clear</button>
              </div>
               <div className="px-5 space-y-3 pb-8">
                  {recentlyViewed.map(p => (
                      <div key={p.id} className="bg-surface p-3 rounded-2xl border border-border-light flex gap-4 shadow-sm items-center active:scale-[0.99] transition-transform">
                          <img src={p.image} className="w-20 h-20 rounded-xl object-cover" />
                          <div className="flex-1 min-w-0">
                               <h4 className="text-sm font-bold text-text-primary truncate">{p.title}</h4>
                               <p className="text-xs text-text-tertiary mb-2 truncate">{p.location}</p>
                               <span className="text-sm font-bold text-primary">{p.price}</span>
                          </div>
                           <button className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors">
                              <Eye size={18} />
                          </button>
                      </div>
                  ))}
              </div>
          </section>

       </div>

       <GlobalBottomNav activeTab="search" onNavigate={onNavigate} context="home" />

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

export default InventoriesMarketplace;
