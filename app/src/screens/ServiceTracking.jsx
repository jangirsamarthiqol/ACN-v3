import { ArrowLeft, Filter, Scale, Phone, MessageCircle, ChevronDown, AlertCircle, CheckCircle } from 'lucide-react'
import './screens.css'

function ServiceTracking({ onNavigate }) {
  const services = [
    {
      id: 'SVC1234',
      name: 'Title Verification',
      status: 'in-progress',
      property: '3 BHK, Prestige Lakeside',
      professional: 'Adv. Ramesh Kumar',
      rating: 4.8,
      requestedDate: 'Jan 3, 2026',
      expectedDate: 'Jan 8, 2026',
      urgency: 'Standard',
      advancePaid: '₹5,000',
      balanceDue: '₹5,900',
      currentStep: 3,
      steps: [
        { name: 'Requested', completed: true, date: 'Jan 3' },
        { name: 'Documents Verified', completed: true, date: 'Jan 4' },
        { name: 'Assigned to Lawyer', completed: true, date: 'Jan 5', current: true },
        { name: 'Processing', completed: false },
        { name: 'Completed', completed: false }
      ]
    },
    {
      id: 'SVC1235',
      name: 'Agreement Drafting',
      status: 'action-required',
      property: '2 BHK, Brigade Orchards',
      professional: 'Adv. Priya Desai',
      rating: 4.6,
      requestedDate: 'Jan 2, 2026',
      expectedDate: 'Jan 6, 2026',
      urgency: 'Express',
      advancePaid: '₹3,000',
      balanceDue: '₹4,200',
      currentStep: 2,
      actionRequired: 'Upload missing documents',
      steps: [
        { name: 'Requested', completed: true },
        { name: 'Documents Verified', completed: false, blocked: true },
        { name: 'Assigned', completed: false },
        { name: 'Processing', completed: false },
        { name: 'Completed', completed: false }
      ]
    }
  ]

  return (
    <div className="screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('services')}>
          <ArrowLeft size={24} />
        </button>
        <h1>My Services</h1>
        <button className="icon-btn">
          <Filter size={20} />
        </button>
      </header>

      {/* Tabs */}
      <div className="toggle-tabs">
        <button className="toggle-tab active">Active (3)</button>
        <button className="toggle-tab">Completed (12)</button>
        <button className="toggle-tab">All (15)</button>
      </div>

      {/* Filter Chips */}
      <div className="filter-chips">
        <button className="filter-chip">Service Type ▾</button>
        <button className="filter-chip">Status ▾</button>
        <button className="filter-chip">Date ▾</button>
      </div>

      {/* Service Cards */}
      <div className="screen-content">
        {services.map((service) => (
          <div key={service.id} className={`tracking-card ${service.status}`}>
            <div className="tracking-header">
              <div className="tracking-service">
                <Scale size={20} color="#0066CC" />
                <div>
                  <h4>{service.name}</h4>
                  <span className="service-id">#{service.id}</span>
                </div>
              </div>
              <span className={`status-pill ${service.status}`}>
                {service.status === 'in-progress' ? 'In Progress' : 'Requires Action'}
              </span>
            </div>

            {/* Action Alert */}
            {service.actionRequired && (
              <div className="action-alert">
                <AlertCircle size={16} />
                <span>{service.actionRequired}</span>
                <button className="alert-action">Upload Now</button>
              </div>
            )}

            {/* Progress Timeline */}
            <div className="progress-timeline">
              {service.steps.map((step, i) => (
                <div key={i} className={`timeline-step ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''} ${step.blocked ? 'blocked' : ''}`}>
                  <div className="step-indicator">
                    {step.completed ? <CheckCircle size={16} /> : <span className="step-num">{i + 1}</span>}
                  </div>
                  <span className="step-name">{step.name}</span>
                  {step.date && <span className="step-date">{step.date}</span>}
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="tracking-property">
              <span className="property-label">Property:</span>
              <span className="property-name">{service.property}</span>
            </div>

            {/* Professional */}
            <div className="tracking-professional">
              <div className="prof-avatar">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.professional}`} alt="" />
              </div>
              <div className="prof-info">
                <span className="prof-name">{service.professional}</span>
                <span className="prof-rating">⭐ {service.rating}</span>
              </div>
              <div className="prof-actions">
                <button className="contact-icon"><Phone size={16} /></button>
                <button className="contact-icon whatsapp"><MessageCircle size={16} /></button>
              </div>
            </div>

            {/* Details */}
            <div className="tracking-details">
              <div className="detail-row">
                <span>Requested</span>
                <span>{service.requestedDate}</span>
              </div>
              <div className="detail-row">
                <span>Expected</span>
                <span>{service.expectedDate}</span>
              </div>
              <div className="detail-row">
                <span>Urgency</span>
                <span className="urgency-badge">{service.urgency}</span>
              </div>
            </div>

            {/* Payment */}
            <div className="tracking-payment">
              <div className="payment-item paid">
                <CheckCircle size={14} />
                <span>Advance: {service.advancePaid}</span>
              </div>
              <div className="payment-item pending">
                <span>Balance: {service.balanceDue}</span>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn btn-outline">View Details</button>
              <button className="btn btn-primary">Contact Support</button>
            </div>

            <span className="last-updated">Last updated: 2 hours ago</span>
          </div>
        ))}
      </div>

      <style>{`
        .tracking-card {
          background: white;
          margin: 12px 16px;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .tracking-card.action-required {
          border: 1px solid #FF5252;
        }
        .tracking-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .tracking-service {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .tracking-service h4 {
          font-size: 15px;
          font-weight: 600;
        }
        .service-id {
          font-size: 11px;
          color: #888;
        }
        .status-pill {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }
        .status-pill.in-progress {
          background: #E3F2FD;
          color: #1565C0;
        }
        .status-pill.action-required {
          background: #FFEBEE;
          color: #C62828;
        }
        .action-alert {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #FFF3E0;
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          color: #E65100;
          font-size: 13px;
        }
        .alert-action {
          margin-left: auto;
          background: #FF9800;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }
        .progress-timeline {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          position: relative;
        }
        .progress-timeline::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: #E0E0E0;
        }
        .timeline-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .step-indicator {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #E0E0E0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #888;
        }
        .timeline-step.completed .step-indicator {
          background: #00C853;
          color: white;
        }
        .timeline-step.current .step-indicator {
          background: #0066CC;
          color: white;
          animation: pulse 2s infinite;
        }
        .timeline-step.blocked .step-indicator {
          background: #FF5252;
          color: white;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,102,204,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(0,102,204,0); }
        }
        .step-name {
          font-size: 9px;
          color: #888;
          text-align: center;
        }
        .step-date {
          font-size: 8px;
          color: #00C853;
        }
        .tracking-property {
          display: flex;
          gap: 6px;
          font-size: 13px;
          padding: 10px 0;
          border-top: 1px solid #F0F0F0;
        }
        .property-label {
          color: #888;
        }
        .property-name {
          color: #1A1A1A;
        }
        .tracking-professional {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #F0F0F0;
        }
        .prof-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          background: #E0E0E0;
        }
        .prof-avatar img {
          width: 100%;
          height: 100%;
        }
        .prof-info {
          flex: 1;
        }
        .prof-name {
          display: block;
          font-size: 13px;
          font-weight: 500;
        }
        .prof-rating {
          font-size: 12px;
          color: #FFB300;
        }
        .prof-actions {
          display: flex;
          gap: 6px;
        }
        .contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #E0E0E0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          cursor: pointer;
        }
        .contact-icon.whatsapp {
          background: #25D366;
          border-color: #25D366;
          color: white;
        }
        .tracking-details {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 10px 0;
        }
        .tracking-details .detail-row {
          display: flex;
          gap: 6px;
          font-size: 12px;
        }
        .tracking-details .detail-row span:first-child {
          color: #888;
        }
        .urgency-badge {
          background: #F5F7FA;
          padding: 2px 8px;
          border-radius: 8px;
        }
        .tracking-payment {
          display: flex;
          gap: 16px;
          padding: 10px 0;
          border-bottom: 1px solid #F0F0F0;
          margin-bottom: 10px;
        }
        .payment-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
        }
        .payment-item.paid {
          color: #00C853;
        }
        .payment-item.pending {
          color: #888;
        }
        .last-updated {
          display: block;
          text-align: center;
          font-size: 11px;
          color: #999;
          margin-top: 8px;
        }
      `}</style>
    </div>
  )
}

export default ServiceTracking
