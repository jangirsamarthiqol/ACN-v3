import React from 'react';
import { Search, MapPin, IndianRupee, Calendar, User, ArrowRight, Eye, ChevronRight, Phone, MessageCircle, Share2, Filter, Briefcase } from 'lucide-react';
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

// Requirement Card Component
const RequirementCard = ({ req, onNavigate }) => (
  <div className="bg-surface rounded-[24px] shadow-sm border border-border-light overflow-hidden flex flex-col h-full min-w-[280px] w-[280px] snap-start mb-2 group cursor-pointer hover:shadow-md transition-shadow active:scale-[0.99] duration-200">
    
    {/* Header Section (User Info & Metadata) */}
    <div className="p-4 pb-2 flex justify-between items-start">
        <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-background-secondary border border-border-light flex items-center justify-center text-text-secondary">
                 <User size={20} />
             </div>
             <div>
                 <h4 className="text-sm font-bold text-text-primary leading-tight">{req.userName}</h4>
                 <p className="text-[10px] text-text-tertiary font-medium">{req.userType} • {req.timeAgo}</p>
             </div>
        </div>
        <span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-1 rounded-lg border border-primary/20">
            {req.urgency}
        </span>
    </div>

    {/* Content Section (The Requirement) */}
    <div className="px-4 py-2 flex-1">
        <div className="mb-3">
            <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider block mb-1">Looking For</span>
            <h3 className="text-[15px] font-bold text-text-primary leading-tight">
                {req.config} {req.assetType}
            </h3>
        </div>
        
        <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-4">
            <MapPin size={14} className="text-accent-red" />
            <span className="font-medium truncate">{req.location}</span>
        </div>

        <div className="bg-background-secondary rounded-xl p-3 border border-border-light mb-2">
            <div className="flex justify-between items-center mb-1">
                 <span className="text-[11px] font-semibold text-text-tertiary">Budget Range</span>
                 <IndianRupee size={14} className="text-text-secondary" />
            </div>
            <p className="text-lg font-bold text-primary tracking-tight">{req.budget}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-2">
            {req.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-background-light border border-border-light rounded-md text-text-secondary">
                    {tag}
                </span>
            ))}
        </div>
    </div>

    {/* CTA Section */}
    <div className="p-3 bg-background-light/30 border-t border-border-light mt-2 grid grid-cols-[1fr_auto_auto] gap-2">
          <button 
              className="py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              onClick={(e) => {
                  e.stopPropagation();
                  // Handle Connect
              }}
          >
              <Phone size={14} /> Connect
          </button>
          <button 
              className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary hover:text-primary transition-colors bg-surface"
          >
              <MessageCircle size={18} />
          </button>
          <button 
              className="w-10 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:bg-background-secondary hover:text-primary transition-colors bg-surface"
          >
              <Share2 size={18} />
          </button>
    </div>
  </div>
);

const RequirementsMarketplace = ({ onNavigate }) => {
  
  // Dummy Data
  const matchingRequirements = [
    { id: 1, userName: 'Rahul K.', userType: 'Direct Buyer', timeAgo: '2h ago', urgency: 'Urgent', config: '3 BHK', assetType: 'Apartment', location: 'Whitefield, Bangalore', budget: '₹1.2 Cr - ₹1.5 Cr', tags: ['Ready to Move', 'East Facing'] },
    { id: 2, userName: 'Anita S.', userType: 'Agent', timeAgo: '4h ago', urgency: 'Immediate', config: '4 BHK', assetType: 'Villa', location: 'Sarjapur Road', budget: '₹2.5 Cr+', tags: ['Gated Society', 'Pool'] },
    { id: 3, userName: 'Tech Corp', userType: 'Company Lease', timeAgo: '1d ago', urgency: 'Flexible', config: '10,000 sqft', assetType: 'Office Space', location: 'ORR, Bellandur', budget: '₹4.5L / month', tags: ['Furnished', 'Metro'] },
  ];

  const suggestedRequirements = [
    { id: 4, userName: 'Vikram Singh', userType: 'Direct Buyer', timeAgo: '30m ago', urgency: 'Weekend Visit', config: '2 BHK', assetType: 'Apartment', location: 'Indiranagar', budget: '₹95L - ₹1.1 Cr', tags: ['Old Construction OK'] },
    { id: 5, userName: 'Priya M.', userType: 'Direct Buyer', timeAgo: '5h ago', urgency: 'Urgent', config: 'Plot', assetType: 'Residential Land', location: 'North Bangalore', budget: '₹80L', tags: ['Corner Plot'] },
  ];

  const newRequirements = [
    { id: 6, userName: 'Suresh R.', userType: 'Investor', timeAgo: 'Just now', urgency: 'New', config: 'Studio', assetType: 'Apartment', location: 'Koramangala', budget: '₹60 Lakhs', tags: ['High ROI'] },
    { id: 7, userName: 'Green Homes', userType: 'Channel Partner', timeAgo: '1h ago', urgency: 'New', config: '3 BHK', assetType: 'Indep. House', location: 'Jayanagar', budget: '₹3 Cr', tags: ['Park View'] },
  ];

  const recentlyViewed = [
    { id: 8, userName: 'Arjun D.', title: 'Looking for 2BHK Rent', location: 'HSR Layout', budget: '₹45k', type: 'Rent' },
    { id: 9, userName: 'Global MNC', title: 'Office Space Required', location: 'Whitefield', budget: '₹2L', type: 'Lease' },
  ];

  return (
    <div className="bg-background-light min-h-screen text-text-primary font-sans pb-32">
       <GlobalHeader title="Requirements" onNavigate={onNavigate} activeTab="ACN" />

       {/* Sticky Search Bar - Adapted for Requirements */}
       <div className="sticky top-0 z-40 bg-background-light/95 backdrop-blur-xl px-5 pt-2 pb-2 border-b border-border-light">
          <div className="relative group mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search requirements by location, budget..." 
              className="w-full bg-surface border border-border-light rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-text-primary placeholder:text-text-tertiary transition-all shadow-sm font-medium"
            />
          </div>
          
          {/* Requirement Context Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mask-linear">
             {['Buy', 'Rent', 'Commercial', 'Land', 'Lease', 'High Budget'].map((filter, idx) => (
                 <button key={filter} className={`px-4 py-2 rounded-full border text-xs font-bold transition-all whitespace-nowrap shadow-sm ${idx === 0 ? 'bg-primary text-white border-primary shadow-primary/20' : 'bg-surface border-border-light text-text-secondary hover:border-primary/50'}`}>
                     {filter}
                 </button>
             ))}
          </div>
       </div>

       <div className="space-y-6 pt-4">
          
          {/* Matching Requirements */}
          <section>
              <div className="px-5 mb-2">
                 <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/10 rounded-xl mb-4">
                     <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Briefcase size={16} />
                     </div>
                     <p className="text-xs text-text-secondary leading-snug">
                        Matches found for your listed properties in <span className="font-bold text-primary">Whitefield</span> and <span className="font-bold text-primary">Koramangala</span>.
                     </p>
                 </div>
              </div>
              <SectionHeader title="Matching Requirements" onSeeAll={() => {}} />
              <HorizontalScroll>
                  {matchingRequirements.map(req => (
                      <RequirementCard key={req.id} req={req} onNavigate={onNavigate} />
                  ))}
              </HorizontalScroll>
          </section>

          {/* Suggested Requirements */}
          <section>
              <div className="bg-gradient-to-r from-accent-blue/5 to-transparent py-4 my-2 border-y border-dashed border-border-light/50">
                  <SectionHeader title="Suggested For You" onSeeAll={() => {}} />
                  <HorizontalScroll>
                      {suggestedRequirements.map(req => (
                          <RequirementCard key={req.id} req={req} onNavigate={onNavigate} />
                      ))}
                  </HorizontalScroll>
              </div>
          </section>

          {/* New Requirements */}
          <section>
              <SectionHeader title="New Requirements" onSeeAll={() => {}} />
               <HorizontalScroll>
                  {newRequirements.map(req => (
                      <RequirementCard key={req.id} req={req} onNavigate={onNavigate} />
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
                  {recentlyViewed.map(req => (
                      <div key={req.id} className="bg-surface p-3 rounded-2xl border border-border-light flex gap-4 shadow-sm items-center active:scale-[0.99] transition-transform">
                          <div className="w-14 h-14 rounded-xl bg-background-secondary flex items-center justify-center text-text-tertiary">
                             <User size={24} />
                          </div>
                          <div className="flex-1 min-w-0">
                               <h4 className="text-sm font-bold text-text-primary truncate">{req.title}</h4>
                               <p className="text-xs text-text-tertiary mb-1 truncate">{req.userName} • {req.location}</p>
                               <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md">{req.budget}</span>
                          </div>
                           <button className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors">
                              <ArrowRight size={18} />
                          </button>
                      </div>
                  ))}
              </div>
          </section>

       </div>

       <GlobalBottomNav activeTab="requirements-marketplace" onNavigate={onNavigate} context="home" />

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

export default RequirementsMarketplace;
