import { ArrowLeft, ChevronDown, Plus, X, MapPin } from 'lucide-react'
import './screens.css'

function AddRequirementForm({ onNavigate }) {
  return (
    <div className="screen">
      {/* Header - Focused View */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('requirements')}>
          <ArrowLeft size={24} />
        </button>
        <h1>Add Requirement</h1>
        <button className="header-action" style={{color: '#8B5CF6'}}>Save</button>
      </header>

      {/* Form Content */}
      <div className="form-content">
        {/* Requirement Type */}
        <div className="form-section">
          <h3>Requirement Type</h3>
          <div className="form-card">
            <div className="type-selector">
              <button className="type-option purple active">🛒 Buy</button>
              <button className="type-option purple">🏠 Rent</button>
              <button className="type-option purple">🏢 Commercial</button>
            </div>
          </div>
        </div>

        {/* Property Type */}
        <div className="form-section">
          <h3>Property Type</h3>
          <div className="form-card">
            <div className="checkbox-grid">
              <label className="check-option active">
                <input type="checkbox" defaultChecked /> Apartment
              </label>
              <label className="check-option">
                <input type="checkbox" /> Villa
              </label>
              <label className="check-option">
                <input type="checkbox" /> Plot
              </label>
              <label className="check-option">
                <input type="checkbox" /> Independent House
              </label>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="form-section">
          <h3>Budget Range</h3>
          <div className="form-card">
            <div className="form-row">
              <div className="form-group half">
                <label>Minimum</label>
                <div className="price-input">
                  <span className="currency">₹</span>
                  <input type="text" className="form-input" placeholder="50 Lakhs" />
                </div>
              </div>
              <div className="form-group half">
                <label>Maximum</label>
                <div className="price-input">
                  <span className="currency">₹</span>
                  <input type="text" className="form-input" placeholder="1 Crore" />
                </div>
              </div>
            </div>
            <div className="quick-budget">
              <span className="quick-label">Quick Select:</span>
              <button className="budget-pill">&lt; 50L</button>
              <button className="budget-pill active">50L-1Cr</button>
              <button className="budget-pill">1-2Cr</button>
              <button className="budget-pill">&gt; 2Cr</button>
            </div>
          </div>
        </div>

        {/* BHK & Area */}
        <div className="form-section">
          <h3>BHK & Area</h3>
          <div className="form-card">
            <div className="form-group">
              <label>BHK Preference</label>
              <div className="radio-pills">
                <button className="pill">1 BHK</button>
                <button className="pill active">2 BHK</button>
                <button className="pill active">3 BHK</button>
                <button className="pill">4 BHK</button>
                <button className="pill">4+ BHK</button>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Min Area (sq.ft)</label>
                <input type="number" className="form-input" placeholder="1000" />
              </div>
              <div className="form-group half">
                <label>Max Area (sq.ft)</label>
                <input type="number" className="form-input" placeholder="1500" />
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="form-section">
          <h3>Preferred Locations</h3>
          <div className="form-card">
            <div className="form-group">
              <div className="location-search">
                <MapPin size={18} />
                <input type="text" className="location-input-field" placeholder="Search and add locations..." />
              </div>
              <div className="selected-locations">
                <span className="location-tag">Koramangala <X size={12} /></span>
                <span className="location-tag">HSR Layout <X size={12} /></span>
                <span className="location-tag">Whitefield <X size={12} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Preferences */}
        <div className="form-section">
          <h3>Additional Preferences</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Possession</label>
              <div className="radio-pills">
                <button className="pill active">Ready to Move</button>
                <button className="pill">Under Construction</button>
                <button className="pill">Any</button>
              </div>
            </div>
            <div className="form-group">
              <label>Furnishing</label>
              <div className="radio-pills">
                <button className="pill">Fully Furnished</button>
                <button className="pill active">Semi-Furnished</button>
                <button className="pill">Unfurnished</button>
                <button className="pill">Any</button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Details */}
        <div className="form-section">
          <h3>Client Details (Optional)</h3>
          <div className="form-card">
            <div className="form-group">
              <label>Client Name</label>
              <input type="text" className="form-input" placeholder="Enter client name" />
            </div>
            <div className="form-group">
              <label>Client Phone</label>
              <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label>Notes</label>
              <textarea className="form-textarea" placeholder="Any specific requirements or notes about the client..." rows={3}></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="form-footer">
        <button className="btn btn-outline" onClick={() => onNavigate('requirements')}>Cancel</button>
        <button className="btn btn-purple" onClick={() => onNavigate('requirements')}>Save Requirement</button>
      </div>

      <style>{`
        .type-option.purple.active {
          border-color: #8B5CF6;
          background: #F3E8FF;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .check-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: #F5F7FA;
          border: 2px solid transparent;
          border-radius: 10px;
          font-size: 14px;
          cursor: pointer;
        }
        .check-option.active {
          border-color: #8B5CF6;
          background: #F3E8FF;
        }
        .check-option input {
          display: none;
        }
        .quick-budget {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .quick-label {
          font-size: 12px;
          color: #888;
        }
        .budget-pill {
          background: #F5F7FA;
          border: 1px solid #E0E0E0;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          cursor: pointer;
        }
        .budget-pill.active {
          background: #8B5CF6;
          border-color: #8B5CF6;
          color: white;
        }
        .location-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border: 1px solid #E0E0E0;
          border-radius: 10px;
          margin-bottom: 12px;
        }
        .location-search input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 14px;
        }
        .selected-locations {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .location-tag {
          background: #8B5CF6;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default AddRequirementForm
