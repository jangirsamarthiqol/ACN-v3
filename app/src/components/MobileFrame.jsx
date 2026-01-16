import './MobileFrame.css'
import StatusBar from './StatusBar'

function MobileFrame({ children }) {
  return (
    <div className="mobile-frame">
      <div className="mobile-screen relative">
        <StatusBar />
        <div className="mobile-screen-content pt-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MobileFrame
