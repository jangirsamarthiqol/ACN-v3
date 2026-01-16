import { ArrowLeft, Search, ChevronRight, MessageCircle, Phone, Mail, FileText, HelpCircle, BookOpen, Shield, CreditCard, Building2 } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function HelpSupport({ onNavigate }) {
  const faqCategories = [
    { icon: Building2, label: 'Property Listings', count: 12 },
    { icon: CreditCard, label: 'Credits & Billing', count: 8 },
    { icon: Shield, label: 'Account & Security', count: 6 },
    { icon: FileText, label: 'Legal Services', count: 5 }
  ]

  const popularFaqs = [
    'How do I add a new property?',
    'How are credits deducted?',
    'How to verify my RERA number?',
    'How to contact my KAM?'
  ]

  return (
    <div className="screen help-screen">
      {/* Header */}
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="Profile" title="Help & Support" />

      {/* Header title moved to GlobalHeader */}

      {/* Search */}
      <div className="help-search-section">
        <div className="help-search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for help..." />
        </div>
      </div>

      {/* Contact Options */}
      <div className="contact-grid">
        <button className="contact-card">
          <div className="contact-icon phone">
            <Phone size={20} />
          </div>
          <span className="contact-label">Call Us</span>
          <span className="contact-info">9am - 6pm</span>
        </button>
        <button className="contact-card">
          <div className="contact-icon chat">
            <MessageCircle size={20} />
          </div>
          <span className="contact-label">Live Chat</span>
          <span className="contact-info">Online</span>
        </button>
        <button className="contact-card">
          <div className="contact-icon email">
            <Mail size={20} />
          </div>
          <span className="contact-label">Email</span>
          <span className="contact-info">24h reply</span>
        </button>
      </div>

      {/* FAQ Categories */}
      <div className="help-section">
        <h3>Browse by Topic</h3>
        <div className="faq-categories">
          {faqCategories.map((cat, i) => (
            <button key={i} className="faq-category-card">
              <cat.icon size={22} className="category-icon" />
              <span className="category-label">{cat.label}</span>
              <span className="category-count">{cat.count} articles</span>
              <ChevronRight size={18} className="chevron" />
            </button>
          ))}
        </div>
      </div>

      {/* Popular FAQs */}
      <div className="help-section">
        <h3>Popular Questions</h3>
        <div className="faq-list">
          {popularFaqs.map((faq, i) => (
            <button key={i} className="faq-item">
              <HelpCircle size={18} className="faq-icon" />
              <span>{faq}</span>
              <ChevronRight size={18} className="chevron" />
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="help-section">
        <h3>Resources</h3>
        <div className="resources-grid">
          <button className="resource-card">
            <BookOpen size={20} />
            <span>User Guide</span>
          </button>
          <button className="resource-card">
            <FileText size={20} />
            <span>Terms of Service</span>
          </button>
          <button className="resource-card">
            <Shield size={20} />
            <span>Privacy Policy</span>
          </button>
        </div>
      </div>

      {/* Contact KAM */}
      <div className="kam-contact-card">
        <div className="kam-info">
          <div className="kam-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=kam" alt="" />
          </div>
          <div>
            <p className="kam-title">Need personalized help?</p>
            <p className="kam-subtitle">Contact your Key Account Manager</p>
          </div>
        </div>
        <button className="contact-kam-btn">Contact KAM</button>
      </div>

      <GlobalBottomNav onNavigate={onNavigate} activeTab="profile" context="home" />

      <style>{`
        .help-screen {
          background: #fcfbf7;
          padding-bottom: 32px;
        }
        .help-header {
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
        .help-header h1 {
          font-size: 18px;
          font-weight: 700;
          color: #1b4d3e;
        }
        .help-search-section {
          padding: 16px;
        }
        .help-search-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
        }
        .help-search-bar .search-icon {
          color: #9ca3af;
        }
        .help-search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          color: #1b4d3e;
          background: transparent;
        }
        .help-search-bar input::placeholder {
          color: #9ca3af;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 0 16px 24px;
        }
        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 12px;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          cursor: pointer;
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-icon.phone {
          background: #dcfce7;
          color: #15803d;
        }
        .contact-icon.chat {
          background: #dbeafe;
          color: #1d4ed8;
        }
        .contact-icon.email {
          background: #fef9c3;
          color: #a16207;
        }
        .contact-label {
          font-size: 13px;
          font-weight: 600;
          color: #1b4d3e;
        }
        .contact-info {
          font-size: 11px;
          color: #4a5d55;
        }
        .help-section {
          padding: 0 16px 24px;
        }
        .help-section h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1b4d3e;
          margin-bottom: 12px;
          padding-left: 4px;
        }
        .faq-categories {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-category-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
        }
        .category-icon {
          color: #1b4d3e;
        }
        .category-label {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          color: #1b4d3e;
        }
        .category-count {
          font-size: 12px;
          color: #4a5d55;
        }
        .chevron {
          color: #9ca3af;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          overflow: hidden;
        }
        .faq-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: none;
          border: none;
          border-bottom: 1px solid #f4f1ea;
          cursor: pointer;
          text-align: left;
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-icon {
          color: #1b4d3e;
          flex-shrink: 0;
        }
        .faq-item span {
          flex: 1;
          font-size: 14px;
          color: #1b4d3e;
        }
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .resource-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 12px;
          background: white;
          border: 1px solid #e2e0d6;
          border-radius: 12px;
          cursor: pointer;
        }
        .resource-card svg {
          color: #1b4d3e;
        }
        .resource-card span {
          font-size: 12px;
          font-weight: 500;
          color: #4a5d55;
          text-align: center;
        }
        .kam-contact-card {
          margin: 0 16px;
          padding: 16px;
          background: linear-gradient(135deg, #14532d 0%, #064e3b 100%);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .kam-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .kam-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          background: white;
        }
        .kam-avatar img {
          width: 100%;
          height: 100%;
        }
        .kam-title {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }
        .kam-subtitle {
          font-size: 12px;
          color: #bbf7d0;
        }
        .contact-kam-btn {
          width: 100%;
          padding: 12px;
          background: white;
          border: none;
          border-radius: 8px;
          color: #1b4d3e;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default HelpSupport
