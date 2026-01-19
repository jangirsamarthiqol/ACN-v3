import React, { useState } from 'react';
import { ArrowLeft, Check, Crown, Zap, ShieldCheck, CreditCard, Star, MessageCircle, Lock, Layout, ChevronRight, FileText, X, HelpCircle, Receipt, ShoppingCart, Headset, Phone, MessageSquare } from 'lucide-react';
import Modal from '../components/Modal';

const SubscriptionManagement = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Checkout State
  const [couponCode, setCouponCode] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [firmName, setFirmName] = useState('');
  const [showGstModal, setShowGstModal] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState({ type: '', text: '' });

  const planDetails = {
    monthly: {
      price: '2,000',
      period: '/ Mo',
      basePriceInt: 2000,
    },
    yearly: {
      price: '14,999',
      period: '/ Yr',
      basePriceInt: 14999,
    }
  };

  const currentPlan = planDetails[billingCycle];
  const finalAmount = Math.max(0, currentPlan.basePriceInt - appliedDiscount);

  const handleSubscribe = () => {
    setCouponCode('');
    setAppliedDiscount(0);
    setCouponMessage({ type: '', text: '' });
    setShowCheckout(true);
  };

  const handleApplyCoupon = () => {
    if (!couponCode) return;
    const code = couponCode.toUpperCase().trim();
    if (code === 'ACN2025') {
       const discount = billingCycle === 'yearly' ? 5000 : 500;
       setAppliedDiscount(discount);
       setCouponMessage({ type: 'success', text: `Saved ₹${discount.toLocaleString()}` });
    } else {
       setAppliedDiscount(0);
       setCouponMessage({ type: 'error', text: 'Invalid coupon' });
    }
  };

  const confirmPayment = () => {
    setShowCheckout(false);
    setShowSuccess(true);
  };

  return (
    <div className="bg-background-light min-h-screen text-text-primary font-sans pb-10">
        
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center bg-background-light/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-border-light">
          <button 
            onClick={() => onNavigate('profile')} 
            className="flex items-center justify-center w-10 h-10 -ml-2 text-text-primary"
          >
             <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Subscription</h2>
          <div className="flex w-10 items-center justify-end">
             <button className="flex items-center justify-center p-2 text-text-primary">
                <HelpCircle size={20} />
             </button>
          </div>
        </div>

        <div className="p-4 space-y-8">
            


             {/* Choose Plan Toggle */}
             <section className="flex flex-col items-center">
                 <div className="bg-background-tertiary p-1 rounded-2xl flex items-center gap-1 w-fit shadow-inner bg-surface border border-border-light">
                     <button 
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
                     >
                        Monthly
                     </button>
                     <button 
                         onClick={() => setBillingCycle('yearly')}
                         className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all relative ${billingCycle === 'yearly' ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
                     >
                        Yearly
                        <span className="absolute -top-3 -right-3 bg-accent-mint text-primary-dark text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-sm border border-primary/10">SAVE 38%</span>
                     </button>
                 </div>
             </section>

             {/* Plans */}
             <div className="space-y-4">
                 {/* Premium Plan */}
                 <div className="bg-surface rounded-2xl p-5 border-2 border-primary shadow-lg relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">For Professionals</div>
                     <div className="flex justify-between items-start mb-4">
                         <div>
                             <h4 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                 ACN Premium <Crown size={18} className="text-primary" fill="currentColor" />
                             </h4>
                             <p className="text-text-secondary text-xs mt-1">Unlock ACN’s full potential with additional features.</p>
                         </div>
                         <div className="text-right">
                             <p className="text-2xl font-bold text-text-primary">₹{currentPlan.price}</p>
                             <p className="text-text-tertiary text-[10px] font-bold uppercase">{currentPlan.period}</p>
                             {billingCycle === 'yearly' && <p className="text-primary text-[10px] font-bold">(₹1250/month)</p>}
                         </div>
                     </div>
                     <ul className="space-y-3 mb-6 pt-2 border-t border-primary/10">
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={18} className="text-primary" /> 100 Enquiries/Month
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={18} className="text-primary" /> Unlimited inventory listings
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={18} className="text-primary" /> Unlimited requirement listings
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={18} className="text-primary" /> Priority KAM Access
                         </li>
                         <li className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                             <Check size={18} className="text-primary mt-0.5 shrink-0" /> Exclusive Access to Resale Market Data and Micromarket Reports
                         </li>
                     </ul>
                     <button 
                        onClick={handleSubscribe}
                        className="w-full py-3.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                     >
                        Upgrade to Premium
                     </button>
                 </div>

                 {/* Basic Plan */}
                <div className="bg-surface rounded-2xl p-5 border border-border-light">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-[10px] font-extrabold text-text-tertiary uppercase tracking-wider block mb-1">For New Agents</span>
                            <h4 className="text-lg font-bold text-text-primary">ACN Basic</h4>
                            <p className="text-text-secondary text-xs mt-1">Get started with limited features.</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-text-primary">₹0</p>
                            <p className="text-text-tertiary text-[10px] font-bold uppercase">/year</p>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6 pt-2 border-t border-border-light/50">
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={16} className="text-text-tertiary" /> 5 Enquiry Credits/Month
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={16} className="text-text-tertiary" /> Unlimited Inventory Listings (until 5 enquiries)
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={16} className="text-text-tertiary" /> Unlimited Requirement Listings (until 5 enquiries)
                         </li>
                         <li className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                             <Check size={16} className="text-text-tertiary" /> Standard KAM Support
                         </li>
                     </ul>
                     <button className="w-full py-3 rounded-xl border border-border-light bg-background-light text-text-secondary text-sm font-bold pointer-events-none">
                        Current Plan
                     </button>
                </div>
             </div>







        </div>

        {/* Existing Checkout Modal */}
        {showCheckout && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-surface w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom">
            <div className="p-5 border-b border-border-light flex justify-between items-center bg-background-light/50">
              <h3 className="font-bold text-lg text-text-primary">Checkout</h3>
              <button onClick={() => setShowCheckout(false)} className="p-2 bg-background-secondary rounded-full text-text-secondary hover:text-text-primary">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
               <div className="bg-background-light p-4 rounded-2xl border border-border-light space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="text-text-secondary">ACN Premium ({billingCycle === 'yearly' ? 'Yearly' : 'Monthly'})</span>
                     <span className="font-bold text-text-primary">₹{currentPlan.basePriceInt.toLocaleString()}</span>
                  </div>
                  {appliedDiscount > 0 && (
                     <div className="flex justify-between text-sm text-green-600">
                        <span>Discount</span>
                        <span>-₹{appliedDiscount.toLocaleString()}</span>
                     </div>
                  )}
                  <div className="border-t border-border-light pt-2 flex justify-between items-center">
                     <span className="font-bold text-text-primary">Total Payble</span>
                     <span className="text-2xl font-black text-primary">₹{finalAmount.toLocaleString()}</span>
                  </div>
               </div>

               {/* Coupon */}
               <div>
                 <label className="text-xs font-bold text-text-secondary uppercase mb-2 block">Promo Code</label>
                 <div className="flex gap-2">
                    <input 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-background-light border border-border-light rounded-xl px-4 py-3 text-sm font-bold placeholder:font-normal focus:outline-none focus:border-primary uppercase"
                      placeholder="Enter Code"
                    />
                    <button onClick={handleApplyCoupon} className="bg-text-primary text-white px-5 rounded-xl text-sm font-bold hover:bg-black transition-colors">Apply</button>
                 </div>
                 {couponMessage.text && (
                    <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${couponMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                      {couponMessage.type === 'success' && <Check size={12} />} {couponMessage.text}
                    </p>
                 )}
               </div>

               <button onClick={confirmPayment} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                  Pay Securely
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
           <div className="bg-surface w-full max-w-sm rounded-[32px] p-8 text-center shadow-2xl animate-in zoom-in-95">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                 <Check size={40} strokeWidth={4} />
              </div>
              <h2 className="text-2xl font-black text-text-primary mb-2">Payment Successful!</h2>
              <p className="text-text-secondary mb-8">You are now a premium member. Enjoy your exclusive benefits.</p>
              <button 
                onClick={() => { setShowSuccess(false); onNavigate('dashboard'); }}
                className="w-full bg-text-primary text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors"
              >
                Go to Dashboard
              </button>
           </div>
        </div>
      )}

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

export default SubscriptionManagement;
