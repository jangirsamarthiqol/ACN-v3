import { ArrowLeft, Check, Crown, Zap, Star, ChevronRight, CreditCard } from 'lucide-react'
import GlobalHeader from '../components/GlobalHeader'
import GlobalBottomNav from '../components/GlobalBottomNav'
import './screens.css'

function SubscriptionManagement({ onNavigate }) {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹999',
      period: '/month',
      features: ['10 Listings', '50 Credits', 'Basic Support', 'Market Insights'],
      current: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹2,499',
      period: '/month',
      features: ['50 Listings', '200 Credits', 'Priority Support', 'ACN Edge Access', 'Analytics Dashboard', 'Legal Services Discount'],
      current: true,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹4,999',
      period: '/month',
      features: ['Unlimited Listings', '500 Credits', 'Dedicated KAM', 'API Access', 'Custom Branding', 'All Premium Features'],
      current: false
    }
  ]

  return (
    <div className="screen">
      {/* Header */}
      {/* Global Header */}
      <GlobalHeader onNavigate={onNavigate} activeTab="Profile" />
      
      <div className="section-header" style={{padding: '16px 16px 0'}}>
        <button className="back-btn" onClick={() => onNavigate('profile')}>
          <ArrowLeft size={24} />
        </button>
        <h1>Subscription</h1>
        <div style={{width: 24}}></div>
      </div>

      {/* Current Plan */}
      <div className="current-plan-card">
        <div className="plan-badge">
          <Crown size={16} />
          Current Plan
        </div>
        <h2>Premium Plan</h2>
        <div className="plan-validity">
          <span className="valid-until">Valid until Jan 30, 2026</span>
          <span className="days-left">25 days left</span>
        </div>
        <div className="plan-progress">
          <div className="progress-fill" style={{width: '80%'}}></div>
        </div>
        <div className="plan-usage">
          <div className="usage-item">
            <span className="usage-value">48</span>
            <span className="usage-label">Active Listings</span>
            <span className="usage-limit">of 50</span>
          </div>
          <div className="usage-item">
            <span className="usage-value">134</span>
            <span className="usage-label">Credits Used</span>
            <span className="usage-limit">of 200</span>
          </div>
        </div>
        <button className="renew-btn">Renew Early & Get 10% Off</button>
      </div>

      {/* Credit Add-on */}
      <div className="addon-card">
        <div className="addon-header">
          <Zap size={20} color="#FF9800" />
          <div>
            <h4>Need More Credits?</h4>
            <p>Top up your credits anytime</p>
          </div>
        </div>
        <div className="credit-options">
          <button className="credit-option">
            <span className="credit-amount">50</span>
            <span className="credit-price">₹499</span>
          </button>
          <button className="credit-option popular">
            <span className="credit-amount">100</span>
            <span className="credit-price">₹899</span>
            <span className="save-badge">Save 10%</span>
          </button>
          <button className="credit-option">
            <span className="credit-amount">200</span>
            <span className="credit-price">₹1,599</span>
            <span className="save-badge">Save 20%</span>
          </button>
        </div>
      </div>

      {/* All Plans */}
      <div className="section">
        <h3 className="section-title-sm">All Plans</h3>
        <div className="plans-list">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card ${plan.current ? 'current' : ''} ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-ribbon">Most Popular</span>}
              <div className="plan-header">
                <h4>{plan.name}</h4>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}><Check size={14} color="#00C853" /> {feature}</li>
                ))}
              </ul>
              <button className={`plan-btn ${plan.current ? 'current' : ''}`}>
                {plan.current ? 'Current Plan' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-section">
        <h3 className="section-title-sm">Payment Method</h3>
        <div className="payment-card">
          <CreditCard size={24} color="#0066CC" />
          <div className="payment-info">
            <span className="card-type">Visa ending in 4242</span>
            <span className="card-expiry">Expires 12/2027</span>
          </div>
          <button className="change-link">Change</button>
        </div>
      </div>
      
      <GlobalBottomNav onNavigate={onNavigate} activeTab="profile" context="home" />

      <style>{`
        .current-plan-card {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          margin: 16px;
          border-radius: 16px;
          padding: 20px;
          color: #1A1A1A;
        }
        .plan-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0,0,0,0.1);
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .current-plan-card h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .plan-validity {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 8px;
        }
        .days-left {
          font-weight: 600;
        }
        .plan-progress {
          height: 6px;
          background: rgba(0,0,0,0.15);
          border-radius: 3px;
          margin-bottom: 16px;
        }
        .progress-fill {
          height: 100%;
          background: #1A1A1A;
          border-radius: 3px;
        }
        .plan-usage {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
        }
        .usage-item {
          display: flex;
          flex-direction: column;
        }
        .usage-value {
          font-size: 28px;
          font-weight: 700;
        }
        .usage-label {
          font-size: 12px;
          opacity: 0.8;
        }
        .usage-limit {
          font-size: 11px;
          opacity: 0.6;
        }
        .renew-btn {
          width: 100%;
          background: rgba(0,0,0,0.15);
          border: none;
          padding: 12px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .addon-card {
          background: white;
          margin: 0 16px 16px;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .addon-header {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }
        .addon-header h4 {
          font-size: 15px;
          font-weight: 600;
        }
        .addon-header p {
          font-size: 12px;
          color: #888;
        }
        .credit-options {
          display: flex;
          gap: 10px;
        }
        .credit-option {
          flex: 1;
          background: #F5F7FA;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
          cursor: pointer;
          position: relative;
        }
        .credit-option.popular {
          border-color: #0066CC;
          background: #E3F2FD;
        }
        .credit-amount {
          display: block;
          font-size: 22px;
          font-weight: 700;
          color: #1A1A1A;
        }
        .credit-price {
          display: block;
          font-size: 13px;
          color: #666;
        }
        .save-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #00C853;
          color: white;
          font-size: 9px;
          padding: 3px 6px;
          border-radius: 8px;
        }
        .section-title-sm {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          padding: 0 16px;
        }
        .plans-list {
          padding: 0 16px;
        }
        .plan-card {
          background: white;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          border: 2px solid transparent;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          position: relative;
        }
        .plan-card.current {
          border-color: #FFB300;
        }
        .plan-card.popular {
          border-color: #0066CC;
        }
        .popular-ribbon {
          position: absolute;
          top: -10px;
          right: 16px;
          background: #0066CC;
          color: white;
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 10px;
        }
        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .plan-header h4 {
          font-size: 18px;
          font-weight: 600;
        }
        .plan-price .price {
          font-size: 22px;
          font-weight: 700;
          color: #0066CC;
        }
        .plan-price .period {
          font-size: 13px;
          color: #888;
        }
        .plan-features {
          list-style: none;
          margin-bottom: 12px;
        }
        .plan-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #666;
          padding: 6px 0;
        }
        .plan-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #0066CC;
          color: white;
        }
        .plan-btn.current {
          background: #E8F5E9;
          color: #2E7D32;
        }
        .payment-section {
          padding: 16px 0;
        }
        .payment-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          margin: 0 16px;
          padding: 16px;
          border-radius: 12px;
        }
        .payment-info {
          flex: 1;
        }
        .card-type {
          display: block;
          font-size: 14px;
          font-weight: 500;
        }
        .card-expiry {
          font-size: 12px;
          color: #888;
        }
        .change-link {
          color: #0066CC;
          font-size: 14px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default SubscriptionManagement
