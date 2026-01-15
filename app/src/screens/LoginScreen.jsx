import { useState, useEffect } from 'react'
import { ArrowRight, Smartphone, ShieldCheck, Loader2 } from 'lucide-react'
import './screens.css'

function LoginScreen({ onNavigate }) {
  const [step, setStep] = useState('phone') // 'phone' | 'otp'
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)

  // Focus utility for OTP
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus()
    }
  }

  const handleSendOtp = () => {
    if (phone.length < 10) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setStep('otp')
    }, 1500)
  }

  const handleVerify = () => {
    if (otp.join('').length < 4) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to Onboarding for demo, or Home if verified
      onNavigate('onboarding') 
    }, 1500)
  }

  return (
    <div className="screen login-screen" style={{background: 'white', padding: '24px'}}>
      
      {/* Brand Header */}
      <div className="login-header" style={{marginTop: '60px', marginBottom: '40px'}}>
        <div style={{width: 48, height: 48, background: '#1A1A1A', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
          <span style={{color: '#FFD700', fontSize: 24}}>◆</span>
        </div>
        <h1 style={{fontSize: 28, fontWeight: 800, marginBottom: 8}}>ACN v3</h1>
        <p style={{color: '#666', fontSize: 16}}>Agent Connect Network</p>
      </div>

      {/* Form Area */}
      <div className="login-form">
        {step === 'phone' ? (
          <div className="animate-fade-in">
            <h2 style={{fontSize: 20, marginBottom: 8}}>Welcome back</h2>
            <p style={{color: '#888', marginBottom: 24, fontSize: 14}}>Enter your mobile number to login/signup</p>
            
            <div className="input-group" style={{marginBottom: 24}}>
              <div style={{
                display: 'flex', alignItems: 'center', border: '1px solid #E0E0E0', 
                borderRadius: 12, padding: '4px 12px', background: '#FAFAFA'
              }}>
                <span style={{fontSize: 14, color: '#666', marginRight: 12, fontWeight: 600}}>+91</span>
                <div style={{width: 1, height: 24, background: '#E0E0E0', marginRight: 12}}></div>
                <input 
                  type="tel" 
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  style={{
                    border: 'none', background: 'transparent', flex: 1, 
                    padding: '12px 0', fontSize: 16, fontWeight: 600, outline: 'none'
                  }}
                />
              </div>
            </div>

            <button 
              onClick={handleSendOtp}
              disabled={phone.length < 10 || isLoading}
              className="btn-primary-large"
              style={{
                width: '100%', padding: '16px', borderRadius: 12, border: 'none',
                background: phone.length === 10 ? '#1A1A1A' : '#E0E0E0',
                color: phone.length === 10 ? '#FFD700' : '#888',
                fontWeight: 700, fontSize: 16, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.3s'
              }}
            >
              {isLoading ? <Loader2 className="spin" size={20} /> : <>Get OTP <ArrowRight size={20} /></>}
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
             <button 
               onClick={() => setStep('phone')}
               style={{background: 'none', border: 'none', color: '#666', fontSize: 14, marginBottom: 24, padding: 0, cursor: 'pointer'}}
             >
               ← Edit Number
             </button>
             <h2 style={{fontSize: 20, marginBottom: 8}}>Verify OTP</h2>
             <p style={{color: '#888', marginBottom: 24, fontSize: 14}}>
               Sent to <span style={{color: '#1A1A1A', fontWeight: 600}}>+91 {phone}</span>
             </p>

             <div style={{display: 'flex', gap: 12, marginBottom: 32}}>
               {otp.map((digit, i) => (
                 <input
                   key={i}
                   id={`otp-${i}`}
                   type="tel"
                   maxLength={1}
                   value={digit}
                   onChange={(e) => handleOtpChange(i, e.target.value)}
                   onKeyDown={(e) => handleKeyDown(i, e)}
                   style={{
                     width: '100%', height: 56, borderRadius: 12, border: digit ? '1px solid #1A1A1A' : '1px solid #E0E0E0',
                     textAlign: 'center', fontSize: 24, fontWeight: 700, outline: 'none',
                     background: '#FAFAFA'
                   }}
                 />
               ))}
             </div>

             <button 
               onClick={handleVerify}
               disabled={otp.join('').length < 4 || isLoading}
               className="btn-primary-large"
               style={{
                 width: '100%', padding: '16px', borderRadius: 12, border: 'none',
                 background: otp.join('').length === 4 ? '#1A1A1A' : '#E0E0E0',
                 color: otp.join('').length === 4 ? '#FFD700' : '#888',
                 fontWeight: 700, fontSize: 16, cursor: 'pointer',
                 display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
               }}
             >
               {isLoading ? <Loader2 className="spin" size={20} /> : 'Verify & Proceed'}
             </button>

             <p style={{textAlign: 'center', marginTop: 24, fontSize: 13, color: '#666'}}>
               Didn't receive it? <span style={{color: '#1A1A1A', fontWeight: 600, cursor: 'pointer'}}>Resend in 30s</span>
             </p>
          </div>
        )}
      </div>

      <div style={{position: 'absolute', bottom: 32, left: 0, right: 0, textAlign: 'center'}}>
        <p style={{fontSize: 11, color: '#999'}}>By continuing, you agree to our <br/>Terms of Service & Privacy Policy</p>
      </div>

      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}

export default LoginScreen
