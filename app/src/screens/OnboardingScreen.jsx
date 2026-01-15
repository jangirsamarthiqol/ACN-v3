import { useState } from 'react'
import { ArrowRight, Camera, User, Mail, Shield, MapPin, Building2, Upload } from 'lucide-react'
import './screens.css'

function OnboardingScreen({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rera: '',
    city: 'Bangalore'
  })
  
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleComplete = () => {
    // Navigate to Home after setup
    onNavigate('home')
  }

  return (
    <div className="screen onboarding-screen" style={{background: 'white', padding: '24px'}}>
      
      {/* Progress */}
      <div style={{display: 'flex', gap: 4, marginTop: 40, marginBottom: 32}}>
        <div style={{height: 4, flex: 1, borderRadius: 2, background: '#1A1A1A'}}></div>
        <div style={{height: 4, flex: 1, borderRadius: 2, background: step > 1 ? '#1A1A1A' : '#F0F0F0'}}></div>
      </div>

      <div className="animate-fade-in">
        <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 8}}>Let's set up your profile</h1>
        <p style={{color: '#666', marginBottom: 32}}>This helps clients trust you better</p>

        {/* Profile Photo */}
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 32}}>
           <div style={{
             width: 100, height: 100, borderRadius: '50%', background: '#FAFAFA', 
             border: '2px dashed #E0E0E0', display: 'flex', alignItems: 'center', 
             justifyContent: 'center', flexDirection: 'column', gap: 4,
             cursor: 'pointer', position: 'relative'
           }}>
             <Camera size={24} color="#888" />
             <span style={{fontSize: 10, color: '#888'}}>Add Photo</span>
             
             <div style={{
               position: 'absolute', bottom: 0, right: 0, 
               width: 32, height: 32, background: '#1A1A1A', 
               borderRadius: '50%', display: 'flex', alignItems: 'center', 
               justifyContent: 'center'
             }}>
               <Upload size={14} color="white" />
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="input-stack" style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          
          <div className="field-group">
            <label style={{fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: '#444'}}>Full Name</label>
            <div className="modern-input-wrapper">
              <User size={18} color="#888" />
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Rajesh Kumar"
                className="modern-field"
              />
            </div>
          </div>

          <div className="field-group">
            <label style={{fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: '#444'}}>Email Address</label>
            <div className="modern-input-wrapper">
              <Mail size={18} color="#888" />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@example.com"
                className="modern-field"
              />
            </div>
          </div>

          <div className="field-group">
            <label style={{fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: '#444'}}>
              RERA ID <span style={{color: '#888', fontWeight: 400}}>(Optional)</span>
            </label>
            <div className="modern-input-wrapper">
              <Shield size={18} color="#888" />
              <input 
                type="text" 
                name="rera"
                value={formData.rera}
                onChange={handleChange}
                placeholder="Ex. PRM/KA/RERA..."
                className="modern-field"
                style={{textTransform: 'uppercase'}}
              />
            </div>
          </div>

          <div className="field-group">
            <label style={{fontSize: 12, fontWeight: 600, marginBottom: 6, display: 'block', color: '#444'}}>Operating City</label>
            <div className="modern-input-wrapper">
              <MapPin size={18} color="#888" />
              <select className="modern-field" style={{background: 'transparent', width: '100%'}}>
                 <option>Bangalore</option>
                 <option>Mumbai</option>
                 <option>Delhi NCR</option>
                 <option>Pune</option>
                 <option>Hyderabad</option>
              </select>
            </div>
          </div>

        </div>

        <div style={{marginTop: 40}}>
          <button 
            onClick={handleComplete}
            disabled={!formData.name}
            className="btn-primary-large"
            style={{
              width: '100%', padding: '16px', borderRadius: 12, border: 'none',
              background: formData.name ? '#1A1A1A' : '#E0E0E0',
              color: formData.name ? '#FFD700' : '#888',
              fontWeight: 700, fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'all 0.3s'
            }}
          >
            Complete Setup <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .modern-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FAFAFA;
          border: 1px solid #E0E0E0;
          padding: 12px 16px;
          border-radius: 12px;
          transition: all 0.2s;
        }
        .modern-input-wrapper:focus-within {
          border-color: #1A1A1A;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .modern-field {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 15px;
          font-weight: 500;
          color: #1A1A1A;
          outline: none;
        }
      `}</style>
    </div>
  )
}

export default OnboardingScreen
