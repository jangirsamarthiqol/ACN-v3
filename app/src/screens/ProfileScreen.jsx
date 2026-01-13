import { ArrowLeft, Star, Zap, CreditCard, Calendar, Check, Phone, HelpCircle, FileText, LogOut, Crown, Mail, Building2, Edit2 } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function ProfileScreen({ onNavigate }) {
  const profileDetails = [
    { label: 'Area of operation', value: 'South Mumbai' },
    { label: 'Categories', value: 'Residential, Commercial' },
    { label: 'Alternate phone', value: '+91 99999 88888' },
    { label: 'Firm name', value: 'Doe Estates Pvt Ltd' },
    { label: 'Firm Address', value: '101, Business Bay, Nariman Point, Mumbai' },
    { label: 'RERA number', value: 'A51800000001', verified: true }
  ]

  return (
    <div className="screen profile-screen-new">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="" />

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>

      {/* Profile Section */}
      <section className="profile-hero">
        {/* Plan Badge */}
        <div className="plan-badge-container">
          <div className="plan-badge basic">
            <Star size={14} />
            <span>Basic Plan</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="avatar-container">
          <div className="avatar-circle">
            <span className="avatar-initial">J</span>
          </div>
          <div className="online-indicator"></div>
        </div>

        {/* Name & Phone */}
        <div className="profile-info">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <h1 className="profile-name-new">John Doe</h1>
            <button className="icon-btn-small" onClick={() => onNavigate('edit-profile')} aria-label="Edit Profile">
              <Edit2 size={16} />
            </button>
          </div>
          <p className="profile-phone">+91 98765 43210</p>
        </div>

        {/* CTA Button */}
        <button className="trial-btn">
          <span>Start Free Trial</span>
          <Zap size={18} />
        </button>
      </section>

      {/* Content */}
      <div className="profile-content">
        {/* Credits Card */}
        <section className="credits-card">
          <div className="credits-header">
            <div className="credits-info">
              <div className="credits-icon">
                <CreditCard size={20} />
              </div>
              <div>
                <p className="credits-label">Available Balance</p>
                <p className="credits-value">150 Credits</p>
              </div>
            </div>
            <button className="add-credits-btn" onClick={() => onNavigate('subscription')}>
              Add Credits
            </button>
          </div>
          <div className="credits-footer">
            <Calendar size={14} />
            <p>Next renewal date: <strong>Dec 12, 2026</strong></p>
          </div>
        </section>

        {/* Profile Details */}
        <section className="details-card">
          <div className="details-header">
            <h3>Profile Details</h3>
            <span className="badge-icon">🪪</span>
          </div>
          <div className="details-list">
            {profileDetails.map((item, i) => (
              <div key={i} className="detail-row">
                <span className="detail-label">{item.label}</span>
                <span className="detail-value">
                  {item.value}
                  {item.verified && <Check size={14} className="verified-check" />}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="dashboard-section">
          <div className="dashboard-header">
            <h3>Your Dashboard</h3>
            <button className="link-btn" onClick={() => onNavigate('dashboard')}>View Full Summary</button>
          </div>
          <div className="stats-row">
            <div className="stat-box" onClick={() => onNavigate('enquiries')}>
              <div className="stat-icon green">
                <Mail size={18} />
              </div>
              <div>
                <p className="stat-number">12</p>
                <p className="stat-label">New Enquiries</p>
              </div>
            </div>
            <div className="stat-box" onClick={() => onNavigate('properties')}>
              <div className="stat-icon yellow">
                <Building2 size={18} />
              </div>
              <div>
                <p className="stat-number">05</p>
                <p className="stat-label">Properties Live</p>
              </div>
            </div>
          </div>
        </section>

        {/* Go Premium Card */}
        <section className="premium-card" onClick={() => onNavigate('subscription')}>
          <div className="premium-glow-1"></div>
          <div className="premium-glow-2"></div>
          <div className="premium-content">
            <div className="premium-header">
              <div>
                <h3>Go Premium</h3>
                <p>Unlock unlimited potential for your business</p>
              </div>
              <div className="premium-icon">
                <Crown size={24} />
              </div>
            </div>
            <ul className="premium-features">
              <li><Check size={14} /> Unlimited property listings</li>
              <li><Check size={14} /> Verified leads & contacts</li>
              <li><Check size={14} /> Priority support</li>
            </ul>
            <button className="premium-btn">Get Premium</button>
          </div>
        </section>

        {/* Support & History */}
        <section className="support-section">
          <h3>Support & History</h3>
          <div className="support-grid">
            <button className="support-tile">
              <Phone size={22} />
              <span>Contact<br/>KAM</span>
            </button>
            <button className="support-tile" onClick={() => onNavigate('help-support')}>
              <HelpCircle size={22} />
              <span>Help &<br/>Support</span>
            </button>
            <button className="support-tile">
              <FileText size={22} />
              <span>Transac.<br/>Records</span>
            </button>
          </div>
        </section>

        {/* Rate Us */}
        <section className="rate-card">
          <div className="rate-content">
            <Star size={20} className="star-icon" />
            <span>Loving the app?</span>
          </div>
          <button className="rate-btn">Rate us</button>
        </section>

        {/* Logout */}
        <button className="logout-btn-new">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
      </div>
      
      <GlobalBottomNav onNavigate={onNavigate} activeTab="" />

      <style>{`
        .profile-screen-new {
          background: #fdfbf7;
          padding-bottom: 32px;
        }
        .profile-header-new {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(253, 251, 247, 0.95);
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid rgba(214, 211, 209, 0.5);
        }
        .back-btn-round {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: #57534e;
          border-radius: 50%;
          cursor: pointer;
        }
        .back-btn-round:hover {
          background: #f5f5f4;
        }
        .edit-profile-btn {
          background: none;
          border: none;
          color: #15803d;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
        }
        .profile-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 16px 24px;
        }
        .plan-badge-container {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 16px;
        }
        .plan-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .plan-badge.basic {
          background: #e7e5e4;
          color: #57534e;
          border: 1px solid #d6d3d1;
        }
        .avatar-container {
          position: relative;
          margin-bottom: 16px;
        }
        .avatar-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .avatar-initial {
          font-size: 40px;
          font-weight: 700;
          color: #15803d;
        }
        .online-indicator {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: #16a34a;
          border-radius: 50%;
          border: 3px solid white;
        }
        .profile-info {
          text-align: center;
          margin-bottom: 20px;
        }
        .profile-name-new {
          font-size: 26px;
          font-weight: 700;
          color: #14532d;
          margin-bottom: 4px;
        }
        .profile-phone {
          font-size: 15px;
          color: #57534e;
          font-weight: 500;
        }
        .trial-btn {
          width: 100%;
          padding: 14px 24px;
          background: #15803d;
          color: white;
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(21, 128, 61, 0.25);
          cursor: pointer;
        }
        .profile-content {
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .credits-card {
          background: white;
          border-radius: 16px;
          padding: 16px;
          border: 1px solid #e7e5e4;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .credits-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .credits-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .credits-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fef9c3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a16207;
        }
        .credits-label {
          font-size: 12px;
          color: #57534e;
          font-weight: 500;
        }
        .credits-value {
          font-size: 18px;
          font-weight: 700;
          color: #14532d;
        }
        .add-credits-btn {
          padding: 8px 16px;
          background: rgba(21, 128, 61, 0.1);
          color: #15803d;
          font-weight: 700;
          font-size: 13px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
        }
        .credits-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #f5f5f4;
          font-size: 12px;
          color: #57534e;
        }
        .credits-footer strong {
          color: #14532d;
        }
        .details-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e7e5e4;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .details-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(250, 250, 249, 0.5);
          border-bottom: 1px solid #f5f5f4;
        }
        .details-header h3 {
          font-size: 15px;
          font-weight: 700;
          color: #14532d;
        }
        .badge-icon {
          font-size: 18px;
        }
        .details-list {
          divide-y: 1px solid #f5f5f4;
        }
        .detail-row {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid #f5f5f4;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-size: 12px;
          font-weight: 600;
          color: #57534e;
        }
        .detail-value {
          font-size: 13px;
          font-weight: 500;
          color: #14532d;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }
        .verified-check {
          color: #15803d;
        }
        .dashboard-section h3 {
          font-size: 18px;
          font-weight: 700;
          color: #14532d;
        }
        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .stat-box {
          background: white;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #e7e5e4;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .stat-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon.green {
          background: #dcfce7;
          color: #15803d;
        }
        .stat-icon.yellow {
          background: #fef9c3;
          color: #a16207;
        }
        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #14532d;
        }
        .stat-label {
          font-size: 12px;
          color: #57534e;
        }
        .premium-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          background: linear-gradient(135deg, #14532d 0%, #064e3b 100%);
          padding: 20px;
          cursor: pointer;
        }
        .premium-glow-1 {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          background: #22c55e;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
        }
        .premium-glow-2 {
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 160px;
          height: 160px;
          background: #fbbf24;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
        }
        .premium-content {
          position: relative;
          z-index: 1;
        }
        .premium-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .premium-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }
        .premium-header p {
          font-size: 12px;
          color: #bbf7d0;
          margin-top: 4px;
        }
        .premium-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fde047;
          backdrop-filter: blur(8px);
        }
        .premium-features {
          list-style: none;
          margin-bottom: 20px;
        }
        .premium-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #dcfce7;
          margin-bottom: 8px;
        }
        .premium-features li svg {
          color: #86efac;
        }
        .premium-btn {
          width: 100%;
          padding: 12px;
          background: #fbbf24;
          color: #14532d;
          font-weight: 700;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .support-section h3 {
          font-size: 18px;
          font-weight: 700;
          color: #14532d;
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .support-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 12px;
          background: white;
          border: 1px solid #e7e5e4;
          border-radius: 12px;
          height: 96px;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .support-tile svg {
          color: #15803d;
        }
        .support-tile span {
          font-size: 11px;
          font-weight: 600;
          color: #57534e;
          text-align: center;
          line-height: 1.3;
        }
        .rate-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: white;
          border: 1px solid #e7e5e4;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .rate-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .star-icon {
          color: #fbbf24;
          fill: #fbbf24;
        }
        .rate-content span {
          font-size: 14px;
          font-weight: 700;
          color: #14532d;
        }
        .rate-btn {
          background: none;
          border: none;
          color: #15803d;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
        }
        .logout-btn-new {
          width: 100%;
          padding: 14px;
          background: #f5f5f4;
          border: 1px solid #e7e5e4;
          border-radius: 12px;
          color: #57534e;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .version-text {
          text-align: center;
          font-size: 10px;
          color: #a8a29e;
          margin-top: 8px;
        }
        .icon-btn-small {
          background: rgba(21, 128, 61, 0.1);
          color: #15803d;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ProfileScreen
