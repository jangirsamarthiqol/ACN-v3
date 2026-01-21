import { useState } from 'react'
import { ArrowLeft, Send, Sparkles, BarChart3, Clock, CheckCircle, ChevronRight, MessageSquare, Star, PlayCircle } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function MarketingScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('campaigns') // 'campaigns' | 'spotlight'

  const activeSurveys = [
    {
      id: 1,
      title: 'Q1 Market Sentiment Survey',
      desc: 'Share your views on current inventory prices in Bangalore.',
      reward: '50 Credits',
      time: '3 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Agent Experience Feedback',
      desc: 'Help us improve ACN v3 with your valuable suggestions.',
      reward: '20 Credits',
      time: '2 min',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=200&fit=crop'
    }
  ]

  const spotlights = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Top Performer - Jan',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      views: '15k'
    }
  ]

  return (
    <div className="screen marketing-screen">
      <GlobalHeader onNavigate={onNavigate} activeTab="ACN" title="Marketing Hub" />
      
      {/* Sub Header */}
      {/* Header title moved to GlobalHeader */}

       {/* Tabs */}
       <div className="toggle-tabs" style={{margin: '16px 16px 8px'}}>
        <button 
          className={`toggle-tab ${activeTab === 'campaigns' ? 'active' : ''}`}
          onClick={() => setActiveTab('campaigns')}
        >
          Active Campaigns
        </button>
        <button 
          className={`toggle-tab ${activeTab === 'spotlight' ? 'active' : ''}`}
          onClick={() => setActiveTab('spotlight')}
        >
          Agent Spotlight
        </button>
      </div>

      <div className="screen-content-scroll" style={{paddingBottom: 80}}>
        
        {activeTab === 'campaigns' ? (
          <div className="animate-fade-in" style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 16}}>
            {/* Featured Banner */}
            <div className="marketing-banner">
              <div className="banner-text">
                <span className="banner-tag">New</span>
                <h3>Refer a Friend</h3>
                <p>Earn 500 Credits for every agent you invite to ACN.</p>
                <button className="white-btn">Invite Now</button>
              </div>
              <div className="banner-icon">
                <Send size={48} color="white" style={{opacity: 0.8}} />
              </div>
            </div>

            <div className="section-header">
              <h2>Earn Credits with Surveys</h2>
            </div>

            {activeSurveys.map(survey => (
              <div key={survey.id} className="survey-card">
                <div className="survey-img">
                  <img src={survey.image} alt="" />
                  <span className="time-badge"><Clock size={12} /> {survey.time}</span>
                </div>
                <div className="survey-content">
                  <h4>{survey.title}</h4>
                  <p>{survey.desc}</p>
                  <div className="survey-footer">
                     <span className="reward-tag"><Sparkles size={12} fill="#FFD700" color="#FFD700" /> {survey.reward}</span>
                     <button className="btn-small-outline">Start</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in" style={{padding: 16}}>
            <div className="spotlight-intro topic-card">
              <div className="icon-circle purple"><Star size={24} color="white" /></div>
              <h3>Get Featured on ACN</h3>
              <p>Boost your visibility by getting featured in our weekly "Top Agents" spotlight across the network.</p>
              <button className="btn-primary-block">Request Spotlight</button>
            </div>

            <div className="section-header" style={{marginTop: 24}}>
              <h2>This Week's Stars</h2>
            </div>
            
            <div className="spotlight-grid">
              {spotlights.map(agent => (
                 <div key={agent.id} className="spotlight-card">
                    <div className="spotlight-img">
                      <img src={agent.image} alt="" />
                      <div className="play-icon"><PlayCircle size={32} color="white" fill="rgba(0,0,0,0.5)" /></div>
                    </div>
                    <div className="spotlight-info">
                       <h4>{agent.name}</h4>
                       <span className="role">{agent.role}</span>
                       <div className="view-count"><BarChart3 size={12} /> {agent.views} views</div>
                    </div>
                 </div>
              ))}
              {/* Coming Soon Placeholders */}
               <div className="spotlight-card placeholder">
                  <div className="circle-loader"></div>
                  <p>More stars coming...</p>
               </div>
            </div>

          </div>
        )}

      </div>
      
      <GlobalBottomNav onNavigate={onNavigate} activeTab="marketing" context="home" />

      <style>{`
        .marketing-banner {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 16px;
          padding: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .banner-text { z-index: 1; flex: 1; }
        .banner-tag { 
          background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);
          padding: 4px 10px; border-radius: 12px; font-size: 11px; fontWeight: 600;
          display: inline-block; margin-bottom: 8px;
        }
        .banner-text h3 { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
        .banner-text p { font-size: 13px; opacity: 0.9; margin-bottom: 16px; width: 90%; }
        .white-btn {
          background: white; color: #6366F1; border: none;
          padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 13px;
          cursor: pointer;
        }
        .survey-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex;
          flex-direction: column;
        }
        .survey-img { height: 120px; position: relative; }
        .survey-img img { width: 100%; height: 100%; object-fit: cover; }
        .time-badge {
          position: absolute; bottom: 8px; right: 8px;
          background: rgba(0,0,0,0.6); color: white;
          padding: 4px 8px; border-radius: 12px;
          font-size: 11px; display: flex; alignItems: center; gap: 4;
        }
        .survey-content { padding: 12px; }
        .survey-content h4 { font-size: 16px; margin-bottom: 4px; color: #1A1A1A; }
        .survey-content p { font-size: 13px; color: #666; margin-bottom: 12px; line-height: 1.4; }
        .survey-footer { display: flex; justify-content: space-between; alignItems: center; }
        .reward-tag {
          display: flex; alignItems: center; gap: 4; font-size: 12px; 
          font-weight: 600; color: #B45309; background: #FEF3C7;
          padding: 4px 8px; border-radius: 6px;
        }
        .topic-card {
          background: white; padding: 20px; border-radius: 16px; text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }
        .icon-circle {
          width: 48px; height: 48px; border-radius: 50%; display: flex; 
          align-items: center; justifyContent: center; margin: 0 auto 12px;
        }
        .icon-circle.purple { background: #8B5CF6; }
        .topic-card h3 { fontSize: 18px; margin-bottom: 8px; }
        .topic-card p { fontSize: 14px; color: #666; margin-bottom: 16px; line-height: 1.5; }
        .btn-primary-block {
          width: 100%; background: #1A1A1A; color: white; border: none;
          padding: 12px; border-radius: 10px; font-weight: 600;
        }
        .spotlight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; marginTop: 12px; }
        .spotlight-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
        .spotlight-img { height: 140px; background: #eee; position: relative; }
        .spotlight-img img { width: 100%; height: 100%; object-fit: cover; }
        .play-icon { 
          position: absolute; inset: 0; display: flex; alignItems: center; justifyContent: center;
        }
        .spotlight-info { padding: 10px; }
        .spotlight-info h4 { font-size: 14px; margin-bottom: 2px; }
        .spotlight-info .role { font-size: 11px; color: #8B5CF6; display: block; margin-bottom: 6px; font-weight: 600; }
        .view-count { font-size: 11px; color: #888; display: flex; alignItems: center; gap: 4; }
        .placeholder { display: flex; flexDirection: column; alignItems: center; justifyContent: center; color: #999; font-size: 12px; gap: 8; background: #F9FAFB; }
      `}</style>
    </div>
  )
}

export default MarketingScreen
