import { useState } from 'react'
import './App.css'
import MobileFrame from './components/MobileFrame'
import ScreenSelector from './components/ScreenSelector'

// Import all screens
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import SearchResultsScreen from './screens/SearchResultsScreen'
import FilterSheet from './screens/FilterSheet'
import BusinessDashboard from './screens/BusinessDashboard'
import MyPropertiesList from './screens/MyPropertiesList'
import MyRequirementsList from './screens/MyRequirementsList'
import ShortlistScreen from './screens/ShortlistScreen'
import MyEnquiries from './screens/MyEnquiries'
import PropertyDetail from './screens/PropertyDetail'
import ServicesLanding from './screens/ServicesLanding'
import LegalServicesDetail from './screens/LegalServicesDetail'
import ServiceRequestForm from './screens/ServiceRequestForm'
import ServiceTracking from './screens/ServiceTracking'
import ProfileScreen from './screens/ProfileScreen'
import EditProfile from './screens/EditProfile'
import SubscriptionManagement from './screens/SubscriptionManagement'
import AddPropertyForm from './screens/AddPropertyForm'
import AddRequirementForm from './screens/AddRequirementForm'
import HelpSupport from './screens/HelpSupport'
import NotificationScreen from './screens/NotificationScreen'
import PopupsPreview from './screens/PopupsPreview'
import LoginScreen from './screens/LoginScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import MarketingScreen from './screens/MarketingScreen'
import EdgeScreen from './screens/EdgeScreen'

const screens = [
  // Onboarding
  { id: 'login', name: 'Login', category: 'Onboarding', component: LoginScreen },
  { id: 'onboarding', name: 'Onboarding', category: 'Onboarding', component: OnboardingScreen },
  
  // Home & Search
  { id: 'home', name: 'ACN Home', category: 'Home', component: HomeScreen },
  { id: 'search', name: 'Search', category: 'Home', component: SearchScreen },
  { id: 'search-results', name: 'Search Results', category: 'Home', component: SearchResultsScreen },
  { id: 'filter', name: 'Filter Sheet', category: 'Home', component: FilterSheet },
  { id: 'property-detail', name: 'Property Detail', category: 'Home', component: PropertyDetail },
  { id: 'shortlist', name: 'Shortlist', category: 'Home', component: ShortlistScreen },
  
  // My Business
  { id: 'dashboard', name: 'Dashboard', category: 'My Business', component: BusinessDashboard },
  { id: 'properties', name: 'My Properties', category: 'My Business', component: MyPropertiesList },
  { id: 'add-property', name: 'Add Property', category: 'My Business', component: AddPropertyForm },
  { id: 'requirements', name: 'My Requirements', category: 'My Business', component: MyRequirementsList },
  { id: 'add-requirement', name: 'Add Requirement', category: 'My Business', component: AddRequirementForm },
  { id: 'enquiries', name: 'My Enquiries', category: 'My Business', component: MyEnquiries },
  
  // Services
  { id: 'services', name: 'Services Hub', category: 'Services', component: ServicesLanding },
  { id: 'marketing', name: 'Marketing Hub', category: 'Services', component: MarketingScreen },
  { id: 'edge', name: 'ACN Edge', category: 'Services', component: EdgeScreen },
  { id: 'legal-services', name: 'Legal Services', category: 'Services', component: LegalServicesDetail },
  { id: 'service-request', name: 'Request Service', category: 'Services', component: ServiceRequestForm },
  { id: 'service-tracking', name: 'Service Tracking', category: 'Services', component: ServiceTracking },
  
  // Profile & Settings
  { id: 'profile', name: 'Profile', category: 'Profile', component: ProfileScreen },
  { id: 'edit-profile', name: 'Edit Profile', category: 'Profile', component: EditProfile },
  { id: 'subscription', name: 'Subscription', category: 'Profile', component: SubscriptionManagement },
  { id: 'help-support', name: 'Help & Support', category: 'Profile', component: HelpSupport },
  { id: 'notifications', name: 'Notifications', category: 'Home', component: NotificationScreen },
  { id: 'popups', name: 'Popup Gallery', category: 'Design System', component: PopupsPreview },
]

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [screenParams, setScreenParams] = useState({})
  
  const handleNavigate = (screenId, params = {}) => {
    setCurrentScreen(screenId)
    setScreenParams(params)
  }
  
  const CurrentScreenComponent = screens.find(s => s.id === currentScreen)?.component || HomeScreen

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">ACN v3</span>
        </div>
        <p className="tagline">Design System Preview • {screens.length} Screens</p>
      </header>

      <main className="main-content">
        <ScreenSelector 
          screens={screens} 
          currentScreen={currentScreen} 
          onSelectScreen={(id) => handleNavigate(id)}
        />
        
        <MobileFrame>
          <CurrentScreenComponent onNavigate={handleNavigate} params={screenParams} />
        </MobileFrame>
      </main>

      <footer className="app-footer">
        <p>Click screens in sidebar or tap elements to navigate • Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
