import React, { useState } from 'react';
import { 
  ArrowLeft, Share2, Heart, Phone, MessageCircle, Mail, Calendar, 
  MapPin, Check, Home, Square, Bath, Car, ChevronRight, Star, Clock, 
  ShieldCheck, Info, FileText as FileTypePdf, Link as LinkIcon, MoreHorizontal
} from 'lucide-react';
import './screens.css';

function PropertyDetail({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [includeBranding, setIncludeBranding] = useState(true);

  const features = [
    { icon: Home, label: '3 BHK', value: 'Apartment' },
    { icon: Square, label: '1,450', value: 'Sq. Ft.' },
    { icon: Bath, label: '2', value: 'Bathrooms' },
    { icon: Share2, label: '2', value: 'Balconies' },
    { icon: Car, label: 'Covered', value: 'Parking' },
    { icon: Calendar, label: 'Ready', value: 'Possession' }
  ];

  const amenities = [
    'Club House', 'Swimming Pool', 'Gymnasium', 'Power Backup', 
    '24x7 Security', 'Children\'s Play Area', 'Landscaped Gardens', 'Jogging Track'
  ];

  return (
    <div className="bg-background-light text-text-primary min-h-screen relative font-display pb-32">
      {/* Immersive Image Gallery */}
      <div className="h-80 relative bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-e36cb06c37f6?auto=format&fit=crop&q=80&w=800&h=600" 
          alt="Property Hero" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex justify-between bg-gradient-to-b from-black/60 to-transparent">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white" onClick={() => onNavigate('home')}>
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white" onClick={() => setShowShareModal(true)}>
              <Share2 size={20} />
            </button>
            <button 
              className={`w-10 h-10 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors ${isLiked ? 'bg-white text-red-500' : 'bg-white/20 text-white'}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-4 right-4 flex justify-between items-end pb-6">
          <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 1 of 12 Photos
          </div>
        </div>
      </div>

      <div className="-mt-8 relative z-10 bg-background-light rounded-t-3xl pt-6 px-4 space-y-6">
        {/* Main Info Card */}
        <div>
          <div className="flex gap-2 mb-3">
            <span className="bg-accent-mint/20 text-accent-mint-dark px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck size={12} /> Verified
            </span>
            <span className="bg-background-secondary text-text-secondary px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
              Ready to Move
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-text-primary leading-tight mb-1">3 BHK Premium Apartment</h1>
          <p className="text-sm font-semibold text-primary mb-3">Prestige Lakeside Habitat</p>
          
          <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium mb-4">
            <MapPin size={14} className="text-text-tertiary" />
            <span>Varthur, Bangalore</span>
            <span className="text-text-tertiary">•</span>
            <span>2.5 km from Whitefield</span>
          </div>

          <div className="h-px bg-border-light w-full"></div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="block text-2xl font-bold text-text-primary">₹1.25 Cr</span>
              <span className="text-xs font-semibold text-text-tertiary">₹8,620 / sq.ft</span>
            </div>
            <button className="px-4 py-2 border border-border rounded-xl text-sm font-semibold text-text-secondary bg-white flex items-center gap-2" onClick={() => setShowShareModal(true)}>
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        {/* Key Features */}
        <section>
          <h3 className="text-base font-bold text-text-primary mb-3">Key Features</h3>
          <div className="grid grid-cols-3 gap-3">
            {features.map((item, i) => (
              <div key={i} className="bg-surface border border-border rounded-2xl p-3 flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-background-secondary flex items-center justify-center text-primary">
                  <item.icon size={18} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-text-primary">{item.label}</span>
                  <span className="block text-[10px] uppercase font-bold text-text-tertiary tracking-tight">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky top-[70px] z-40 bg-background-light py-2">
          <div className="flex border-b border-border gap-6 px-2 overflow-x-auto no-scrollbar">
            {['overview', 'amenities', 'location', 'similar'].map(tab => (
              <button 
                key={tab} 
                className={`pb-3 text-sm font-medium whitespace-nowrap relative ${activeTab === tab ? 'text-primary font-bold' : 'text-text-secondary'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-text-primary mb-2">Description</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  A meticulously designed 3 BHK apartment offering a blend of luxury and comfort. 
                  Featuring spacious interiors, modern fittings, and excellent natural light. 
                  The property is located in a prime area with easy access to IT parks and international schools.
                  <span className="text-primary font-bold cursor-pointer ml-1">Read More</span>
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-text-primary mb-3">Property Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-white border border-border rounded-xl">
                    <span className="text-xs font-medium text-text-secondary">Configuration</span>
                    <span className="text-xs font-bold text-text-primary">3 Beds, 3 Baths, 2 Balconies</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white border border-border rounded-xl">
                    <span className="text-xs font-medium text-text-secondary">Furnishing Status</span>
                    <span className="text-xs font-bold text-text-primary">Semi-Furnished</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white border border-border rounded-xl">
                    <span className="text-xs font-medium text-text-secondary">Floor Number</span>
                    <span className="text-xs font-bold text-text-primary">12th of 24 Floors</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white border border-border rounded-xl">
                    <span className="text-xs font-medium text-text-secondary">Water Supply</span>
                    <span className="text-xs font-bold text-text-primary">24 Hours Available</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'amenities' && (
            <div className="flex flex-wrap gap-2.5">
              {amenities.map(amenity => (
                <div key={amenity} className="px-3 py-2 bg-white border border-border rounded-full text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <Check size={14} className="text-primary" /> {amenity}
                </div>
              ))}
              <div className="px-3 py-2 bg-background-secondary rounded-full text-xs font-bold text-primary cursor-pointer">+ 12 More</div>
            </div>
          )}
        </div>

        {/* Agent Card */}
        <section className="bg-white border border-border rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Agent" className="w-full h-full rounded-full border border-border" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={10} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-text-primary">Sarah Williams</h4>
              <p className="text-[10px] font-semibold text-text-secondary flex items-center gap-1">Premium Partner • 4.9 <Star size={10} fill="#F59E0B" stroke="none" /></p>
            </div>
            <button className="px-3 py-1.5 bg-background-secondary text-primary rounded-lg text-xs font-bold">View Profile</button>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-border pt-3">
            <div className="text-center">
              <span className="block text-sm font-bold text-text-primary">12</span>
              <span className="text-[10px] font-medium text-text-secondary">Listings</span>
            </div>
            <div className="text-center border-l border-border">
              <span className="block text-sm font-bold text-text-primary">54</span>
              <span className="text-[10px] font-medium text-text-secondary">Deals</span>
            </div>
            <div className="text-center border-l border-border">
              <span className="block text-sm font-bold text-text-primary">98%</span>
              <span className="text-[10px] font-medium text-text-secondary">Response</span>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-between items-center z-50">
        <div>
          <span className="block text-[10px] font-bold text-text-tertiary uppercase tracking-wide">Total Price</span>
          <span className="text-xl font-bold text-text-primary">₹1.25 Cr</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 bg-secondary text-primary bg-background-secondary rounded-xl font-bold text-sm">Schedule Visit</button>
          <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20">Contact Now</button>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-end justify-center" onClick={() => setShowShareModal(false)}>
          <div className="bg-white w-full max-w-md rounded-t-3xl p-6 animate-slide-up" onClick={e => e.stopPropagation()}>
             <div className="w-10 h-1 bg-border-dark rounded-full mx-auto mb-6"></div>
             <h3 className="text-lg font-bold text-text-primary mb-6">Share Property</h3>
             
             {/* Branding Toggle */}
             <div className="bg-background-secondary p-4 rounded-xl flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-0.5">Include My Branding</h4>
                  <p className="text-xs text-text-secondary">Add your name & logo to PDF/Images</p>
                </div>
                <div 
                  onClick={() => setIncludeBranding(!includeBranding)}
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${includeBranding ? 'bg-primary-black' : 'bg-border-dark'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${includeBranding ? 'left-[22px]' : 'left-0.5'}`}></div>
                </div>
             </div>

             <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white">
                     <MessageCircle size={28} />
                   </div>
                   <span className="text-xs font-medium text-text-secondary">WhatsApp</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-2xl bg-[#E11D48] flex items-center justify-center text-white">
                     <FileTypePdf size={28} />
                   </div>
                   <span className="text-xs font-medium text-text-secondary">PDF</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-2xl bg-[#3B82F6] flex items-center justify-center text-white">
                     <LinkIcon size={28} />
                   </div>
                   <span className="text-xs font-medium text-text-secondary">Copy Link</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-14 h-14 rounded-2xl bg-background-tertiary flex items-center justify-center text-text-tertiary">
                     <MoreHorizontal size={28} />
                   </div>
                   <span className="text-xs font-medium text-text-secondary">More</span>
                </div>
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  )
}

export default PropertyDetail
