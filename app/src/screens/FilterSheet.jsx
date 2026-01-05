import { X, Check } from 'lucide-react'
import { useState } from 'react'
import './screens.css'

function FilterSheet({ onNavigate }) {
  const [activeTypes, setActiveTypes] = useState(['Apartment', 'Villa'])
  const [activeBHK, setActiveBHK] = useState(['2 BHK', '3 BHK'])

  return (
    <div className="screen filter-screen">
      {/* Backdrop */}
      <div className="filter-backdrop" onClick={() => onNavigate('search-results')}></div>
      
      {/* Sheet */}
      <div className="filter-sheet">
        {/* Handle */}
        <div className="sheet-handle"></div>
        
        {/* Header */}
        <div className="sheet-header">
          <button className="close-btn" onClick={() => onNavigate('search-results')}>
            <X size={24} />
          </button>
          <h2>Filters</h2>
          <button className="reset-btn">Reset All</button>
        </div>

        {/* Content */}
        <div className="sheet-content">
          {/* Property Type */}
          <section className="filter-section">
            <h3>Property Type</h3>
            <div className="chip-group">
              {['Apartment', 'Villa', 'Plot', 'Commercial', 'PG'].map(type => (
                <button 
                  key={type}
                  className={`chip ${activeTypes.includes(type) ? 'active' : ''}`}
                  onClick={() => {
                    if (activeTypes.includes(type)) {
                      setActiveTypes(activeTypes.filter(t => t !== type))
                    } else {
                      setActiveTypes([...activeTypes, type])
                    }
                  }}
                >
                  {activeTypes.includes(type) && <Check size={14} />}
                  {type}
                </button>
              ))}
            </div>
          </section>

          {/* Price Range */}
          <section className="filter-section">
            <h3>Price Range</h3>
            <div className="range-slider">
              <div className="range-track">
                <div className="range-fill" style={{left: '10%', right: '30%'}}></div>
                <div className="range-handle" style={{left: '10%'}}></div>
                <div className="range-handle" style={{left: '70%'}}></div>
              </div>
              <div className="range-labels">
                <span>₹25L</span>
                <span>₹1.5Cr</span>
              </div>
            </div>
            <div className="chip-group">
              {['< 50L', '50L-1Cr', '1-2Cr', '> 2Cr'].map((range, i) => (
                <button key={i} className={`chip ${i === 1 ? 'active' : ''}`}>{range}</button>
              ))}
            </div>
          </section>

          {/* BHK */}
          <section className="filter-section">
            <h3>BHK Type</h3>
            <div className="chip-group">
              {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'].map(bhk => (
                <button 
                  key={bhk}
                  className={`chip ${activeBHK.includes(bhk) ? 'active' : ''}`}
                >
                  {activeBHK.includes(bhk) && <Check size={14} />}
                  {bhk}
                </button>
              ))}
            </div>
          </section>

          {/* Carpet Area */}
          <section className="filter-section">
            <h3>Carpet Area</h3>
            <div className="range-slider">
              <div className="range-track">
                <div className="range-fill" style={{left: '15%', right: '25%'}}></div>
                <div className="range-handle" style={{left: '15%'}}></div>
                <div className="range-handle" style={{left: '75%'}}></div>
              </div>
              <div className="range-labels">
                <span>500 sq.ft</span>
                <span>3000 sq.ft</span>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="filter-section">
            <h3>Preferred Locations</h3>
            <input type="text" className="location-input" placeholder="Add location..." />
            <div className="selected-locations">
              <span className="location-chip">Koramangala <X size={12} /></span>
              <span className="location-chip">Whitefield <X size={12} /></span>
            </div>
          </section>

          {/* Possession */}
          <section className="filter-section">
            <h3>Possession Status</h3>
            <div className="radio-group">
              <label className="radio-item active">
                <span className="radio-dot"></span>
                Ready to Move
              </label>
              <label className="radio-item">
                <span className="radio-dot"></span>
                Under Construction
              </label>
              <label className="radio-item">
                <span className="radio-dot"></span>
                Any
              </label>
            </div>
          </section>

          {/* Toggles */}
          <section className="filter-section">
            <h3>Additional Filters</h3>
            <div className="toggle-group">
              <div className="toggle-item">
                <span>Verified Properties Only</span>
                <div className="toggle on"></div>
              </div>
              <div className="toggle-item">
                <span>With Photos Only</span>
                <div className="toggle"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sheet-footer">
          <button className="btn btn-outline">Clear All</button>
          <button className="btn btn-primary" onClick={() => onNavigate('search-results')}>
            Show 245 Results
          </button>
        </div>
      </div>

      <style>{`
        .filter-screen {
          position: relative;
          background: transparent;
        }
        .filter-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .filter-sheet {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-radius: 24px 24px 0 0;
          max-height: 85%;
          display: flex;
          flex-direction: column;
        }
        .sheet-handle {
          width: 40px;
          height: 4px;
          background: #E0E0E0;
          border-radius: 2px;
          margin: 12px auto;
        }
        .sheet-header {
          display: flex;
          align-items: center;
          padding: 8px 16px 16px;
          border-bottom: 1px solid #F0F0F0;
        }
        .sheet-header h2 {
          flex: 1;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }
        .close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }
        .reset-btn {
          background: none;
          border: none;
          color: #0066CC;
          font-size: 14px;
          cursor: pointer;
        }
        .sheet-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        .filter-section {
          margin-bottom: 24px;
        }
        .filter-section h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #1A1A1A;
        }
        .chip-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 13px;
          color: #666;
          cursor: pointer;
          transition: all 0.2s;
        }
        .chip.active {
          background: #0066CC;
          border-color: #0066CC;
          color: white;
        }
        .range-slider {
          margin: 20px 0;
        }
        .range-track {
          height: 4px;
          background: #E0E0E0;
          border-radius: 2px;
          position: relative;
        }
        .range-fill {
          position: absolute;
          top: 0;
          bottom: 0;
          background: #0066CC;
          border-radius: 2px;
        }
        .range-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #0066CC;
          border-radius: 50%;
          cursor: grab;
        }
        .range-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 13px;
          color: #1A1A1A;
          font-weight: 500;
        }
        .location-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #E0E0E0;
          border-radius: 10px;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .selected-locations {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .location-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #0066CC;
          color: white;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 13px;
          cursor: pointer;
        }
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .radio-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #666;
          cursor: pointer;
        }
        .radio-item.active {
          color: #1A1A1A;
        }
        .radio-dot {
          width: 20px;
          height: 20px;
          border: 2px solid #E0E0E0;
          border-radius: 50%;
          position: relative;
        }
        .radio-item.active .radio-dot {
          border-color: #00C853;
        }
        .radio-item.active .radio-dot::after {
          content: '';
          position: absolute;
          inset: 4px;
          background: #00C853;
          border-radius: 50%;
        }
        .toggle-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .toggle-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        .toggle {
          width: 48px;
          height: 28px;
          background: #E0E0E0;
          border-radius: 14px;
          position: relative;
          cursor: pointer;
          transition: background 0.2s;
        }
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .toggle.on {
          background: #0066CC;
        }
        .toggle.on::after {
          transform: translateX(20px);
        }
        .sheet-footer {
          display: flex;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #F0F0F0;
        }
      `}</style>
    </div>
  )
}

export default FilterSheet
