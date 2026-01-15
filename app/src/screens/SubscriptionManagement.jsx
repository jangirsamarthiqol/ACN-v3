import { useState } from 'react'
import { ArrowLeft, Check, Crown, Zap, ShieldCheck, CreditCard, Star, MessageCircle, Lock, Layout, ChevronRight, FileText } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import Modal from '../components/Modal'
import './screens.css'

function SubscriptionManagement({ onNavigate }) {
  const [billingCycle, setBillingCycle] = useState('yearly') // 'monthly' | 'yearly'
  const [showCheckout, setShowCheckout] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [couponCode, setCouponCode] = useState('')
  const [gstNumber, setGstNumber] = useState('')
  const [firmName, setFirmName] = useState('')
  const [showGstModal, setShowGstModal] = useState(false)

  const [appliedDiscount, setAppliedDiscount] = useState(0)
  const [couponMessage, setCouponMessage] = useState({ type: '', text: '' })

  // Plan configuration
  const planDetails = {
    monthly: {
      price: '2,500',
      period: '/ Mo',
      durationText: 'Billed Monthly',
      description: 'Get full access to ACN with a flexible monthly subscription, allowing verified agents to list, manage, and inquire about resale inventories.',
      basePriceInt: 2500,
      totalDue: '2,500' // Legacy field fallback
    },
    yearly: {
      price: '20,000',
      period: '/ Yr',
      durationText: 'For 12 Months',
      description: 'Get full access to ACN with a mandatory 12-month subscription, allowing verified agents to list, manage, and inquire about resale inventories while connecting with a trusted real estate network.',
      basePriceInt: 20000,
      totalDue: '20,000'
    }
  }

  const currentPlan = planDetails[billingCycle]
  
  // Calculate total after discount
  const finalAmount = Math.max(0, currentPlan.basePriceInt - appliedDiscount)

  const benefits = [
    { text: 'Exclusive Access', icon: Lock },
    { text: 'Post & Manage Listings', icon: Layout },
    { text: 'On-demand Enquiries', icon: Zap },
    { text: 'Verified Network', icon: ShieldCheck },
    { text: 'WhatsApp Community', icon: MessageCircle },
    { text: 'Priority Support', icon: Star },
  ]

  const handleSwitchCycle = (cycle) => {
    setBillingCycle(cycle)
    // Reset coupon to prevent invalid math (e.g. 5000 off on a 2500 plan)
    setAppliedDiscount(0)
    setCouponCode('')
    setCouponMessage({ type: '', text: '' })
    setGstNumber('')
    setFirmName('')
  }

  const handleSubscribe = () => {
    setCouponCode('')
    setAppliedDiscount(0)
    setCouponMessage({ type: '', text: '' })
    setGstNumber('')
    setFirmName('')
    setShowCheckout(true)
  }

  const handleApplyCoupon = () => {
    if (!couponCode) return;
    
    // Mock validation logic
    const code = couponCode.toUpperCase().trim();
    if (code === 'ACN2025') {
       const discountAmount = billingCycle === 'yearly' ? 5000 : 500;
       setAppliedDiscount(discountAmount);
       setCouponMessage({ type: 'success', text: `Coupon applied! You saved ₹${discountAmount.toLocaleString()}` });
    } else if (code === 'WELCOME') {
       const discountAmount = 100;
       setAppliedDiscount(discountAmount);
       setCouponMessage({ type: 'success', text: `Welcome bonus applied!` });
    } else {
       setAppliedDiscount(0);
       setCouponMessage({ type: 'error', text: 'Invalid coupon code' });
    }
  }

  const confirmPayment = () => {
    setShowCheckout(false)
    setShowSuccess(true)
  }

  return (
    <div className="screen" style={{ background: '#F8F9FB' }}>
      <GlobalHeader onNavigate={onNavigate} activeTab="Profile" />
      
      <div className="section-header" style={{padding: '16px 16px 0'}}>
        <button className="back-btn" onClick={() => onNavigate('profile')}>
          <ArrowLeft size={24} />
        </button>
        <h1>Subscription</h1>
        <div style={{width: 24}}></div>
      </div>

      <div style={{ padding: '0 16px 100px' }}>
        
        {/* Billing Toggle - Premium Style */}
        <div style={{ 
          background: 'rgba(0,0,0,0.05)', 
          padding: '4px', 
          borderRadius: '16px', 
          display: 'flex', 
          margin: '24px 0 16px',
        }}>
          <button 
            style={{ 
              flex: 1, 
              padding: '12px', 
              borderRadius: '12px', 
              border: 'none', 
              background: billingCycle === 'monthly' ? 'white' : 'transparent',
              boxShadow: billingCycle === 'monthly' ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
              fontWeight: 600,
              fontSize: '14px',
              color: billingCycle === 'monthly' ? '#1A1A1A' : '#666',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
            onClick={() => handleSwitchCycle('monthly')}
          >
            Monthly (30k/yr)
          </button>
          <button 
            style={{ 
              flex: 1, 
              padding: '12px', 
              borderRadius: '12px', 
              border: 'none', 
              background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #1A1A1A 0%, #333 100%)' : 'transparent',
              boxShadow: billingCycle === 'yearly' ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
              fontWeight: 600,
              fontSize: '14px',
              color: billingCycle === 'yearly' ? '#FFD700' : '#666',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => handleSwitchCycle('yearly')}
          >
            Yearly (20k/yr)
            {billingCycle === 'yearly' && (
               <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #FFD700, transparent)'
               }} />
            )}
          </button>
        </div>

        {/* Main Premium Card */}
        <div style={{ 
          background: 'white', 
          borderRadius: '24px', 
          padding: '24px', 
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          border: '1px solid rgba(255,255,255,0.8)',
          marginBottom: '24px',
          position: 'relative'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)', 
                    color: '#F57F17',
                    padding: '6px 12px', 
                    borderRadius: '100px', 
                    fontSize: '12px', 
                    fontWeight: 700,
                    marginBottom: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <Crown size={14} fill="#F57F17" />
                    ACN PREMIUM
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                     <span style={{ fontSize: '32px', fontWeight: 800, color: '#1A1A1A' }}>₹{currentPlan.price}</span>
                     <span style={{ fontSize: '15px', fontWeight: 500, color: '#666' }}>{currentPlan.durationText}</span>
                  </div>
                </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555', marginBottom: '24px' }}>
              {currentPlan.description}
            </p>

            <div style={{ height: '1px', background: '#F0F0F0', margin: '0 0 24px' }} />

            <div>
               <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#999', marginBottom: '16px', letterSpacing: '0.5px' }}>Key Benefits</h3>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                 {benefits.map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                       <div style={{ 
                         width: '32px', height: '32px', 
                         background: 'rgba(0, 102, 204, 0.08)', 
                         borderRadius: '8px',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', 
                         color: '#0066CC', flexShrink: 0 
                       }}>
                          <benefit.icon size={16} />
                       </div>
                       <span style={{ fontSize: '13px', fontWeight: 500, color: '#333', lineHeight: '1.3' }}>{benefit.text}</span>
                    </div>
                 ))}
               </div>
            </div>

            <button 
              onClick={handleSubscribe}
              style={{
                width: '100%',
                marginTop: '32px',
                background: 'linear-gradient(135deg, #0066CC 0%, #004C99 100%)',
                color: 'white',
                border: 'none',
                padding: '18px',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(0, 102, 204, 0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              Subscribe Now <ChevronRight size={18} />
            </button>
        </div>

        {/* Credit Add-on Section */}
        <div style={{ 
           background: 'white', 
           borderRadius: '20px', 
           padding: '20px', 
           boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
           border: '1px solid var(--border-light)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
             <div style={{ background: '#FFF3E0', padding: '10px', borderRadius: '50%', color: '#FF9800' }}>
               <Zap size={20} fill="#FF9800" />
             </div>
             <div>
               <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Credit Packs</h4>
               <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Top up instantly</p>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <button style={{ 
               background: '#F8F9FA', border: '1px solid #E0E0E0', borderRadius: '12px', 
               padding: '12px 4px', textAlign: 'center', cursor: 'pointer' 
            }}>
               <div style={{ fontSize: '18px', fontWeight: 700, color: '#333' }}>50</div>
               <div style={{ fontSize: '12px', color: '#666' }}>₹499</div>
            </button>
            <button style={{ 
               background: '#E3F2FD', border: '1px solid #90CAF9', borderRadius: '12px', 
               padding: '12px 4px', textAlign: 'center', cursor: 'pointer', position: 'relative' 
            }}>
               <div style={{ position: 'absolute', top: -8, right: -4, background: '#00C853', color: 'white', fontSize: '8px', padding: '2px 6px', borderRadius: '8px' }}>BEST</div>
               <div style={{ fontSize: '18px', fontWeight: 700, color: '#0066CC' }}>100</div>
               <div style={{ fontSize: '12px', color: '#0066CC' }}>₹899</div>
            </button>
            <button style={{ 
               background: '#F8F9FA', border: '1px solid #E0E0E0', borderRadius: '12px', 
               padding: '12px 4px', textAlign: 'center', cursor: 'pointer' 
            }}>
               <div style={{ fontSize: '18px', fontWeight: 700, color: '#333' }}>200</div>
               <div style={{ fontSize: '12px', color: '#666' }}>₹1,599</div>
            </button>
          </div>
        </div>

      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <Modal 
          isOpen={true} 
          onClose={() => setShowCheckout(false)} 
          title="Checkout Summary"
        >
           <div style={{ paddingBottom: '16px' }}>
              <div style={{ background: '#FAFAFA', borderRadius: '16px', padding: '20px', marginBottom: '24px', border: '1px solid #eee' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 600 }}>ACN Premium</span>
                    <span style={{ fontWeight: 500, color: '#666' }}>{billingCycle === 'yearly' ? '12 Months' : 'Monthly'}</span>
                 </div>
                 
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontSize: '14px', marginBottom: '16px' }}>
                    <span>Subtotal</span>
                    <span>₹{currentPlan.basePriceInt.toLocaleString()}</span>
                 </div>

                 {/* Coupon Code Input */}
                 <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      style={{ 
                        flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', 
                        fontSize: '14px', outline: 'none', textTransform: 'uppercase'
                      }}
                    />
                    <button 
                      onClick={handleApplyCoupon}
                      style={{ 
                        background: '#1A1A1A', color: 'white', border: 'none', borderRadius: '8px', 
                        padding: '0 16px', fontWeight: 600, fontSize: '13px', cursor: 'pointer'
                      }}
                    >
                      Apply
                    </button>
                 </div>
                 {couponMessage.text && (
                   <p style={{ 
                     fontSize: '12px', margin: '0 0 12px', 
                     color: couponMessage.type === 'success' ? '#2E7D32' : '#C62828',
                     display: 'flex', alignItems: 'center', gap: '4px'
                   }}>
                      {couponMessage.type === 'success' && <Check size={12} />}
                      {couponMessage.text}
                   </p>
                 )}

                 {appliedDiscount > 0 && (
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#2E7D32', fontSize: '14px', marginBottom: '8px' }}>
                      <span>Discount Applied</span>
                      <span>-₹{appliedDiscount.toLocaleString()}</span>
                   </div>
                 )}

                 {/* GST Checkbox & Details */}
                 <div style={{ marginBottom: '16px', background: '#F0F2F5', padding: '12px', borderRadius: '12px' }}>
                    {!gstNumber ? (
                       <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', margin: 0 }}>
                          <div 
                             onClick={() => setShowGstModal(true)}
                             style={{ 
                               width: '20px', height: '20px', borderRadius: '4px', border: '2px solid #666', 
                               display: 'flex', alignItems: 'center', justifyContent: 'center',
                               background: 'white' 
                             }}
                          ></div>
                          <span style={{ fontSize: '14px', fontWeight: 500, color: '#444' }}>Claim GST Invoice Credit</span>
                       </label>
                    ) : (
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                             <div style={{ background: '#E8F5E9', padding: '8px', borderRadius: '8px' }}>
                                <FileText size={20} color="#2E7D32" />
                             </div>
                             <div>
                                <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 600, color: '#444' }}>GST Applied</p>
                                <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>{gstNumber}</p>
                                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{firmName}</p>
                             </div>
                          </div>
                          <button 
                             onClick={() => setShowGstModal(true)}
                             style={{ color: '#0066CC', background: 'none', border: 'none', fontSize: '13px', fontWeight: 600, padding: 0, cursor: 'pointer' }}
                          >
                             Edit
                          </button>
                       </div>
                    )}
                 </div>

                 <div style={{ height: '1px', background: '#eee', margin: '8px 0 16px' }} />
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#666' }}>Total Payble</span>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#1A1A1A' }}>₹{finalAmount.toLocaleString()}</span>
                 </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                 <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#444' }}>Select Payment Method</p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #0066CC', background: '#F0F7FF', padding: '16px', borderRadius: '12px', cursor: 'pointer' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0066CC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }} />
                        </div>
                        <CreditCard size={20} color="#0066CC" />
                        <div style={{ flex: 1 }}>
                           <p style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Credit / Debit Card</p>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #eee', background: 'white', padding: '16px', borderRadius: '12px', cursor: 'pointer', opacity: 0.7 }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #ddd' }} />
                        <div style={{ width: '20px', height: '20px', background: '#eee', borderRadius: '4px' }} />
                        <div style={{ flex: 1 }}>
                           <p style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>UPI (GPay / PhonePe)</p>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="modal-actions" style={{ padding: 0 }}>
                <button className="modal-btn modal-btn-primary" onClick={confirmPayment}>
                   Secure Pay ₹{finalAmount.toLocaleString()}
                </button>
              </div>
           </div>
        </Modal>
      )}

      {/* GST Details Modal */}
      {showGstModal && (
         <Modal isOpen={true} onClose={() => setShowGstModal(false)} title="Add GST Details">
            <div style={{ paddingBottom: '16px' }}>
               <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>Enter your registered business details to claim input tax credit.</p>
               
               <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '8px', color: '#444' }}>Firm Name</label>
                  <input 
                     type="text"
                     placeholder="Ex: Acme Realty Solutions"
                     value={firmName}
                     onChange={(e) => setFirmName(e.target.value)}
                     style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
               </div>

               <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '8px', color: '#444' }}>GST Number</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                       type="text"
                       placeholder="15 Digit GSTIN"
                       value={gstNumber}
                       onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                       maxLength={15}
                       style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', textTransform: 'uppercase', boxSizing:'border-box' }}
                    />
                    {gstNumber.length === 15 && (
                       <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: '#2E7D32' }}>
                          <Check size={18} />
                       </div>
                    )}
                  </div>
               </div>

               <div className="modal-actions" style={{ padding: 0 }}>
                  <button 
                     className="modal-btn modal-btn-primary" 
                     onClick={() => setShowGstModal(false)}
                     disabled={gstNumber.length < 15 || !firmName}
                     style={{ opacity: (gstNumber.length < 15 || !firmName) ? 0.5 : 1 }}
                  >
                     Save & Apply
                  </button>
               </div>
            </div>
         </Modal>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <Modal isOpen={true} onClose={() => setShowSuccess(false)} title="Welcome to Premium! 🌟">
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
               <div className="modal-hero" style={{ // Reusing hero style but adjusting for this context
                   background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)', 
                   height: '140px', marginBottom: '24px', borderRadius: '16px',
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
               }}>
                   <div style={{ background: 'white', padding: '16px', borderRadius: '50%', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                      <Crown size={40} color="#FF9800" fill="#FF9800" />
                   </div>
               </div>

               <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Subscription Active</h2>
               <p className="text-muted mb-4">You are now a verified <strong>ACN Premium</strong> agent.</p>
               
               <div style={{ background: '#F0F9FF', padding: '16px', borderRadius: '12px', border: '1px solid #B3E5FC', textAlign: 'left' }}>
                  <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#0277BD', textTransform: 'uppercase' }}>Next Steps</p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                     <Check size={16} color="#0277BD" />
                     <span style={{ fontSize: '14px', color: '#01579B' }}>Complete your profile verification</span>
                  </div>
               </div>

               <div className="modal-actions" style={{ padding: 0, marginTop: '24px' }}>
                  <button className="modal-btn modal-btn-primary" onClick={() => { setShowSuccess(false); onNavigate('dashboard'); }}>Go to Dashboard</button>
               </div>
            </div>
        </Modal>
      )}

      <GlobalBottomNav onNavigate={onNavigate} activeTab="profile" context="home" />
    </div>
  )
}

export default SubscriptionManagement
