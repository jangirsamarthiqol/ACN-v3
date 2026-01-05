import { Settings, Building2, FileText, Phone, Mail, Star, ChevronRight, CreditCard, HelpCircle, LogOut, Award, Shield, Edit3 } from 'lucide-react'
import './screens.css'

function ProfileScreen({ onNavigate }) {
  const menuItems = [
    {
      title: 'Profile Settings',
      items: [
        { icon: Edit3, label: 'Edit Profile Details', color: '#0066CC' },
        { icon: Settings, label: 'Notification Preferences', color: '#8B5CF6' },
        { icon: Shield, label: 'Privacy Settings', color: '#00C853' }
      ]
    },
    {
      title: 'Business',
      items: [
        { icon: CreditCard, label: 'Manage Subscription', color: '#FF9800' },
        { icon: FileText, label: 'Payment History', color: '#00BCD4' },
        { icon: Award, label: 'Credits & Usage', color: '#E91E63' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', color: '#607D8B' },
        { icon: Phone, label: 'Contact KAM', color: '#4CAF50' }
      ]
    }
  ]

  return (
    <div className="screen profile-screen">
      {/* Profile Header */}
      <div className="profile-bg gradient-blue-purple">
        <button className="settings-btn">
          <Settings size={22} color="white" />
        </button>
      </div>
      
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=agent" alt="Profile" />
          <button className="edit-avatar">
            <Edit3 size={14} />
          </button>
        </div>
        <h2 className="profile-name">Rahul Sharma</h2>
        <p className="profile-role">Premium Agent</p>
        <div className="profile-badge">✓ Verified Agent • RERA Registered</div>
        
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="number">48</span>
            <span className="label">Properties</span>
          </div>
          <div className="profile-stat">
            <span className="number">23</span>
            <span className="label">Requirements</span>
          </div>
          <div className="profile-stat">
            <span className="number">4.8</span>
            <span className="label">Rating</span>
          </div>
        </div>
      </div>

      {/* Subscription Card */}
      <div className="subscription-card">
        <div className="sub-header">
          <span className="sub-badge">👑 Premium Plan</span>
          <span className="sub-status">Active</span>
        </div>
        <div className="sub-validity">
          <span>Valid until Jan 30, 2026</span>
          <span className="days-left">25 days left</span>
        </div>
        <div className="sub-progress">
          <div className="progress-bar" style={{width: '80%'}}></div>
        </div>
        <div className="sub-credits">
          <div className="credit-info">
            <span className="credit-count">48</span>
            <span className="credit-label">Credits Remaining</span>
          </div>
          <button className="add-credits-btn">+ Add Credits</button>
        </div>
      </div>

      {/* Menu Sections */}
      {menuItems.map((section, i) => (
        <div key={i} className="menu-section">
          <span className="menu-section-title">{section.title}</span>
          <div className="menu-list">
            {section.items.map((item, j) => (
              <div key={j} className="menu-item">
                <div className="menu-icon" style={{background: `${item.color}15`}}>
                  <item.icon size={18} color={item.color} />
                </div>
                <span className="menu-text">{item.label}</span>
                <ChevronRight size={18} className="menu-arrow" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* KAM Section */}
      <div className="kam-card">
        <div className="kam-avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=priya" alt="" />
        </div>
        <div className="kam-info">
          <h4>Your Relationship Manager</h4>
          <p>Priya Desai • Senior KAM</p>
        </div>
        <div className="kam-actions">
          <button className="kam-btn"><Phone size={16} /></button>
          <button className="kam-btn whatsapp"><Mail size={16} /></button>
        </div>
      </div>

      {/* Logout */}
      <button className="logout-btn">
        <LogOut size={18} />
        Logout
      </button>

      <div className="app-version">
        <p>ACN v3.0.2</p>
        <button className="link-btn">Check for updates</button>
      </div>

      <style>{`
        .profile-screen {
          padding-bottom: 40px;
        }
        .profile-bg {
          height: 120px;
          position: relative;
        }
        .settings-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .profile-header {
          margin-top: -60px;
          text-align: center;
          padding: 0 16px 24px;
        }
        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 12px;
          overflow: visible;
          position: relative;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          background: white;
        }
        .profile-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .edit-avatar {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 32px;
          height: 32px;
          background: #0066CC;
          border: 3px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
        }
        .profile-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .profile-role {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }
        .profile-badge {
          display: inline-block;
          background: #E8F5E9;
          color: #2E7D32;
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
        }
        .profile-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 20px;
        }
        .profile-stat {
          text-align: center;
        }
        .profile-stat .number {
          font-size: 22px;
          font-weight: 700;
          color: #1A1A1A;
          display: block;
        }
        .profile-stat .label {
          font-size: 12px;
          color: #888;
        }
        .subscription-card {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          margin: 0 16px 24px;
          border-radius: 16px;
          padding: 16px;
          color: #1A1A1A;
        }
        .sub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .sub-badge {
          font-weight: 700;
          font-size: 16px;
        }
        .sub-status {
          background: rgba(255,255,255,0.4);
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
        }
        .sub-validity {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 8px;
        }
        .days-left {
          font-weight: 600;
        }
        .sub-progress {
          height: 6px;
          background: rgba(255,255,255,0.4);
          border-radius: 3px;
          margin-bottom: 12px;
        }
        .progress-bar {
          height: 100%;
          background: white;
          border-radius: 3px;
        }
        .sub-credits {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .credit-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .credit-count {
          font-size: 28px;
          font-weight: 700;
        }
        .credit-label {
          font-size: 12px;
          opacity: 0.8;
        }
        .add-credits-btn {
          background: rgba(0,0,0,0.15);
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }
        .menu-section {
          margin-bottom: 12px;
        }
        .kam-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          margin: 16px;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .kam-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          background: #E0E0E0;
        }
        .kam-avatar img {
          width: 100%;
          height: 100%;
        }
        .kam-info {
          flex: 1;
        }
        .kam-info h4 {
          font-size: 12px;
          color: #888;
          margin-bottom: 2px;
        }
        .kam-info p {
          font-size: 14px;
          font-weight: 600;
        }
        .kam-actions {
          display: flex;
          gap: 8px;
        }
        .kam-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #E0E0E0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          cursor: pointer;
        }
        .kam-btn.whatsapp {
          background: #25D366;
          border-color: #25D366;
          color: white;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: calc(100% - 32px);
          margin: 24px 16px 16px;
          padding: 14px;
          background: white;
          border: 1px solid #FF5252;
          border-radius: 12px;
          color: #FF5252;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .app-version {
          text-align: center;
          padding: 16px;
        }
        .app-version p {
          font-size: 12px;
          color: #888;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  )
}

export default ProfileScreen
