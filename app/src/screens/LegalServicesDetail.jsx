import { ArrowLeft, Scale, FileText, CheckCircle, Clock, Star, ChevronRight, Phone, MessageCircle } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function LegalServicesDetail({ onNavigate }) {
  const services = [
    {
      id: 1,
      name: 'Title Verification',
      desc: 'Complete property title search and verification',
      originalPrice: '₹15,000',
      price: '₹12,000',
      discount: 'Save 20%',
      duration: '5 days',
      popular: true
    },
    {
      id: 2,
      name: 'Agreement Drafting',
      desc: 'Sale, rental, or lease agreement preparation',
      originalPrice: '₹10,000',
      price: '₹8,000',
      discount: 'Save 20%',
      duration: '3 days',
      popular: false
    },
    {
      id: 3,
      name: 'Registration Support',
      desc: 'Complete property registration assistance',
      originalPrice: '₹18,000',
      price: '₹15,000',
      discount: 'Save 17%',
      duration: '7 days',
      popular: false
    },
    {
      id: 4,
      name: 'Due Diligence',
      desc: 'Comprehensive property legal check',
      originalPrice: '₹25,000',
      price: '₹20,000',
      discount: 'Save 20%',
      duration: '10 days',
      popular: false
    }
  ]

  return (
    <div className="screen">
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="Services" />

      {/* Hero */}
      <div className="legal-hero gradient-blue-purple">
        <Scale size={48} color="white" strokeWidth={1.5} />
        <h2>Expert Legal Support</h2>
        <p>Verified lawyers • Transparent pricing • Fast turnaround</p>
      </div>

      {/* Trust Stats */}
      <div className="trust-stats">
        <div className="stat"><strong>5000+</strong> Services</div>
        <div className="stat"><strong>50+</strong> Lawyers</div>
        <div className="stat"><strong>4.8★</strong> Rating</div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        <button className="cat-tab active">All Services</button>
        <button className="cat-tab">Documentation</button>
        <button className="cat-tab">Verification</button>
        <button className="cat-tab">Registration</button>
      </div>

      {/* Service Cards */}
      <div className="screen-content">
        {services.map((service) => (
          <div key={service.id} className={`service-detail-card ${service.popular ? 'popular' : ''}`}>
            <div className="service-header">
              <div>
                <div className="service-title-row">
                  <h4>{service.name}</h4>
                  {service.popular && <span className="popular-badge">Most Popular</span>}
                </div>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
            
            <div className="service-details">
              <div className="detail-row">
                <Clock size={14} />
                <span>{service.duration}</span>
              </div>
              <div className="detail-row">
                <CheckCircle size={14} />
                <span>Verified Lawyers</span>
              </div>
              <div className="detail-row">
                <FileText size={14} />
                <span>Report Included</span>
              </div>
            </div>

            <div className="service-pricing">
              <div className="price-info">
                <span className="original-price">{service.originalPrice}</span>
                <span className="current-price">{service.price}</span>
                <span className="discount-badge">{service.discount}</span>
              </div>
              <div className="service-actions">
                <button className="btn btn-outline btn-sm">Get Quote</button>
                <button className="btn btn-primary btn-sm" onClick={() => onNavigate('service-request')}>
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <section className="section how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          {['Submit Request', 'Document Verification', 'Processing', 'Delivery'].map((step, i) => (
            <div key={i} className="step">
              <div className="step-number">{i + 1}</div>
              <span className="step-label">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <GlobalBottomNav onNavigate={onNavigate} activeTab="legal-services" context="services" />

      <style>{`
        .legal-hero {
          padding: 32px 24px;
          text-align: center;
          color: white;
        }
        .legal-hero h2 {
          font-size: 22px;
          margin: 12px 0 4px;
        }
        .legal-hero p {
          font-size: 13px;
          opacity: 0.9;
        }
        .trust-stats {
          display: flex;
          justify-content: space-around;
          padding: 16px;
          background: white;
          font-size: 13px;
          color: #666;
        }
        .trust-stats strong {
          color: #1A1A1A;
        }
        .category-tabs {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          overflow-x: auto;
          background: white;
          border-bottom: 1px solid #F0F0F0;
        }
        .cat-tab {
          background: #F5F7FA;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          color: #666;
          white-space: nowrap;
          cursor: pointer;
        }
        .cat-tab.active {
          background: #0066CC;
          color: white;
        }
        .service-detail-card {
          background: white;
          margin: 12px 16px;
          border-radius: 12px;
          padding: 16px;
          border-left: 4px solid #E0E0E0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .service-detail-card.popular {
          border-left-color: #00C853;
        }
        .service-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .service-title-row h4 {
          font-size: 16px;
          font-weight: 600;
        }
        .popular-badge {
          background: #E8F5E9;
          color: #2E7D32;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 10px;
          font-weight: 600;
        }
        .service-desc {
          font-size: 13px;
          color: #666;
        }
        .service-details {
          display: flex;
          gap: 16px;
          margin: 12px 0;
          padding: 10px 0;
          border-top: 1px solid #F0F0F0;
          border-bottom: 1px solid #F0F0F0;
        }
        .detail-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #888;
        }
        .service-pricing {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .price-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .original-price {
          font-size: 13px;
          color: #999;
          text-decoration: line-through;
        }
        .current-price {
          font-size: 20px;
          font-weight: 700;
          color: #0066CC;
        }
        .discount-badge {
          background: #E8F5E9;
          color: #2E7D32;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 10px;
        }
        .service-actions {
          display: flex;
          gap: 8px;
        }
        .btn-sm {
          padding: 8px 14px;
          font-size: 12px;
        }
        .how-it-works {
          background: white;
          margin-top: 8px;
        }
        .how-it-works h3 {
          font-size: 16px;
          margin-bottom: 16px;
        }
        .steps {
          display: flex;
          justify-content: space-between;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        .step-number {
          width: 32px;
          height: 32px;
          background: #0066CC;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
        }
        .step-label {
          font-size: 11px;
          color: #666;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default LegalServicesDetail
