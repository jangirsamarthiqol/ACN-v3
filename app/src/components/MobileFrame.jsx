import './MobileFrame.css'

function MobileFrame({ children }) {
  return (
    <div className="mobile-frame">
      <div className="mobile-screen">
        <div className="mobile-screen-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MobileFrame
