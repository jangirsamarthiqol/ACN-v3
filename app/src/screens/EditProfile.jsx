import { ArrowLeft, Lock, ChevronDown, X, Plus, Edit3 } from 'lucide-react'
import './screens.css'

function EditProfile({ onNavigate }) {
  return (
    <div className="screen edit-profile-screen">
      {/* Header */}
      <header className="edit-header">
        <button className="back-btn-round" onClick={() => onNavigate('profile')}>
          <ArrowLeft size={20} />
        </button>
        <h1>Edit Profile</h1>
        <div style={{width: 40}}></div>
      </header>

      {/* Avatar Section */}
      <div className="avatar-edit-section">
        <div className="avatar-edit-container">
          <div className="avatar-circle-large">
            <span className="avatar-initial-large">J</span>
          </div>
          <div className="avatar-edit-badge">
            <Edit3 size={14} />
          </div>
        </div>
        <button className="change-photo-link">Change Photo</button>
      </div>

      {/* Form */}
      <div className="edit-form">
        {/* Personal Details */}
        <div className="form-section-group">
          <h3 className="section-label">Personal Details</h3>
          
          <div className="form-field">
            <label>Full Name</label>
            <input type="text" className="form-input-new" defaultValue="Jaydeep Singh" />
          </div>

          <div className="form-field">
            <label>Primary Phone Number</label>
            <div className="form-input-locked">
              <input type="text" defaultValue="+91 98765 43210" disabled />
              <Lock size={18} className="lock-icon" />
            </div>
          </div>

          <div className="form-field">
            <label>Alternate Phone Number</label>
            <input type="tel" className="form-input-new" placeholder="+91 Enter alternate number" />
          </div>
        </div>

        <div className="form-divider"></div>

        {/* Professional Details */}
        <div className="form-section-group">
          <h3 className="section-label">Professional Details</h3>
          
          <div className="form-field">
            <label>Firm / Agency Name</label>
            <input type="text" className="form-input-new" defaultValue="Singh Estates" />
          </div>

          <div className="form-field">
            <label>RERA Registration No.</label>
            <input type="text" className="form-input-new" placeholder="e.g. A51800000000" />
          </div>

          <div className="form-field">
            <label>Area of Operation</label>
            <div className="form-input-select">
              <input type="text" defaultValue="Powai, Mumbai" readOnly />
              <ChevronDown size={18} className="select-icon" />
            </div>
          </div>

          <div className="form-field">
            <label>Categories</label>
            <div className="categories-input">
              <div className="category-tag">
                Residential
                <X size={14} className="remove-tag" />
              </div>
              <div className="category-tag">
                Commercial
                <X size={14} className="remove-tag" />
              </div>
              <button className="add-category-btn">
                <Plus size={16} />
                Add
              </button>
            </div>
          </div>

          <div className="form-field">
            <label>Firm Address</label>
            <textarea 
              className="form-textarea-new" 
              placeholder="Enter complete office address"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="edit-footer">
        <button className="cancel-btn" onClick={() => onNavigate('profile')}>Cancel</button>
        <button className="save-btn" onClick={() => onNavigate('profile')}>Save Changes</button>
      </div>

      <style>{`
        .edit-profile-screen {
          background: #fcfbf7;
          padding-bottom: 100px;
        }
        .edit-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #fcfbf7;
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid #e2e0d6;
        }
        .edit-header h1 {
          font-size: 18px;
          font-weight: 700;
          color: #1b4d3e;
        }
        .avatar-edit-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px 24px;
        }
        .avatar-edit-container {
          position: relative;
          cursor: pointer;
        }
        .avatar-circle-large {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          background: #e8f5e9;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .avatar-initial-large {
          font-size: 40px;
          font-weight: 700;
          color: #1b4d3e;
        }
        .avatar-edit-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 36px;
          height: 36px;
          background: #1b4d3e;
          border-radius: 50%;
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .change-photo-link {
          margin-top: 12px;
          background: none;
          border: none;
          color: #1b4d3e;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .change-photo-link:hover {
          text-decoration: underline;
        }
        .edit-form {
          padding: 0 16px;
        }
        .form-section-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .section-label {
          font-size: 12px;
          font-weight: 600;
          color: #4a5d55;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding-left: 4px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field label {
          font-size: 14px;
          font-weight: 500;
          color: #1b4d3e;
        }
        .form-input-new {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          background: white;
          font-size: 15px;
          color: #1b4d3e;
          outline: none;
          transition: all 0.2s;
        }
        .form-input-new:focus {
          border-color: #1b4d3e;
          box-shadow: 0 0 0 1px #1b4d3e;
        }
        .form-input-new::placeholder {
          color: #9ca3af;
        }
        .form-input-locked {
          position: relative;
          display: flex;
          align-items: center;
          background: #f4f1ea;
          border-radius: 12px;
        }
        .form-input-locked input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          padding-right: 44px;
          border: none;
          background: transparent;
          font-size: 15px;
          color: #4a5d55;
          outline: none;
          cursor: not-allowed;
        }
        .lock-icon {
          position: absolute;
          right: 16px;
          color: #9ca3af;
        }
        .form-input-select {
          position: relative;
          display: flex;
          align-items: center;
        }
        .form-input-select input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          padding-right: 44px;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          background: white;
          font-size: 15px;
          color: #1b4d3e;
          outline: none;
          cursor: pointer;
        }
        .select-icon {
          position: absolute;
          right: 12px;
          color: #9ca3af;
          pointer-events: none;
        }
        .categories-input {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 12px;
          min-height: 56px;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          background: white;
        }
        .category-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #e8f5e9;
          color: #1b4d3e;
          border: 1px solid #c8e6c9;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
        }
        .remove-tag {
          cursor: pointer;
          opacity: 0.7;
        }
        .remove-tag:hover {
          opacity: 1;
        }
        .add-category-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          background: none;
          border: none;
          color: #4a5d55;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
        }
        .add-category-btn:hover {
          color: #1b4d3e;
        }
        .form-textarea-new {
          width: 100%;
          padding: 16px;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          background: white;
          font-size: 15px;
          color: #1b4d3e;
          outline: none;
          resize: none;
          font-family: inherit;
          transition: all 0.2s;
        }
        .form-textarea-new:focus {
          border-color: #1b4d3e;
          box-shadow: 0 0 0 1px #1b4d3e;
        }
        .form-textarea-new::placeholder {
          color: #9ca3af;
        }
        .form-divider {
          height: 1px;
          background: #e2e0d6;
          margin: 20px 0;
        }
        .edit-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          gap: 16px;
          padding: 16px;
          padding-bottom: 32px;
          background: #fcfbf7;
          border-top: 1px solid #e2e0d6;
          box-shadow: 0 -4px 6px rgba(27, 77, 62, 0.05);
          z-index: 20;
        }
        .cancel-btn {
          flex: 1;
          height: 48px;
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 24px;
          color: #1b4d3e;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        .cancel-btn:hover {
          background: #f4f1ea;
        }
        .save-btn {
          flex: 1;
          height: 48px;
          background: #1b4d3e;
          border: none;
          border-radius: 24px;
          color: white;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 8px 16px rgba(27, 77, 62, 0.15);
          cursor: pointer;
        }
        .save-btn:hover {
          background: #143a2f;
        }
      `}</style>
    </div>
  )
}

export default EditProfile
