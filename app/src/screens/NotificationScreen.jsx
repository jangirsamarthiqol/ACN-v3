import { ArrowLeft, Settings, Check, MoreHorizontal, Home, FileText, List } from 'lucide-react'
import { useState } from 'react'
import GlobalHeader from '../components/GlobalHeader' // Assuming we might want global header, but design shows custom header. sticking to custom based on image.
// Actually, the image shows a modal-like or full screen view. The user said "screen", so I'll make it a full screen.
// The image shows "Notifications" header with checks.
import './screens.css'

function NotificationScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('All')

  const notifications = [
    {
      id: 1,
      type: 'system',
      title: 'Godrej Park Retreat will delist in 2 days',
      body: 'Godrej Park Retreat will delist in 2 days unless updated.',
      time: '1d',
      unread: true,
      initials: 'ACN',
      actions: [
        { label: 'View Property', primary: true, action: 'property-detail' },
        { label: 'Mark as available', primary: false }
      ]
    },
    {
      id: 2,
      type: 'system',
      title: 'Godrej Park Retreat will delist in 3 days',
      body: 'Godrej Park Retreat will delist in 3 days unless updated.',
      time: '2d',
      unread: true,
      initials: 'ACN',
      actions: [
        { label: 'View Property', primary: true, action: 'property-detail' },
        { label: 'Mark as available', primary: false }
      ]
    },
    {
      id: 3,
      type: 'enquiry',
      title: 'New enquiry received!',
      body: 'New enquiry received for your property Nikoo Homes - Phase 4 (ID PA1560).',
      time: '5d',
      unread: true,
      initials: 'MS',
      avatarColor: 'black',
      actions: [
        { label: 'View Enquiry', primary: true, action: 'enquiries' }
      ]
    },
    {
      id: 4,
      type: 'requirement',
      title: 'Your Requirement is Live!',
      body: 'Your Requirement for Sobha Royal Pavilion ID:RQC677 is now live',
      time: '5d',
      unread: true,
      initials: 'ACN',
      actions: [
        { label: 'View Requirements', primary: true, action: 'requirements' }
      ]
    },
    {
      id: 5,
      type: 'enquiry',
      title: 'Enquiry sent to Agent!',
      body: 'You\'ve enquired about La Palazzo Residences - KMB Group. Check "Dashboard" to track status.',
      time: '5d',
      unread: true,
      initials: 'AD',
      avatarColor: 'black',
      actions: [] // No actions shown in screenshot for this one
    }
  ]

  return (
    <div className="screen notification-screen">
      {/* Header */}
      <header className="screen-header clean-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </button>
        <h1>Notifications</h1>
        <div className="header-actions">
          <button className="icon-btn" title="Mark all read">
            <Check size={20} color="#666" />
          </button>
          <button className="icon-btn" title="Settings">
            <Settings size={20} color="#666" />
          </button>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="notification-tabs-container">
        <div className="horizontal-scroll no-pad">
          <button className={`pill-tab ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>
            All <span className="count-badge">45</span>
          </button>
          <button className={`pill-tab ${activeTab === 'Enquiries' ? 'active' : ''}`} onClick={() => setActiveTab('Enquiries')}>
            Enquiries <span className="count-badge">13</span>
          </button>
          <button className={`pill-tab ${activeTab === 'Requirements' ? 'active' : ''}`} onClick={() => setActiveTab('Requirements')}>
            Requirements <span className="count-badge">1</span>
          </button>
          <button className={`pill-tab ${activeTab === 'Listing' ? 'active' : ''}`} onClick={() => setActiveTab('Listing')}>
            Listing <span className="count-badge">4</span>
          </button>
        </div>
      </div>

      {/* Notification List */}
      <div className="screen-content no-scrollbar">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notification-card ${notif.unread ? 'unread' : ''}`}>
            {/* Avatar */}
            <div className={`notif-avatar ${notif.avatarColor === 'black' ? 'black-bg' : 'light-bg'}`}>
              <span className="initials">{notif.initials}</span>
            </div>

            {/* Content */}
            <div className="notif-content">
              <div className="notif-header">
                <h3>{notif.title}</h3>
                <span className="time">{notif.time}</span>
              </div>
              <p className="notif-body">{notif.body}</p>

              {/* Actions */}
              {notif.actions.length > 0 && (
                <div className="notif-actions">
                  {notif.actions.map((action, idx) => (
                    <button 
                      key={idx} 
                      className={`action-btn ${action.primary ? 'primary' : 'secondary'}`}
                      onClick={() => action.action && onNavigate(action.action)}
                    >
                      {action.action === 'property-detail' && <Home size={14} />}
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Menu */}
            <button className="more-menu-btn">
              <MoreHorizontal size={18} color="#666" />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .notification-screen {
          background: white;
        }
        .clean-header {
          background: white;
          border-bottom: 1px solid #F0F0F0;
          justify-content: space-between;
        }
        .clean-header h1 {
          font-size: 18px;
          text-align: left;
          margin-left: 8px;
          flex: 1;
        }
        .header-actions {
          display: flex;
          gap: 4px;
        }
        .notification-tabs-container {
          padding: 12px 16px;
          border-bottom: 1px solid #F0F0F0;
        }
        .pill-tab {
          border: 1px solid #E0E0E0;
          background: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          color: #444;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .pill-tab.active {
          background: #B2DFDB; /* Mintish/Teal light */
          background: #dcfce7; /* Tailwind green-100 logic */
          background: #E0F2F1;
          background: #A7F3D0; /* Slightly stronger mint */
          background: #ccfbf1;
          /* Matching image active state */
          background: #bbf7d0; 
          border-color: #bbf7d0;
          color: #065f46;
          font-weight: 600;
        }
        .pill-tab.active .count-badge {
           background: white;
           color: #065f46;
        }
        .count-badge {
          background: #F5F5F5;
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
        }

        .notification-card {
          display: flex;
          gap: 12px;
          padding: 16px;
          border-bottom: 1px solid #F0F0F0;
          position: relative;
        }
        .notification-card.unread {
          background: #E0F2F1; /* Mint tint */
          background: #effdf5; /* Very subtle green */
        }
        
        .notif-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }
        .notif-avatar.light-bg {
          background: white;
          color: #1b4d3e;
        }
        .notif-avatar.black-bg {
          background: #1A1A1A;
          color: white;
        }

        .notif-content {
          flex: 1;
        }
        .notif-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px;
          padding-right: 24px; /* Space for more menu */
        }
        .notif-header h3 {
          font-size: 14px;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1.4;
        }
        .time {
          font-size: 11px;
          color: #888;
          white-space: nowrap;
          margin-left: 8px;
        }
        .notif-body {
          font-size: 13px;
          color: #4a5d55;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .notif-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .action-btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .action-btn.primary {
          background: #1b4d3e; /* Dark green */
          color: white;
          border: none;
        }
        .action-btn.secondary {
          background: white;
          border: 1px solid #CCC;
          color: #1A1A1A;
        }

        .more-menu-btn {
          position: absolute;
          top: 36px;
          right: 16px;
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default NotificationScreen
