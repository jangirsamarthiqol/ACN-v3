import GlobalHeader from '../components/GlobalHeader';

import React from 'react';
import BusinessBottomNav from '../components/BusinessBottomNav';
import {
  Building2,
  FileText,
  Mail,
  Eye,
  Store,
  FilePlus2,
  AlertTriangle,
  MessageCircle,
  ChevronRight,
  LayoutDashboard,
  Building,
  Heart,
} from 'lucide-react';

const BusinessDashboard = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex justify-center min-h-screen font-display">
      <div className="w-full max-w-md min-h-screen relative pb-32 bg-background-light dark:bg-background-dark">
        
        <GlobalHeader activeTab="My Business" onNavigate={onNavigate} />


        <div className="px-4 py-6 space-y-8">
          {/* Dashboard Summary */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 ml-1">Dashboard Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div
                onClick={() => onNavigate('properties')}
                className="bg-primary p-5 rounded-3xl text-white shadow-lg shadow-emerald-900/10 cursor-pointer transition-transform active:scale-95">
                <Building2 className="opacity-70 mb-4" size={24} />
                <div className="text-3xl font-bold tracking-tight">48</div>
                <p className="text-[10px] font-bold opacity-90 mt-1 uppercase tracking-tight">Live Inventories</p>
                <p className="text-[10px] opacity-70 mt-2">↑ +5 this week</p>
              </div>
              {/* Card 2 */}
              <div
                onClick={() => onNavigate('requirements')}
                className="bg-indigo-600 p-5 rounded-3xl text-white shadow-lg shadow-indigo-900/10 cursor-pointer transition-transform active:scale-95">
                <FileText className="opacity-70 mb-4" size={24} />
                <div className="text-3xl font-bold tracking-tight">23</div>
                <p className="text-[10px] font-bold opacity-90 mt-1 uppercase tracking-tight">Open Requirements</p>
                <p className="text-[10px] opacity-70 mt-2">↑ +3 new</p>
              </div>
              {/* Card 3 */}
              <div
                onClick={() => onNavigate('enquiries')}
                className="bg-emerald-500 p-5 rounded-3xl text-white shadow-lg shadow-emerald-900/10 cursor-pointer transition-transform active:scale-95">
                <Mail className="opacity-70 mb-4" size={24} />
                <div className="text-3xl font-bold tracking-tight">156</div>
                <p className="text-[10px] font-bold opacity-90 mt-1 uppercase tracking-tight">Enquiries</p>
                <p className="text-[10px] opacity-70 mt-2">↓ 89 Rec | ↑ 67 Sent</p>
              </div>
              {/* Card 4 */}
              <div className="bg-orange-500 p-5 rounded-3xl text-white shadow-lg shadow-orange-900/10">
                <Eye className="opacity-70 mb-4" size={24} />
                <div className="text-3xl font-bold tracking-tight">12</div>
                <p className="text-[10px] font-bold opacity-90 mt-1 uppercase tracking-tight">Properties Under Review</p>
                <p className="text-[10px] font-semibold mt-2 underline cursor-pointer">View All →</p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 ml-1">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate('add-inventory')}
                className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Store className="text-primary mb-2" size={30} />
                <span className="text-sm font-bold">Add Inventory</span>
              </button>
              <button
                onClick={() => onNavigate('add-requirement')}
                className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <FilePlus2 className="text-primary mb-2" size={30} />
                <span className="text-sm font-bold">Add Requirement</span>
              </button>
            </div>
          </section>

          {/* Actions Required */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 ml-1">Actions Required</h2>
            <div className="space-y-3">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 p-4 rounded-2xl flex items-start gap-4">
                <div className="bg-red-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-sm">
                  <AlertTriangle className="leading-none" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 dark:text-slate-100 font-bold text-sm">8 inventories getting delisted</p>
                  <p className="text-red-600 dark:text-red-400 text-xs mt-1">Renew before they expire tonight at 11:59 PM</p>
                </div>
                <ChevronRight className="text-slate-400 self-center" size={18} />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 p-4 rounded-2xl flex items-start gap-4">
                <div className="bg-blue-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-sm">
                  <MessageCircle className="leading-none" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 dark:text-slate-100 font-bold text-sm">New enquiry received</p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs mt-1">High intent buyer for locality: Mumbai South</p>
                </div>
                <ChevronRight className="text-slate-400 self-center" size={18} />
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Nav */}
        {/* Bottom Nav */}
        <BusinessBottomNav activeTab="dashboard" onNavigate={onNavigate} />

        {/* Home Indicator */}
        <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
