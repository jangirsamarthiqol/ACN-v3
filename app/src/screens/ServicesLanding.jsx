import React from 'react';
import { Scale, FileText, CheckCircle, ArrowRight, Star, Users, Clock, ChevronRight, Bell } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalBottomNav from '../components/GlobalBottomNav';
import './screens.css';

function ServicesLanding({ onNavigate }) {
  const comingSoon = [
    { icon: '🏛️', name: 'AOP Services', desc: 'Builder agreements' },
    { icon: '📊', name: 'Market Reports', desc: 'Area insights' },
    { icon: '🏦', name: 'Home Loans', desc: 'Loan assistance' },
    { icon: '🛡️', name: 'Insurance', desc: 'Property protection' },
    { icon: '🧭', name: 'Vastu', desc: 'Vastu consultation' },
    { icon: '📸', name: 'Photography', desc: 'Property shoots' }
  ];

  return (
    <div className="bg-background-light min-h-screen pb-24 font-display text-text-primary">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="Services" title="Services Hub" />

      <div className="p-4 space-y-6">
        {/* Featured Legal Services */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white p-6 shadow-xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4 border border-white/10">
              ⭐ Most Popular
            </span>
            <div className="mb-4">
              <Scale size={40} className="text-white opacity-90" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Legal Services</h2>
            <p className="text-sm opacity-90 mb-5 leading-relaxed max-w-[90%]">
              Expert legal support for property documentation, registration, and verification
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
              {['Title Verification', 'Agreement Drafting', 'Registration Support'].map(item => (
                <span key={item} className="text-xs font-semibold bg-white/10 px-2 py-1 rounded-md">
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button 
                onClick={() => onNavigate('legal-services')}
                className="flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-all"
              >
                Explore Services <ArrowRight size={16} />
              </button>
              <div 
                onClick={() => onNavigate('service-tracking')} 
                className="text-xs font-medium opacity-80 underline underline-offset-2 cursor-pointer"
              >
                50+ Services
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl border border-border shadow-sm">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-full mb-1">
              <Users size={18} />
            </div>
            <div className="text-xs text-text-secondary leading-tight">
              <span className="block font-bold text-text-primary text-sm">5000+</span>
              Services
            </div>
          </div>
          <div className="border-l border-border-light pl-2 flex flex-col items-center gap-1.5 text-center">
            <div className="p-2 bg-amber-50 text-amber-500 rounded-full mb-1">
              <Star size={18} />
            </div>
            <div className="text-xs text-text-secondary leading-tight">
              <span className="block font-bold text-text-primary text-sm">4.8</span>
              Rating
            </div>
          </div>
          <div className="border-l border-border-light pl-2 flex flex-col items-center gap-1.5 text-center">
            <div className="p-2 bg-green-50 text-green-600 rounded-full mb-1">
              <Clock size={18} />
            </div>
            <div className="text-xs text-text-secondary leading-tight">
              <span className="block font-bold text-text-primary text-sm">Fast</span>
              Delivery
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-text-primary">Coming Soon</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {comingSoon.map((service, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-border flex flex-col gap-2 relative overflow-hidden group">
                <div className="text-2xl mb-1">{service.icon}</div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm">{service.name}</h4>
                  <p className="text-[10px] text-text-tertiary">{service.desc}</p>
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-background-secondary rounded-full text-[10px] font-bold text-text-tertiary uppercase tracking-wider">
                  Soon
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notify Me */}
        <div className="bg-gradient-to-r from-[#E3F2FD] to-[#F1F8FF] p-4 rounded-2xl flex items-center gap-4 border border-blue-100">
          <div className="bg-white p-3 rounded-full shadow-sm text-primary">
            <Bell size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-primary mb-0.5">Get Notified</h4>
            <p className="text-xs text-text-secondary">Know when new services launch</p>
          </div>
          <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-md shadow-primary/20">
            Notify
          </button>
        </div>

        {/* Why Choose */}
        <section>
          <h2 className="text-lg font-bold text-text-primary mb-4">Why Choose ACN?</h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {['Verified Partners', 'Competitive Pricing', 'Dedicated Support', 'Quick Turnaround'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border-b border-border-light last:border-0 hover:bg-background-secondary/50">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm font-bold text-text-secondary">{benefit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <GlobalBottomNav onNavigate={onNavigate} activeTab="services" />
    </div>
  )
}

export default ServicesLanding
