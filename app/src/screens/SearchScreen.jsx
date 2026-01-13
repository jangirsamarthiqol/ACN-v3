import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  Filter, 
  ChevronDown, 
  Clock, 
  SlidersHorizontal 
} from 'lucide-react';
import './screens.css';

const SearchScreen = ({ onNavigate }) => {
  const [searchText, setSearchText] = useState('2BHK in Whi');
  const [propertyType, setPropertyType] = useState('Buy');
  const [searchIn, setSearchIn] = useState('Properties');

  const recentSearches = [
    { text: 'Whitefield, 3BHK, > ₹1Cr', type: 'Residential' },
    { text: 'Indiranagar, Rent, 2BHK', type: 'Rent' },
    { text: 'Project ID: ACN-8821', type: 'Project' },
    { text: 'Koramangala, Commercial Office', type: 'Commercial' },
  ];

  return (
    <div className="screen search-screen-new">
      {/* Top App Bar */}
      <header className="app-bar search-header">
        <button className="icon-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft size={24} color="#1b4d3e" />
        </button>
        
        <div className="search-field-container">
          <Search size={20} className="search-input-icon" />
          <input 
            type="text" 
            className="search-input-new" 
            placeholder="Search by project, location or ID" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button className="clear-search-btn" onClick={() => setSearchText('')}>
              <X size={20} />
            </button>
          )}
        </div>

        <button className="icon-btn" onClick={() => onNavigate('filter')}>
          <Filter size={24} color="#1b4d3e" />
        </button>
      </header>

      <main className="screen-content no-scrollbar">
        {/* Layer 1: Property Type */}
        <section className="segment-section">
          <h3>PROPERTY TYPE</h3>
          <div className="horizontal-scroll no-pad">
            {['Buy', 'Rent', 'Commercial', 'Primary'].map(type => (
              <button 
                key={type}
                className={`type-btn ${propertyType === type ? 'active' : ''}`}
                onClick={() => setPropertyType(type)}
              >
                {type}
              </button>
            ))}
            <button className="type-btn disabled">Land Parcel</button>
          </div>
        </section>

        {/* Layer 2: Search In */}
        <section className="segment-section pb-4">
          <h3>SEARCH IN</h3>
          <div className="search-in-toggle">
            <button 
              className={`toggle-option ${searchIn === 'Properties' ? 'active' : ''}`}
              onClick={() => setSearchIn('Properties')}
            >
              Properties
            </button>
            <button 
              className={`toggle-option ${searchIn === 'Requirements' ? 'active' : ''}`}
              onClick={() => setSearchIn('Requirements')}
            >
              Requirements
            </button>
          </div>
        </section>

        <div className="divider"></div>

        {/* Refine Search */}
        <section className="segment-section pt-4">
          <div className="section-header-mini">
            <h3>Refine Search</h3>
            <button className="clear-all-btn">Clear all filters</button>
          </div>
          
          <div className="chips-scroll">
            <button className="chip budget-chip">
              Budget: ₹50L - 80L
              <X size={14} />
            </button>
            {['BHK', 'Location', 'Status', 'Furnishing'].map(filter => (
              <button key={filter} className="chip">
                {filter}
                <ChevronDown size={16} className="text-secondary" />
              </button>
            ))}
          </div>
        </section>

        <div className="divider my-2"></div>

        {/* Recent Searches */}
        <section className="search-list-section">
          <h3>Recent Searches</h3>
          <div className="recent-list">
            {recentSearches.map((item, index) => (
              <div key={index} className="recent-item" onClick={() => onNavigate('search-results')}>
                <div className="recent-info">
                  <Clock size={20} className="text-secondary" />
                  <span>{item.text}</span>
                </div>
                <button className="remove-recent-btn">
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Bottom Advanced Filter */}
      <div className="sticky-bottom-action">
        <button className="advanced-filter-btn" onClick={() => onNavigate('filter')}>
          <SlidersHorizontal size={20} />
          Show Advanced Filters
        </button>
      </div>

      <style>{`
        .search-screen-new {
          background: #fcfbf7;
        }
        .search-header {
          background: #fcfbf7;
          border-bottom: 1px solid #e2e0d6;
          padding: 8px 16px;
          gap: 12px;
        }
        .search-field-container {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-input-icon {
          position: absolute;
          left: 12px;
          color: #9ca3af;
        }
        .search-input-new {
          width: 100%;
          padding: 12px 40px 12px 40px;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 8px;
          font-size: 14px;
          color: #1b4d3e;
          outline: none;
        }
        .search-input-new:focus {
          border-color: #1b4d3e;
          box-shadow: 0 0 0 2px rgba(27, 77, 62, 0.1);
        }
        .clear-search-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          display: flex;
        }
        
        .segment-section {
          padding: 16px 16px 8px;
        }
        .segment-section h3 {
          font-size: 11px;
          font-weight: 600;
          color: #4a5d55;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .pb-4 { padding-bottom: 16px; }
        .pt-4 { padding-top: 16px; }

        .horizontal-scroll.no-pad {
          margin: 0;
          padding: 0 0 4px;
          gap: 8px;
        }
        
        .type-btn {
          flex-shrink: 0;
          height: 44px;
          padding: 0 24px;
          border-radius: 8px;
          border: 1px solid transparent; /* default border */
          background: white;
          color: #1b4d3e;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .type-btn:hover {
          background: #f4f1ea;
        }
        .type-btn.active {
          background: #1b4d3e;
          color: white;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .type-btn.disabled {
          background: rgba(244, 241, 234, 0.5);
          color: #a8a29e;
          cursor: not-allowed;
        }

        .search-in-toggle {
          display: flex;
          gap: 12px;
        }
        .toggle-option {
          flex: 1;
          height: 44px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: white;
          color: #1b4d3e;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .toggle-option:hover {
          background: #f4f1ea;
        }
        .toggle-option.active {
          background: #1b4d3e;
          color: white;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .divider {
          height: 4px;
          background: #f4f1ea;
          width: 100%;
        }
        .my-2 { margin: 8px 0; }

        .section-header-mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .section-header-mini h3 {
          margin-bottom: 0;
          text-transform: none;
          font-size: 14px;
          font-weight: 600;
        }
        .clear-all-btn {
          font-size: 12px;
          color: #1b4d3e; /* primary */
          background: none;
          border: none;
          font-weight: 500;
          cursor: pointer;
        }
        .clear-all-btn:hover {
          text-decoration: underline;
        }

        .chips-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
        }
        .chips-scroll::-webkit-scrollbar { display: none; }

        .chip {
          flex-shrink: 0;
          height: 32px;
          padding: 0 16px;
          border-radius: 100px;
          background: white;
          border: 1px solid #e2e0d6;
          color: #1b4d3e;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .budget-chip {
          background: #eff6ff;
          border-color: #dbeafe;
          color: #1d4ed8; /* blue-ish for contrast */
          padding-left: 12px;
        }
        .text-secondary { color: #9ca3af; }

        .search-list-section {
          padding: 8px 16px 100px; /* ample padding for bottom sticky */
        }
        .search-list-section h3 {
          font-size: 14px;
          font-weight: 600;
          color: #4a5d55;
          margin-bottom: 8px;
        }
        
        .recent-list {
          display: flex;
          flex-direction: column;
        }
        .recent-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #f4f1ea;
          cursor: pointer;
        }
        .recent-item:hover {
          background: rgba(244, 241, 234, 0.3);
        }
        .recent-info {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }
        .recent-info span {
          font-size: 14px;
          color: #1b4d3e;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .remove-recent-btn {
          background: none;
          border: none;
          color: #d1d5db;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
        }
        .remove-recent-btn:hover {
          color: #9ca3af;
          background: #f4f1ea;
        }

        .sticky-bottom-action {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 16px;
          background: rgba(252, 251, 247, 0.95);
          backdrop-filter: blur(4px);
          border-top: 1px solid #e2e0d6;
          z-index: 50;
        }
        .advanced-filter-btn {
          width: 100%;
          height: 48px;
          background: #1b4d3e; /* primary */
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(27, 77, 62, 0.2);
        }
        .advanced-filter-btn:hover {
          background: #14532d;
        }
      `}</style>
    </div>
  );
};

export default SearchScreen;
