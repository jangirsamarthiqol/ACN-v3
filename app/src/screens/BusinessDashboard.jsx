import { Building2, FileText, Mail, Link, BarChart3, Plus, ChevronDown, TrendingUp, Users, Target, Calendar } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function BusinessDashboard({ onNavigate }) {
  return (
    <div className="screen dashboard-screen">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="My Business" />

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>
        {/* Helper text if needed, or just start content */}
      <div style={{height: 16}}></div>
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card gradient-blue-purple" onClick={() => onNavigate('properties')}>
            <Building2 size={24} style={{opacity: 0.5, marginBottom: 8}} />
            <div className="number">48</div>
            <div className="label">Active Properties</div>
            <div className="trend">↑ +5 this week</div>
          </div>
          <div className="stat-card gradient-purple" onClick={() => onNavigate('requirements')}>
            <FileText size={24} style={{opacity: 0.5, marginBottom: 8}} />
            <div className="number">23</div>
            <div className="label">Active Requirements</div>
            <div className="trend">↑ +3 new</div>
          </div>
          <div className="stat-card gradient-green" onClick={() => onNavigate('enquiries')}>
            <Mail size={24} style={{opacity: 0.5, marginBottom: 8}} />
            <div className="number">156</div>
            <div className="label">Total Enquiries</div>
            <div className="trend">↓89 Rec | ↑67 Sent</div>
          </div>
          <div className="stat-card gradient-orange">
            <Link size={24} style={{opacity: 0.5, marginBottom: 8}} />
            <div className="number">34</div>
            <div className="label">New Matches</div>
            <div className="trend">View All →</div>
          </div>
        </div>

        {/* Performance Chart */}
        <section className="section dashboard-chart-section">
          <div className="section-header">
            <h2>This Month&apos;s Performance</h2>
            <TrendingUp size={18} color="var(--success-color)" />
          </div>
          <div className="chart-card">
            <div className="chart-bars">
              {[65, 45, 80, 55].map((height, i) => (
                <div key={i} className="chart-week">
                  <div className="bars">
                    <div className="bar blue" style={{height: `${height}%`}}></div>
                    <div className="bar green" style={{height: `${height * 0.6}%`}}></div>
                    <div className="bar orange" style={{height: `${height * 0.4}%`}}></div>
                  </div>
                  <span className="week-label">W{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <span><span className="dot blue"></span> Listings</span>
              <span><span className="dot green"></span> Enquiries</span>
              <span><span className="dot orange"></span> Matches</span>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section dashboard-actions-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions-mini">
            <button className="quick-action-item">
              <div className="action-icon blue"><Plus size={20} /></div>
              <span>Add Property</span>
            </button>
            <button className="quick-action-item">
              <div className="action-icon purple"><FileText size={20} /></div>
              <span>Add Requirement</span>
            </button>
            <button className="quick-action-item">
              <div className="action-icon orange"><Target size={20} /></div>
              <span>Run Match</span>
            </button>
            <button className="quick-action-item">
               <div className="action-icon teal"><Calendar size={20} /></div>
               <span>Schedule</span>
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="section dashboard-activity-section">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <button className="link-btn">View All</button>
          </div>
          <div className="activity-list">
            {[
              { icon: '📧', text: 'New enquiry received for 3 BHK in Koramangala', time: '2 min ago' },
              { icon: '🔗', text: '5 new properties match your requirement', time: '1 hour ago' },
              { icon: '👁️', text: 'Your property was viewed 23 times today', time: '3 hours ago' }
            ].map((activity, i) => (
              <div key={i} className="activity-item">
                <span className="activity-icon">{activity.icon}</span>
                <div className="activity-content">
                  <p>{activity.text}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <GlobalBottomNav onNavigate={onNavigate} activeTab="dashboard" context="business" />

      <style>{`
        .dashboard-sub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--bg-color);
        }
        .period-btn {
          background: var(--bg-secondary);
          border: none;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 13px;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: var(--shadow-sm);
        }
        .chart-bars {
          display: flex;
          justify-content: space-around;
          height: 120px;
          margin-bottom: 16px;
        }
        .chart-week {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .bars {
          display: flex;
          gap: 4px;
          align-items: flex-end;
          height: 100%;
        }
        .bar {
          width: 14px;
          border-radius: 4px 4px 0 0;
          transition: height 0.3s;
        }
        .bar.blue { background: var(--primary-color); }
        .bar.green { background: var(--success-color); }
        .bar.orange { background: var(--accent-color); }
        .week-label {
          font-size: 12px;
          color: #888;
        }
        .chart-legend {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 12px;
          color: #666;
        }
        .chart-legend .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .chart-legend .dot.blue { background: var(--primary-color); }
        .chart-legend .dot.green { background: var(--success-color); }
        .chart-legend .dot.orange { background: var(--accent-color); }
        .quick-actions-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .quick-action-item {
          background: white;
          border: none;
          border-radius: 12px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .action-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .action-icon.blue { background: var(--primary-color); }
        .action-icon.purple { background: #8B5CF6; }
        .action-icon.green { background: var(--success-color); }
        .action-icon.red { background: var(--danger-color); }
        .action-icon.orange { background: var(--accent-color); }
        .action-icon.teal { background: #00BCD4; }
        .quick-action-item span {
          font-size: 12px;
          color: #666;
        }
        .activity-list {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .activity-item {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 1px solid #F0F0F0;
        }
        .activity-item:last-child {
          border-bottom: none;
        }
        .activity-icon {
          font-size: 18px;
        }
        .activity-content {
          flex: 1;
        }
        .activity-content p {
          font-size: 13px;
          color: #1A1A1A;
          margin-bottom: 2px;
        }
        .activity-time {
          font-size: 11px;
          color: #999;
        }
      `}</style>
    </div>
  )
}

export default BusinessDashboard
