function ScreenSelector({ screens, currentScreen, onSelectScreen }) {
  // Group screens by category
  const categories = screens.reduce((acc, screen) => {
    if (!acc[screen.category]) {
      acc[screen.category] = []
    }
    acc[screen.category].push(screen)
    return acc
  }, {})

  return (
    <div className="screen-selector">
      <h3 className="selector-title">Screens</h3>
      {Object.entries(categories).map(([category, categoryScreens]) => (
        <div key={category} className="screen-category">
          <div className="category-title">{category}</div>
          <div className="screen-list">
            {categoryScreens.map(screen => (
              <button
                key={screen.id}
                className={`screen-button ${currentScreen === screen.id ? 'active' : ''}`}
                onClick={() => onSelectScreen(screen.id)}
              >
                <span className="dot"></span>
                {screen.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScreenSelector
