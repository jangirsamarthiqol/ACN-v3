import React, { useState } from 'react';
import Modal from '../components/Modal';
import { 
  Bell, Calendar, MessageSquare, Trash2, Trophy, CreditCard, 
  PlusCircle, FileText, Video, Download, Zap, CheckCircle, 
  X as XIcon, Star, TrendingUp, Users, ShieldAlert, ArrowRight
} from 'lucide-react';

const PopupsPreview = () => {
  const [activePopup, setActivePopup] = useState(null);
  const closePopup = () => setActivePopup(null);

  const renderPopupContent = () => {
    switch (activePopup) {
      case 'free-trial':
        return (
          <Modal isOpen={true} onClose={closePopup} title="" noPadding>
            <div className="modal-hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '220px', borderRadius: '0' }}>
               <div className="modal-hero-pattern" style={{ opacity: 0.2, backgroundImage: 'radial-gradient(white 1px, transparent 1px)' }}></div>
               <div className="modal-hero-icon" style={{ width: '100px', height: '100px', fontSize: '48px' }}>🚀</div>
            </div>
            <div style={{ padding: '0 24px 24px' }}>
              <h2 className="text-center mb-2" style={{ fontSize: '24px' }}>Unlock Pro Powers</h2>
              <p className="text-center text-muted mb-4">Supercharge your real estate business with our premium tools.</p>
              
              <ul className="feature-list mb-4">
                <li className="feature-item">
                  <div style={{ background: '#E3F2FD', padding: '8px', borderRadius: '50%', color: '#0066CC' }}><Zap size={20} fill="#0066CC" /></div>
                  <div><strong>AI Smart Matching</strong> <br/><span style={{ fontSize: '12px', color: '#666' }}>Close deals 3x faster</span></div>
                </li>
                <li className="feature-item">
                  <div style={{ background: '#E8F5E9', padding: '8px', borderRadius: '50%', color: '#00C853' }}><CheckCircle size={20} /></div>
                  <div><strong>Verified Leads Only</strong> <br/><span style={{ fontSize: '12px', color: '#666' }}>No more junk calls</span></div>
                </li>
              </ul>

              <div className="modal-actions" style={{ padding: 0 }}>
                <button className="modal-btn modal-btn-primary" onClick={closePopup}>Start 7-Day Free Trial</button>
                <button className="modal-btn modal-btn-text" onClick={closePopup}>View All Plans</button>
              </div>
            </div>
          </Modal>
        );

      case 'enquiry':
        return (
          <Modal isOpen={true} onClose={closePopup} title="New Lead Alert" >
            <div className="modal-hero modal-hero-gradient" style={{ height: '120px', background: '#E3F2FD' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" 
                       style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} alt="User" />
               </div>
            </div>
            
            <div className="text-center mb-4" style={{ marginTop: '-20px' }}>
              <h3 style={{ fontSize: '20px', margin: '0 0 4px 0' }}>Rahul Sharma</h3>
              <p className="text-muted" style={{ margin: 0 }}>Looking for 3BHK in Indiranagar</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
               <div style={{ background: '#F5F7FA', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                 <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Budget</p>
                 <strong style={{ fontSize: '16px', color: '#0066CC' }}>₹1.2 Cr</strong>
               </div>
               <div style={{ background: '#F5F7FA', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                 <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Timeline</p>
                 <strong style={{ fontSize: '16px', color: '#00C853' }}>Immediate</strong>
               </div>
            </div>

            <div className="modal-actions" style={{ padding: 0 }}>
              <button className="modal-btn modal-btn-primary" onClick={closePopup}>Call Now</button>
              <button className="modal-btn modal-btn-secondary" onClick={closePopup}>View Details</button>
            </div>
          </Modal>
        );

      case 'webinar':
        return (
          <Modal isOpen={true} onClose={closePopup} title="" noPadding>
             <div style={{ position: 'relative', height: '200px' }}>
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000" 
                     style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Conference" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', alignItems: 'flex-end', padding: '24px' }}>
                   <div style={{ color: 'white' }}>
                      <span style={{ background: '#FF9800', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', display: 'inline-block' }}>Live Webinar</span>
                      <h3 style={{ margin: 0, fontSize: '24px' }}>Negotiation Mastery</h3>
                   </div>
                </div>
             </div>
             
             <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                   <div>
                      <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Date</p>
                      <p style={{ margin: 0, fontWeight: 500 }}>Jan 25, 2026</p>
                   </div>
                   <div>
                      <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Time</p>
                      <p style={{ margin: 0, fontWeight: 500 }}>4:00 PM IST</p>
                   </div>
                   <div>
                      <p style={{ fontSize: '12px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Speaker</p>
                      <p style={{ margin: 0, fontWeight: 500 }}>Sandeep J.</p>
                   </div>
                </div>

                <div className="modal-actions" style={{ padding: 0 }}>
                  <button className="modal-btn modal-btn-primary" onClick={closePopup}>Register for Free</button>
                </div>
             </div>
          </Modal>
        );

      case 'feedback':
        return (
          <Modal isOpen={true} onClose={closePopup} title="Rate Your Experience">
            <div style={{ textAlign: 'center', padding: '12px 0 24px' }}>
               <p className="text-muted mb-4">How likely are you to recommend ACN v3 to a friend?</p>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', padding: '0 12px' }}>
                 {[1, 2, 3, 4, 5].map(rating => (
                   <div key={rating} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <div style={{ fontSize: '32px', color: rating === 5 ? '#FFC107' : '#E0E0E0' }}>★</div>
                      <span style={{ fontSize: '12px', color: '#999' }}>{rating}</span>
                   </div>
                 ))}
               </div>
               
               <div style={{ background: '#F5F7FA', borderRadius: '12px', padding: '16px' }}>
                  <textarea 
                     placeholder="Tell us what you liked or what we can improve..." 
                     style={{ width: '100%', border: 'none', background: 'transparent', resize: 'none', outline: 'none', fontFamily: 'inherit' }}
                     rows={3}
                  />
               </div>
            </div>
            <div className="modal-actions" style={{ padding: 0 }}>
               <button className="modal-btn modal-btn-primary" onClick={closePopup}>Submit Feedback</button>
            </div>
          </Modal>
        );

      case 'delisting':
        return (
          <Modal isOpen={true} onClose={closePopup} title="Inventory Delisted">
             <div className="modal-hero" style={{ background: '#FFEBEE', height: '140px' }}>
                 <div className="modal-hero-icon" style={{ color: '#D32F2F', border: '4px solid #FFCDD2' }}>
                    <Trash2 size={32} />
                 </div>
             </div>
             
             <div className="text-center mb-4">
               <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Commercial Office Space</h3>
               <p className="text-muted" style={{ fontSize: '14px' }}>
                  This inventory has been inactive for 45 days. To maintain quality, it has been temporarily delisted.
               </p>
             </div>

             <div className="modal-actions" style={{ padding: 0 }}>
               <button className="modal-btn modal-btn-primary" onClick={closePopup}>Relist Inventory</button>
               {/* <button className="modal-btn modal-btn-text" onClick={closePopup}>Permanently Delete</button> */}
             </div>
          </Modal>
        );

      case 'closure':
        return (
          <Modal isOpen={true} onClose={closePopup} title="Deal Closed! 🎉">
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
               <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                  <div style={{ width: '120px', height: '120px', background: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 8px 16px rgba(255, 215, 0, 0.3)' }}>
                    <Trophy size={56} color="white" />
                  </div>
                  <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '24px' }}>✨</div>
                  <div style={{ position: 'absolute', bottom: 10, left: -10, fontSize: '24px' }}>🎊</div>
               </div>

               <h2 style={{ color: '#1A1A1A', fontSize: '28px', marginBottom: '8px' }}>Congratulations!</h2>
               <p className="text-muted mb-4">You successfully closed the deal for <strong>Prestige Tech Park</strong>.</p>
               
               <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
                  <div style={{ padding: '8px 16px', background: '#F5F7FA', borderRadius: '100px', fontSize: '14px', fontWeight: 500 }}>
                    💰 Commission: ₹45,000
                  </div>
               </div>
            </div>
            <div className="modal-actions" style={{ padding: 0 }}>
               <button className="modal-btn modal-btn-primary" onClick={closePopup}>Share Achievement</button>
            </div>
          </Modal>
        );

      case 'subscription':
        return (
          <Modal isOpen={true} onClose={closePopup} title="" noPadding>
            <div style={{ background: '#212121', color: 'white', padding: '32px 24px', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: -20, right: -20, width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
               <div style={{ position: 'absolute', bottom: -10, left: 20, width: '60px', height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <CreditCard size={32} color="#FF9800" />
                  <span style={{ background: '#FF9800', color: 'black', fontSize: '12px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>EXPIRING</span>
               </div>
               <h2 style={{ color: 'white', marginBottom: '8px' }}>Premium Plan</h2>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>Your access exipres in <strong style={{color:'white'}}>3 days</strong>.</p>
            </div>
            
            <div style={{ padding: '24px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
                  <span>Renewal Amount</span>
                  <span style={{ fontSize: '24px', fontWeight: 700 }}>₹2,499<span style={{fontSize: '14px', fontWeight: 400, color: '#999'}}>/yr</span></span>
               </div>
               
               <div className="modal-actions" style={{ padding: 0 }}>
                  <button className="modal-btn modal-btn-primary" style={{ background: '#212121' }} onClick={closePopup}>Renew Membership</button>
                  <button className="modal-btn modal-btn-text" onClick={closePopup}>Remind Me Later</button>
               </div>
            </div>
          </Modal>
        );

      case 'inventory_nudge':
         return (
          <Modal isOpen={true} onClose={closePopup} title="Inventory Low">
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0 12px' }}>
                <div style={{ marginBottom: '24px', position: 'relative', width: '200px', height: '12px', background: '#F5F7FA', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '30%', height: '100%', background: '#EF5350' }}></div>
                </div>
                <p className="text-center mb-4">You've only listed <strong>1 inventory</strong> this week. Agents who list 3+ inventories get 5x more visibility.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
                   <div className="feature-item" style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                      <TrendingUp size={24} color="#00C853" />
                      <span style={{ fontSize: '12px', fontWeight: 600 }}>Get Views</span>
                   </div>
                   <div className="feature-item" style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                      <Users size={24} color="#0066CC" />
                      <span style={{ fontSize: '12px', fontWeight: 600 }}>Get Leads</span>
                   </div>
                </div>
             </div>
             <div className="modal-actions">
                <button className="modal-btn modal-btn-primary" onClick={closePopup}>Add Inventory Now</button>
             </div>
          </Modal>
         );
      
      case 'sop_policy':
          return (
             <Modal isOpen={true} onClose={closePopup} title="Policy Update">
                <div style={{ background: '#E3F2FD', padding: '20px', borderRadius: '16px', marginBottom: '24px', display: 'flex', gap: '16px' }}>
                   <ShieldAlert size={32} color="#0066CC" style={{ flexShrink: 0 }} />
                   <div>
                      <h4 style={{ margin: '0 0 8px 0', color: '#0066CC' }}>Data Privacy & Security</h4>
                      <p style={{ fontSize: '13px', margin: 0, color: '#004C99', lineHeight: '1.4' }}>
                        We've updated our SOPs to ensure better protection of your client data.
                      </p>
                   </div>
                </div>
                
                <ul className="mb-4" style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                   <li style={{ marginBottom: '8px' }}>Mandatory 2FA for all accounts</li>
                   <li style={{ marginBottom: '8px' }}>Masked contact numbers for leads</li>
                   <li>Quarterly password rotation</li>
                </ul>

                <div className="modal-actions" style={{ padding: 0 }}>
                   <button className="modal-btn modal-btn-primary" onClick={closePopup}>I Acknowledge</button>
                </div>
             </Modal>
          );

      case 'book_demo':
          return (
             <Modal isOpen={true} onClose={closePopup} title="Book Product Demo">
                <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '16px' }}>
                   {[
                      { day: 'Mon', date: '12' }, { day: 'Tue', date: '13', active: true }, { day: 'Wed', date: '14' }, { day: 'Thu', date: '15' }
                   ].map((d, i) => (
                      <div key={i} style={{ 
                         minWidth: '60px', padding: '12px', borderRadius: '12px', 
                         background: d.active ? 'var(--primary)' : 'var(--background)',
                         color: d.active ? 'white' : 'var(--text-primary)',
                         textAlign: 'center', cursor: 'pointer', border: d.active ? 'none' : '1px solid var(--border)'
                      }}>
                         <div style={{ fontSize: '12px', opacity: 0.8 }}>{d.day}</div>
                         <div style={{ fontSize: '18px', fontWeight: 700 }}>{d.date}</div>
                      </div>
                   ))}
                </div>
                
                <p style={{ fontWeight: 600, marginBottom: '12px' }}>Available Slots</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                   {['10:00 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(time => (
                      <div key={time} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center', fontSize: '14px' }}>
                         {time}
                      </div>
                   ))}
                </div>

                <div className="modal-actions" style={{ padding: 0 }}>
                   <button className="modal-btn modal-btn-primary" onClick={closePopup}>Confirm Booking</button>
                </div>
             </Modal>
          );
      
      case 'marketing':
          return (
             <Modal isOpen={true} onClose={closePopup} title="Marketing Kit">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                   {['Instagram Post', 'Story Layout', 'WhatsApp Banner', 'Email Header'].map((item, i) => (
                      <div key={i} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '1/1' }}>
                         <img src={`https://source.unsplash.com/random/200x200?real+estate&sig=${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#eee' }} alt="Asset" />
                         <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: '0.2s' }} className='hover-overlay'>
                             <Download color="white" />
                         </div>
                      </div>
                   ))}
                </div>
                <div style={{ marginTop: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>Total size: 45 MB</span>
                      <span style={{ fontSize: '14px', color: 'var(--primary)', cursor: 'pointer' }}>Select All</span>
                   </div>
                   <div className="modal-actions" style={{ padding: 0 }}>
                      <button className="modal-btn modal-btn-primary" onClick={closePopup}>Download Selected</button>
                   </div>
                </div>
             </Modal>
          );

       case 'matching':
          return (
            <Modal isOpen={true} onClose={closePopup} title="Smart Match 🔥">
               <div style={{ background: 'var(--background)', padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                     <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#ccc', backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=100)', backgroundSize: 'cover' }}></div>
                        <div>
                           <p style={{ margin: 0, fontWeight: 600, fontSize: '14px' }}>Skyline Apts</p>
                           <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>2BHK • Whitefield</p>
                        </div>
                     </div>
                     <ArrowRight size={20} color="#999" style={{ alignSelf: 'center' }} />
                     <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: '14px' }}>Requirement</p>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>₹45k Budget</p>
                     </div>
                  </div>
                  <div style={{ height: '1px', background: '#e0e0e0', margin: '12px 0' }}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontSize: '12px', color: '#666' }}>Match Score</span>
                     <span style={{ fontSize: '14px', fontWeight: 700, color: '#00C853' }}>98% Excellent</span>
                  </div>
               </div>

               <div className="modal-actions" style={{ padding: 0 }}>
                  <button className="modal-btn modal-btn-primary" onClick={closePopup}>Connect with Lead</button>
                  <button className="modal-btn modal-btn-secondary" onClick={closePopup}>View Comparison</button>
               </div>
            </Modal>
          );

      default:
        return null;
    }
  };

  const PopupButton = ({ id, label, icon: Icon, color = 'var(--surface)' }) => (
    <button 
      onClick={() => setActivePopup(id)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: color,
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '16px',
        gap: '12px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.2s',
        minHeight: '120px'
      }}
    >
      <div style={{ color: 'var(--primary)', background: '#F5F7FA', padding: '12px', borderRadius: '50%' }}>
        <Icon size={24} />
      </div>
      <span style={{ fontWeight: '500', color: 'var(--text-primary)', fontSize: '13px', textAlign: 'center' }}>{label}</span>
    </button>
  );

  return (
    <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>Popup Gallery</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Infographic style notifications</p>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '12px',
        paddingBottom: '40px'
      }}>
        <PopupButton id="free-trial" label="Free Trial" icon={Zap} />
        <PopupButton id="enquiry" label="Notification" icon={Bell} />
        <PopupButton id="webinar" label="Webinar" icon={Calendar} />
        <PopupButton id="feedback" label="Feedback" icon={MessageSquare} />
        <PopupButton id="delisting" label="Delisting" icon={Trash2} />
        <PopupButton id="closure" label="Success" icon={Trophy} />
        <PopupButton id="subscription" label="Subscription" icon={CreditCard} />
        <PopupButton id="inventory_nudge" label="Inventory" icon={PlusCircle} />
        <PopupButton id="sop_policy" label="Policy" icon={FileText} />
        <PopupButton id="book_demo" label="Book Demo" icon={Video} />
        <PopupButton id="marketing" label="Marketing" icon={Download} />
        <PopupButton id="matching" label="Match Alert" icon={Zap} />
      </div>

      {renderPopupContent()}
    </div>
  );
};

export default PopupsPreview;
