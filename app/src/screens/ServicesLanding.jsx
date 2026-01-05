import { Scale, FileText, CheckCircle, ArrowRight, Star, Users, Clock, ChevronRight, Bell } from 'lucide-react'
import './screens.css'

function ServicesLanding({ onNavigate }) {
  const comingSoon = [
    { icon: '🏛️', name: 'AOP Services', desc: 'Builder agreements' },
    { icon: '📊', name: 'Market Reports', desc: 'Area insights' },
    { icon: '🏦', name: 'Home Loans', desc: 'Loan assistance' },
    { icon: '🛡️', name: 'Insurance', desc: 'Property protection' },
    { icon: '🧭', name: 'Vastu', desc: 'Vastu consultation' },
    { icon: '📸', name: 'Photography', desc: 'Property shoots' }
  ]

  return (
    <div className="screen services-screen">
      {/* Header */}
      <div className="services-header gradient-blue-purple">
        <h1>Services</h1>
        <p>Value-added services for your real estate business</p>
      </div>

      {/* Featured Legal Services */}
      <div className="featured-service-card">
        <div className="featured-badge">⭐ Most Popular</div>
        <div className="featured-icon">
          <Scale size={48} color="white" />
        </div>
        <h2>Legal Services</h2>
        <p>Expert legal support for property documentation, registration, and verification</p>
        <div className="featured-bullets">
          <span>✓ Title Verification</span>
          <span>✓ Agreement Drafting</span>
          <span>✓ Registration Support</span>
        </div>
        <button className="explore-btn" onClick={() => onNavigate('legal-services')}>
          Explore Services <ArrowRight size={16} />
        </button>
        <div className="service-count" onClick={() => onNavigate('service-tracking')} style={{cursor: 'pointer'}}>50+ Services Available</div>
      </div>

      {/* Trust Indicators */}
      <div className="trust-indicators">
        <div className="trust-item">
          <Users size={20} color="#0066CC" />
          <span><strong>5000+</strong> Services</span>
        </div>
        <div className="trust-item">
          <Star size={20} color="#FFB300" />
          <span><strong>4.8</strong> Rating</span>
        </div>
        <div className="trust-item">
          <Clock size={20} color="#00C853" />
          <span><strong>Fast</strong> Delivery</span>
        </div>
      </div>

      {/* Coming Soon */}
      <section className="section">
        <div className="section-header">
          <h2>More Services Coming Soon</h2>
        </div>
        <div className="coming-soon-grid">
          {comingSoon.map((service, i) => (
            <div key={i} className="coming-soon-card">
              <span className="icon">{service.icon}</span>
              <h4>{service.name}</h4>
              <p>{service.desc}</p>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>

      {/* Notify Me */}
      <div className="notify-card">
        <Bell size={24} color="#0066CC" />
        <div className="notify-content">
          <h4>Want to know when these launch?</h4>
          <p>Get notified when new services are available</p>
        </div>
        <button className="notify-btn">Notify Me</button>
      </div>

      {/* Why Choose */}
      <section className="section">
        <h2 style={{marginBottom: 16}}>Why Choose ACN Services?</h2>
        <div className="benefits-card">
          {['Verified Partners', 'Competitive Pricing', 'Dedicated Support', 'Quick Turnaround'].map((benefit, i) => (
            <div key={i} className="benefit-item">
              <CheckCircle size={18} color="#00C853" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .services-screen {
          padding-bottom: 20px;
        }
        .services-header {
          padding: 24px 16px;
          text-align: center;
          color: white;
        }
        .services-header h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .services-header p {
          font-size: 14px;
          opacity: 0.9;
        }
        .featured-service-card {
          background: linear-gradient(135deg, #0066CC 0%, #4F46E5 100%);
          margin: 16px;
          border-radius: 20px;
          padding: 24px;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .featured-badge {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #1A1A1A;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 16px;
        }
        .featured-icon {
          margin-bottom: 16px;
          opacity: 0.9;
        }
        .featured-service-card h2 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .featured-service-card > p {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .featured-bullets {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }
        .featured-bullets span {
          font-size: 13px;
          opacity: 0.95;
        }
        .explore-btn {
          background: white;
          color: #0066CC;
          border: none;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .service-count {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
        }
        .trust-indicators {
          display: flex;
          justify-content: space-around;
          padding: 16px;
          background: white;
          margin: 0 16px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          color: #666;
        }
        .trust-item strong {
          color: #1A1A1A;
        }
        .coming-soon-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .notify-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #E3F2FD;
          margin: 0 16px;
          padding: 16px;
          border-radius: 12px;
        }
        .notify-content {
          flex: 1;
        }
        .notify-content h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .notify-content p {
          font-size: 12px;
          color: #666;
        }
        .notify-btn {
          background: #0066CC;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
        }
        .benefits-card {
          background: white;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F0;
          font-size: 14px;
          color: #1A1A1A;
        }
        .benefit-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  )
}

export default ServicesLanding
