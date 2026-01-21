import { ArrowLeft, Upload, ChevronDown, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import './screens.css'

function ServiceRequestForm({ onNavigate }) {
  const [step, setStep] = useState(1)

  return (
    <div className="screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('legal-services')}>
          <ArrowLeft size={24} />
        </button>
        <h1>Request Service</h1>
        <span className="step-indicator">Step {step} of 3</span>
      </header>

      {/* Progress Bar */}
      <div className="progress-steps">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <span className="step-dot"></span>
          <span className="step-name">Details</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <span className="step-dot"></span>
          <span className="step-name">Documents</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <span className="step-dot"></span>
          <span className="step-name">Review</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="form-content">
        {/* Service Selection */}
        <div className="form-section">
          <h3>Service Selection</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Service Type</label>
              <div className="select-box">
                <span>Title Verification</span>
                <span className="change-link">Change</span>
              </div>
            </div>

            <div className="form-group">
              <label>Urgency</label>
              <div className="radio-options">
                <label className="radio-option active">
                  <input type="radio" name="urgency" defaultChecked />
                  <span className="radio-label">
                    Standard <span className="sub">(5-7 days)</span>
                  </span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="urgency" />
                  <span className="radio-label">
                    Express <span className="sub">(2-3 days)</span>
                    <span className="extra">+30%</span>
                  </span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="urgency" />
                  <span className="radio-label">
                    Rush <span className="sub">(24 hours)</span>
                    <span className="extra">+60%</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Inventory Selection</label>
              <div className="radio-options horizontal">
                <label className="radio-option active">
                  <input type="radio" name="inventory" defaultChecked />
                  <span className="radio-label">Existing Inventory</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="inventory" />
                  <span className="radio-label">New Inventory</span>
                </label>
              </div>
              <div className="select-field">
                <span>Select from My Inventories</span>
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="form-section">
          <h3>Contact Information</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" className="form-input" defaultValue="Rahul Sharma" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-input" defaultValue="+91 98765 43210" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Preferred Contact Method</label>
              <div className="radio-options horizontal">
                <label className="radio-option active">
                  <input type="radio" name="contact" defaultChecked />
                  <span className="radio-label">Phone</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="contact" />
                  <span className="radio-label">Email</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="contact" />
                  <span className="radio-label">WhatsApp</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="form-section">
          <h3>Additional Details</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Special Instructions</label>
              <textarea className="form-textarea" placeholder="Any specific requirements or notes..." rows={3}></textarea>
              <span className="char-count">0/500</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-row">
            <span>Service</span>
            <span>Title Verification</span>
          </div>
          <div className="summary-row">
            <span>Base Price</span>
            <span>₹10,000</span>
          </div>
          <div className="summary-row">
            <span>GST (18%)</span>
            <span>₹1,800</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹11,800</span>
          </div>
          <button className="coupon-btn">Have a coupon code?</button>
        </div>
      </div>

      {/* Footer */}
      <div className="form-footer">
        <button className="btn btn-outline">Save as Draft</button>
        <button className="btn btn-primary" onClick={() => onNavigate('service-tracking')}>
          Proceed to Payment
        </button>
      </div>

      <style>{`
        .step-indicator {
          font-size: 13px;
          color: #888;
        }
        .progress-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #F0F0F0;
        }
        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .step-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #E0E0E0;
          border: 2px solid #E0E0E0;
        }
        .progress-step.active .step-dot {
          background: #0066CC;
          border-color: #0066CC;
        }
        .step-name {
          font-size: 11px;
          color: #888;
        }
        .progress-step.active .step-name {
          color: #0066CC;
          font-weight: 500;
        }
        .progress-line {
          flex: 1;
          height: 2px;
          background: #E0E0E0;
          max-width: 60px;
          margin: 0 8px;
          margin-bottom: 20px;
        }
        .form-content {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 100px;
        }
        .form-section {
          padding: 16px;
        }
        .form-section h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .form-card {
          background: white;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group:last-child {
          margin-bottom: 0;
        }
        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #666;
          margin-bottom: 8px;
        }
        .select-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          background: #F5F7FA;
          border-radius: 10px;
          font-size: 14px;
        }
        .change-link {
          color: #0066CC;
          font-size: 13px;
        }
        .radio-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .radio-options.horizontal {
          flex-direction: row;
          flex-wrap: wrap;
          gap: 10px;
        }
        .radio-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #F5F7FA;
          border-radius: 10px;
          cursor: pointer;
          flex: 1;
        }
        .radio-option.active {
          background: #E3F2FD;
          outline: 2px solid #0066CC;
        }
        .radio-option input {
          display: none;
        }
        .radio-label {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .radio-label .sub {
          color: #888;
        }
        .radio-label .extra {
          background: #FF9800;
          color: white;
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 600;
        }
        .select-field {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          border: 1px solid #E0E0E0;
          border-radius: 10px;
          font-size: 14px;
          color: #888;
          margin-top: 10px;
        }
        .form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #E0E0E0;
          border-radius: 10px;
          font-size: 14px;
        }
        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #E0E0E0;
          border-radius: 10px;
          font-size: 14px;
          resize: none;
        }
        .char-count {
          display: block;
          text-align: right;
          font-size: 11px;
          color: #888;
          margin-top: 4px;
        }
        .order-summary {
          background: #F5F7FA;
          margin: 0 16px;
          padding: 16px;
          border-radius: 12px;
        }
        .order-summary h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 13px;
          color: #666;
        }
        .summary-row.total {
          border-top: 1px solid #E0E0E0;
          margin-top: 8px;
          padding-top: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #0066CC;
        }
        .coupon-btn {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 13px;
          margin-top: 12px;
          cursor: pointer;
        }
        .form-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          gap: 12px;
          padding: 16px;
          background: white;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  )
}

export default ServiceRequestForm
