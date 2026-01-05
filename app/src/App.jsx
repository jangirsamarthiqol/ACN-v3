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
import MyEnquiries from './screens/MyEnquiries'
import PropertyDetail from './screens/PropertyDetail'
import ServicesLanding from './screens/ServicesLanding'
import ProfileScreen from './screens/ProfileScreen'

const screens = [
  { id: 'home', name: 'ACN Home', category: 'Home', component: HomeScreen },
  { id: 'search', name: 'Search', category: 'Search', component: SearchScreen },
  { id: 'search-results', name: 'Search Results', category: 'Search', component: SearchResultsScreen },
  { id: 'filter', name: 'Filters', category: 'Search', component: FilterSheet },
  { id: 'dashboard', name: 'My Business', category: 'Business', component: BusinessDashboard },
  { id: 'properties', name: 'My Properties', category: 'Business', component: MyPropertiesList },
  { id: 'requirements', name: 'My Requirements', category: 'Business', component: MyRequirementsList },
  { id: 'enquiries', name: 'My Enquiries', category: 'Business', component: MyEnquiries },
  { id: 'property-detail', name: 'Property Detail', category: 'Detail', component: PropertyDetail },
  { id: 'services', name: 'Services', category: 'Services', component: ServicesLanding },
  { id: 'profile', name: 'Profile', category: 'Profile', component: ProfileScreen },
]

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  
  const CurrentScreenComponent = screens.find(s => s.id === currentScreen)?.component || HomeScreen

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">ACN v3</span>
        </div>
        <p className="tagline">Design System Preview</p>
      </header>

      <main className="main-content">
        <ScreenSelector 
          screens={screens} 
          currentScreen={currentScreen} 
          onSelectScreen={setCurrentScreen}
        />
        
        <MobileFrame>
          <CurrentScreenComponent onNavigate={setCurrentScreen} />
        </MobileFrame>
      </main>

      <footer className="app-footer">
        <p>Click on screens to navigate • Built with React</p>
      </footer>
    </div>
  )
}

export default App
