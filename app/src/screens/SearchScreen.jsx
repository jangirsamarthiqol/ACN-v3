import { ArrowLeft, Search, X, Clock, TrendingUp } from 'lucide-react'
import './screens.css'

function SearchScreen({ onNavigate }) {
  const recentSearches = [
    '2 BHK in Koramangala',
    '3 BHK under 1 Cr',
    'Whitefield apartments',
    'Villa in HSR Layout',
    'Ready to move homes'
  ]

  const trendingSearches = [
    'Whitefield', '3 BHK', 'Under 1 Cr', 'Premium Apartments',
    'HSR Layout', 'Electronic City', 'New Launch'
  ]

  const quickFilters = {
    'BHK': ['2 BHK', '3 BHK', '4 BHK'],
    'Type': ['Apartment', 'Villa', 'Plot'],
    'Budget': ['< 50L', '50L-1Cr', '1Cr-2Cr']
  }

  return (
    <div className="screen search-screen">
      {/* Header */}
      <header className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft size={24} />
        </button>
        <div className="search-input-container">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search properties..."
            className="search-input"
            autoFocus
          />
          <button className="clear-btn">
            <X size={18} />
          </button>
        </div>
      </header>

      {/* Toggle */}
      <div className="toggle-tabs">
        <button className="toggle-tab active">Properties</button>
        <button className="toggle-tab">Requirements</button>
      </div>

      {/* Recent Searches */}
      <section className="section">
        <div className="section-header">
          <h2>Recent Searches</h2>
          <button className="link-btn">Clear All</button>
        </div>
        <div className="recent-list">
          {recentSearches.map((search, i) => (
            <div key={i} className="recent-item" onClick={() => onNavigate('search-results')}>
              <Clock size={16} className="recent-icon" />
              <span className="recent-text">{search}</span>
              <button className="remove-btn"><X size={14} /></button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Searches */}
      <section className="section">
        <div className="section-header">
          <h2>Trending Searches</h2>
          <TrendingUp size={16} color="#FF4081" />
        </div>
        <div className="trending-chips">
          {trendingSearches.map((term, i) => (
            <button key={i} className="trending-chip" onClick={() => onNavigate('search-results')}>
              {term}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Filters */}
      <section className="section">
        <h2 className="section-title-sm">Quick Filters</h2>
        {Object.entries(quickFilters).map(([category, filters]) => (
          <div key={category} className="quick-filter-group">
            <span className="filter-category">{category}:</span>
            <div className="filter-options">
              {filters.map((filter, i) => (
                <button key={i} className="filter-option">{filter}</button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <style>{`
        .search-input-container {
          flex: 1;
          display: flex;
          align-items: center;
          background: #F5F7FA;
          border-radius: 12px;
          padding: 10px 14px;
          gap: 10px;
        }
        .search-input {
          flex: 1;
          border: none;
          background: none;
          font-size: 15px;
          outline: none;
        }
        .search-icon { color: #888; }
        .clear-btn {
          background: none;
          border: none;
          color: #888;
          padding: 4px;
          cursor: pointer;
        }
        .recent-list {
          display: flex;
          flex-direction: column;
        }
        .recent-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F0;
          cursor: pointer;
        }
        .recent-icon { color: #888; margin-right: 12px; }
        .recent-text { flex: 1; font-size: 14px; color: #1A1A1A; }
        .remove-btn {
          background: none;
          border: none;
          color: #CCC;
          padding: 4px;
          cursor: pointer;
        }
        .trending-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .trending-chip {
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 13px;
          color: #666;
          cursor: pointer;
          transition: all 0.2s;
        }
        .trending-chip:hover {
          border-color: #0066CC;
          color: #0066CC;
        }
        .section-title-sm {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .quick-filter-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .filter-category {
          font-size: 13px;
          color: #888;
          min-width: 50px;
        }
        .filter-options {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }
        .filter-option {
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          color: #1A1A1A;
          white-space: nowrap;
          cursor: pointer;
        }
        .filter-option:hover {
          border-color: #0066CC;
        }
      `}</style>
    </div>
  )
}

export default SearchScreen
