import React from 'react'

function SwitchLD({isLightMode, toggleTheme}) {
  return (<>
  
      <label className="switch">
        <p className={isLightMode ? "switch__label":"switch__label text-white"}>{isLightMode ? "Claro":"Escuro"}</p>
        <input type="checkbox" checked={isLightMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      </>
  )
}

export default SwitchLD
