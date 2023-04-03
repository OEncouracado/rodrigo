import React from 'react'

function SwitchLD({isLightMode, toggleTheme}) {
  return (
      <label className="switch">
        <input type="checkbox" checked={isLightMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
  )
}

export default SwitchLD
