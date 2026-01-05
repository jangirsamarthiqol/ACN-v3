import { ArrowLeft, Camera, Upload, ChevronDown, Plus, X } from 'lucide-react'
import './screens.css'

function AddPropertyForm({ onNavigate }) {
  return (
    <div className="screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('properties')}>
          <ArrowLeft size={24} />
        </button>
        <h1>Add Property</h1>
        <button className="header-action">Save Draft</button>
      </header>

      {/* Progress */}
      <div className="form-progress-bar">
        <div className="progress-fill" style={{width: '33%'}}></div>
      </div>

      {/* Form Content */}
      <div className="form-content">
        {/* Photos */}
        <div className="form-section">
          <h3>Photos & Videos</h3>
          <div className="photo-upload-grid">
            <div className="photo-upload-card main">
              <Camera size={24} />
              <span>Add Cover Photo</span>
            </div>
            <div className="photo-upload-card">
              <Plus size={20} />
            </div>
            <div className="photo-upload-card">
              <Plus size={20} />
            </div>
            <div className="photo-upload-card">
              <Plus size={20} />
            </div>
          </div>
          <p className="upload-hint">Add at least 5 photos. First photo will be the cover.</p>
        </div>

        {/* Property Type */}
        <div className="form-section">
          <h3>Property Type</h3>
          <div className="form-card">
            <div className="type-selector">
              <button className="type-option active">🏠 Apartment</button>
              <button className="type-option">🏡 Villa</button>
              <button className="type-option">🏗️ Plot</button>
              <button className="type-option">🏢 Commercial</button>
            </div>
            <div className="form-group">
              <label>Transaction Type</label>
              <div className="radio-pills">
                <button className="pill active">Resale</button>
                <button className="pill">Rental</button>
                <button className="pill">Primary</button>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="form-section">
          <h3>Location Details</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Project / Society Name</label>
              <input type="text" className="form-input" placeholder="e.g. Prestige Lakeside Habitat" />
            </div>
            <div className="form-group">
              <label>City</label>
              <div className="select-field">
                <span>Bangalore</span>
                <ChevronDown size={18} />
              </div>
            </div>
            <div className="form-group">
              <label>Locality / Area</label>
              <div className="select-field">
                <span>Select locality</span>
                <ChevronDown size={18} />
              </div>
            </div>
            <div className="form-group">
              <label>Complete Address</label>
              <textarea className="form-textarea" placeholder="Building name, street, landmarks..." rows={2}></textarea>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="form-section">
          <h3>Property Details</h3>
          <div className="form-card">
            <div className="form-row">
              <div className="form-group half">
                <label>BHK</label>
                <div className="select-field">
                  <span>3 BHK</span>
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="form-group half">
                <label>Bathrooms</label>
                <div className="select-field">
                  <span>2</span>
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Carpet Area (sq.ft)</label>
                <input type="number" className="form-input" placeholder="1200" />
              </div>
              <div className="form-group half">
                <label>Built-up Area (sq.ft)</label>
                <input type="number" className="form-input" placeholder="1450" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Floor</label>
                <div className="select-field">
                  <span>5th</span>
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="form-group half">
                <label>Total Floors</label>
                <input type="number" className="form-input" placeholder="12" />
              </div>
            </div>
            <div className="form-group">
              <label>Facing</label>
              <div className="radio-pills">
                <button className="pill">North</button>
                <button className="pill active">East</button>
                <button className="pill">South</button>
                <button className="pill">West</button>
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="form-section">
          <h3>Pricing</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Expected Price</label>
              <div className="price-input">
                <span className="currency">₹</span>
                <input type="text" className="form-input" placeholder="1,20,00,000" />
              </div>
              <span className="price-text">₹8,275 per sq.ft</span>
            </div>
            <div className="form-group">
              <label className="toggle-label">
                <span>Price Negotiable</span>
                <div className="toggle on"></div>
              </label>
            </div>
            <div className="form-group">
              <label>Maintenance (Monthly)</label>
              <div className="price-input">
                <span className="currency">₹</span>
                <input type="text" className="form-input" placeholder="3,500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="form-footer">
        <button className="btn btn-outline">Previous</button>
        <button className="btn btn-primary" onClick={() => onNavigate('properties')}>Continue</button>
      </div>

      <style>{`
        .form-progress-bar {
          height: 4px;
          background: #E0E0E0;
        }
        .form-progress-bar .progress-fill {
          height: 100%;
          background: #0066CC;
        }
        .photo-upload-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .photo-upload-card {
          height: 100px;
          background: #F5F7FA;
          border: 2px dashed #E0E0E0;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #888;
          cursor: pointer;
        }
        .photo-upload-card.main {
          grid-column: 1 / 3;
          height: 150px;
        }
        .photo-upload-card span {
          font-size: 13px;
        }
        .upload-hint {
          font-size: 12px;
          color: #888;
          margin-top: 10px;
        }
        .type-selector {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 16px;
        }
        .type-option {
          background: #F5F7FA;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          cursor: pointer;
          text-align: center;
        }
        .type-option.active {
          border-color: #0066CC;
          background: #E3F2FD;
        }
        .radio-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .form-row {
          display: flex;
          gap: 12px;
        }
        .form-group.half {
          flex: 1;
        }
        .price-input {
          display: flex;
          align-items: center;
        }
        .currency {
          background: #F5F7FA;
          padding: 12px 14px;
          border: 1px solid #E0E0E0;
          border-right: none;
          border-radius: 10px 0 0 10px;
          color: #666;
        }
        .price-input .form-input {
          border-radius: 0 10px 10px 0;
        }
        .price-text {
          display: block;
          font-size: 12px;
          color: #00C853;
          margin-top: 4px;
        }
        .toggle-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .toggle-label span {
          font-size: 14px;
          color: #1A1A1A;
        }
      `}</style>
    </div>
  )
}

export default AddPropertyForm
