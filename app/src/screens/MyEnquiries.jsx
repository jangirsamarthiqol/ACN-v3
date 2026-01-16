import React, { useState } from 'react';
import { Search, Phone, ChevronRight, Building2, Mountain, CheckCircle2 } from 'lucide-react';
import BusinessBottomNav from '../components/BusinessBottomNav';
import TopHeader from '../components/TopHeader';

const MyEnquiries = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Resale');
  const [subTab, setSubTab] = useState('Received');

  const enquiries = [
    {
      id: 1,
      name: 'Suman Sharma',
      initial: 'S',
      date: '9th July 2025',
      property: '2BHK apartment in Birla Trimaya phase 1',
      typeIcon: Building2,
      type: 'Property Interested In'
    },
    {
      id: 2,
      name: 'Rohan Malhotra',
      initial: 'R',
      date: '8th July 2025',
      property: '1200Sqft plot in Birla Trimaya phase 2',
      typeIcon: Mountain,
      type: 'Property Interested In'
    },
    {
      id: 3,
      name: 'Anita Desai',
      initial: 'A',
      date: '7th July 2025',
      property: '3BHK Penthouse, Sobha Dream Acres',
      phone: '+91 70243 96102',
      typeIcon: Building2,
      type: 'Property Interested In'
    }
  ];

  return (
    <div className="bg-[#fcfaf2] text-[#1e293b] flex justify-center min-h-screen font-sans">
      <div className="w-full max-w-md min-h-screen relative flex flex-col shadow-2xl pb-32">
        {/* Status Bar is handled by MobileFrame */}
        <TopHeader activeSection="Business" onNavigate={onNavigate} />
        
        {/* Sticky Header Section */}
        <div className="sticky top-0 bg-[#fcfaf2]/90 backdrop-blur-md z-40 px-5 pt-2 pb-3 space-y-4">
          <h1 className="text-xl font-bold text-[#1e293b]">My Enquiries</h1>
          
          <div className="flex p-1 bg-[#f8f5ee] rounded-xl border border-slate-200">
            <button 
              onClick={() => setActiveTab('Resale')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg shadow-sm transition-all ${activeTab === 'Resale' ? 'bg-primary text-white' : 'text-slate-500 font-medium bg-transparent shadow-none'}`}
            >
              Resale
            </button>
            <button 
              onClick={() => setActiveTab('Rental')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg shadow-sm transition-all ${activeTab === 'Rental' ? 'bg-primary text-white' : 'text-slate-500 font-medium bg-transparent shadow-none'}`}
            >
              Rental
            </button>
          </div>
          
          <div className="flex border-b border-slate-200">
            <button 
              onClick={() => setSubTab('Received')}
              className={`flex-1 pb-3 text-sm font-semibold relative ${subTab === 'Received' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}
            >
              Received (140)
              <span className="absolute top-0 right-4 bg-[#d93025] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">9+</span>
            </button>
            <button 
              onClick={() => setSubTab('Sent')}
              className={`flex-1 pb-3 text-sm font-medium ${subTab === 'Sent' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}
            >
              Sent (120)
            </button>
          </div>
          
          <div className="relative pb-2">
            <Search className="absolute left-3 top-3 text-slate-500" size={20} />
            <input 
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 shadow-sm" 
              placeholder="Search by project, micro market" 
              type="text"
            />
          </div>
        </div>

        {/* Enquiries List */}
        <div className="flex-1 px-5 py-2 space-y-4">
          {enquiries.map((enquiry) => (
            <div key={enquiry.id} className="bg-white p-5 rounded-[16px] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 relati ve">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f8f5ee] flex items-center justify-center border border-primary/10 shrink-0">
                  <span className="text-primary font-bold text-lg">{enquiry.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[15px] text-[#1e293b] truncate">{enquiry.name}</h3>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">{enquiry.date}</span>
                  </div>
                  
                  {enquiry.phone ? (
                    <div className="mt-2">
                      <p className="text-sm font-bold text-primary tracking-tight">{enquiry.phone}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-2">
                      <button className="px-4 py-1.5 bg-primary text-white rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all active:scale-95">
                        <Phone size={14} />
                        <span className="text-xs font-semibold">Enquire Now</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f5ee] flex items-center justify-center shrink-0">
                      <enquiry.typeIcon className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{enquiry.type}</p>
                      <p className="text-[13px] text-[#1e293b] font-semibold truncate">{enquiry.property}</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#f8f5ee] text-primary flex items-center justify-center shrink-0">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BusinessBottomNav activeTab="enquiries" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default MyEnquiries;
